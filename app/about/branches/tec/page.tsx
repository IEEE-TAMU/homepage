import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TecPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Technical Education Committee (TEC)
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Educational resources, tutoring programs, and technical skill
              development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">About TEC</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The Technical Education Committee (TEC) is dedicated to
                  enhancing the academic success and technical proficiency of
                  IEEE TAMU members. We provide educational support, tutoring
                  services, and skill-building opportunities that complement the
                  formal engineering curriculum.
                </p>
                <p className="text-muted-foreground">
                  Our committee bridges the gap between classroom learning and
                  practical application, helping students develop the technical
                  skills they need for their future careers in engineering and
                  technology.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Tutoring Services</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• One-on-one tutoring sessions</li>
                      <li>• Group study sessions</li>
                      <li>• Course-specific help</li>
                      <li>• Exam preparation support</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Skill Development</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Programming workshops</li>
                      <li>• Software tool training</li>
                      <li>• Technical certification prep</li>
                      <li>• Industry skill building</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Resource Center</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Textbook and material loans</li>
                      <li>• Online learning resources</li>
                      <li>• Study guide collections</li>
                      <li>• Equipment access</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Academic Support</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Study group coordination</li>
                      <li>• Academic advising</li>
                      <li>• Career guidance</li>
                      <li>• Research opportunities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Subject Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-secondary/5 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Electrical Engineering
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Circuit analysis</li>
                      <li>• Power systems</li>
                      <li>• Electronics</li>
                      <li>• Control systems</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary/5 rounded-lg">
                    <h4 className="font-semibold mb-2">Computer Engineering</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Digital design</li>
                      <li>• Computer architecture</li>
                      <li>• Embedded systems</li>
                      <li>• Microprocessors</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary/5 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Software & Programming
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Programming languages</li>
                      <li>• Algorithms & data structures</li>
                      <li>• Software engineering</li>
                      <li>• Web development</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Success Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-muted-foreground italic">
                      &quot;TEC helped me master circuit analysis concepts that
                      I was struggling with. The tutoring sessions were
                      incredibly helpful and boosted my GPA significantly.&quot;
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      - Electrical Engineering Student
                    </p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="text-sm text-muted-foreground italic">
                      &quot;The programming workshops gave me the skills I
                      needed to land my first internship. I learned practical
                      tools that aren&apos;t covered in regular classes.&quot;
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      - Computer Science Student
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">How to Get Involved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">
                      For Students Seeking Help
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Check our tutoring schedule</li>
                      <li>• Join study groups</li>
                      <li>• Attend workshops</li>
                      <li>• Access online resources</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">
                      For Tutors and Mentors
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Apply to become a tutor</li>
                      <li>• Lead study sessions</li>
                      <li>• Develop educational content</li>
                      <li>• Share your expertise</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 bg-secondary/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Contact TEC</h4>
                  <p className="text-sm text-muted-foreground">
                    Email: tec@ieeetamu.org | Visit our office hours for
                    immediate assistance
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
