import React from 'react';

import { IconBubble } from '@/components/icon-bubble';

import { cn } from '@/lib/utils';

type StepListLayout = 'grid' | 'stacked';
type StepListTone = 'primary' | 'accent';

export interface Step {
  number?: number;
  title: string;
  description: React.ReactNode;
}

interface StepListProps {
  steps: Step[];
  /**
   * - grid: each step in its own column with a large circle (3-col grid)
   * - stacked: vertical list with small circle, title and description to the right
   */
  layout?: StepListLayout;
  /**
   * Background tone for the circle. Default: primary.
   */
  tone?: StepListTone;
  /**
   * Outer wrapper className (e.g. for grid columns).
   */
  className?: string;
}

export function StepList({
  steps,
  layout = 'grid',
  tone = 'primary',
  className,
}: StepListProps) {
  if (layout === 'stacked') {
    return (
      <div className={cn('space-y-4', className)}>
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex items-start space-x-4"
          >
            <IconBubble
              icon={
                <span className="text-sm font-semibold">
                  {step.number ?? i + 1}
                </span>
              }
              size="sm"
              tone={tone}
              className="flex-shrink-0"
            />
            <div>
              <h4 className="font-semibold">{step.title}</h4>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn('grid md:grid-cols-3 gap-8', className)}
    >
      {steps.map((step, i) => (
        <div key={i} className="text-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-primary">
              {step.number ?? i + 1}
            </span>
          </div>
          <h3 className="font-semibold mb-3">{step.title}</h3>
          <p className="text-sm text-muted-foreground">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
