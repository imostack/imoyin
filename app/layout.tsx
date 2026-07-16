import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-code',
  subsets: ['latin'],
  weight: ['400', '500'],
});

const META_TITLE = 'Imoyin Sampson — Software Engineer & Co-founder';
const META_DESC =
  'Software engineer and co-founder at App Guts. Building products and companies from Port Harcourt, Nigeria.';
const META_URL = 'https://imoyinsampson.com';

export const metadata: Metadata = {
  metadataBase: new URL(META_URL),
  title: {
    default: META_TITLE,
    template: '%s — Imoyin Sampson',
  },
  description: META_DESC,
  keywords: [
    'Imoyin Sampson',
    'Software Engineer Nigeria',
    'App Guts',
    'EventsKona',
    'SaaS Nigeria',
    'Tech Founder Nigeria',
    'Software Engineer Port Harcourt',
    'Jimmy Sampson',
    'Saxophonist Nigeria',
    'Startup Africa',
  ],
  authors: [{ name: 'Imoyin Sampson', url: META_URL }],
  creator: 'Imoyin Sampson',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: META_URL,
    siteName: 'Imoyin Sampson',
    title: META_TITLE,
    description: META_DESC,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
    description: META_DESC,
    creator: '@imoyins',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme'),p=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.classList.toggle('dark',s==='dark'||(s===null&&p));})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Imoyin Sampson',
              alternateName: 'Jimmy Sampson',
              url: META_URL,
              image: 'https://res.cloudinary.com/dlcl5rqnh/image/upload/v1784116231/imo__t5vsnr.png',
              sameAs: [
                'https://www.linkedin.com/in/imoyinsampson/',
                'https://github.com/imostack',
                'https://www.instagram.com/imoyins',
                'https://audiomack.com/jismusic',
              ],
              jobTitle: 'Software Engineer & Co-founder',
              worksFor: {
                '@type': 'Organization',
                name: 'App Guts',
                url: 'https://appguts.io',
              },
              knowsAbout: [
                'Software Engineering',
                'SaaS Products',
                'Startup Founding',
                'Product Development',
                'Saxophone',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Port Harcourt',
                addressCountry: 'NG',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
