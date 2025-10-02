import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MainSection } from '@/components/sections';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <MainSection>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about IEEE TAMU.
          </p>
        </div>
      </MainSection>

      {/* FAQ Section */}
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
                  between local chapter membership ($15/year) or full IEEE
                  global membership ($32/year). Both options give you access to
                  our events and community.
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
                  We offer Bronze ($1,000), Silver ($2,500), and Gold ($5,000)
                  sponsorship packages. Each tier includes different benefits
                  like logo placement, recruiting opportunities, and workshop
                  co-hosting. Contact us at sponsorship@ieeetamu.org for
                  details.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find what you&apos;re looking for? We&apos;re here to
              help!
            </p>
            <Link
              href="/connect#send-message"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </MainSection>
    </div>
  );
}
