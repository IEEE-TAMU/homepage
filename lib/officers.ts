import officerEntries from './officers.json';

/**
 * One entry in officers.json. `image` is the filename of the person's
 * transparent cutout, which must share the group photo's dimensions.
 * `name`, `role`, and `bio` are optional until the roster is filled in.
 * Set `inset` for someone added on top of the photo rather than standing in
 * it: they're missing from color.png and greyish.png, so their cutout is
 * always drawn above the photo.
 */
type OfficerEntry = {
  image: string;
  name?: string;
  role?: string;
  bio?: string;
  inset?: boolean;
};

export type Officer = {
  id: string;
  name: string;
  role?: string;
  bio?: string;
  inset: boolean;
  cutoutUrl: string;
};

export type TeamPhoto = {
  colorUrl: string;
  greyUrl: string;
  width: number;
  height: number;
};

// Photos live in the R2 bucket in production; `npm run photos:download`
// mirrors them into public/officer_photos for local development.
export const officerPhotoUrl = (filename: string) =>
  process.env.NODE_ENV === 'development'
    ? `/officer_photos/${filename}`
    : `https://officer-photos.ieeetamu.org/${filename}`;

export const TEAM_PHOTO: TeamPhoto = {
  colorUrl: officerPhotoUrl('color.png'),
  greyUrl: officerPhotoUrl('greyish.png'),
  width: 6022,
  height: 4024,
};

const stripExtension = (filename: string) => filename.replace(/\.[^.]+$/, '');

// Until officers.json has real names, show the filename ("alan.png" → "Alan").
const nameFromFilename = (filename: string) =>
  stripExtension(filename)
    .split(/[_\-\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const OFFICERS: Officer[] = (officerEntries as OfficerEntry[]).map(
  (entry) => ({
    id: stripExtension(entry.image),
    name: entry.name ?? nameFromFilename(entry.image),
    role: entry.role,
    bio: entry.bio,
    inset: entry.inset ?? false,
    cutoutUrl: officerPhotoUrl(entry.image),
  })
);
