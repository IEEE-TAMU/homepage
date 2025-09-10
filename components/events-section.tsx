'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { CalendarEvent } from '@/app/api/events/route';

export function EventsSection() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data: CalendarEvent[] = await response.json();

        // Convert date strings back to Date objects
        const eventsWithDates = data.map((event) => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end),
        }));
        setEvents(eventsWithDates);
      } catch (err) {
        setError('Failed to load events');
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const getBadgeVariant = (type: string) => {
    switch (type.toLowerCase()) {
      case 'workshop':
        return 'default';
      case 'social':
        return 'secondary';
      case 'competition':
        return 'destructive';
      case 'professional':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  if (loading) {
    return (
      <section id="events" className="py-16">
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground">
              Stay connected with our latest workshops, socials, and
              professional development opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-20 mb-2"></div>
                  <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-muted rounded w-1/2 mb-4"></div>
                  <div className="h-8 bg-muted rounded w-full"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="events" className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground">
              Stay connected with our latest workshops, socials, and
              professional development opportunities.
            </p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-16">
      <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground">
            Stay connected with our latest workshops, socials, and professional
            development opportunities.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length === 0 ? (
            <div className="col-span-full text-center py-12">
              {/* <CalendarDays className="h-12 w-12 text-muted-foreground mx-auto mb-4" /> */}
              <p className="text-muted-foreground">
                No upcoming events scheduled.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Check back soon for new events!
              </p>
            </div>
          ) : (
            events.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant={getBadgeVariant(event.type)}>
                      {event.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(event.start)}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      {/* <MapPin className="h-4 w-4 mr-2 flex-shrink-0" /> */}
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      {/* <Clock className="h-4 w-4 mr-2 flex-shrink-0" /> */}
                      <span>{formatTime(event.start)}</span>
                    </div>
                  </div>
                  <Button className="w-full" size="sm">
                    RSVP Now
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
