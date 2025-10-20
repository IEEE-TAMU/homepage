import { BranchOfficersCard, BranchOpener } from '@/components/branches';
import { MainSection } from '@/components/sections';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Branches } from '@/lib/branches';

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
                {[
                  {
                    number: 1,
                    title: "Idea Generation",
                    description: "Brainstorm event ideas based on member feedback and organizational goals"
                  },
                  {
                    number: 2,
                    title: "Planning & Logistics",
                    description: "Develop detailed plans, secure resources, and coordinate with stakeholders"
                  },
                  {
                    number: 3,
                    title: "Promotion & Execution",
                    description: "Market the event and ensure smooth execution on the day of"
                  },
                  {
                    number: 4,
                    title: "Follow-up & Evaluation",
                    description: "Gather feedback and assess the event's success for continuous improvement"
                  }
                ].map((step) => (
                  <div key={step.number} className="flex items-start space-x-4">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold">{step.number}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <BranchOfficersCard branch={branch} />
        </div>
      </MainSection>
    </div>
  );
}
