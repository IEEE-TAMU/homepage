export type SponsorTier = 'Platinum' | 'Gold' | 'Silver' | 'Bronze';

export type Sponsor = {
  name: string;
  logo: string;
  tier: SponsorTier;
  website: string;
};

export type SponsorTierConfig = {
  tier: SponsorTier;
  name: string;
  price: number;
  formatted: string;
  description: string;
  isPopular?: boolean;
  benefits: string[];
};

// Tier ordering for sorting (highest to lowest)
export const TIER_ORDER: SponsorTier[] = [
  'Platinum',
  'Gold',
  'Silver',
  'Bronze',
];

/**
 * Sponsorship tier metadata, ordered low → high.
 * Used by the /sponsorship page and any future selector.
 */
export const SPONSORSHIP_TIERS: SponsorTierConfig[] = [
  {
    tier: 'Bronze',
    name: 'Bronze Sponsor',
    price: 500,
    formatted: '$500',
    description: 'Essential partnership benefits',
    benefits: [
      'Logo on event materials',
      'Social media recognition',
      'Newsletter mentions',
      'Access to resume database',
    ],
  },
  {
    tier: 'Silver',
    name: 'Silver Sponsor',
    price: 1000,
    formatted: '$1,000',
    description: 'Enhanced visibility and engagement',
    isPopular: true,
    benefits: [
      'All Bronze benefits',
      'Workshop co-hosting opportunity',
      'Recruiting table at career fair',
      'Company presentation opportunity',
      'Priority event invitations',
    ],
  },
  {
    tier: 'Gold',
    name: 'Gold Sponsor',
    price: 3000,
    formatted: '$3,000',
    description: 'Premium partnership experience',
    benefits: [
      'All Silver benefits',
      'Exclusive networking event',
      'Custom workshop development',
    ],
  },
  {
    tier: 'Platinum',
    name: 'Platinum Sponsor',
    price: 5000,
    formatted: '$5,000',
    description: 'Elite partnership with maximum impact',
    benefits: [
      'All Gold benefits',
      'Custom partnership opportunities',
      'Maximum brand visibility',
    ],
  },
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
