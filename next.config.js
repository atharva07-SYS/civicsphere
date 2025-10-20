/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Remove this if you're not using experimental features
  },
  // Specify the output directory for production build
  distDir: '.next',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This is for handling TypeScript errors during build
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;