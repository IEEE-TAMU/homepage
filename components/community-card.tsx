import React from 'react';

import { IconBubble } from '@/components/icon-bubble';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { cn } from '@/lib/utils';

type CommunityCardTone = 'primary' | 'accent';

interface CommunityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: React.ReactNode;
  /**
   * Background tone for the icon bubble.
   * - primary: bg-primary/10 (default)
   * - accent: bg-accent/10 (the connect page social cards currently use this)
   */
  tone?: CommunityCardTone;
  className?: string;
}

export function CommunityCard({
  icon,
  title,
  description,
  cta,
  tone = 'primary',
  className,
}: CommunityCardProps) {
  return (
    <Card className={cn('flex flex-col h-full', className)}>
      <CardHeader className="text-center">
        <div className="mx-auto mb-4">
          <IconBubble icon={icon} size="md" tone={tone} className="h-16 w-16" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center flex-1 flex flex-col">
        <p className="text-muted-foreground mb-6 flex-1">{description}</p>
        {cta}
      </CardContent>
    </Card>
  );
}
