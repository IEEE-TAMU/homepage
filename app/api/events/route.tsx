import { NextResponse } from 'next/server';
import { parseICS } from 'node-ical';
import type { VEvent } from 'node-ical';

import { EXTERNAL_LINKS } from '@/lib/external-links';

interface CalendarEvent {
  uid: string;
  title: string;
  description: string;
  start: Date;
  end: Date;
  location: string;
  type: string;
  rsvpUrl?: string;
}

// Cache the events for 5 minutes (300 seconds)
export const revalidate = 300;

export async function GET() {
  try {
    const response = await fetch(EXTERNAL_LINKS.IEEE_CALENDAR_ICS, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });
    const icalData = await response.text();

    const parsed = parseICS(icalData);
    const events: CalendarEvent[] = Object.values(parsed)
      .filter((item): item is VEvent => item.type === 'VEVENT')
      .map((event) => ({
        uid: event.uid,
        title: event.summary || '',
        description: event.description || 'No description available',
        start: event.start,
        end: event.end,
        location: event.location || 'Location TBD',
        type: categorizeEvent(event.summary || ''),
        // rsvpUrl stored in custom field X-RSVP-URL
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rsvpUrl: (event as any)['RSVP-URL'],
      }));

    // Filter for upcoming events only
    const now = new Date();
    const upcomingEvents = events
      .filter((event) => event.start > now)
      .sort((a, b) => a.start.getTime() - b.start.getTime())
      .slice(0, 6); // Limit to 6 upcoming events

    return NextResponse.json(upcomingEvents);
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

function categorizeEvent(title: string): string {
  const titleLower = title.toLowerCase();

  if (
    titleLower.includes('workshop') ||
    titleLower.includes('tutorial') ||
    titleLower.includes('training')
  ) {
    return 'Workshop';
  } else if (
    titleLower.includes('social') ||
    titleLower.includes('mixer') ||
    titleLower.includes('party') ||
    titleLower.includes('celebration')
  ) {
    return 'Social';
  } else if (
    titleLower.includes('competition') ||
    titleLower.includes('hackathon') ||
    titleLower.includes('contest')
  ) {
    return 'Competition';
  } else if (
    titleLower.includes('meeting') ||
    titleLower.includes('general body')
  ) {
    return 'Meeting';
  } else if (
    titleLower.includes('career') ||
    titleLower.includes('networking') ||
    titleLower.includes('professional')
  ) {
    return 'Professional';
  } else {
    return 'Event';
  }
}

export type { CalendarEvent };
