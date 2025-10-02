import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  CheckCircleIcon,
  BuildingOffice2Icon,
  MegaphoneIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { MainSection } from '@/components/sections';
import { SponsorsCarousel } from '@/components/sponsors-carousel';

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Why Partner With Us */}
      <MainSection>
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Partner With IEEE <span className="text-primary">TAMU</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-3">
            Connect with the next generation of engineers and support technical
            education at{' '}
            <span className="text-primary">Texas A&M University</span>. Join
            leading companies in shaping the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <BuildingOffice2Icon className="mr-2 h-5 w-5" />
              Become a Sponsor
            </Button>
            <Button size="lg" variant="outline">
              {/* <Mail className="mr-2 h-5 w-5" /> */}
              Request Partnership Info
            </Button>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Why Partner With IEEE TAMU?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access top engineering talent, increase brand visibility, and make a
            meaningful impact on STEM education.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <BuildingOffice2Icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Talent Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Access to top engineering talent through career fairs,
                networking events, and direct recruitment opportunities.
              </p>
              <ul className="text-sm text-left space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  <span>Resume database access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  <span>Exclusive recruiting events</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  <span>Internship partnerships</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  <span>Direct access to 500+ students</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <MegaphoneIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Brand Visibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Showcase your company to 500+ active IEEE TAMU members through
                various marketing channels and events.
              </p>
              <ul className="text-sm text-left space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  <span>Event sponsorship opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  <span>Newsletter and social media features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  <span>Workshop co-hosting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  <span>Logo placement at events</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <HeartIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Community Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Support STEM education and community outreach programs that make
                a lasting difference in engineering education.
              </p>
              <ul className="text-sm text-left space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  <span>K-12 STEM outreach programs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  <span>Scholarship programs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  <span>Technical workshops</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  <span>Community service projects</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </MainSection>

      {/* Sponsorship Tiers */}
      <MainSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sponsorship Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the sponsorship level that aligns with your company&apos;s
            goals and budget.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="flex flex-col h-full">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Bronze Sponsor</CardTitle>
              <div className="text-2xl font-bold text-accent mt-4">$1,000</div>
              <p className="text-muted-foreground">
                Essential partnership benefits
              </p>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <div className="space-y-3 flex-1">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">Logo on event materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">Social media recognition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">Newsletter mentions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">Access to resume database</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-auto bg-transparent"
              >
                Choose Bronze
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary relative flex flex-col h-full">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
              Most Popular
            </Badge>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Silver Sponsor</CardTitle>
              <div className="text-2xl font-bold text-primary mt-4">$2,500</div>
              <p className="text-muted-foreground">
                Enhanced visibility and engagement
              </p>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <div className="space-y-3 flex-1">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">All Bronze benefits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">
                    Workshop co-hosting opportunity
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">
                    Recruiting table at career fair
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">
                    Company presentation opportunity
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">Priority event invitations</span>
                </div>
              </div>
              <Button className="w-full mt-auto bg-primary hover:bg-primary/90">
                Choose Silver
              </Button>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Gold Sponsor</CardTitle>
              <div className="text-2xl font-bold text-accent mt-4">$5,000</div>
              <p className="text-muted-foreground">
                Premium partnership experience
              </p>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <div className="space-y-3 flex-1">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">All Silver benefits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">Exclusive networking event</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">Custom workshop development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">
                    Scholarship program partnership
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm">Quarterly progress reports</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-auto bg-transparent"
              >
                Choose Gold
              </Button>
            </CardContent>
          </Card>
        </div>
      </MainSection>

      {/* Current Sponsors */}
      <MainSection className="bg-card">
        <SponsorsCarousel
          title="Our Valued Partners"
          description="We're grateful to partner with these organizations who support engineering education at Texas A&M."
        />
      </MainSection>

      {/* How to Sponsor */}
      <MainSection>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How to Become a Sponsor</h2>
          <p className="text-muted-foreground mb-12">
            Starting a partnership with IEEE TAMU is straightforward. Follow
            these steps to begin.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-3">Contact Us</h3>
              <p className="text-sm text-muted-foreground">
                Reach out to discuss your company&apos;s goals and how we can
                create a mutually beneficial partnership.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-3">Choose Package</h3>
              <p className="text-sm text-muted-foreground">
                Select the sponsorship tier that best aligns with your budget
                and engagement objectives.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-3">Start Partnership</h3>
              <p className="text-sm text-muted-foreground">
                Begin engaging with our community through events, workshops, and
                recruitment opportunities.
              </p>
            </div>
          </div>
        </div>
      </MainSection>

      {/* Contact CTA */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5">
        <MainSection contentClassName="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-muted-foreground mb-8">
            Let&apos;s discuss how your company can benefit from partnering with
            IEEE TAMU and supporting engineering education at{' '}
            <span className="text-primary">Texas A&M University</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <BuildingOffice2Icon className="mr-2 h-5 w-5" />
              Become a Sponsor
            </Button>
            {/* <Button size="lg" variant="outline">
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button> */}
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              Contact us at{' '}
              <Link
                href="mailto:sponsorship@ieeetamu.org"
                className="text-primary hover:underline"
              >
                sponsorship@ieeetamu.org
              </Link>{' '}
              or call{' '}
              {/* <Link
                  href="tel:+19798451234"
                  className="text-primary hover:underline"
                >
                  (979) 845-1234
                </Link> */}
            </p>
          </div>
        </MainSection>
      </section>
    </div>
  );
}
