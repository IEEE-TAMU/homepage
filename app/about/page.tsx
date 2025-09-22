import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MainSection } from '@/components/main-section';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-10 lg:pt-16">
        <MainSection>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              About IEEE <span className="text-primary">TAMU</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              We are the{' '}
              <span className="text-primary">Texas A&M University</span> student
              branch of IEEE, fostering professional development, technical
              excellence, and community engagement among engineers.
            </p>
          </div>
        </MainSection>
      </section>

      {/* What We Do Section */}
      <section className="bg-card">
        <MainSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We foster professional development, technical excellence, and
              community engagement through diverse programs and initiatives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                {/* <Network className="h-12 w-12 text-primary mx-auto mb-4" /> */}
                <CardTitle className="text-lg">Technical Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hands-on learning sessions covering cutting-edge technologies
                  and industry best practices.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                {/* <Users className="h-12 w-12 text-primary mx-auto mb-4" /> */}
                <CardTitle className="text-lg">Networking Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect with industry professionals, alumni, and fellow
                  students in your field.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                {/* <Trophy className="h-12 w-12 text-primary mx-auto mb-4" /> */}
                <CardTitle className="text-lg">Competitions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Participate in hackathons, design challenges, and technical
                  competitions.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                {/* <Handshake className="h-12 w-12 text-primary mx-auto mb-4" /> */}
                <CardTitle className="text-lg">Community Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Give back through STEM outreach programs and community
                  technology initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </MainSection>
      </section>

      {/* Mission & Vision */}
      <MainSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              To advance technology for humanity by providing opportunities for
              professional development, technical education, and community
              engagement for engineering students at{' '}
              <span className="text-primary">Texas A&M University</span>.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {/* <BookOpen className="h-4 w-4 text-primary" /> */}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Educational Excellence</h3>
                  <p className="text-muted-foreground text-sm">
                    Supplementing academic learning with practical workshops and
                    industry insights.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {/* <Network className="h-4 w-4 text-primary" /> */}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Professional Growth</h3>
                  <p className="text-muted-foreground text-sm">
                    Building connections and skills that last throughout your
                    engineering career.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {/* <Target className="h-4 w-4 text-primary" /> */}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Community Impact</h3>
                  <p className="text-muted-foreground text-sm">
                    Using technology and engineering knowledge to benefit our
                    local and global communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">By the Numbers</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '500+', label: 'Active Members' },
                { value: '50+', label: 'Events Per Year' },
                // { value: '20+', label: 'Industry Partners' }, // replace with something else
                { value: '115+', label: 'Years Active' },
              ].map(({ value, label }) => (
                <div className="text-center" key={label}>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MainSection>
    </div>
  );
}
