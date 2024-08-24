/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  basePath: 'vladimirantin.github.io',
  assetPrefix: 'vladimirantin.github.io'
};

export default nextConfig;
