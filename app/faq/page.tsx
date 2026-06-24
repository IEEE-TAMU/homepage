import Link from 'next/link';

import { PageHero } from '@/components/page-hero';
import { MainSection } from '@/components/sections';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { MEMBERSHIP_PRICING } from '@/lib/constants';

export default function FAQPage() {
  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions about IEEE TAMU."
      />

      <MainSection>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How do I join IEEE TAMU?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can join by visiting our membership page and choosing
                  between local chapter membership (
                  {MEMBERSHIP_PRICING.local.formatted}) or full IEEE global
                  membership ({MEMBERSHIP_PRICING.global.formatted}). Both
                  options give you access to our events and community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do I need to be an engineering student to join?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  While IEEE TAMU primarily serves engineering students at{' '}
                  <span className="text-primary">Texas A&M University</span>, we
                  welcome students from related technical fields who are
                  interested in technology and professional development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What types of events do you host?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We host technical workshops, networking events, career fairs,
                  competitions, social gatherings, and community service
                  projects. Check our events page for the latest schedule.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How can my company sponsor IEEE TAMU?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer multiple sponsorship tiers that can be tailored to
                  suit your company&apos;s needs and goals. Benefits include
                  logo placement, recruiting opportunities, and workshop
                  co-hosting.{' '}
                  <Link
                    href="/sponsorship"
                    className="text-primary hover:underline"
                  >
                    Learn more about sponsorship opportunities
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find what you&apos;re looking for? We&apos;re here to
              help!
            </p>
            <Button asChild>
              <Link href="/connect#send-message">Contact Us</Link>
            </Button>
          </div>
        </div>
      </MainSection>
    </div>
  );
}
