/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint-disable-next-line no-undef
  output: process.env.NODE_ENV === "production" ? 'export' : undefined, // <=== enables static exports
  reactStrictMode: true,
  // eslint-disable-next-line no-undef
  basePath: process.env.NODE_ENV === "production" ? "/" : undefined,
  // eslint-disable-next-line no-undef
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : undefined,
};

export default nextConfig;
