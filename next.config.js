/** @type {import('next').NextConfig} */
import { PHASE_PRODUCTION_BUILD } from "next/constants";

const nextConfig = (phase) => ({
  output: phase === PHASE_PRODUCTION_BUILD ? 'export' : undefined,  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: phase !== PHASE_PRODUCTION_BUILD
  }
});

export default nextConfig;
