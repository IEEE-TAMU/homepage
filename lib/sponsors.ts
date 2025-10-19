export type SponsorTier = 'Platinum' | 'Gold' | 'Silver' | 'Bronze';

export type Sponsor = {
  name: string;
  logo: string;
  tier: SponsorTier;
  website: string;
};

// Tier ordering for sorting (highest to lowest)
export const TIER_ORDER: SponsorTier[] = [
  'Platinum',
  'Gold',
  'Silver',
  'Bronze',
];

// Sponsors data organized by tier
export const Sponsors: Record<string, Sponsor> = {
  'burns-mcdonnell': {
    name: 'Burns & McDonnell',
    logo: 'burns_mcdonnell.png',
    tier: 'Silver',
    website: 'https://www.burnsmcd.com/',
  },
  'lockheed-martin': {
    name: 'Lockheed Martin',
    logo: 'lockheed.png',
    tier: 'Silver',
    website: 'https://www.lockheedmartin.com/',
  },
  sandia: {
    name: 'Sandia National Laboratories',
    logo: 'sandia.png',
    tier: 'Platinum',
    website: 'https://www.sandia.gov/',
  },
  'texas-instruments': {
    name: 'Texas Instruments',
    logo: 'texas_instruments.png',
    tier: 'Silver',
    website: 'https://www.ti.com/',
  },
  dashiell: {
    name: 'Dashiell Corporation',
    logo: 'dashiell.png',
    tier: 'Silver',
    website: 'https://www.dashiell.com/',
  },
};

// Helper function to get all sponsors as an array, sorted by tier
export function getAllSponsors(): Sponsor[] {
  return Object.values(Sponsors).sort(
    (a, b) => TIER_ORDER.indexOf(a.tier) - TIER_ORDER.indexOf(b.tier)
  );
}

// Helper function to get sponsors by tier
export function getSponsorsByTier(tier: SponsorTier): Sponsor[] {
  return Object.values(Sponsors).filter((sponsor) => sponsor.tier === tier);
}

// Helper function to get a specific sponsor by slug
export function getSponsor(slug: string): Sponsor | undefined {
  return Sponsors[slug];
}
