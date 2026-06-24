import React from 'react';

import { IconBubble } from '@/components/icon-bubble';

import { cn } from '@/lib/utils';

type FeatureRowIconSize = 'sm' | 'md' | 'lg';

interface FeatureRowProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  iconSize?: FeatureRowIconSize;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const iconSizeToBubbleSize: Record<FeatureRowIconSize, 'sm' | 'md' | 'lg'> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export function FeatureRow({
  icon,
  title,
  description,
  iconSize = 'sm',
  className,
  titleClassName,
  descriptionClassName,
}: FeatureRowProps) {
  return (
    <div className={cn('flex items-start space-x-4', className)}>
      <IconBubble
        icon={icon}
        size={iconSizeToBubbleSize[iconSize]}
        className="flex-shrink-0"
      />
      <div>
        <h3
          className={cn(
            'font-semibold mb-2',
            titleClassName
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            'text-muted-foreground text-sm',
            descriptionClassName
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
