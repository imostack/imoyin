import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== 'production';

// Next.js's App Router injects its own per-request inline scripts to stream
// RSC hydration data (self.__next_f.push(...)) — their content varies per
// request, so they can't be pinned with a static hash like the old
// theme-detection-script approach. A hashed/nonce-only script-src blocks
// those and silently breaks hydration (page renders, JS never runs).
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://res.cloudinary.com https://images.unsplash.com",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join('; ');

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Skipped in dev: Turbopack's HMR runtime needs looser script rules than
  // the hashed production CSP allows, and dev isn't the real attack surface.
  ...(isDev ? [] : [{ key: 'Content-Security-Policy', value: CSP }]),
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dlcl5rqnh/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
