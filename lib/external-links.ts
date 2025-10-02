// External links used throughout the application
export const EXTERNAL_LINKS = {
  // IEEE related links
  IEEE_GLOBAL: 'https://ieee.org',
  IEEE_MEMBERSHIP_JOIN: 'https://www.ieee.org/membership/join',

  // local branch links
  IEEE_TAMU_PORTAL: 'https://portal.ieeetamu.org',
  IEEE_TAMU_MEMBERSHIP_REGISTER: 'https://portal.ieeetamu.org/members/register',
  IEEE_TAMU_RSVP: 'https://portal.ieeetamu.org/members/registration?rsvp=',

  // Social media links
  LINKEDIN: 'https://www.linkedin.com/company/ieee-tamu',
  INSTAGRAM: 'https://www.instagram.com/ieee_tamu',
  DISCORD: 'https://discord.gg/acXCnEt6Rt',

  // Calendar links
  IEEE_CALENDAR_ICS: 'https://portal.ieeetamu.org/api/v1/calendar',
  IEEE_CALENDAR_GOOGLE: 'https://link.ieeetamu.org/calendar',
} as const;

// Type for external links
export type ExternalLinkKey = keyof typeof EXTERNAL_LINKS;
