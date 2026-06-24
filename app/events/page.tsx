import {
  CalendarDaysIcon,
  SparklesIcon,
  TrophyIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { EventsSection } from '@/components/events-section';
import { FeatureCard } from '@/components/feature-card';
import { MainSection } from '@/components/sections';
import { PageHero } from '@/components/page-hero';
import { SectionHeader } from '@/components/section-header';

import { EXTERNAL_LINKS } from '@/lib/external-links';

export default async function EventsPage() {
  return (
    <div>
      <MainSection>
        <PageHero
          title="IEEE TAMU Events"
          subtitle="Join us for workshops, networking events, competitions, and social gatherings. All events are automatically synced from our official calendar."
        />
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
      </MainSection>

      <EventsSection />

      <MainSection>
        <SectionHeader
          title="Types of Events"
          description="We host a variety of events throughout the year to support your professional and personal development."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<WrenchScrewdriverIcon className="h-6 w-6 text-primary" />}
            iconStyle="bubble"
            title="Technical Workshops"
            description="Hands-on sessions covering programming, hardware, and emerging technologies."
            titleSize="sm"
          />
          <FeatureCard
            icon={<UsersIcon className="h-6 w-6 text-primary" />}
            iconStyle="bubble"
            title="Networking Events"
            description="Meet industry professionals, alumni, and fellow students in your field."
            titleSize="sm"
          />
          <FeatureCard
            icon={<TrophyIcon className="h-6 w-6 text-primary" />}
            iconStyle="bubble"
            title="Competitions"
            description="Hackathons, design challenges, and technical competitions with prizes."
            titleSize="sm"
          />
          <FeatureCard
            icon={<SparklesIcon className="h-6 w-6 text-primary" />}
            iconStyle="bubble"
            title="Social Events"
            description="Game nights, mixers, and casual gatherings to build community."
            titleSize="sm"
          />
        </div>
      </MainSection>
    </div>
  );
}
