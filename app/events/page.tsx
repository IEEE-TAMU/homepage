import { Badge } from '@/components/ui/badge';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { EventsSection } from '@/components/events-section';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Events Section */}
      <section className="py-16">
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-secondary text-secondary-foreground border-secondary">
              Live from Google Calendar
            </Badge>
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
                Events updated in real-time from ieeetamu.officers@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>

      <EventsSection />

      {/* Event Types Info */}
      <section className="py-16 bg-card">
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
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
        </div>
      </section>

      {/* How to Stay Updated */}
      <section className="py-16">
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-11">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Never miss an event! Here&apos;s how to stay in the loop with all
              IEEE TAMU activities.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-card border flex flex-col h-full">
                <h3 className="font-semibold mb-3">Discord Server</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  Join our Discord for real-time updates, discussions, and event
                  reminders.
                </p>
                <Link
                  href="#"
                  className="text-sm text-primary hover:underline mt-auto"
                >
                  Join Discord →
                </Link>
              </div>
              <div className="p-6 rounded-lg bg-card border flex flex-col h-full">
                <h3 className="font-semibold mb-3">Email Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  Get weekly updates with upcoming events and important
                  announcements.
                </p>
                <Link
                  href="#"
                  className="text-sm text-primary hover:underline mt-auto"
                >
                  Subscribe →
                </Link>
              </div>
              <div className="p-6 rounded-lg bg-card border flex flex-col h-full">
                <h3 className="font-semibold mb-3">Social Media</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  Follow us on Instagram and LinkedIn for photos and updates.
                </p>
                <Link
                  href="#"
                  className="text-sm text-primary hover:underline mt-auto"
                >
                  Follow Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
