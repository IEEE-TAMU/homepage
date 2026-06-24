import { MainSection } from '@/components/sections';
import { PageHero } from '@/components/page-hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HistoryPage() {
  return (
    <div>
      <MainSection>
        <PageHero
          title="Our History"
          subtitle="The story of IEEE TAMU and our journey in advancing technology for humanity."
        />

        <div className="max-w-4xl mx-auto space-y-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Foundation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                IEEE TAMU began in 1909 as the student branch of the American
                Institute of Electrical Engineers at Texas A&M College.
              </p>
              <p className="text-muted-foreground mb-4">
                In 1948, it became a joint student branch at Texas A&M College for
                the Institute of Radio Engineers and American Institute of
                Electrical Engineers.
              </p>
              <p className="text-muted-foreground">
                Finally, in 1963, it evolved into the Institute of Electrical and
                Electronics Engineers (IEEE) at Texas A&M University, continuing
                our mission of bringing together engineering students passionate
                about technology and professional development.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Growth and Expansion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Over the years, IEEE TAMU has grown from a small group of
                dedicated students to one of the largest and most active IEEE
                student branches in the region.
              </p>
              <p className="text-muted-foreground">
                We&apos;ve expanded our activities to include technical workshops,
                networking events, community service projects, and partnerships
                with industry leaders.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                IEEE TAMU has been recognized for excellence in various areas
                including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Outstanding Student Branch Awards</li>
                <li>Successful technical conferences and workshops</li>
                <li>Industry partnerships and sponsorships</li>
                <li>Student leadership development programs</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Looking Forward</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                As we continue to grow and evolve, IEEE TAMU remains committed to
                our mission of advancing technology for humanity through
                professional development, community engagement, and innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </MainSection>
    </div>
  );
}
