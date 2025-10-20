import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  CpuChipIcon,
  GlobeAmericasIcon,
  TrophyIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { MainSection } from '@/components/sections';
import { HeroSection } from '@/components/sections';
import { SponsorsCarousel } from '@/components/sponsors-carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        badge={
          <Badge className="bg-primary text-primary-foreground border-primary">
            Texas A&M University Student Branch
          </Badge>
        }
        heading={
          <h1 className="text-4xl lg:text-6xl font-bold text-balance">
            Advancing Technology at{' '}
            <span className="text-primary">Texas A&M</span>
          </h1>
        }
        subheading={
          <>
            Join the largest technical professional organization in the world.
            Connect with fellow engineers, advance your career, and shape the
            future of technology.
          </>
        }
        actions={
          <>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <Link href="/membership">
                <UsersIcon className="mr-2 h-5 w-5" />
                Become a Member
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/events">
                <CalendarDaysIcon className="mr-2 h-5 w-5" />
                View Events
              </Link>
            </Button>
          </>
        }
      />

      <MainSection className="bg-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What IEEE TAMU Does</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We foster professional development, technical excellence, and
            community engagement through diverse programs and initiatives.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow flex flex-col h-full">
            <CardHeader>
              <CpuChipIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Technical Workshops</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Hands-on learning sessions covering cutting-edge technologies
                and industry best practices.
              </p>
              <Button variant="ghost" size="sm" className="mt-auto" asChild>
                <Link href="/events">
                  Learn More <ArrowRightIcon className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow flex flex-col h-full">
            <CardHeader>
              <UsersIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Networking Events</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Connect with industry professionals, alumni, and fellow students
                in your field.
              </p>
              <Button variant="ghost" size="sm" className="mt-auto" asChild>
                <Link href="/events">
                  Learn More <ArrowRightIcon className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow flex flex-col h-full">
            <CardHeader>
              <TrophyIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Competitions</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Participate in hackathons, design challenges, and technical
                competitions.
              </p>
              <Button variant="ghost" size="sm" className="mt-auto" asChild>
                <Link href="/events">
                  Learn More <ArrowRightIcon className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow flex flex-col h-full">
            <CardHeader>
              <GlobeAmericasIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Community Service</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Give back through STEM outreach programs and community
                technology initiatives.
              </p>
              <Button variant="ghost" size="sm" className="mt-auto" asChild>
                <Link href="/about">
                  Learn More <ArrowRightIcon className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/about">
              Learn More About IEEE TAMU{' '}
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </MainSection>

      <MainSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: UsersIcon,
              title: 'Join Our Community',
              description:
                'Become part of 500+ engineering students and connect with the global IEEE network.',
              buttonText: 'Join Now',
              buttonVariant: 'default' as const,
              href: '/membership',
            },
            {
              icon: CalendarDaysIcon,
              title: 'Upcoming Events',
              description:
                'Join workshops, networking events, and competitions. All events sync live from our calendar.',
              buttonText: 'View Events',
              buttonVariant: 'outline' as const,
              href: '/events#upcoming-events',
            },
            {
              icon: BuildingOffice2Icon,
              title: 'Partner With Us',
              description:
                'Connect with top engineering talent and support STEM education at Texas A&M.',
              buttonText: 'Become a Sponsor',
              buttonVariant: 'default' as const,
              href: '/sponsorship',
            },
          ].map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow flex flex-col h-full"
              >
                <Icon className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  {card.description}
                </p>
                <Button
                  className={
                    card.buttonVariant === 'default'
                      ? 'bg-primary hover:bg-primary/90 mt-auto'
                      : 'mt-auto bg-transparent'
                  }
                  variant={card.buttonVariant}
                  asChild
                >
                  <Link href={card.href}>
                    {card.buttonText}{' '}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            );
          })}
        </div>
      </MainSection>

      <MainSection className="bg-card">
        <SponsorsCarousel />
      </MainSection>

      <section className="bg-gradient-to-br from-primary/5 to-accent/5">
        <MainSection contentClassName="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join IEEE TAMU today and start building your professional network,
            developing technical skills, and making an impact in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <Link href="/membership">
                <UsersIcon className="mr-2 h-5 w-5" />
                Join IEEE TAMU
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/connect#send-message">
                Have Questions? Contact Us
              </Link>
            </Button>
          </div>
        </MainSection>
      </section>
    </div>
  );
}
