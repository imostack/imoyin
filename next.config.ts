import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== 'production';

// Hash of the inline theme-detection script in app/layout.tsx — recompute
// this if that script's contents ever change.
const THEME_SCRIPT_HASH = "'sha256-o07hMxxN8Tb3nZMnC+oUR89OfN6MVGKAhAsnMjmc7Lo='";

const CSP = [
  "default-src 'self'",
  `script-src 'self' ${THEME_SCRIPT_HASH}`,
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
