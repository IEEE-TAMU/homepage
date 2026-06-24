/**
 * Site-wide constants: stats, pricing, and contact emails.
 *
 * Anything that appears in more than one place, or that the officers need
 * to update once a year (prices, member counts, etc.) should live here.
 */

/**
 * Headline statistics shown across the site.
 * All values are pre-formatted for display.
 *
 * `paidMemberCount` is sourced dynamically from the portal API (see
 * `lib/member-stats.ts`); it is not duplicated here.
 */
export const SITE_STATS = {
  /** Events hosted each year. */
  eventsPerYear: '50+',
  /** Years IEEE TAMU has been active (founded 1909). */
  yearsActive: '115+',
  /** Global IEEE membership count used in the membership value-prop. */
  ieeeGlobalMembers: '500,000',
} as const;

/**
 * The year we ask the portal for in `lib/member-stats.ts`.
 * Bump this at the start of each academic year to pull the freshest count.
 */
export const CURRENT_MEMBER_STATS_YEAR = 2025;

/**
 * Annual USD pricing for the two membership tiers offered to students.
 * The `price` field is the raw integer (for math, sorting, or display);
 * `formatted` is the pre-formatted display string with the `/year` suffix.
 */
export const MEMBERSHIP_PRICING = {
  local: { price: 15, formatted: '$15/year' },
  global: { price: 32, formatted: '$32/year' },
} as const;

/**
 * Email aliases that route through the IEEE TAMU mailbox.
 * `mailto:` links throughout the site should reference these constants.
 */
export const CONTACT_EMAILS = {
  general: 'contact@ieeetamu.org',
  sponsorship: 'sponsorship@ieeetamu.org',
  webmaster: 'webmaster@ieeetamu.org',
} as const;
