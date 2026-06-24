import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { BorderedQuote } from '@/components/bordered-quote';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StepList } from '@/components/step-list';

import { officerId } from '@/lib/branches';
import type { Branch } from '@/lib/branches';
import type {
  BranchContent,
  CategoryBlock,
  QuoteBlock,
  SignatureBlock,
} from '@/lib/branch-content';
import {
  type SponsorTier,
  TIER_ORDER,
  getSponsorsByTier,
} from '@/lib/sponsors';

export const BranchOpener = ({ branch }: { branch: Branch }) => {
  return (
    <div className="mb-12 max-w-4xl mx-auto">
      <div className="flex items-start justify-between mb-4">
        <Link
          href="/about/_branches"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
        >
          <ArrowLeftIcon className="size-4" />
          <span>Back to branches</span>
        </Link>
        <h1 className="text-4xl font-bold flex-1 text-center">{branch.name}</h1>
        <div className="w-[140px]" aria-hidden="true"></div>
      </div>
      <div className="text-center">
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {branch.description}
        </p>
      </div>
    </div>
  );
};

const BranchOfficersList = ({
  branch,
  title = 'Current Officers',
}: {
  branch: Branch;
  title?: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {branch.officers.map((officer) => {
            const id = officerId(officer);
            return (
              <div key={id} className="text-center  bg-primary/5 rounded-lg">
                <Link href={`/about/officers#${id}`} className="block p-4">
                  <h4 className="font-semibold">{officer.position}</h4>
                  <p className="text-sm text-muted-foreground cursor-pointer">
                    {officer.name}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

const CategoryCard = ({ block }: { block: CategoryBlock }) => (
  <div>
    <h3 className="font-semibold mb-3">{block.title}</h3>
    <ul className="text-sm text-muted-foreground space-y-1">
      {block.items.map((item) => (
        <li key={item}>• {item}</li>
      ))}
    </ul>
  </div>
);

const SubjectAreaCard = ({ block }: { block: CategoryBlock }) => (
  <div className="p-4 bg-secondary/5 rounded-lg">
    <h4 className="font-semibold mb-2">{block.title}</h4>
    <ul className="text-sm text-muted-foreground space-y-1">
      {block.items.map((item) => (
        <li key={item}>• {item}</li>
      ))}
    </ul>
  </div>
);

const SignatureCard = ({ block }: { block: SignatureBlock }) => (
  <BorderedQuote tone={block.tone}>
    <h4 className="font-semibold">{block.title}</h4>
    <p className="text-sm text-muted-foreground">{block.description}</p>
  </BorderedQuote>
);

const QuoteCard = ({ block }: { block: QuoteBlock }) => (
  <BorderedQuote tone={block.tone}>
    <p className="text-sm text-muted-foreground italic">
      &ldquo;{block.text}&rdquo;
    </p>
    <p className="text-xs text-muted-foreground mt-2">- {block.attribution}</p>
  </BorderedQuote>
);

export function BranchPage({
  branch,
  content,
}: {
  branch: Branch;
  content: BranchContent;
}) {
  return (
    <div>
      <BranchOpener branch={branch} />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* About card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{content.about.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {content.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={i < content.about.paragraphs.length - 1 ? 'text-muted-foreground mb-4' : 'text-muted-foreground'}
              >
                {p}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Categories card (2x2 grid) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{content.categories.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {content.categories.blocks.map((block) => (
                <CategoryCard key={block.title} block={block} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subject areas (TEC only) */}
        {content.subjectAreas ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                {content.subjectAreas.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {content.subjectAreas.blocks.map((block) => (
                  <SubjectAreaCard key={block.title} block={block} />
                ))}
              </div>
            </CardContent>
          </Card>
        ) : null}

        {/* Quotes (TEC only) */}
        {content.quotes ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{content.quotes.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {content.quotes.items.map((q, i) => (
                  <QuoteCard key={i} block={q} />
                ))}
              </div>
            </CardContent>
          </Card>
        ) : null}

        {/* Signature events (events branch only) */}
        {content.signature ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{content.signature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {content.signature.items.map((s) => (
                  <SignatureCard key={s.title} block={s} />
                ))}
              </div>
            </CardContent>
          </Card>
        ) : null}

        {/* Process / steps (varies per branch) */}
        {content.process ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{content.process.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <StepList
                steps={content.process.steps.map((s, i) => ({
                  number: i + 1,
                  title: s.title,
                  description: s.description,
                }))}
                layout="stacked"
                tone={content.process.tone}
              />
            </CardContent>
          </Card>
        ) : null}

        {/* Extra CTA (e-board only) */}
        {content.extraCta ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{content.extraCta.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {content.extraCta.body}
              </p>
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">
                  {content.extraCta.listTitle}
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {content.extraCta.list.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ) : null}

        {/* Sponsors (corporate branch only) */}
        {content.sponsors ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{content.sponsors.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {TIER_ORDER.map((tier) => {
                  const sponsors = getSponsorsByTier(tier as SponsorTier);
                  if (sponsors.length === 0) return null;
                  return (
                    <div
                      key={tier}
                      className="text-center p-4 bg-secondary/5 rounded-lg"
                    >
                      <h4 className="font-semibold mb-3">{tier} Sponsors</h4>
                      <div className="space-y-2">
                        {sponsors.map((sponsor) => (
                          <Link
                            key={sponsor.name}
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {sponsor.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ) : null}

        {/* Officers list (always) */}
        <BranchOfficersList branch={branch} />
      </div>
    </div>
  );
}

export { BranchOfficersList };
