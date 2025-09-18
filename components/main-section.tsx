import React from 'react';

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
