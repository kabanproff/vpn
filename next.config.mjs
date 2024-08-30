/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  basePath: '/vpn',
  assetPrefix: '/vpn',
};

export default nextConfig;
