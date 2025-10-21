import { BranchOfficersCard, BranchOpener } from '@/components/branches';
import { MainSection } from '@/components/sections';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Branches } from '@/lib/branches';

export default function EventsPage() {
  const branch = Branches['events'];
  return (
    <div className="min-h-screen bg-background">
      <MainSection>
        <BranchOpener branch={branch} />

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">About Events Branch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The Events Branch is dedicated to creating high-quality
                technical and educational experiences for IEEE TAMU members. We
                organize workshops, seminars, conferences, and other learning
                opportunities that help our members develop their technical
                skills and stay current with industry trends.
              </p>
              <p className="text-muted-foreground">
                Our team works closely with industry experts, faculty, and guest
                speakers to bring valuable content and hands-on learning
                experiences to our community.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Event Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Technical Workshops</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Programming and software development</li>
                    <li>• Hardware design and prototyping</li>
                    <li>• Data science and machine learning</li>
                    <li>• Cybersecurity fundamentals</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">
                    Professional Development
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Industry speaker series</li>
                    <li>• Career panels and discussions</li>
                    <li>• Resume and interview workshops</li>
                    <li>• Graduate school preparation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">
                    Conferences & Competitions
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Annual technical conferences</li>
                    <li>• Hackathons and coding competitions</li>
                    <li>• Design challenges</li>
                    <li>• Research presentation opportunities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">
                    Study Groups & Tutorials
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Course-specific study sessions</li>
                    <li>• Certification preparation</li>
                    <li>• Tool and software tutorials</li>
                    <li>• Peer mentoring programs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Signature Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Annual Technical Conference</h4>
                  <p className="text-sm text-muted-foreground">
                    Our flagship event featuring keynote speakers, technical
                    sessions, and networking opportunities with industry
                    professionals.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold">Spring Workshop Series</h4>
                  <p className="text-sm text-muted-foreground">
                    A series of hands-on workshops covering emerging
                    technologies and practical skills for engineering students.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold">Industry Networking Night</h4>
                  <p className="text-sm text-muted-foreground">
                    An evening event connecting students with alumni and
                    industry representatives for career development and
                    mentorship.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Event Planning Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Research & Planning</h4>
                  <p className="text-sm text-muted-foreground">
                    Identify topics, speakers, and logistics
                  </p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Coordination</h4>
                  <p className="text-sm text-muted-foreground">
                    Secure venues, materials, and partnerships
                  </p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Execution & Follow-up</h4>
                  <p className="text-sm text-muted-foreground">
                    Run the event and gather feedback for improvement
                  </p>
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
