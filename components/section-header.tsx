import React from 'react';

import { cn } from '@/lib/utils';

type SectionHeaderLevel = 2 | 3;

interface SectionHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  /**
   * When true, the header is left-aligned. Default: centered.
   */
  align?: 'center' | 'left';
  /**
   * Heading level. Default: 2.
   */
  level?: SectionHeaderLevel;
  /**
   * Optional small label rendered above the title.
   */
  eyebrow?: React.ReactNode;
  /**
   * Spacing below the header. Default: 12 (mb-12).
   */
  spacing?: 'compact' | 'comfortable' | 'none';
  className?: string;
}

const titleClassByLevel: Record<SectionHeaderLevel, string> = {
  2: 'text-3xl font-bold mb-4',
  3: 'text-2xl font-bold mb-3',
};

const descriptionClassByLevel: Record<SectionHeaderLevel, string> = {
  2: 'text-muted-foreground max-w-2xl mx-auto',
  3: 'text-sm text-muted-foreground',
};

const descriptionWrapByLevel: Record<SectionHeaderLevel, string> = {
  2: '',
  3: '',
};

const spacingMap = {
  none: 'mb-0',
  compact: 'mb-6',
  comfortable: 'mb-12',
};

export function SectionHeader({
  title,
  description,
  align = 'center',
  level = 2,
  eyebrow,
  spacing = 'comfortable',
  className,
}: SectionHeaderProps) {
  const isCenter = align === 'center';
  const wrapperAlign = isCenter ? 'text-center' : 'text-left';
  const descriptionMaxWidth = isCenter
    ? descriptionClassByLevel[level]
    : 'text-muted-foreground';
  const descriptionWrap = descriptionWrapByLevel[level];
  const TitleTag = level === 2 ? 'h2' : 'h3';

  return (
    <div
      className={cn(
        wrapperAlign,
        spacingMap[spacing],
        align === 'left' && 'max-w-2xl',
        className
      )}
    >
      {eyebrow ? <div className="mb-2">{eyebrow}</div> : null}
      <TitleTag className={titleClassByLevel[level]}>{title}</TitleTag>
      {description ? (
        <p className={cn(descriptionWrap, descriptionMaxWidth)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
