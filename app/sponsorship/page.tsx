import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  HeartIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { FeatureCard } from '@/components/feature-card';
import { PageHero } from '@/components/page-hero';
import { PriceCard } from '@/components/price-card';
import { SectionHeader } from '@/components/section-header';
import { MainSection } from '@/components/sections';
import { SponsorsCarousel } from '@/components/sponsors-carousel';
import { StepList } from '@/components/step-list';
import { Button } from '@/components/ui/button';

export default function SponsorshipPage() {
  return (
    <div>
      <MainSection>
        <PageHero
          title={
            <>
              Partner With IEEE <span className="text-primary">TAMU</span>
            </>
          }
          subtitle={
            <>
              Connect with the next generation of engineers and support
              technical education at{' '}
              <span className="text-primary">Texas A&M University</span>. Join
              leading companies in shaping the future of technology.
            </>
          }
          actions={
            <>
              <Button size="lg" asChild>
                <Link href="mailto:sponsorship@ieeetamu.org">
                  <BuildingOffice2Icon className="mr-2 h-5 w-5" />
                  Become a Sponsor
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="mailto:sponsorship@ieeetamu.org">
                  <EnvelopeIcon className="mr-2 h-5 w-5" />
                  Request Partnership Info
                </Link>
              </Button>
            </>
          }
        />

        <SectionHeader
          title="Why Partner With IEEE TAMU?"
          description="Access top engineering talent, increase brand visibility, and make a meaningful impact on STEM education."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BuildingOffice2Icon className="h-12 w-12 text-primary" />}
            iconStyle="plain"
            title="Talent Pipeline"
            description="Access to top engineering talent through career fairs, networking events, and direct recruitment opportunities."
            cta={
              <ul className="text-sm text-left space-y-2">
                {[
                  'Resume database access',
                  'Exclusive recruiting events',
                  'Internship partnerships',
                  'Direct access to 500+ students',
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircleItem />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            }
          />
          <FeatureCard
            icon={<MegaphoneIcon className="h-12 w-12 text-primary" />}
            iconStyle="plain"
            title="Brand Visibility"
            description="Showcase your company to 500+ active IEEE TAMU members through various marketing channels and events."
            cta={
              <ul className="text-sm text-left space-y-2">
                {[
                  'Event sponsorship opportunities',
                  'Newsletter and social media features',
                  'Workshop co-hosting',
                  'Logo placement at events',
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircleItem />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            }
          />
          <FeatureCard
            icon={<HeartIcon className="h-12 w-12 text-primary" />}
            iconStyle="plain"
            title="Community Impact"
            description="Support STEM education and community outreach programs that make a lasting difference in engineering education."
            cta={
              <ul className="text-sm text-left space-y-2">
                {[
                  'K-12 STEM outreach programs',
                  'Scholarship programs',
                  'Technical workshops',
                  'Community service projects',
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircleItem />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      </MainSection>

      <MainSection>
        <SectionHeader
          title="Sponsorship Packages"
          description="Choose the sponsorship level that aligns with your company's goals and budget."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PriceCard
            name="Bronze Sponsor"
            price="$500"
            description="Essential partnership benefits"
            priceTone="accent-foreground"
            benefits={[
              'Logo on event materials',
              'Social media recognition',
              'Newsletter mentions',
              'Access to resume database',
            ]}
          />
          <PriceCard
            name="Silver Sponsor"
            price="$1,000"
            description="Enhanced visibility and engagement"
            isPopular
            priceTone="primary"
            benefits={[
              'All Bronze benefits',
              'Workshop co-hosting opportunity',
              'Recruiting table at career fair',
              'Company presentation opportunity',
              'Priority event invitations',
            ]}
          />
          <PriceCard
            name="Gold Sponsor"
            price="$3,000"
            description="Premium partnership experience"
            priceTone="accent-foreground"
            benefits={[
              'All Silver benefits',
              'Exclusive networking event',
              'Custom workshop development',
            ]}
          />
          <PriceCard
            name="Platinum Sponsor"
            price="$5,000"
            description="Elite partnership with maximum impact"
            priceTone="accent-foreground"
            benefits={[
              'All Gold benefits',
              'Custom partnership opportunities',
              'Maximum brand visibility',
            ]}
          />
        </div>
      </MainSection>

      <MainSection tone="card">
        <SponsorsCarousel
          title="Our Valued Partners"
          description="We're grateful to partner with these organizations who support engineering education at Texas A&M."
        />
      </MainSection>

      <MainSection>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How to Become a Sponsor</h2>
          <p className="text-muted-foreground mb-12">
            Starting a partnership with IEEE TAMU is straightforward. Follow
            these steps to begin.
          </p>
          <StepList
            steps={[
              {
                number: 1,
                title: 'Contact Us',
                description:
                  "Reach out to discuss your company's goals and how we can create a mutually beneficial partnership.",
              },
              {
                number: 2,
                title: 'Choose Package',
                description:
                  'Select the sponsorship tier that best aligns with your budget and engagement objectives.',
              },
              {
                number: 3,
                title: 'Start Partnership',
                description:
                  'Begin engaging with our community through events, workshops, and recruitment opportunities.',
              },
            ]}
            layout="grid"
          />
        </div>
      </MainSection>

      <MainSection
        tone="gradient"
        contentClassName="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
        <p className="text-muted-foreground mb-8">
          Let&apos;s discuss how your company can benefit from partnering with
          IEEE TAMU and supporting engineering education at{' '}
          <span className="text-primary">Texas A&M University</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="mailto:sponsorship@ieeetamu.org">
              <BuildingOffice2Icon className="mr-2 h-5 w-5" />
              Become a Sponsor
            </Link>
          </Button>
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
    </div>
  );
}

const CheckCircleItem = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-primary"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
