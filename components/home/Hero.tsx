'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const STACK = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL',
  'AWS', 'React Native', 'Python', 'Docker', 'GraphQL',
  'Redis', 'Prisma', 'Tailwind CSS', 'Stripe API', 'Serverless',
];

const METRICS = [
  { value: '2020',  label: 'Year I started shipping software'    },
  { value: '2',     label: 'Active ventures — App Guts & more'   },
  { value: '150+',  label: 'EventsKona users and growing'        },
  { value: '2026',  label: 'EventsKona launched'                 },
];

function LiveClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }) + ' WAT'
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}

export function Hero() {
  const doubled = [...STACK, ...STACK];

  return (
    <section className="min-h-screen bg-canvas flex flex-col">
      {/* Status bar */}
      <div className="border-b border-rim mt-14 lg:mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-9 flex items-center justify-between">
          <div className="flex items-center gap-4 font-code text-[11px] tracking-widest uppercase text-smoke">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
              Open to new projects
            </span>
            <span className="text-faint hidden sm:inline">·</span>
            <span className="hidden sm:inline">Port Harcourt, Nigeria</span>
          </div>
          <span className="font-code text-[11px] text-amber/60 tracking-wide tabular-nums">
            <LiveClock />
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col justify-center py-16 lg:py-24">
        {/* Name — the primary statement */}
        <h1 className="font-display font-light leading-[0.85] tracking-tight text-fog mb-8"
          style={{ fontSize: 'clamp(4.5rem, 13vw, 12rem)' }}>
          Imoyin<br />
          <span className="text-amber">Sampson</span>
        </h1>

        {/* Single-line descriptor */}
        <p className="text-[var(--fg-2)] text-lg lg:text-xl max-w-xl leading-relaxed mb-10">
          I build software, systems and companies that help businesses grow.
          Based in Port Harcourt, Nigeria.
        </p>

        {/* Metrics — the evidence */}
        <div className="border border-rim grid grid-cols-2 sm:grid-cols-4 divide-x divide-rim mb-10">
          {METRICS.map((m, i) => (
            <div key={i} className="px-5 py-4">
              <p className="font-code text-2xl lg:text-3xl text-fog tabular-nums">{m.value}</p>
              <p className="text-smoke text-[11px] mt-1 leading-snug">{m.label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/technology"
            className="group inline-flex items-center gap-2.5 bg-amber text-canvas text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity"
          >
            Explore my work
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/work-with-me"
            className="inline-flex items-center gap-2 border border-rim text-smoke text-sm px-6 py-3 hover:border-smoke/50 hover:text-fog transition-colors"
          >
            Work with me
          </Link>
        </div>
      </div>

      {/* Tech ticker */}
      <div className="border-t border-rim py-3 overflow-hidden">
        <div className="ticker-track flex gap-0 whitespace-nowrap">
          {doubled.map((tech, i) => (
            <span key={i} className="font-code text-[11px] text-faint tracking-widest uppercase flex items-center">
              <span className="px-5">{tech}</span>
              <span className="text-rim">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
