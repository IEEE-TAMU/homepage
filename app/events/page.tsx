import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { MainSection } from '@/components/main-section';
import { EventsSection } from '@/components/events-section';
import { EXTERNAL_LINKS } from '@/lib/external-links';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Events Section */}
      <MainSection>
        <div className="text-center">
          {/* <Badge className="mb-6 bg-secondary text-secondary-foreground border-secondary">
              Live from Google Calendar
            </Badge> */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            IEEE TAMU Events
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
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
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="font-semibold mb-2">Technical Workshops</h3>
            <p className="text-sm text-muted-foreground">
              Hands-on sessions covering programming, hardware, and emerging
              technologies.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-background border flex flex-col h-full">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="font-semibold mb-2">Networking Events</h3>
            <p className="text-sm text-muted-foreground">
              Meet industry professionals, alumni, and fellow students in your
              field.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-background border flex flex-col h-full">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="font-semibold mb-2">Competitions</h3>
            <p className="text-sm text-muted-foreground">
              Hackathons, design challenges, and technical competitions with
              prizes.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-background border flex flex-col h-full">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎉</span>
            </div>
            <h3 className="font-semibold mb-2">Social Events</h3>
            <p className="text-sm text-muted-foreground">
              Game nights, mixers, and casual gatherings to build community.
            </p>
          </div>
        </div>
      </MainSection>

      {/* How to Stay Updated */}
      <MainSection>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Never miss an event! Here&apos;s how to stay in the loop with all
            IEEE TAMU activities.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Discord Server',
                description:
                  'Join our Discord for real-time updates, discussions, and event reminders.',
                link: {
                  href: '#',
                  label: 'Join Discord →',
                },
              },
              // {
              //   title: 'Email Newsletter',
              //   description:
              //     'Get weekly updates with upcoming events and important announcements.',
              //   link: {
              //     href: '#',
              //     label: 'Subscribe →',
              //   },
              // },
              {
                title: 'Social Media',
                description:
                  'Follow us on Instagram and LinkedIn for photos and updates.',
                link: {
                  href: '#',
                  label: 'Follow Us →',
                },
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg bg-card border flex flex-col h-full"
              >
                <h3 className="font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {item.description}
                </p>
                <Link
                  href={item.link.href}
                  className="text-sm text-primary hover:underline mt-auto"
                >
                  {item.link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </MainSection>
    </div>
  );
}
