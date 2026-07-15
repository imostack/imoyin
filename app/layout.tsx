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

export const metadata: Metadata = {
  title: {
    default: 'Imoyin Sampson — Software Engineer & Co-founder',
    template: '%s — Imoyin Sampson',
  },
  description:
    'Software engineer and co-founder at App Guts. Building products and companies from Port Harcourt, Nigeria.',
  keywords: [
    'Imoyin Sampson',
    'Software Engineer Nigeria',
    'App Guts',
    'EventsKona',
    'SaaS Nigeria',
    'Technology Port Harcourt',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme'),p=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.classList.toggle('dark',s==='dark'||(s===null&&p));})();`,
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
