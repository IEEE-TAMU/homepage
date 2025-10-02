'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MainSection } from '@/components/sections';
import { Button } from '@/components/ui/button';
import { EXTERNAL_LINKS } from '@/lib/external-links';
import type { CalendarEvent } from '@/app/api/events/route';

export function EventsSection() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // If loading fails, show a friendly message to check socials

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/events');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data: CalendarEvent[] = await response.json();

      const eventsWithDates = data.map((event) => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      }));
      setEvents(eventsWithDates);
    } catch (err) {
      setError('Failed to load current events');
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

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

  const isEventWithinOneWeek = (eventDate: Date) => {
    const now = new Date();
    const oneWeekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    return eventDate <= oneWeekFromNow;
  };

  const Header = () => {
    return (
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <p className="text-muted-foreground">
          Stay connected with our latest workshops, socials, and professional
          development opportunities.
        </p>
      </div>
    );
  };

  if (loading) {
    return (
      <MainSection id="events">
        <Header />
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
      </MainSection>
    );
  }

  if (error) {
    return (
      <MainSection id="events">
        <Header />
        <div className="text-center">
          <p className="text-muted-foreground mb-4">{error}</p>
          <p className="text-sm text-muted-foreground mb-4">
            For the latest event updates, connect with us on our socials!
          </p>
        </div>
      </MainSection>
    );
  }

  return (
    <MainSection id="events">
      <Header />
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
            <Card key={index} className="flex flex-col h-full">
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
              <div className="flex-1" />
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    {/* <MapPin className="h-4 w-4 mr-2 flex-shrink-0" /> */}
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    {/* <Clock className="h-4 w-4 mr-2 flex-shrink-0" /> */}
                    <span>{formatTime(event.start)}</span>
                  </div>
                </div>
                {isEventWithinOneWeek(event.start) && (
                  <Button className="w-full mt-2" size="sm" asChild>
                    <a
                      href={`${EXTERNAL_LINKS.IEEE_RSVP}${event.uid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RSVP Now
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </MainSection>
  );
}
