import {
  BuildingOffice2Icon,
  CheckCircleIcon,
  HeartIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { MainSection } from '@/components/sections';
import { SponsorsCarousel } from '@/components/sponsors-carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
            <Button size="lg">
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
        {/* Sponsorship Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BuildingOffice2Icon,
              title: 'Talent Pipeline',
              description:
                'Access to top engineering talent through career fairs, networking events, and direct recruitment opportunities.',
              items: [
                'Resume database access',
                'Exclusive recruiting events',
                'Internship partnerships',
                'Direct access to 500+ students',
              ],
            },
            {
              icon: MegaphoneIcon,
              title: 'Brand Visibility',
              description:
                'Showcase your company to 500+ active IEEE TAMU members through various marketing channels and events.',
              items: [
                'Event sponsorship opportunities',
                'Newsletter and social media features',
                'Workshop co-hosting',
                'Logo placement at events',
              ],
            },
            {
              icon: HeartIcon,
              title: 'Community Impact',
              description:
                'Support STEM education and community outreach programs that make a lasting difference in engineering education.',
              items: [
                'K-12 STEM outreach programs',
                'Scholarship programs',
                'Technical workshops',
                'Community service projects',
              ],
            },
          ].map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card key={benefit.title} className="text-center">
                <CardHeader>
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <ul className="text-sm text-left space-y-2">
                    {benefit.items.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <CheckCircleIcon className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: 'Bronze Sponsor',
              price: '$500',
              description: 'Essential partnership benefits',
              isPopular: false,
              buttonVariant: 'outline' as const,
              benefits: [
                'Logo on event materials',
                'Social media recognition',
                'Newsletter mentions',
                'Access to resume database',
              ],
            },
            {
              name: 'Silver Sponsor',
              price: '$1,000',
              description: 'Enhanced visibility and engagement',
              isPopular: true,
              buttonVariant: 'default' as const,
              benefits: [
                'All Bronze benefits',
                'Workshop co-hosting opportunity',
                'Recruiting table at career fair',
                'Company presentation opportunity',
                'Priority event invitations',
              ],
            },
            {
              name: 'Gold Sponsor',
              price: '$3,000',
              description: 'Premium partnership experience',
              isPopular: false,
              buttonVariant: 'outline' as const,
              benefits: [
                'All Silver benefits',
                'Exclusive networking event',
                'Custom workshop development',
              ],
            },
            {
              name: 'Platinum Sponsor',
              price: '$5,000',
              description: 'Elite partnership with maximum impact',
              isPopular: false,
              buttonVariant: 'outline' as const,
              benefits: [
                'All Gold benefits',
                'Custom partnership opportunities',
                'Maximum brand visibility',
              ],
            },
          ].map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col h-full ${tier.isPopular ? 'border-primary relative' : ''}`}
            >
              {tier.isPopular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <div
                  className={`text-2xl font-bold mt-4 ${tier.isPopular ? 'text-primary' : 'text-accent'}`}
                >
                  {tier.price}
                </div>
                <p className="text-muted-foreground">{tier.description}</p>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  {tier.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-3">
                      <CheckCircleIcon className="h-5 w-5 text-primary" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
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
            {[
              {
              step: 1,
              title: 'Contact Us',
              description:
                "Reach out to discuss your company's goals and how we can create a mutually beneficial partnership.",
              },
              {
              step: 2,
              title: 'Choose Package',
              description:
                'Select the sponsorship tier that best aligns with your budget and engagement objectives.',
              },
              {
              step: 3,
              title: 'Start Partnership',
              description:
                'Begin engaging with our community through events, workshops, and recruitment opportunities.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">
                {item.step}
                </span>
              </div>
              <h3 className="font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
              </div>
            ))}
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
              </Link>
            </p>
          </div>
        </MainSection>
      </section>
    </div>
  );
}
