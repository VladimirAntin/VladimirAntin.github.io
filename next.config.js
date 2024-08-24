/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  // eslint-disable-next-line no-undef
  basePath: process.env.NODE_ENV === "production" ? "/vladimirantin.github.io/" : undefined,
  // eslint-disable-next-line no-undef
  assetPrefix: process.env.NODE_ENV === "production" ? "/vladimirantin.github.io/" : undefined,
};

export default nextConfig;
