import {
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  // MagnifyingGlassCircleIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

import { MainSection } from '@/components/sections';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { EXTERNAL_LINKS } from '@/lib/external-links';

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Membership Benefits */}
      <MainSection>
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Join IEEE <span className="text-primary">TAMU</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-3">
            Become part of the world&apos;s largest technical professional
            organization and unlock opportunities for professional growth,
            networking, and technical excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a
                href={EXTERNAL_LINKS.IEEE_TAMU_MEMBERSHIP_REGISTER}
                target="_blank"
                rel="noopener noreferrer"
              >
                <UsersIcon className="mr-2 h-5 w-5" />
                Join IEEE TAMU
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href={EXTERNAL_LINKS.IEEE_GLOBAL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />
                IEEE Global Membership
              </a>
            </Button>
          </div>
        </div>
        <div className="text-center mb-12 mt-16">
          <h2 className="text-3xl font-bold mb-4">Why Join IEEE TAMU?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Membership opens doors to exclusive opportunities, resources, and a
            global network of engineering professionals.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpenIcon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Professional Development</h3>
                <p className="text-muted-foreground text-sm">
                  Access to IEEE&apos;s vast library of technical resources,
                  standards, and continuing education opportunities to advance
                  your career.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GlobeAltIcon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Global Network</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with over 400,000 IEEE members worldwide and access
                  exclusive career opportunities through the IEEE network.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <UserIcon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Leadership Opportunities</h3>
                <p className="text-muted-foreground text-sm">
                  Develop leadership skills through officer positions, project
                  management, and event organization within IEEE TAMU.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <UserGroupIcon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Local Community</h3>
                <p className="text-muted-foreground text-sm">
                  Join a vibrant community of 500+ engineering students at{' '}
                  <span className="text-primary">Texas A&M</span> with shared
                  interests and goals.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">What You Get</h3>
            <div className="space-y-3">
              {[
                'Access to all IEEE TAMU events',
                'IEEE publications and technical papers',
                'Career development workshops',
                'Networking with industry professionals',
                'Resume building opportunities',
                'Leadership development programs',
                'Access to IEEE job board',
                'Discounts on conferences and courses',
              ].map((benefit) => (
                <div className="flex items-center space-x-3" key={benefit}>
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MainSection>

      {/* Membership Tiers */}
      <MainSection className="bg-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Membership Options</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the membership level that best fits your needs and career
            goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="relative flex flex-col h-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">IEEE Student Member</CardTitle>
              <div className="text-3xl font-bold text-primary mt-4 whitespace-nowrap">
                $32/year
              </div>
              <p className="text-muted-foreground">
                Full IEEE global membership benefits
              </p>
            </CardHeader>
            <CardContent className="space-y-4 flex flex-col flex-1">
              <div className="space-y-3 flex-1">
                {[
                  'All IEEE TAMU local benefits',
                  'IEEE Spectrum magazine subscription',
                  'Access to IEEE Xplore Digital Library',
                  'Global IEEE network access',
                  'Conference discounts worldwide',
                  'Professional certification programs',
                ].map((benefit) => (
                  <div className="flex items-center space-x-3" key={benefit}>
                    <CheckCircleIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 mt-auto"
                asChild
              >
                <a
                  href={EXTERNAL_LINKS.IEEE_MEMBERSHIP_JOIN}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowTopRightOnSquareIcon className="mr-2 h-4 w-4" />
                  Join IEEE Global
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary relative flex flex-col h-full">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
              Most Popular
            </Badge>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Local Chapter Member</CardTitle>
              <div className="text-3xl font-bold text-accent mt-4 whitespace-nowrap">
                $15/year
              </div>
              <p className="text-muted-foreground">
                Access to <span className="text-primary">TAMU</span>-specific
                opportunities
              </p>
            </CardHeader>
            <CardContent className="space-y-4 flex flex-col flex-1">
              <div className="space-y-3 flex-1">
                {[
                  'All IEEE TAMU events and workshops',
                  'Local networking opportunities',
                  'Career development sessions',
                  'Leadership opportunities',
                  'Community service projects',
                  'Social events and mixers',
                ].map((benefit) => (
                  <div className="flex items-center space-x-3" key={benefit}>
                    <CheckCircleIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full mt-auto bg-transparent"
                asChild
              >
                <a
                  href={EXTERNAL_LINKS.IEEE_TAMU_MEMBERSHIP_REGISTER}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowTopRightOnSquareIcon className="mr-2 h-4 w-4" />
                  Join IEEE TAMU
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </MainSection>

      {/* How to Join */}
      <MainSection className="bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How to Join</h2>
          <p className="text-muted-foreground mb-12">
            Getting started with IEEE TAMU is easy. Follow these simple steps to
            become a member.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: 1,
                title: 'Choose Your Level',
                description: (
                  <>
                    Decide between local chapter membership{' '}
                    <span className="whitespace-nowrap">($15/year)</span> or
                    full IEEE global membership{' '}
                    <span className="whitespace-nowrap">($32/year)</span>.
                  </>
                ),
              },
              {
                number: 2,
                title: 'Complete Registration',
                description:
                  'Fill out the membership form with your Texas A&M student information.',
              },
              {
                number: 3,
                title: 'Start Participating',
                description:
                  'Join our Discord, attend events, and start building your professional network.',
              },
            ].map((step) => (
              <div className="text-center" key={step.number}>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 mr-4"
              asChild
            >
              <a
                href={EXTERNAL_LINKS.IEEE_TAMU_MEMBERSHIP_REGISTER}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Membership
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/connect">Have Questions? Contact Us</a>
            </Button>
          </div>
        </div>
      </MainSection>
    </div>
  );
}
