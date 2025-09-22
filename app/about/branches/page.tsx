import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MainSection } from '@/components/sections';
import { Branches } from '@/lib/branches';

export default function BranchesPage() {
  const entries = Object.entries(Branches)
    .map(([slug, branch]) => ({
      slug,
      name: branch.name,
      description: branch.description,
    }))
    .filter((branch) => branch.slug !== 'undersecretary'); // exclude undersecretary branch

  return (
    <MainSection className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Branches</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          IEEE TAMU is organized into specialized branches, each focusing on
          different aspects of our mission to advance technology and serve our
          community.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((branch) => (
            <Card key={branch.slug} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl flex flex-row items-end justify-start gap-4">
                  <div
                    className={`h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center`}
                  >
                    {/* Placeholder for branch icon */}
                  </div>
                  {branch.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">
                  {branch.description}
                </p>
                <Button asChild className="w-full mt-auto">
                  <Link href={`/about/branches/${branch.slug}`}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="bg-card p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">How Branches Work</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Specialized Focus</h3>
                  <p className="text-muted-foreground text-sm">
                    Each branch has a specific area of expertise and
                    responsibility, allowing us to provide comprehensive
                    services to our members and the broader community.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">
                    Collaborative Environment
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    While branches operate somewhat independently, they work
                    together to achieve IEEE TAMU&apos;s overall mission and
                    support each other&apos;s initiatives.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">
                    Leadership Opportunities
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Branch leadership positions provide valuable experience in
                    project management, team coordination, and professional
                    development.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Member Involvement</h3>
                  <p className="text-muted-foreground text-sm">
                    Members can join multiple branches based on their interests
                    and contribute to various initiatives throughout the year.
                  </p>
                </div>
              </div>
            </div> */}
      </div>
    </MainSection>
  );
}
