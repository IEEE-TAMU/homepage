import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function BranchesPage() {
  const branches = [
    {
      name: 'E-Board',
      description:
        'Executive leadership and strategic planning for IEEE TAMU operations.',
      href: '/about/branches/e-board',
      color: 'bg-primary/10',
    },
    {
      name: 'Corporate',
      description:
        'Industry partnerships, sponsorships, and professional networking opportunities.',
      href: '/about/branches/corporate',
      color: 'bg-secondary/10',
    },
    {
      name: 'Activities',
      description:
        'Event planning, community outreach, and member engagement initiatives.',
      href: '/about/branches/activities',
      color: 'bg-accent/10',
    },
    {
      name: 'Events',
      description:
        'Technical workshops, conferences, and educational programming.',
      href: '/about/branches/events',
      color: 'bg-primary/10',
    },
    {
      name: 'TEC (Technical Education Committee)',
      description:
        'Educational resources, tutoring programs, and technical skill development.',
      href: '/about/branches/tec',
      color: 'bg-secondary/10',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Branches</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              IEEE TAMU is organized into specialized branches, each focusing on
              different aspects of our mission to advance technology and serve
              our community.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {branches.map((branch) => (
                <Card key={branch.name} className="h-full">
                  <CardHeader>
                    <div
                      className={`h-16 w-16 rounded-full ${branch.color} flex items-center justify-center mb-4`}
                    >
                      {/* Placeholder for branch icon */}
                    </div>
                    <CardTitle className="text-xl">{branch.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-6 flex-1">
                      {branch.description}
                    </p>
                    <Button asChild className="w-full mt-auto">
                      <Link href={branch.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-card p-8 rounded-lg">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
