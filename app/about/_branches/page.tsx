import Link from 'next/link';

import { MainSection } from '@/components/sections';
import { PageHero } from '@/components/page-hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Branches } from '@/lib/branches';

export default function BranchesPage() {
  const entries = Object.entries(Branches)
    .map(([slug, branch]) => ({
      slug,
      name: branch.name,
      description: branch.description,
    }))
    .filter((branch) => branch.slug !== 'undersecretary');

  return (
    <div>
      <MainSection>
        <PageHero
          title="Our Branches"
          subtitle="IEEE TAMU is organized into specialized branches, each focusing on different aspects of our mission to advance technology and serve our community."
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entries.map((branch) => (
              <Card key={branch.slug} className="h-full flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="text-xl min-h-[4rem] flex items-start">
                    {branch.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6">
                    {branch.description}
                  </p>
                  <Button asChild className="w-full mt-auto">
                    <Link href={`/about/_branches/${branch.slug}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </MainSection>
    </div>
  );
}
