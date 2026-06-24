import { CheckCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';

import { cn } from '@/lib/utils';

type CheckListSize = 'sm' | 'md';

export interface CheckListProps {
  items: (string | React.ReactNode)[];
  /**
   * Icon size and the size of the row text.
   * - sm: h-4 w-4 icon, text-sm
   * - md: h-5 w-5 icon, text-sm
   */
  size?: CheckListSize;
  /**
   * Render as ul/li (semantic list) or div (plain rows).
   * Default: div.
   */
  as?: 'ul' | 'div';
  className?: string;
}

const iconSizeMap: Record<CheckListSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
};

export function CheckList({
  items,
  size = 'md',
  as = 'div',
  className,
}: CheckListProps) {
  const content = items.map((item, i) => (
    <div
      key={i}
      className={cn(
        'flex items-center space-x-3',
        className
      )}
    >
      <CheckCircleIcon className={cn(iconSizeMap[size], 'text-primary')} />
      <span className="text-sm">{item}</span>
    </div>
  ));

  if (as === 'ul') {
    return <ul className="space-y-3">{content.map((c, i) => <li key={i}>{c}</li>)}</ul>;
  }

  return <div className="space-y-3">{content}</div>;
}
