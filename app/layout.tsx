import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';

import './globals.css';

// const geistSans = localFont({
//   variable: '--font-geist-sans',
//   src: './GeistSans.ttf',
// });

// const geistMono = localFont({
//   variable: '--font-geist-mono',
//   src: './GeistMono.ttf',
// });

const inter = localFont({
  variable: '--font-inter',
  src: './Inter.ttf',
});

export const metadata: Metadata = {
  title: 'IEEE TAMU - Texas A&M University Student Branch',
  description:
    'Join the largest technical professional organization in the world. Connect with fellow engineers, advance your career, and shape the future of technology at Texas A&M University.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
