/**
 * Site-wide constants: stats, pricing, and contact emails.
 *
 * Anything that appears in more than one place, or that the officers need
 * to update once a year (prices, member counts, etc.) should live here.
 */

/**
 * Headline statistics shown across the site.
 * All values are pre-formatted for display.
 */
export const SITE_STATS = {
  /** Active IEEE TAMU members. Shown on the home "By the Numbers" panel. */
  activeMembers: '700+',
  /** Events hosted each year. */
  eventsPerYear: '50+',
  /** Years IEEE TAMU has been active (founded 1909). */
  yearsActive: '115+',
  /** Active student members used in marketing copy on the home and membership pages. */
  studentMembers: '500+',
  /** Global IEEE membership count used in the membership value-prop. */
  ieeeGlobalMembers: '500,000',
} as const;

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
