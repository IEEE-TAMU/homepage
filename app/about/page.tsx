import {
  AcademicCapIcon,
  GlobeAltIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

import { FeatureCard } from '@/components/feature-card';
import { FeatureRow } from '@/components/feature-row';
import { GradientPanel } from '@/components/gradient-panel';
import { PageHero } from '@/components/page-hero';
import { SectionHeader } from '@/components/section-header';
import { MainSection } from '@/components/sections';

import { SITE_STATS } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title={
          <>
            About IEEE <span className="text-primary">TAMU</span>
          </>
        }
        subtitle={
          <>
            We are the{' '}
            <span className="text-primary">Texas A&M University</span> student
            branch of IEEE, fostering professional development, technical
            excellence, and community engagement among engineers.
          </>
        }
      />

      <MainSection tone="card">
        <SectionHeader
          title="What We Do"
          description="We foster professional development, technical excellence, and community engagement through diverse programs and initiatives."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Technical Workshops"
            description="Hands-on learning sessions covering cutting-edge technologies and industry best practices."
            titleSize="sm"
          />
          <FeatureCard
            title="Networking Events"
            description="Connect with industry professionals, alumni, and fellow students in your field."
            titleSize="sm"
          />
          <FeatureCard
            title="Competitions"
            description="Participate in hackathons, design challenges, and technical competitions."
            titleSize="sm"
          />
          <FeatureCard
            title="Community Service"
            description="Give back through STEM outreach programs and community technology initiatives."
            titleSize="sm"
          />
        </div>
      </MainSection>

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
              <FeatureRow
                icon={<AcademicCapIcon />}
                title="Educational Excellence"
                description="Supplementing academic learning with practical workshops and industry insights."
              />
              <FeatureRow
                icon={<UsersIcon />}
                title="Professional Growth"
                description="Building connections and skills that last throughout your engineering career."
              />
              <FeatureRow
                icon={<GlobeAltIcon />}
                title="Community Impact"
                description="Using technology and engineering knowledge to benefit our local and global communities."
              />
            </div>
          </div>
          <GradientPanel title="By the Numbers">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: SITE_STATS.activeMembers, label: 'Active Members' },
                { value: SITE_STATS.eventsPerYear, label: 'Events Per Year' },
                { value: SITE_STATS.yearsActive, label: 'Years Active' },
              ].map(({ value, label }) => (
                <div className="text-center" key={label}>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </GradientPanel>
        </div>
      </MainSection>
    </div>
  );
}
