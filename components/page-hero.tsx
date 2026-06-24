import React from 'react';

import { MainSection } from '@/components/sections';

import { cn } from '@/lib/utils';

type PageHeroSize = 'sm' | 'md' | 'lg';

interface PageHeroProps {
  title: React.ReactNode;
  /**
   * Subtitle paragraph rendered below the title.
   */
  subtitle?: React.ReactNode;
  /**
   * Optional row of buttons (or other actions) below the subtitle.
   */
  actions?: React.ReactNode;
  /**
   * Alignment of the hero content. Default: center.
   */
  align?: 'center' | 'left';
  /**
   * Title typography. `lg` matches inner-page h1 size (4xl/5xl). Default: lg.
   */
  size?: PageHeroSize;
  /**
   * Optional id for anchor links.
   */
  id?: string;
  /**
   * Section tone (delegated to MainSection).
   */
  tone?: 'default' | 'card' | 'gradient';
  className?: string;
  /**
   * Extra wrapper className around the title block (e.g. for max-w-3xl on text).
   */
  contentClassName?: string;
}

const titleClassBySize: Record<PageHeroSize, string> = {
  sm: 'text-4xl font-bold text-balance',
  md: 'text-4xl font-bold text-balance',
  lg: 'text-4xl lg:text-5xl font-bold mb-6 text-balance',
};

const subtitleClassBySize: Record<PageHeroSize, string> = {
  sm: 'text-muted-foreground max-w-2xl',
  md: 'text-muted-foreground max-w-2xl',
  lg: 'text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-3',
};

export function PageHero({
  title,
  subtitle,
  actions,
  align = 'center',
  size = 'lg',
  id,
  tone,
  className,
  contentClassName,
}: PageHeroProps) {
  const isCenter = align === 'center';
  const subtitleClass = isCenter
    ? subtitleClassBySize[size]
    : 'text-muted-foreground max-w-2xl';

  return (
    <MainSection
      id={id}
      tone={tone}
      className={className}
      contentClassName={cn(
        isCenter ? 'text-center' : 'text-left',
        isCenter ? 'mx-auto' : '',
        contentClassName
      )}
    >
      <h1 className={titleClassBySize[size]}>{title}</h1>
      {subtitle ? <p className={subtitleClass}>{subtitle}</p> : null}
      {actions ? (
        <div
          className={cn(
            'flex flex-col sm:flex-row gap-4',
            isCenter ? 'justify-center' : 'justify-start'
          )}
        >
          {actions}
        </div>
      ) : null}
    </MainSection>
  );
}
