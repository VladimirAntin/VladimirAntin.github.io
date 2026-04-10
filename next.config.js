/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
