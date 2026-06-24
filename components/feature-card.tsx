import Link from 'next/link';
import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { cn } from '@/lib/utils';

type FeatureCardIconStyle = 'none' | 'bubble' | 'plain';

interface FeatureCardProps {
  title: string;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  /**
   * How the icon is presented.
   * - none: no icon
   * - bubble: wrapped in a circular `IconBubble`
   * - plain: large colored icon, no background
   */
  iconStyle?: FeatureCardIconStyle;
  /**
   * Optional CTA rendered at the bottom of the card.
   * Pass a `Button` (or any node) directly.
   */
  cta?: React.ReactNode;
  /**
   * When provided, wraps the entire card body in a link. CTA still renders
   * below; this is used for cards whose click target is the whole surface.
   */
  href?: string;
  /**
   * If true, apply the `text-center` modifier used in most feature cards.
   * Default: true.
   */
  centered?: boolean;
  /**
   * Card title typography. Default: lg.
   */
  titleSize?: 'sm' | 'lg';
  /**
   * Optional extra className for the Card root.
   */
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  iconStyle = 'none',
  cta,
  href,
  centered = true,
  titleSize = 'lg',
  className,
}: FeatureCardProps) {
  const titleClass = titleSize === 'sm' ? 'text-lg' : 'text-xl';

  const iconNode = (() => {
    if (!icon || iconStyle === 'none') return null;
    if (iconStyle === 'bubble') {
      return (
        <div className="mx-auto mb-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
        </div>
      );
    }
    return React.cloneElement(
      icon as React.ReactElement<{ className?: string }>,
      {
        className: cn(
          'h-12 w-12 text-primary mx-auto mb-4',
          (icon as React.ReactElement<{ className?: string }>).props.className
        ),
      }
    );
  })();

  const body = (
    <>
      <CardHeader className={centered ? 'text-center' : undefined}>
        {iconNode}
        <CardTitle className={titleClass}>{title}</CardTitle>
      </CardHeader>
      {description ? (
        <CardContent
          className={cn(
            'flex-1 flex flex-col',
            titleSize === 'sm' && 'text-sm text-muted-foreground'
          )}
        >
          <p
            className={cn(
              titleSize === 'sm' ? 'text-sm' : 'text-base',
              'text-muted-foreground',
              cta && 'mb-4 flex-1'
            )}
          >
            {description}
          </p>
          {cta ? <div className="mt-auto">{cta}</div> : null}
        </CardContent>
      ) : cta ? (
        <CardContent className="flex-1 flex flex-col">
          <div className="mt-auto">{cta}</div>
        </CardContent>
      ) : null}
    </>
  );

  const cardClassName = cn(
    centered && 'text-center',
    'hover:shadow-lg transition-shadow flex flex-col h-full',
    className
  );

  if (href) {
    return (
      <Link href={href} className="block">
        <Card className={cardClassName}>{body}</Card>
      </Link>
    );
  }

  return <Card className={cardClassName}>{body}</Card>;
}
