import { MainSection } from '@/components/sections';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <MainSection>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our History</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The story of IEEE TAMU and our journey in advancing technology for
            humanity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Foundation</h2>
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
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Growth and Expansion</h2>
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
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Achievements</h2>
            <p className="text-muted-foreground mb-4">
              IEEE TAMU has been recognized for excellence in various areas
              including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Outstanding Student Branch Awards</li>
              <li>Successful technical conferences and workshops</li>
              {/* <li>Community service initiatives</li> */}
              <li>Industry partnerships and sponsorships</li>
              <li>Student leadership development programs</li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Looking Forward</h2>
            <p className="text-muted-foreground">
              As we continue to grow and evolve, IEEE TAMU remains committed to
              our mission of advancing technology for humanity through
              professional development, community engagement, and innovation.
            </p>
          </div>
        </div>
      </MainSection>
    </div>
  );
}
