import React from 'react';

import { CheckList } from '@/components/check-list';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { cn } from '@/lib/utils';

type PriceCardTone = 'primary' | 'accent-foreground';

interface PriceCardProps {
  name: string;
  price: React.ReactNode;
  description?: React.ReactNode;
  /**
   * Benefits list. Each entry is rendered via CheckList.
   */
  benefits: (string | React.ReactNode)[];
  /**
   * CTA button (rendered at the bottom of the card).
   */
  cta?: React.ReactNode;
  /**
   * When true, render the "Most Popular" badge and primary border.
   */
  isPopular?: boolean;
  /**
   * Color of the price text.
   * - primary: text-primary (used for popular/featured tiers)
   * - accent-foreground: text-accent-foreground (the membership $15 quirk)
   */
  priceTone?: PriceCardTone;
  /**
   * Optional extra className for the Card root.
   */
  className?: string;
}

export function PriceCard({
  name,
  price,
  description,
  benefits,
  cta,
  isPopular = false,
  priceTone = 'primary',
  className,
}: PriceCardProps) {
  const priceClass =
    priceTone === 'primary' ? 'text-primary' : 'text-accent-foreground';

  return (
    <Card
      className={cn(
        'relative flex flex-col h-full',
        isPopular && 'border-primary',
        className
      )}
    >
      {isPopular ? (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
          Most Popular
        </Badge>
      ) : null}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{name}</CardTitle>
        <div
          className={cn(
            'text-3xl font-bold mt-4 whitespace-nowrap',
            priceClass
          )}
        >
          {price}
        </div>
        {description ? (
          <p className="text-muted-foreground">{description}</p>
        ) : null}
      </CardHeader>
      <CardContent className="space-y-4 flex flex-col flex-1">
        <div className="space-y-3 flex-1">
          <CheckList items={benefits} />
        </div>
        {cta ? <div className="mt-auto">{cta}</div> : null}
      </CardContent>
    </Card>
  );
}

export { Button as PriceCardButton };
