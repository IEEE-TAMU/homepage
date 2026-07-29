'use client';

import Image from 'next/image';
import { useMemo } from 'react';

import { getAllSponsors } from '@/lib/sponsors';

interface SponsorsCarouselProps {
  title?: string;
  description?: string;
  autoplayDelay?: number;
}

export function SponsorsCarousel({
  title = 'Our Sponsors',
  description = 'Thank you to our sponsors who make our events and programs possible.',
  autoplayDelay = 40000,
}: SponsorsCarouselProps) {
  const sponsors = getAllSponsors();
  const doubled = useMemo(() => [...sponsors, ...sponsors], [sponsors]);

  if (sponsors.length === 0) return null;

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="relative overflow-hidden py-4">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card to-transparent z-10" />
        <div
          className="flex gap-12 w-max hover:[animation-play-state:paused]"
          style={{
            animation: `scroll ${autoplayDelay}ms linear infinite`,
          }}
        >
          {doubled.map((sponsor, index) => (
            <a
              key={`${index}`}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 relative w-44 h-24 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={`/sponsors/${sponsor.logo}`}
                alt={sponsor.name}
                fill
                sizes="176px"
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
