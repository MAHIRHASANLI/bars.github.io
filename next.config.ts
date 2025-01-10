import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
  reactStrictMode: false,
  // env: { MONGODB_URL: process.env.MONGODB_URL },
};

export default nextConfig;
