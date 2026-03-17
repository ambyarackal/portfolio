import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    // @ts-expect-error - Next.js 15 type definitions for devIndicators are currently misaligned with the actual implementation
    appIsrStatus: false,
    buildActivity: false,
  },
};

export default nextConfig;
