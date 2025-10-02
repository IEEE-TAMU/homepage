import {
  CalendarDaysIcon,
  SparklesIcon,
  TrophyIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { EventsSection } from '@/components/events-section';
import { MainSection } from '@/components/sections';

import { EXTERNAL_LINKS } from '@/lib/external-links';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Events Section */}
      <MainSection>
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            IEEE TAMU Events
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-3">
            Join us for workshops, networking events, competitions, and social
            gatherings. All events are automatically synced from our official
            calendar.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CalendarDaysIcon className="h-4 w-4" />
            <span>
              Events updated in real-time from our{' '}
              <Link
                href={EXTERNAL_LINKS.IEEE_CALENDAR_GOOGLE}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                Calendar
              </Link>
            </span>
          </div>
        </div>
      </MainSection>

      <EventsSection />

      {/* Event Types Info */}
      <MainSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Types of Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We host a variety of events throughout the year to support your
            professional and personal development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-background border flex flex-col h-full">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <WrenchScrewdriverIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Technical Workshops</h3>
            <p className="text-sm text-muted-foreground">
              Hands-on sessions covering programming, hardware, and emerging
              technologies.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-background border flex flex-col h-full">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <UsersIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Networking Events</h3>
            <p className="text-sm text-muted-foreground">
              Meet industry professionals, alumni, and fellow students in your
              field.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-background border flex flex-col h-full">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <TrophyIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Competitions</h3>
            <p className="text-sm text-muted-foreground">
              Hackathons, design challenges, and technical competitions with
              prizes.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-background border flex flex-col h-full">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <SparklesIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Social Events</h3>
            <p className="text-sm text-muted-foreground">
              Game nights, mixers, and casual gatherings to build community.
            </p>
          </div>
        </div>
      </MainSection>
    </div>
  );
}
