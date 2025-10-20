// config.ts
export const config = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'CivicSphere',
  environment: process.env.NEXT_PUBLIC_APP_ENV || 'development',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  features: {
    darkMode: process.env.NEXT_PUBLIC_FEATURE_DARK_MODE === 'true',
    analytics: process.env.NEXT_PUBLIC_FEATURE_ANALYTICS === 'true',
  },
};