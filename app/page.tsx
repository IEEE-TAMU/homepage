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

import { FeatureCard } from '@/components/feature-card';
import { SectionHeader } from '@/components/section-header';
import { HeroSection } from '@/components/sections';
import { MainSection } from '@/components/sections';
import { SponsorsCarousel } from '@/components/sponsors-carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { formatMemberCount, getMemberStats } from '@/lib/member-stats';

export default async function Homepage() {
  const { count } = await getMemberStats();
  const memberCountLabel = formatMemberCount(count);

  return (
    <div>
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
            <Button size="lg" asChild>
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

      <MainSection tone="card">
        <SectionHeader
          title="What IEEE TAMU Does"
          description="We foster professional development, technical excellence, and community engagement through diverse programs and initiatives."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <CpuChipIcon />,
              title: 'Technical Workshops',
              description:
                'Hands-on learning sessions covering cutting-edge technologies and industry best practices.',
              href: '/events',
            },
            {
              icon: <UsersIcon />,
              title: 'Networking Events',
              description:
                'Connect with industry professionals, alumni, and fellow students in your field.',
              href: '/events',
            },
            {
              icon: <TrophyIcon />,
              title: 'Competitions',
              description:
                'Participate in hackathons, design challenges, and technical competitions.',
              href: '/events',
            },
            {
              icon: <GlobeAmericasIcon />,
              title: 'Community Service',
              description:
                'Give back through STEM outreach programs and community technology initiatives.',
              href: '/about',
            },
          ].map((card) => (
            <FeatureCard
              key={card.title}
              icon={card.icon}
              iconStyle="plain"
              title={card.title}
              description={card.description}
              cta={
                <Button variant="ghost" size="sm" className="mt-auto" asChild>
                  <Link href={card.href}>
                    Learn More <ArrowRightIcon className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              }
            />
          ))}
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
              description: `Join ${memberCountLabel} engineering students in our community and connect with the global IEEE network.`,
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
          ].map((card) => {
            const Icon = card.icon;
            return (
              <FeatureCard
                key={card.title}
                icon={<Icon className="h-16 w-16" />}
                iconStyle="plain"
                title={card.title}
                titleSize="lg"
                description={card.description}
                cta={
                  <Button
                    className={
                      card.buttonVariant === 'default'
                        ? 'mt-auto'
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
                }
              />
            );
          })}
        </div>
      </MainSection>

      <MainSection tone="card">
        <SponsorsCarousel />
      </MainSection>

      <MainSection tone="gradient" contentClassName="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join IEEE TAMU today and start building your professional network,
          developing technical skills, and making an impact in your community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/membership">
              <UsersIcon className="mr-2 h-5 w-5" />
              Join IEEE TAMU
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/connect#send-message">Have Questions? Contact Us</Link>
          </Button>
        </div>
      </MainSection>
    </div>
  );
}
