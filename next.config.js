/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  distDir: '.next',
  images: {
    unoptimized: false,
  },
  eslint: {
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This is for handling TypeScript errors during build
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;