import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

const areas = [
  {
    label: 'Engineering',
    summary: 'Systems built to hold under pressure.',
    detail:
      'Shipping real software since 2020 — web applications, mobile apps, APIs, and infrastructure. I care about the code that runs at 2am as much as the demo that ran in staging.',
    href: '/technology',
    note: 'React · Node.js · TypeScript · PostgreSQL · AWS',
  },
  {
    label: 'Product',
    summary: 'From problem to something people use.',
    detail:
      'Engineering without product thinking is expensive code. I lead product cycles end-to-end — from problem discovery through architecture, build, launch, and iteration.',
    href: '/technology',
    note: 'Discovery · Architecture · Delivery · Iteration',
  },
  {
    label: 'Ventures',
    summary: 'Building companies, not side projects.',
    detail:
      'App Guts and EventsKona are real companies with real customers and real accountability. I know what it costs to build something and keep it running.',
    href: '/ventures',
    note: 'App Guts · EventsKona · More in development',
  },
  {
    label: 'Advisory',
    summary: 'Strategic thinking for founders and teams.',
    detail:
      'I work with businesses making significant technology bets, speak on engineering and entrepreneurship, and advise founders on the decisions that actually matter.',
    href: '/work-with-me',
    note: 'Advisory · Speaking · Podcasts · Partnerships',
  },
];

export function WhatIBuild() {
  return (
    <section className="bg-canvas py-24 lg:py-32 border-t border-rim">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-14">
          <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
            Disciplines
          </p>
          <h2 className="font-display font-light text-fog leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            The work,<br />end to end
          </h2>
        </AnimatedSection>

        <div className="divide-y divide-rim">
          {areas.map((area, i) => (
            <AnimatedSection key={area.label} delay={i * 0.06}>
              <Link
                href={area.href}
                className="group grid lg:grid-cols-[180px_1fr_auto] gap-6 lg:gap-12 py-10 hover:bg-surface/40 -mx-6 px-6 transition-colors duration-200"
              >
                <div className="pt-0.5">
                  <p className="font-code text-xs tracking-widest uppercase text-smoke group-hover:text-amber transition-colors">
                    {area.label}
                  </p>
                </div>
                <div>
                  <p className="text-fog font-medium text-lg mb-2 group-hover:text-amber transition-colors duration-200">
                    {area.summary}
                  </p>
                  <p className="text-smoke text-sm leading-relaxed mb-4 max-w-2xl">
                    {area.detail}
                  </p>
                  <p className="font-code text-[11px] text-faint tracking-wide">
                    {area.note}
                  </p>
                </div>
                <div className="flex items-start pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={18} className="text-amber flex-shrink-0" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
