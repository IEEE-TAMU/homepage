import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EBoardPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">E-Board Branch</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Executive leadership and strategic planning for IEEE TAMU
              operations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">About E-Board</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The E-Board (Executive Board) is the leadership core of IEEE
                  TAMU, responsible for strategic planning, organizational
                  governance, and ensuring the successful execution of our
                  mission.
                </p>
                <p className="text-muted-foreground">
                  Composed of elected officers and committee chairs, the E-Board
                  works collaboratively to guide IEEE TAMU&apos;s direction and
                  maintain our commitment to excellence in all our endeavors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Strategic Planning</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Long-term vision development</li>
                      <li>• Annual goal setting</li>
                      <li>• Resource allocation</li>
                      <li>• Risk management</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Operations</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Budget management</li>
                      <li>• Policy development</li>
                      <li>• Committee oversight</li>
                      <li>• IEEE compliance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Leadership</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Team coordination</li>
                      <li>• Member development</li>
                      <li>• External relations</li>
                      <li>• Succession planning</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Communication</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Internal updates</li>
                      <li>• Stakeholder engagement</li>
                      <li>• Crisis management</li>
                      <li>• Annual reporting</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Current E-Board Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold">President</h4>
                    <p className="text-sm text-muted-foreground">[Name]</p>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold">Vice President</h4>
                    <p className="text-sm text-muted-foreground">[Name]</p>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold">Secretary</h4>
                    <p className="text-sm text-muted-foreground">[Name]</p>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold">Treasurer</h4>
                    <p className="text-sm text-muted-foreground">[Name]</p>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold">Webmaster</h4>
                    <p className="text-sm text-muted-foreground">[Name]</p>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold">Social Chair</h4>
                    <p className="text-sm text-muted-foreground">[Name]</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get Involved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Interested in joining the E-Board? We hold elections annually
                  and welcome applications from dedicated members who want to
                  contribute to IEEE TAMU&apos;s leadership.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Next Steps</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Attend general meetings regularly</li>
                    <li>• Volunteer for committees and events</li>
                    <li>• Express interest in leadership positions</li>
                    <li>• Participate in officer transition process</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
