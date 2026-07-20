import {
  CalendarDaysIcon,
  CameraIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  InboxStackIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { CommunityCard } from '@/components/community-card';
import { ContactForm } from '@/components/contact-form';
import { ContactInfoRow } from '@/components/contact-info-row';
import { PageHero } from '@/components/page-hero';
import { MainSection } from '@/components/sections';
import { Button } from '@/components/ui/button';

import { CONTACT_EMAILS } from '@/lib/constants';
import { EXTERNAL_LINKS } from '@/lib/external-links';

export default function ConnectPage() {
  return (
    <div>
      <MainSection>
        <PageHero
          title="Join Our Community"
          subtitle="Connect with fellow engineers, stay updated on events, and be part of our growing community."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CommunityCard
            icon={
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-accent-foreground" />
            }
            title="Discord Community"
            description="Join our active Discord server for real-time discussions, study groups, project collaboration, and community support."
            tone="accent"
            cta={
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
            }
          />
          <CommunityCard
            icon={
              <CalendarDaysIcon className="h-8 w-8 text-accent-foreground" />
            }
            title="Calendar"
            description="Subscribe to our Google Calendar to never miss an event. Get automatic notifications for workshops, meetings, and socials."
            tone="accent"
            cta={
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
            }
          />
          <CommunityCard
            icon={<CameraIcon className="h-8 w-8 text-accent-foreground" />}
            title="Instagram"
            description="Follow us for behind-the-scenes content, event highlights, member spotlights, and IEEE TAMU updates."
            tone="accent"
            cta={
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
            }
          />
        </div>
      </MainSection>

      <MainSection id="send-message" tone="card">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
          <p className="text-muted-foreground">
            Have a question or suggestion? We&apos;d love to hear from you.
          </p>
        </div>
        <div className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Whether you&apos;re a student interested in joining, a company
              looking to partner, or just have general questions, we&apos;re
              here to help.
            </p>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <ContactInfoRow icon={<EnvelopeIcon />} title="Email">
                  {CONTACT_EMAILS.general}
                </ContactInfoRow>
                <ContactInfoRow icon={<MapPinIcon />} title="Location">
                  Wisenbaker Engineering Building
                  <br />
                  Room 206
                  <br />
                  College Station, TX 77843
                </ContactInfoRow>
                <ContactInfoRow icon={<InboxStackIcon />} title="Mailing">
                  Attn: IEEE TAMU
                  <br />
                  Texas A&M University
                  <br />
                  3128 TAMU
                  <br />
                  College Station, TX 77843-3128
                </ContactInfoRow>
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

          <div>
            <ContactForm />
          </div>
        </div>
      </MainSection>
    </div>
  );
}
