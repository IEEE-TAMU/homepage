import Image from 'next/image';
import Link from 'next/link';
import type { SVGProps } from 'react';

import { MainSection } from '@/components/sections';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Branches, officerId } from '@/lib/branches';
import type { Officer } from '@/lib/branches';

const Officers = Object.fromEntries(
  Object.entries(Branches).map(([key, branch]) => [key, branch.officers])
);

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 382 382"
    role="img"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      fill="#0077B7"
      d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
    />
  </svg>
);

function OfficerCard({ officer }: { officer: Officer }) {
  return (
    <Card id={officerId(officer)} className="scroll-mt-36 relative">
      {officer.linkedin && (
        <Link
          href={`https://www.linkedin.com/in/${officer.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <LinkedInIcon className="h-4 w-4" />
          <span className="sr-only">View LinkedIn profile</span>
        </Link>
      )}
      <CardHeader className="text-center">
        {officer.photoUrl ? (
          <Image
            width={96}
            height={96}
            src={officer.photoUrl}
            alt={officer.name}
            className="h-24 w-24 rounded-full object-cover mx-auto mb-4"
          />
        ) : (
          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-semibold">
              {officer.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()}
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
    tec: 'Technical Education Committee',
  };

  const titleize = (key: string) =>
    key.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="min-h-screen bg-background">
      <MainSection>
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
              Want to get involved or have questions about IEEE TAMU? Reach out
              to our officers!
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">General Inquiries</h3>
                <p className="text-sm text-muted-foreground">
                  Email: contact@ieeetamu.org
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
