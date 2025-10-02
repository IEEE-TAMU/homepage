import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Branch } from '@/lib/branches';
import { officerId } from '@/lib/branches';

const BranchOpener = ({ branch }: { branch: Branch }) => {
  return (
    <div className="mb-12 max-w-4xl mx-auto">
      <div className="flex items-start justify-between mb-4">
        <Button asChild variant="ghost" aria-label="Back to branches">
          <Link href="/about/branches">
            <ArrowLeftIcon className="size-4" />
            <span>Back to branches</span>
          </Link>
        </Button>
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
const BranchOfficersCard = ({
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
export { BranchOpener, BranchOfficersCard };
