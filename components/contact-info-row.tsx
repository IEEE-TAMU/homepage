import React from 'react';

import { IconBubble } from '@/components/icon-bubble';

import { cn } from '@/lib/utils';

interface ContactInfoRowProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ContactInfoRow({
  icon,
  title,
  children,
  className,
}: ContactInfoRowProps) {
  return (
    <div className={cn('flex items-center space-x-4', className)}>
      <IconBubble icon={icon} size="md" className="flex-shrink-0" />
      <div>
        <h4 className="font-semibold">{title}</h4>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
