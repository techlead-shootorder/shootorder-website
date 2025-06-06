// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  
  // Base path if deploying to subdirectory (remove if deploying to root domain)
  // basePath: '/your-subdirectory',
  
  // Asset prefix for CDN (optional)
  // assetPrefix: 'https://your-cdn-domain.com',
  
  // Trailing slash configuration
  trailingSlash: true,
  
  // Disable server-side features for static export
  experimental: {
    // Remove if you're not using app directory
    appDir: false
  },
   generateBuildId: async () => {
    return 'static-build'
  },
  // Custom webpack config if needed
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add any custom webpack configurations here
    return config;
  },
  
  // Environment variables that should be available in the browser
  env: {
    SITE_URL: process.env.SITE_URL || 'https://shootorder.us',
  },
};

export default nextConfig;

// package.json scripts section
/*
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build && next export",
    "static": "next build && next export && node generate-sitemap.js",
    "deploy": "npm run static && echo 'Upload the out/ folder to your cPanel'",
    "lint": "next lint"
  }
}
*/