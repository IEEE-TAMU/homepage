import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BranchOpener, BranchOfficersCard } from '@/components/branches';
import { Branches } from '@/lib/branches';

export default function PublicRelationsPage() {
  const branch = Branches['public-relations'];
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BranchOpener branch={branch} />

          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  About Public Relations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The Public Relations (PR) Branch shapes how IEEE TAMU
                  communicates with students, partners, and the community. We
                  manage the organization’s brand, craft compelling messages,
                  and ensure consistent, accessible information across channels.
                </p>
                <p className="text-muted-foreground">
                  From social media and newsletters to graphics and event
                  promotion, PR amplifies the impact of every branch and keeps
                  our members informed and engaged.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">What We Do</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Communications</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Newsletter planning and writing</li>
                      <li>• Email announcements and updates</li>
                      <li>• Cross-branch coordination for messaging</li>
                      <li>• Media relations and outreach</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Marketing & Branding</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Visual design and graphics</li>
                      <li>• Brand guidelines and templates</li>
                      <li>• Event promotional campaigns</li>
                      <li>• Photography and videography support</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Social Media</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Content calendars and scheduling</li>
                      <li>• Platform analytics and insights</li>
                      <li>• Community engagement</li>
                      <li>• Recaps and highlights</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Web & Content</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Website content updates</li>
                      <li>• Copywriting and proofreading</li>
                      <li>• Asset management</li>
                      <li>• Accessibility and clarity</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">How We Work</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Intake & Planning</h4>
                      <p className="text-sm text-muted-foreground">
                        Align on goals, target audience, channels, and timelines
                        with relevant branches.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Create & Review</h4>
                      <p className="text-sm text-muted-foreground">
                        Draft content, design assets, and iterate quickly with
                        feedback.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Publish & Measure</h4>
                      <p className="text-sm text-muted-foreground">
                        Launch across channels and track performance to improve
                        future efforts.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <BranchOfficersCard branch={branch} />
          </div>
        </div>
      </section>
    </div>
  );
}
