import React from 'react';

import { cn } from '@/lib/utils';

type IconBubbleSize = 'sm' | 'md' | 'lg' | 'xl';
type IconBubbleTone = 'primary' | 'accent' | 'none';

interface IconBubbleProps {
  icon: React.ReactNode;
  /**
   * Visual size of the bubble.
   * - sm = h-8 w-8
   * - md = h-12 w-12
   * - lg = h-16 w-16
   * - xl = h-24 w-24
   */
  size?: IconBubbleSize;
  /**
   * Background tone. `none` makes the bubble transparent (no `bg-*` class).
   */
  tone?: IconBubbleTone;
  className?: string;
}

const sizeMap: Record<IconBubbleSize, string> = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
  xl: 'h-24 w-24',
};

const toneMap: Record<Exclude<IconBubbleTone, 'none'>, string> = {
  primary: 'bg-primary/10',
  accent: 'bg-accent/10',
};

const iconSizeMap: Record<IconBubbleSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

export function IconBubble({
  icon,
  size = 'md',
  tone = 'primary',
  className,
}: IconBubbleProps) {
  const wrappedIcon = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
        className: cn(
          iconSizeMap[size],
          (icon.props as { className?: string })?.className
        ),
      })
    : icon;

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center',
        sizeMap[size],
        tone !== 'none' && toneMap[tone],
        className
      )}
    >
      {wrappedIcon}
    </div>
  );
}
