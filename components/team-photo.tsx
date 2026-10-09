'use client';

import Image, { getImageProps } from 'next/image';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import type { Officer, TeamPhoto as TeamPhotoInfo } from '@/lib/officers';
import { cn } from '@/lib/utils';

// Working resolution for hit-testing, cutouts, and the outline. 1920 is one of
// next/image's device sizes, so the optimizer serves cutouts at exactly this
// width instead of the multi-megabyte originals.
const WORK_WIDTH = 1920;

// Outline thickness in working pixels. White sits against the person so the
// band reads apart from the maroon polos; maroon flares out beyond it.
const WHITE_BAND = 10;
const MAROON_BAND = 15;
const MAROON = [0x50, 0x00, 0x00];
const FLARE_MS = 450;
// The flare overshoots (~1.13x) before settling, so leave room for it.
const PAD = Math.ceil((WHITE_BAND + MAROON_BAND) * 1.3) + 2;

type Person = {
  officer: Officer;
  // Tight bounding box of the cutout, in working pixels.
  x: number;
  y: number;
  w: number;
  h: number;
  cutout: HTMLCanvasElement;
  // Bounding box grown by PAD, where the outline is drawn.
  px: number;
  py: number;
  pw: number;
  ph: number;
  mask: Uint8Array;
  distance?: Float32Array;
};

type Scene = {
  width: number;
  height: number;
  people: Person[];
  // Index + 1 into `people` for every working pixel, 0 for background.
  labels: Uint16Array;
};

async function loadScene(
  officers: Officer[],
  photo: TeamPhotoInfo,
  isCancelled: () => boolean
): Promise<Scene | null> {
  const width = WORK_WIDTH;
  const height = Math.round((width * photo.height) / photo.width);

  const scratch = document.createElement('canvas');
  scratch.width = width;
  scratch.height = height;
  const ctx = scratch.getContext('2d', { willReadFrequently: true });
  if (!ctx) return null;

  // Start every download at once, then decode them one at a time.
  const images = officers.map((officer) => {
    const { props } = getImageProps({
      src: officer.cutoutUrl,
      alt: '',
      width: width / 2,
      height: Math.round(height / 2),
    });
    const img = new window.Image();
    img.src = props.src;
    return img;
  });

  const people: Person[] = [];

  for (const [index, img] of images.entries()) {
    try {
      await img.decode();
    } catch {
      continue;
    }
    if (isCancelled()) return null;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);
    const pixels = ctx.getImageData(0, 0, width, height);
    const data = pixels.data;

    let x0 = width;
    let y0 = height;
    let x1 = -1;
    let y1 = -1;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (data[(y * width + x) * 4 + 3] >= 128) {
          if (x < x0) x0 = x;
          if (x > x1) x1 = x;
          if (y < y0) y0 = y;
          if (y > y1) y1 = y;
        }
      }
    }
    if (x1 < 0) continue;

    const w = x1 - x0 + 1;
    const h = y1 - y0 + 1;
    const cutout = document.createElement('canvas');
    cutout.width = w;
    cutout.height = h;
    cutout.className = 'block size-full';
    cutout.getContext('2d')?.putImageData(pixels, -x0, -y0, x0, y0, w, h);

    const px = Math.max(0, x0 - PAD);
    const py = Math.max(0, y0 - PAD);
    const pw = Math.min(width, x1 + 1 + PAD) - px;
    const ph = Math.min(height, y1 + 1 + PAD) - py;
    const mask = new Uint8Array(pw * ph);
    for (let r = 0; r < ph; r++) {
      for (let c = 0; c < pw; c++) {
        mask[r * pw + c] =
          data[((py + r) * width + px + c) * 4 + 3] >= 128 ? 1 : 0;
      }
    }

    people.push({
      officer: officers[index],
      x: x0,
      y: y0,
      w,
      h,
      cutout,
      px,
      py,
      pw,
      ph,
      mask,
    });
  }

  // Insets sit on top of everything. Otherwise, lower in the photo means
  // closer to the camera, so paint those last.
  people.sort(
    (a, b) =>
      Number(a.officer.inset) - Number(b.officer.inset) ||
      a.y + a.h - (b.y + b.h)
  );

  const labels = new Uint16Array(width * height);
  people.forEach((person, i) => {
    for (let r = 0; r < person.ph; r++) {
      for (let c = 0; c < person.pw; c++) {
        if (person.mask[r * person.pw + c]) {
          labels[(person.py + r) * width + person.px + c] = i + 1;
        }
      }
    }
  });

  return { width, height, people, labels };
}

// One pass of Felzenszwalb & Huttenlocher's exact squared distance transform.
function distance1d(
  f: Float64Array,
  n: number,
  d: Float64Array,
  v: Int32Array,
  z: Float64Array
) {
  let k = 0;
  v[0] = 0;
  z[0] = -Infinity;
  z[1] = Infinity;
  for (let q = 1; q < n; q++) {
    let s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
    while (s <= z[k]) {
      k--;
      s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
    }
    k++;
    v[k] = q;
    z[k] = s;
    z[k + 1] = Infinity;
  }
  k = 0;
  for (let q = 0; q < n; q++) {
    while (z[k + 1] < q) k++;
    d[q] = (q - v[k]) * (q - v[k]) + f[v[k]];
  }
}

// Euclidean distance from each pixel to the nearest pixel of the person.
function distanceField(mask: Uint8Array, w: number, h: number) {
  const n = Math.max(w, h);
  const f = new Float64Array(n);
  const d = new Float64Array(n);
  const v = new Int32Array(n);
  const z = new Float64Array(n + 1);
  const grid = new Float64Array(w * h);
  for (let i = 0; i < grid.length; i++) grid[i] = mask[i] ? 0 : 1e20;

  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) f[y] = grid[y * w + x];
    distance1d(f, h, d, v, z);
    for (let y = 0; y < h; y++) grid[y * w + x] = d[y];
  }
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) f[x] = grid[y * w + x];
    distance1d(f, w, d, v, z);
    for (let x = 0; x < w; x++) grid[y * w + x] = d[x];
  }

  const out = new Float32Array(w * h);
  for (let i = 0; i < out.length; i++) out[i] = Math.sqrt(grid[i]);
  return out;
}

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

// Paints the white-then-maroon band, scaled by `grow` (0 = none, 1 = full).
function paintOutline(out: ImageData, distance: Float32Array, grow: number) {
  const data = out.data;
  const white = WHITE_BAND * grow;
  const outer = (WHITE_BAND + MAROON_BAND) * grow;
  for (let i = 0; i < distance.length; i++) {
    const d = distance[i];
    const j = i * 4;
    // Inside the person (d = 0) stays clear so nothing ghosts through as
    // their cutout fades.
    const alpha = d === 0 ? 0 : clamp01(outer - d + 0.5);
    const whiteness = clamp01(white - d + 0.5);
    data[j] = 255 * whiteness + MAROON[0] * (1 - whiteness);
    data[j + 1] = 255 * whiteness + MAROON[1] * (1 - whiteness);
    data[j + 2] = 255 * whiteness + MAROON[2] * (1 - whiteness);
    data[j + 3] = 255 * alpha;
  }
}

// Overshoots slightly past 1 before settling, which reads as a flare.
const easeOutBack = (t: number) => {
  const c1 = 2;
  const u = t - 1;
  return 1 + (c1 + 1) * u * u * u + c1 * u * u;
};

// Rows in the photo are staggered, so group by head height before going
// left to right. This sets the keyboard tab order.
const readingOrder = (people: Person[], height: number) => {
  const row = (p: Person) => Math.round(p.y / (height * 0.09));
  return [...people].sort((a, b) => row(a) - row(b) || a.x - b.x);
};

const percent = (n: number, of: number) => `${(n / of) * 100}%`;

const PHOTO_SIZES =
  '(min-width: 1280px) 820px, (min-width: 1024px) 64vw, 100vw';

interface TeamPhotoProps {
  officers: Officer[];
  photo: TeamPhotoInfo;
}

export function TeamPhoto({ officers, photo }: TeamPhotoProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const outlineRefs = useRef(new Map<string, HTMLCanvasElement>());
  const clearTimer = useRef<number | undefined>(undefined);

  const [scene, setScene] = useState<Scene | null>(null);
  const [pointerInside, setPointerInside] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  // Clicking someone pins them until the next click anywhere else.
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  // The panel lags a beat behind `hoveredId` when it clears, so sliding the
  // cursor across a gap between two people doesn't flash the empty state.
  const [panelId, setPanelId] = useState<string | null>(null);

  const activeId = pinnedId ?? hoveredId;

  // Build the scene once the photo is close to scrolling into view.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let cancelled = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        loadScene(officers, photo, () => cancelled).then((loaded) => {
          if (!cancelled && loaded) setScene(loaded);
        });
      },
      { rootMargin: '600px' }
    );
    observer.observe(stage);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [officers, photo]);

  useEffect(() => () => window.clearTimeout(clearTimer.current), []);

  // Any click outside the photo releases the pin. Clicks in the panel don't,
  // so the bio can be selected or its links followed.
  useEffect(() => {
    if (!pinnedId) return;
    const unpinOnOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        stageRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      ) {
        return;
      }
      setPinnedId(null);
    };
    const unpinOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPinnedId(null);
    };
    document.addEventListener('pointerdown', unpinOnOutsideClick);
    document.addEventListener('keydown', unpinOnEscape);
    return () => {
      document.removeEventListener('pointerdown', unpinOnOutsideClick);
      document.removeEventListener('keydown', unpinOnEscape);
    };
  }, [pinnedId]);

  // Flare the outline around whoever just became active.
  useLayoutEffect(() => {
    if (!scene || !activeId) return;
    const person = scene.people.find((p) => p.officer.id === activeId);
    const canvas = outlineRefs.current.get(activeId);
    const ctx = canvas?.getContext('2d');
    if (!person || !ctx) return;

    person.distance ??= distanceField(person.mask, person.pw, person.ph);
    const distance = person.distance;
    const frame = ctx.createImageData(person.pw, person.ph);
    const draw = (grow: number) => {
      paintOutline(frame, distance, grow);
      ctx.putImageData(frame, 0, 0);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw(1);
      return;
    }

    draw(0);
    const start = performance.now();
    let raf = requestAnimationFrame(function tick(now) {
      const t = Math.min(1, (now - start) / FLARE_MS);
      draw(easeOutBack(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [scene, activeId]);

  const hover = (id: string | null) => {
    setHoveredId(id);
    window.clearTimeout(clearTimer.current);
    if (id) {
      setPanelId(id);
    } else {
      clearTimer.current = window.setTimeout(() => setPanelId(null), 250);
    }
  };

  const personAt = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!scene) return null;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.floor(
      ((event.clientX - rect.left) / rect.width) * scene.width
    );
    const y = Math.floor(
      ((event.clientY - rect.top) / rect.height) * scene.height
    );
    if (x < 0 || y < 0 || x >= scene.width || y >= scene.height) return null;
    const label = scene.labels[y * scene.width + x];
    return label ? scene.people[label - 1].officer.id : null;
  };

  const ready = scene !== null;
  const greyed = ready && (pointerInside || pinnedId !== null);
  const panelOfficer = officers.find((o) => o.id === (pinnedId ?? panelId));

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-10">
      <div
        ref={stageRef}
        className={cn(
          'relative isolate overflow-hidden rounded-xl bg-muted select-none',
          hoveredId && 'cursor-pointer'
        )}
        style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
        onPointerMove={(e) => {
          if (e.pointerType === 'touch') return;
          setPointerInside(true);
          hover(personAt(e));
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === 'touch') return;
          setPointerInside(false);
          hover(null);
        }}
        // Covers taps too: clicking a person pins them, clicking the
        // background releases the pin.
        onClick={(e) => setPinnedId(personAt(e))}
      >
        <Image
          src={photo.greyUrl}
          alt=""
          fill
          sizes={PHOTO_SIZES}
          className="object-cover"
        />

        {scene?.people.map((person, i) => {
          const id = person.officer.id;
          const isActive = id === activeId;
          const faded = activeId !== null && !isActive;
          return (
            <div key={id} aria-hidden>
              <canvas
                ref={(el) => {
                  if (el) outlineRefs.current.set(id, el);
                  else outlineRefs.current.delete(id);
                }}
                width={person.pw}
                height={person.ph}
                className={cn(
                  'absolute pointer-events-none transition-opacity duration-200',
                  person.officer.inset ? 'z-[2050]' : 'z-[1000]',
                  isActive ? 'opacity-100' : 'opacity-0'
                )}
                style={{
                  left: percent(person.px, scene.width),
                  top: percent(person.py, scene.height),
                  width: percent(person.pw, scene.width),
                  height: percent(person.ph, scene.height),
                }}
              />
              {/* Insets get their own always-visible layer below. */}
              {person.officer.inset ? null : (
                <div
                  ref={(el) => {
                    if (el && el.firstChild !== person.cutout) {
                      el.replaceChildren(person.cutout);
                    }
                  }}
                  className={cn(
                    'absolute pointer-events-none transition-opacity duration-300',
                    faded ? 'opacity-0' : 'opacity-100'
                  )}
                  style={{
                    left: percent(person.x, scene.width),
                    top: percent(person.y, scene.height),
                    width: percent(person.w, scene.width),
                    height: percent(person.h, scene.height),
                    zIndex: isActive ? 1001 : i + 1,
                  }}
                />
              )}
            </div>
          );
        })}

        <Image
          src={photo.colorUrl}
          alt="The IEEE TAMU officer team in maroon polos, standing in rows on the steps outside a campus building"
          fill
          sizes={PHOTO_SIZES}
          className={cn(
            'z-[2000] object-cover transition-opacity duration-300',
            greyed ? 'opacity-0' : 'opacity-100'
          )}
        />

        {/* Insets aren't in color.png or greyish.png, so they stay above the
            photo at all times and go grey instead of fading. */}
        {officers
          .filter((officer) => officer.inset)
          .map((officer) => (
            <Image
              key={officer.id}
              src={officer.cutoutUrl}
              alt=""
              fill
              sizes={PHOTO_SIZES}
              className={cn(
                'z-[2100] object-cover pointer-events-none transition-[filter] duration-300',
                activeId !== null && activeId !== officer.id && 'grayscale'
              )}
            />
          ))}

        {/* Keyboard access: one focusable target per person. The outline is
            the focus indicator. */}
        {scene
          ? readingOrder(scene.people, scene.height).map((person) => (
              <button
                key={person.officer.id}
                type="button"
                aria-label={person.officer.name}
                aria-pressed={pinnedId === person.officer.id}
                className="absolute z-[2200] pointer-events-none appearance-none bg-transparent outline-none"
                style={{
                  left: percent(person.x, scene.width),
                  top: percent(person.y, scene.height),
                  width: percent(person.w, scene.width),
                  height: percent(person.h, scene.height),
                }}
                onFocus={() => {
                  setPointerInside(true);
                  hover(person.officer.id);
                }}
                onBlur={(e) => {
                  if (stageRef.current?.contains(e.relatedTarget)) return;
                  setPointerInside(false);
                  hover(null);
                }}
                onClick={(e) => {
                  // Keyboard clicks have no coordinates, so keep the stage's
                  // hit-test from treating this as a background click.
                  e.stopPropagation();
                  setPinnedId(person.officer.id);
                }}
              />
            ))
          : null}
      </div>

      <div
        ref={panelRef}
        aria-live="polite"
        className="min-h-36 border-t-2 border-primary pt-6 lg:border-t-0 lg:border-l-2 lg:pt-1 lg:pl-8"
      >
        {panelOfficer ? (
          <div
            key={panelOfficer.id}
            className="animate-in fade-in slide-in-from-bottom-1 duration-200 motion-reduce:animate-none"
          >
            <h3 className="text-4xl font-semibold tracking-tight text-balance">
              {panelOfficer.name}
            </h3>
            {panelOfficer.role ? (
              <p className="mt-2 text-lg font-medium text-primary">
                {panelOfficer.role}
              </p>
            ) : null}
            {panelOfficer.bio ? (
              <p className="mt-4 max-w-prose leading-relaxed text-muted-foreground">
                {panelOfficer.bio}
              </p>
            ) : null}
          </div>
        ) : (
          <div>
            <p className="text-lg text-pretty">
              <span className="pointer-coarse:hidden">
                Hover over anyone in the photo to see who they are. Click to
                keep them here.
              </span>
              <span className="hidden pointer-coarse:inline">
                Tap anyone in the photo to see who they are.
              </span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {officers.length} officers
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
