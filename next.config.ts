import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // If the user truly wants standard deployment on Vercel, output: "export" is optional.
  // We leave it out or standard so features like Image Optimization work correctly out of the box on Vercel.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'hoirqrkdgbmvpwutwuwj.supabase.co'
      }
    ],
  },
};

export default nextConfig;
