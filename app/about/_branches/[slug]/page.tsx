import { notFound } from 'next/navigation';

import { BranchPage } from '@/components/branches';
import { MainSection } from '@/components/sections';

import { getBranchContent } from '@/lib/branch-content';
import { Branches } from '@/lib/branches';

export function generateStaticParams() {
  return Object.keys(Branches)
    .filter((slug) => slug !== 'undersecretary')
    .map((slug) => ({ slug }));
}

export default async function BranchSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branch = Branches[slug];
  const content = getBranchContent(slug);
  if (!branch || !content) {
    notFound();
  }
  return (
    <div>
      <MainSection>
        <BranchPage branch={branch} content={content} />
      </MainSection>
    </div>
  );
}
