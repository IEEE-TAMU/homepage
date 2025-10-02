import Link from 'next/link';

import { BranchOfficersCard, BranchOpener } from '@/components/branches';
import { MainSection } from '@/components/sections';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Branches } from '@/lib/branches';
import {
  type SponsorTier,
  TIER_ORDER,
  getSponsorsByTier,
} from '@/lib/sponsors';

export default function CorporatePage() {
  const branch = Branches['corporate'];
  return (
    <div className="min-h-screen bg-background">
      <MainSection>
        <BranchOpener branch={branch} />

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">About Corporate Branch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The Corporate Branch serves as the bridge between IEEE TAMU and
                the professional world. We focus on building meaningful
                relationships with industry partners, securing sponsorships, and
                creating networking opportunities for our members.
              </p>
              <p className="text-muted-foreground">
                Our team works year-round to connect students with internships,
                job opportunities, and industry professionals while bringing in
                resources that support IEEE TAMU&apos;s mission.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Key Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Sponsorship Program</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Corporate partnership development</li>
                    <li>• Sponsorship package creation</li>
                    <li>• Event sponsorship coordination</li>
                    <li>• Partnership maintenance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Networking Events</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Industry speaker series</li>
                    <li>• Career fairs and mixers</li>
                    <li>• Professional development workshops</li>
                    <li>• Alumni networking events</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Career Services</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Resume and interview workshops</li>
                    <li>• Internship and job postings</li>
                    <li>• Career counseling</li>
                    <li>• Professional mentorship program</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Industry Relations</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Company site visits</li>
                    <li>• Technical tours</li>
                    <li>• Guest lectures</li>
                    <li>• Collaborative projects</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Current Corporate Partners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {TIER_ORDER.map((tier) => {
                  const sponsors = getSponsorsByTier(tier as SponsorTier);
                  if (sponsors.length === 0) return null;
                  return (
                    <div
                      key={tier}
                      className="text-center p-4 bg-secondary/5 rounded-lg"
                    >
                      <h4 className="font-semibold mb-3">{tier} Sponsors</h4>
                      <div className="space-y-2">
                        {sponsors.map((sponsor) => (
                          <Link
                            key={sponsor.name}
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {sponsor.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <BranchOfficersCard branch={branch} />
        </div>
      </MainSection>
    </div>
  );
}
