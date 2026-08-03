import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Listings are admin-entered and may reference external image URLs
    // (not just local /images/*.jpg), so allow any https host.
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
};

export default nextConfig;
