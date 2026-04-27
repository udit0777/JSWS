import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.pravatar.cc', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};



export default nextConfig;
