import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OfficersPage() {
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
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Executive Board</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      {/* Placeholder for officer photo */}
                    </div>
                    <CardTitle className="text-lg">President</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-2">[Officer Name]</p>
                    <p className="text-sm text-muted-foreground">
                      Leads the overall direction and vision of IEEE TAMU
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      {/* Placeholder for officer photo */}
                    </div>
                    <CardTitle className="text-lg">Vice President</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-2">[Officer Name]</p>
                    <p className="text-sm text-muted-foreground">
                      Supports the president and oversees operations
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      {/* Placeholder for officer photo */}
                    </div>
                    <CardTitle className="text-lg">Secretary</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-2">[Officer Name]</p>
                    <p className="text-sm text-muted-foreground">
                      Manages communications and documentation
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      {/* Placeholder for officer photo */}
                    </div>
                    <CardTitle className="text-lg">Treasurer</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-2">[Officer Name]</p>
                    <p className="text-sm text-muted-foreground">
                      Manages finances and sponsorships
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      {/* Placeholder for officer photo */}
                    </div>
                    <CardTitle className="text-lg">Webmaster</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-2">[Officer Name]</p>
                    <p className="text-sm text-muted-foreground">
                      Maintains our website and digital presence
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      {/* Placeholder for officer photo */}
                    </div>
                    <CardTitle className="text-lg">Social Chair</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-2">[Officer Name]</p>
                    <p className="text-sm text-muted-foreground">
                      Organizes social events and community building
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

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
