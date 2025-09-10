import React from 'react';

interface MainSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const MainSection = ({ children, className = '' }: MainSectionProps) => {
  return <section className={`p-6 md:p-14 ${className}`}>{children}</section>;
};
