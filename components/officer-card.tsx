import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IconBubble } from '@/components/icon-bubble';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { Officer } from '@/lib/branches';
import { linkedinUrl, officerId } from '@/lib/branches';
import { cn } from '@/lib/utils';

const initialsOf = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

interface OfficerCardProps {
  officer: Officer;
  className?: string;
}

export function OfficerCard({ officer, className }: OfficerCardProps) {
  return (
    <Card
      id={officerId(officer)}
      className={cn('scroll-mt-36 relative', className)}
    >
      {officer.linkedin ? (
        <Link
          href={linkedinUrl(officer.linkedin)}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <LinkedInIcon className="h-4 w-4" />
          <span className="sr-only">View LinkedIn profile</span>
        </Link>
      ) : null}
      <CardHeader className="text-center">
        {officer.photoUrl ? (
          <Image
            width={96}
            height={96}
            src={officer.photoUrl}
            alt={officer.name}
            className="h-24 w-24 rounded-full object-cover mx-auto mb-4"
          />
        ) : (
          <IconBubble
            icon={
              <span className="text-2xl font-semibold">
                {initialsOf(officer.name)}
              </span>
            }
            size="xl"
            className="mx-auto mb-4"
          />
        )}
        <CardTitle className="text-lg">{officer.position}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground mb-2">{officer.name}</p>
        {officer.description ? (
          <p className="text-sm text-muted-foreground">{officer.description}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 382 382"
    role="img"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      fill="#0077B7"
      d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
        C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
        H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
        c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
        s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
        c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
        c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
        c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
        L341.91,330.654L341.91,330.654z"
    />
  </svg>
);
