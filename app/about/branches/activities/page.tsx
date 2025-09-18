import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BranchOpener, BranchOfficersCard } from '@/components/branches';
import { Branches } from '@/lib/branches';
import { MainSection } from '@/components/main-section';

export default function ActivitiesPage() {
  const branch = Branches['activities'];
  return (
    <div className="min-h-screen bg-background">
      <MainSection>
        <BranchOpener branch={branch} />

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                About Activities Branch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The Activities Branch is the heart of IEEE TAMU&apos;s community
                engagement. We plan and execute events that bring our members
                together, foster relationships, and create memorable experiences
                that strengthen our organization.
              </p>
              <p className="text-muted-foreground">
                From social gatherings to community service projects, we work to
                create a vibrant and inclusive environment where every member
                feels connected and valued.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Event Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Social Events</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Welcome events for new members</li>
                    <li>• Holiday celebrations</li>
                    <li>• Game nights and recreational activities</li>
                    <li>• Team-building outings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Community Service</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Local charity partnerships</li>
                    <li>• STEM outreach programs</li>
                    <li>• Environmental initiatives</li>
                    <li>• Volunteer coordination</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">
                    Professional Development
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Resume workshops</li>
                    <li>• Interview preparation</li>
                    <li>• Networking events</li>
                    <li>• Leadership training</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Member Engagement</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Interest group meetings</li>
                    <li>• Committee activities</li>
                    <li>• Member appreciation events</li>
                    <li>• Feedback and survey initiatives</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Planning Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Idea Generation</h4>
                    <p className="text-sm text-muted-foreground">
                      Brainstorm event ideas based on member feedback and
                      organizational goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Planning & Logistics</h4>
                    <p className="text-sm text-muted-foreground">
                      Develop detailed plans, secure resources, and coordinate
                      with stakeholders
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Promotion & Execution</h4>
                    <p className="text-sm text-muted-foreground">
                      Market the event and ensure smooth execution on the day of
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Follow-up & Evaluation</h4>
                    <p className="text-sm text-muted-foreground">
                      Gather feedback and assess the event&apos;s success for
                      continuous improvement
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <BranchOfficersCard branch={branch} />
        </div>
      </MainSection>
    </div>
  );
}
