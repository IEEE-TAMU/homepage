'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const tierOrder = ['Platinum', 'Gold', 'Silver', 'Bronze'];

// Sponsor logos data
const sponsors = [
  {
    name: 'Dashiell Corporation',
    logo: 'dashiell.png',
    tier: 'Bronze',
    website: 'https://www.dashiell.com/',
  },
  {
    name: 'Burns & McDonnell',
    logo: 'burns_mcdonnell.png',
    tier: 'Platinum',
    website: 'https://www.burnsmcd.com/',
  },
  {
    name: 'Lockheed Martin',
    logo: 'lockheed.png',
    tier: 'Gold',
    website: 'https://www.lockheedmartin.com/',
  },
  {
    name: 'Sandia National Laboratories',
    logo: 'sandia.png',
    tier: 'Gold',
    website: 'https://www.sandia.gov/',
  },
  {
    name: 'Texas Instruments',
    logo: 'texas_instruments.png',
    tier: 'Silver',
    website: 'https://www.ti.com/',
  },
]
  // force sort sponsors by tier so that higher tier sponsors appear first in the carousel
  .sort((a, b) => tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier));

interface SponsorsCarouselProps {
  title?: string;
  description?: string;
  autoplayDelay?: number;
}

export function SponsorsCarousel({
  title = 'Our Sponsors',
  description = 'Thank you to our sponsors who make our events and programs possible.',
  autoplayDelay = 2000,
}: SponsorsCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: true })
  );

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full max-w-5xl mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {sponsors.map((sponsor, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="border-2 hover:border-primary transition-colors cursor-pointer">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div className="text-center space-y-2 w-full">
                        <div className="relative w-full h-32 mb-4">
                          <Image
                            src={`/sponsors/${sponsor.logo}`}
                            alt={sponsor.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="text-sm font-semibold">{sponsor.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {sponsor.tier} Sponsor
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
