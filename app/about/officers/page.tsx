import { OfficerCard } from '@/components/officer-card';
import { PageHero } from '@/components/page-hero';
import { MainSection } from '@/components/sections';

import { Branches } from '@/lib/branches';
import { CONTACT_EMAILS } from '@/lib/constants';

const Officers = Object.fromEntries(
  Object.entries(Branches).map(([key, branch]) => [key, branch.officers])
);

export default function OfficersPage() {
  const sectionTitles: Record<string, string> = {
    'e-board': 'Executive Board',
    tec: 'Technical Committee',
  };

  const titleize = (key: string) =>
    key.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div>
      <MainSection>
        <PageHero
          title="Our Officers"
          subtitle="Meet the dedicated team leading IEEE TAMU and driving our mission forward."
        />

        <div className="max-w-6xl mx-auto">
          {Object.entries(Officers).map(([key, officers]) => (
            <div className="mb-12" key={key}>
              <h2 className="text-2xl font-bold mb-6">
                {sectionTitles[key] ?? titleize(key)}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {officers.map((officer) => (
                  <OfficerCard
                    key={`${officer.name}-${officer.position}`}
                    officer={officer}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Our Officers</h2>
            <p className="text-muted-foreground mb-4">
              Want to get involved or have questions about IEEE TAMU? Reach out
              to our officers!
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">General Inquiries</h3>
                <p className="text-sm text-muted-foreground">
                  Email: {CONTACT_EMAILS.general}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Officer Applications</h3>
                <p className="text-sm text-muted-foreground">
                  Check our membership page for upcoming opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainSection>
    </div>
  );
}
