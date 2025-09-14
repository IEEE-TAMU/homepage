import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Branches, officerId } from '@/lib/branches';
import type { Officer } from '@/lib/branches';

const Officers = Object.fromEntries(
  Object.entries(Branches).map(([key, branch]) => [key, branch.officers])
);

function OfficerCard({ officer }: { officer: Officer }) {
  return (
    <Card id={officerId(officer)} className="scroll-mt-36">
      <CardHeader className="text-center">
        {officer.photo ? (
          <Image
            width={96}
            height={96}
            src={officer.photo}
            alt={officer.name}
            className="h-24 w-24 rounded-full object-cover mx-auto mb-4"
          />
        ) : (
          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-semibold">
              {officer.name?.[0] ?? '?'}
            </span>
          </div>
        )}
        <CardTitle className="text-lg">{officer.position}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground mb-2">{officer.name}</p>
        {officer.description && (
          <p className="text-sm text-muted-foreground">{officer.description}</p>
        )}
      </CardContent>
    </Card>
  );
}

export default function OfficersPage() {
  const sectionTitles: Record<string, string> = {
    'e-board': 'Executive Board',
  };

  const titleize = (key: string) =>
    key.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Officers</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated team leading IEEE TAMU and driving our mission
              forward.
            </p>
          </div>

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
                Want to get involved or have questions about IEEE TAMU? Reach
                out to our officers!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">General Inquiries</h3>
                  <p className="text-sm text-muted-foreground">
                    Email: president@ieeetamu.org
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
        </div>
      </section>
    </div>
  );
}
