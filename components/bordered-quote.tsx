import React from 'react';

import { cn } from '@/lib/utils';

type BorderedQuoteTone = 'primary' | 'secondary' | 'accent';

interface BorderedQuoteProps {
  children: React.ReactNode;
  tone?: BorderedQuoteTone;
  className?: string;
}

const toneBorderMap: Record<BorderedQuoteTone, string> = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  accent: 'border-accent',
};

export function BorderedQuote({
  children,
  tone = 'primary',
  className,
}: BorderedQuoteProps) {
  return (
    <div className={cn('border-l-4 pl-4', toneBorderMap[tone], className)}>
      {children}
    </div>
  );
}
