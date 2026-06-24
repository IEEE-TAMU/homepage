import React from 'react';

import { cn } from '@/lib/utils';

interface GradientPanelProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * Highlighted surface with the brand's soft primary→accent gradient.
 * Used for "By the Numbers", "What You Get", and bottom CTAs.
 */
export function GradientPanel({
  title,
  children,
  className,
}: GradientPanelProps) {
  return (
    <div
      className={cn(
        'bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg',
        className
      )}
    >
      {title ? <h3 className="text-xl font-semibold mb-6">{title}</h3> : null}
      {children}
    </div>
  );
}
