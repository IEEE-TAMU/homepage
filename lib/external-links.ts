// External links used throughout the application
export const EXTERNAL_LINKS = {
  // IEEE related links
  IEEE_GLOBAL: 'https://ieee.org',
  IEEE_PORTAL: 'https://portal.ieeetamu.org',
  IEEE_MEMBERSHIP_REGISTER: 'https://portal.ieeetamu.org/members/register',

  // Social media links
  LINKEDIN: 'https://link.ieeetamu.org/linkedin',
  INSTAGRAM: 'https://link.ieeetamu.org/instagram',
  DISCORD: 'https://link.ieeetamu.org/discord',

  // Calendar links
  IEEE_CALENDAR_ICS:
    'https://calendar.google.com/calendar/ical/ieeetamu.officers%40gmail.com/public/basic.ics',
} as const;

// Type for external links
export type ExternalLinkKey = keyof typeof EXTERNAL_LINKS;
