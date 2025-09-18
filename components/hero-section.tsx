import React from 'react';
import { MainSection } from '@/components/main-section';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

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
