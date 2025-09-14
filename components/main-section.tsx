import React from 'react';

interface MainSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const MainSection = ({
  children,
  className = '',
  id,
}: MainSectionProps) => {
  return (
    <section className={`pt-6 px-8 md:pt-10 md:px-12 ${className}`} id={id}>
      {children}
    </section>
  );
};
