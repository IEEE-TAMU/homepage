import {
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  GlobeAltIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { CheckList } from '@/components/check-list';
import { FeatureRow } from '@/components/feature-row';
import { GradientPanel } from '@/components/gradient-panel';
import { MainSection } from '@/components/sections';
import { PageHero } from '@/components/page-hero';
import { SectionHeader } from '@/components/section-header';
import { StepList } from '@/components/step-list';
import { Button } from '@/components/ui/button';
import { PriceCard } from '@/components/price-card';

import { EXTERNAL_LINKS } from '@/lib/external-links';

export default function MembershipPage() {
  return (
    <div>
      <MainSection>
        <PageHero
          title={
            <>
              Join IEEE <span className="text-primary">TAMU</span>
            </>
          }
          subtitle="Become part of the world's largest technical professional organization and unlock opportunities for professional growth, networking, and technical excellence."
          actions={
            <>
              <Button size="lg" asChild>
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
            </>
          }
        />

        <SectionHeader
          title="Why Join IEEE TAMU?"
          description="Membership opens doors to exclusive opportunities, resources, and a global network of engineering professionals."
          spacing="compact"
          className="mt-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <FeatureRow
              icon={<BookOpenIcon />}
              title="Professional Development"
              description="Access to IEEE's vast library of technical resources, standards, and continuing education opportunities to advance your career."
            />
            <FeatureRow
              icon={<GlobeAltIcon />}
              title="Global Network"
              description="Connect with over 500,000 IEEE members worldwide and access exclusive career opportunities through the IEEE network."
            />
            <FeatureRow
              icon={<UserIcon />}
              title="Leadership Opportunities"
              description="Develop leadership skills through officer positions, project management, and event organization within IEEE TAMU."
            />
            <FeatureRow
              icon={<UserGroupIcon />}
              title="Local Community"
              description={
                <>
                  Join a vibrant community of 500+ engineering students at{' '}
                  <span className="text-primary">Texas A&M</span> with shared
                  interests and goals.
                </>
              }
            />
          </div>
          <GradientPanel title="What You Get">
            <CheckList
              items={[
                'Access to all IEEE TAMU events',
                'IEEE publications and technical papers',
                'Career development workshops',
                'Networking with industry professionals',
                'Resume building opportunities',
                'Leadership development programs',
                'Access to IEEE job board',
                'Discounts on conferences and courses',
              ]}
            />
          </GradientPanel>
        </div>
      </MainSection>

      <MainSection tone="card">
        <SectionHeader
          title="Membership Options"
          description="Choose the membership level that best fits your needs and career goals."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PriceCard
            name="IEEE Student Member"
            price="$32/year"
            description="Full IEEE global membership benefits"
            benefits={[
              'All IEEE TAMU local benefits',
              'IEEE Spectrum magazine subscription',
              'Access to IEEE Xplore Digital Library',
              'Global IEEE network access',
              'Conference discounts worldwide',
              'Professional certification programs',
            ]}
            priceTone="primary"
            cta={
              <Button className="w-full mt-auto" asChild>
                <a
                  href={EXTERNAL_LINKS.IEEE_MEMBERSHIP_JOIN}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowTopRightOnSquareIcon className="mr-2 h-4 w-4" />
                  Join IEEE Global
                </a>
              </Button>
            }
          />
          <PriceCard
            name="Local Chapter Member"
            price="$15/year"
            description={
              <>
                Access to <span className="text-primary">TAMU</span>-specific
                opportunities
              </>
            }
            benefits={[
              'All IEEE TAMU events and workshops',
              'Local networking opportunities',
              'Career development sessions',
              'Leadership opportunities',
              'Community service projects',
              'Social events and mixers',
            ]}
            isPopular
            priceTone="accent-foreground"
            cta={
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
            }
          />
        </div>
      </MainSection>

      <MainSection>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How to Join</h2>
          <p className="text-muted-foreground mb-12">
            Getting started with IEEE TAMU is easy. Follow these simple steps to
            become a member.
          </p>
          <StepList
            steps={[
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
            ]}
            layout="grid"
          />
          <div className="mt-12">
            <Button size="lg" className="mr-4" asChild>
              <a
                href={EXTERNAL_LINKS.IEEE_TAMU_MEMBERSHIP_REGISTER}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Membership
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/connect">Have Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </MainSection>
    </div>
  );
}
