/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Remove this if you're not using experimental features
  },
  // Specify the output directory for production build
  distDir: '.next',
  // Enable static exports if needed
  // output: 'export',
  typescript: {
    // !! WARN !!
    // This is for handling TypeScript errors during build
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;