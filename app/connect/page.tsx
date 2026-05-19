import {
  CalendarDaysIcon,
  CameraIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  InboxStackIcon,
  MapPinIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { ContactForm } from '@/components/contact-form';
import { MainSection } from '@/components/sections';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { EXTERNAL_LINKS } from '@/lib/external-links';

function CommunityCard({
  iconBg,
  icon,
  title,
  description,
  button,
}: {
  iconBg: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  button: React.ReactNode;
}) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="text-center">
        <div
          className={`h-16 w-16 rounded-full ${iconBg} flex items-center justify-center mx-auto mb-4`}
        >
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center flex-1 flex flex-col">
        <p className="text-muted-foreground mb-6 flex-1">{description}</p>
        {button}
      </CardContent>
    </Card>
  );
}

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Join Our Community Section */}
      <MainSection>
        <div className="text-center mb-4 md:mb-6">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Join Our Community
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow engineers, stay updated on events, and be part
            of our growing community.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              iconBg: 'bg-accent/10',
              icon: (
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-accent-foreground" />
              ),
              title: 'Discord Community',
              description:
                'Join our active Discord server for real-time discussions, study groups, project collaboration, and community support.',
              button: (
                <Button
                  variant="outline"
                  className="w-full mt-auto bg-transparent"
                  asChild
                >
                  <Link
                    href={EXTERNAL_LINKS.DISCORD}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Discord
                  </Link>
                </Button>
              ),
            },
            {
              iconBg: 'bg-accent/10',
              icon: (
                <CalendarDaysIcon className="h-8 w-8 text-accent-foreground" />
              ),
              title: 'Calendar',
              description:
                'Subscribe to our Google Calendar to never miss an event. Get automatic notifications for workshops, meetings, and socials.',
              button: (
                <Button
                  variant="outline"
                  className="w-full mt-auto bg-transparent"
                  asChild
                >
                  <Link
                    href={EXTERNAL_LINKS.IEEE_CALENDAR_GOOGLE}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Subscribe to Calendar
                  </Link>
                </Button>
              ),
            },
            {
              iconBg: 'bg-accent/10',
              icon: <CameraIcon className="h-8 w-8 text-accent-foreground" />,
              title: 'Instagram',
              description:
                'Follow us for behind-the-scenes content, event highlights, member spotlights, and IEEE TAMU updates.',
              button: (
                <Button
                  variant="outline"
                  className="w-full mt-auto bg-transparent"
                  asChild
                >
                  <Link
                    href={EXTERNAL_LINKS.INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow @ieee_tamu
                  </Link>
                </Button>
              ),
            },
          ].map((card, idx) => (
            <CommunityCard key={idx} {...card} />
          ))}
        </div>
      </MainSection>

      {/* Send Us a Message Section */}
      <MainSection id="send-message" className="bg-card mb-4 md:mb-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
          <p className="text-muted-foreground">
            Have a question or suggestion? We&apos;d love to hear from you.
          </p>
        </div>
        <div className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Whether you&apos;re a student interested in joining, a company
              looking to partner, or just have general questions, we&apos;re
              here to help.
            </p>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <EnvelopeIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">
                      contact@ieeetamu.org
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPinIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">
                      Wisenbaker Engineering Building
                      <br />
                      Room 206
                      <br />
                      College Station, TX 77843
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <InboxStackIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Mailing (letters)</h4>
                    <p className="text-muted-foreground">
                      Attn: IEEE TAMU
                      <br />
                      Texas A&M University
                      <br />
                      3128 TAMU
                      <br />
                      College Station, TX 77843-3128
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <TruckIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Mailing (packages)</h4>
                    <p className="text-muted-foreground">
                      Attn: IEEE TAMU
                      <br />
                      Texas A&M University
                      <br />
                      188 Bizzell St
                      <br />
                      WEB 076
                      <br />
                      College Station, TX 77843
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={EXTERNAL_LINKS.LINKEDIN}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={EXTERNAL_LINKS.INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={EXTERNAL_LINKS.DISCORD}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Discord
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </MainSection>
    </div>
  );
}
