import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://c8.alamy.com/**'),
      new URL('https://cdn.britannica.com/**')
    ],
  },
};

export default nextConfig;
