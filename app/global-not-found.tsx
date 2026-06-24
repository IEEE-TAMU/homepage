import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';

import { PageHero } from '@/components/page-hero';
import { Button } from '@/components/ui/button';

import './globals.css';

const inter = localFont({
  variable: '--font-inter',
  src: './fonts/Inter.ttf',
});

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground antialiased">
        <PageHero
          title="404 - Page Not Found"
          subtitle="The page you're looking for doesn't exist or has been moved."
          actions={
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
          }
        />
      </body>
    </html>
  );
}
