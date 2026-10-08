import type { StaticImageData } from 'next/image';
import umotech from '@/public/work/umotech.png';
import surfaceMetal from '@/public/work/surface-metal.png';
import aerojim from '@/public/work/aerojim.png';
import oneVoiceAcademy from '@/public/work/one-voice-academy.png';
import yemiBenjamin from '@/public/work/yemi-benjamin.png';
import sucexpress from '@/public/work/sucexpress.png';
import finetori from '@/public/work/finetori.png';
import kehmarine from '@/public/work/kehmarine.png';
import ecowatch from '@/public/work/ecowatch.png';

export interface WorkItem {
  slug: string;
  name: string;
  industry: string;
  summary: string;
  built: string[];
  stack: string[];
  year: string;
  image: StaticImageData;
  // Omitted when the site is no longer reachable at its own domain
  url?: string;
  note?: string;
}

export const clientWork: WorkItem[] = [
  {
    slug: 'umotech',
    name: 'Umotech Energy Service Ltd',
    industry: 'Oil & gas · Port Harcourt',
    summary:
      'Company website for an engineering, maintenance and well testing equipment leasing firm.',
    built: [
      'Service and equipment-leasing pages written to rank for local searches',
      'Structured data and FAQ markup for richer Google results',
      'Quote requests that open straight in email or WhatsApp — no backend to maintain',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    year: '2026',
    image: umotech,
    url: 'https://www.umotechenergy.com',
  },
  {
    slug: 'sucexpress',
    name: 'Sucexpress',
    industry: 'Logistics · Freight',
    summary:
      'Marketing site for an on-demand truck-hailing and freight platform operating across Nigeria.',
    built: [
      'Product site for shippers and drivers, with app download and driver sign-up paths',
      'Pages for fleet management, freight hailing, vehicle leasing and supply chain',
      'Full help centre, FAQs and legal pages',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    year: '2026',
    image: sucexpress,
    url: 'https://www.sucexpress.com',
  },
  {
    slug: 'yemi-benjamin',
    name: 'Yemi Benjamin',
    industry: 'Personal brand · Consulting',
    summary:
      'Website for an investment consultant, author and speaker — bookings, books and events in one place.',
    built: [
      'Consultation booking and contact flow with email delivery',
      'Upcoming events pulled live from the EventsKona API',
      'Book, media and speaking sections',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Resend', 'EventsKona API'],
    year: '2026',
    image: yemiBenjamin,
    url: 'https://www.yemibenjamin.com',
  },
  {
    slug: 'surface-metal',
    name: 'Surface Metal Limited',
    industry: 'Oil & gas · Technical services',
    summary:
      'Company website for a wellsite support, inspection and instrumentation services provider.',
    built: [
      'Service and equipment catalogue pages',
      'SEO setup: metadata, sitemap and social sharing images',
      'Contact and enquiry flow',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    year: '2026',
    image: surfaceMetal,
    url: 'https://www.surfacemetal.com',
  },
  {
    slug: 'aerojim',
    name: 'AeroJim Energy Supply Solutions',
    industry: 'Oil & gas · Wholesale supply',
    summary:
      'Marketing and request-for-quote site for a wholesale supplier of oil & gas equipment and parts.',
    built: [
      'Product catalogue for wellhead components, valves, flanges and safety systems',
      'Request-for-quote form delivered by email',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Resend'],
    year: '2026',
    image: aerojim,
    url: 'https://www.aerojim.com',
  },
  {
    slug: 'one-voice-academy',
    name: 'One Voice Academy',
    industry: 'Education · Music',
    summary: 'Website for a voice and piano training academy in Nigeria.',
    built: [
      'Programmes and pricing pages',
      'Student registration form',
      'Terms and privacy pages',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    year: '2026',
    image: oneVoiceAcademy,
    url: 'https://www.onevoiceacademy.com.ng',
  },
  {
    slug: 'kehmarine',
    name: 'Kehmarine Limited',
    industry: 'Marine services · Nigeria',
    summary:
      'Website for an indigenous marine-support services company covering marine supplies, pumps and valves, haulage and corporate transport.',
    built: [
      'Service pages for marine supplies, pumps & valves, haulage and corporate buses',
      'Quote request and contact flow',
      'Responsive layout with a full-width hero slider',
    ],
    stack: ['HTML', 'CSS', 'Bootstrap', 'jQuery'],
    year: '2024',
    image: kehmarine,
    url: 'https://www.kehmarine.com',
  },
  {
    slug: 'finetori',
    name: 'Finetori',
    industry: 'Media · News',
    summary:
      'A Nigerian news platform with a newsroom admin and an AI pipeline that drafts stories from breaking news for editors to approve.',
    built: [
      'Public news site with categories, trending stories and ad slots',
      'Newsroom admin with a rich-text editor and approval queue',
      'Automated pipeline that turns news feeds into draft articles using the Claude API',
    ],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Cloudinary', 'Claude API'],
    year: '2026',
    image: finetori,
    url: 'https://finetori.vercel.app',
  },
];

export const personalWork: WorkItem[] = [
  {
    slug: 'ecowatch',
    name: 'EcoWatch',
    industry: 'Thesis project · Clean energy',
    summary:
      'A clean energy monitoring dashboard built for my thesis — energy production and consumption, grid efficiency, CO₂ savings and device health at a glance.',
    built: [
      'Real-time style charts for production and consumption',
      'Device status table with health and temperature readings',
      'Light and dark themes',
    ],
    stack: ['Next.js', 'React', 'TypeScript'],
    year: '2025',
    image: ecowatch,
    url: 'https://ecowatch-nine.vercel.app',
  },
];
