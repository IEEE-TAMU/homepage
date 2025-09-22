import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

type SectionWidth = 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface MainSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /**
   * Controls the max width of the section content.
   * - sm ~ `max-w-screen-sm`
   * - md ~ `max-w-screen-md`
   * - lg ~ `max-w-screen-lg`
   * - xl ~ `max-w-screen-xl` (default)
   * - full ~ no max width (fluid)
   */
  width?: SectionWidth;
  /**
   * Control vertical spacing. Defaults to comfortable.
   */
  padding?: 'none' | 'compact' | 'comfortable';
  /**
   * Additional classes for the inner width-constrained container.
   */
  contentClassName?: string;
}

const widthMap: Record<SectionWidth, string> = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  full: 'max-w-none',
};

export const MainSection = ({
  children,
  className = '',
  id,
  width = 'xl',
  padding = 'comfortable',
  contentClassName = '',
}: MainSectionProps) => {
  const vertical =
    padding === 'none'
      ? 'py-0'
      : padding === 'compact'
        ? 'pt-4 md:pt-6 pb-6'
        : 'pt-6 md:pt-10 pb-10';
  // account for header height when using anchor links
  const scrollMarginTop = 'scroll-mt-12';

  return (
    <section
      className={`${vertical} px-6 md:px-8 ${scrollMarginTop} ${className}`}
      id={id}
    >
      <div className={`mx-auto w-full ${widthMap[width]} ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
};


interface HeroSectionProps {
  className?: string;
  id?: string;
  showChevron?: boolean;
  gradientClassName?: string;
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
  contentWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function HeroSection({
  className = '',
  id,
  showChevron = true,
  heading,
  subheading,
  badge,
  actions,
  contentWidth = 'xl',
}: HeroSectionProps) {
  return (
    <section
      className={`relative md:grid md:place-items-center md:min-h-[calc(100vh-4rem)] ${className}`}
      id={id}
    >
      <MainSection
        padding="none"
        width={contentWidth}
        contentClassName="relative flex-1 flex items-center"
      >
        <div className="mx-auto text-center w-full max-w-4xl">
          {badge ? <div className="mb-6">{badge}</div> : null}
          <div className="mb-6">{heading}</div>
          {subheading ? (
            <div className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              {subheading}
            </div>
          ) : null}
          {actions ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {actions}
            </div>
          ) : null}
        </div>
      </MainSection>
      {showChevron ? (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <ChevronDownIcon className="h-6 w-6 text-muted-foreground animate-bounce" />
        </div>
      ) : null}
    </section>
  );
}
