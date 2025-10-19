import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [new URL('https://officer-photos.ieeetamu.org/*')],
  },
};

export default nextConfig;
