import { CURRENT_MEMBER_STATS_YEAR } from '@/lib/constants';
import { EXTERNAL_LINKS } from '@/lib/external-links';

export type MemberStats = {
  count: number;
  year: number;
};

/**
 * Fallback used when the portal is unreachable so a build never fails.
 * Picked to roughly match recent years (~700 paid members).
 */
const FALLBACK_COUNT = 700;

/**
 * Fetch the paid-member count from the IEEE TAMU portal.
 * Cached for 1 hour via Next.js fetch ISR. A 1-hour window keeps the
 * homepage "by the numbers" panel feeling live while still being cheap.
 */
export async function getMemberStats(): Promise<MemberStats> {
  const url = `${EXTERNAL_LINKS.IEEE_TAMU_STATS_PAID_MEMBERS}?year=${CURRENT_MEMBER_STATS_YEAR}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = (await res.json()) as MemberStats;
    return {
      count: data.count,
      year: data.year ?? CURRENT_MEMBER_STATS_YEAR,
    };
  } catch (err) {
    console.error('[member-stats] falling back to static count:', err);
    return { count: FALLBACK_COUNT, year: CURRENT_MEMBER_STATS_YEAR };
  }
}

/**
 * Format a member count for display. Returns the exact count as a string
 * with thousands separators (e.g. 1234 -> "1,234").
 */
export function formatMemberCount(count: number): string {
  return count.toLocaleString();
}
