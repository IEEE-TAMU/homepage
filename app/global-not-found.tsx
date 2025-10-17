import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';

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
      <body>
        <h1>404 - Page Not Found</h1>
        <p>This page does not exist.</p>
        <Link href="/" className="underline">
          Return Home
        </Link>
      </body>
    </html>
  );
}
