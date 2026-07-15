import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const ventures = [
  {
    name: 'App Guts',
    period: '2024 – Present',
    status: 'Active',
    tagline: 'Building products, not services.',
    description:
      'A SaaS company building software products for the Nigerian and African market. Pivoted in 2024 from Alprosel Tech (a web dev services business) to focus entirely on building scalable software products. EventsKona is the flagship.',
    metrics: [
      { v: 'SaaS',  l: 'Company type'      },
      { v: 'EK',    l: 'Flagship product'  },
      { v: '2024',  l: 'Founded (as App Guts)' },
    ],
    href: '/ventures#app-guts',
  },
  {
    name: 'EventsKona',
    period: 'Apr 2026 – Present',
    status: 'Growing',
    tagline: 'Smart event ticketing and discovery for Nigeria.',
    description:
      'App Guts\' flagship SaaS product. A smart event ticketing and discovery platform built specifically for the Nigerian market — with features and workflows no comparable regional platform currently offers.',
    metrics: [
      { v: '150+',      l: 'Users and growing'   },
      { v: 'Apr 2026',  l: 'Launched'            },
      { v: 'Nigeria',   l: 'Primary market'      },
    ],
    href: '/ventures#eventskona',
  },
];

export function FeaturedVentures() {
  return (
    <section className="bg-surface border-t border-rim py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-14 flex items-end justify-between gap-8">
          <div>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
              Ventures
            </p>
            <h2 className="font-display font-light text-fog leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Building real companies,<br />not side projects
            </h2>
          </div>
          <Link href="/ventures"
            className="hidden sm:inline-flex items-center gap-2 text-xs text-smoke hover:text-amber transition-colors tracking-widest uppercase flex-shrink-0">
            All ventures
            <ArrowUpRight size={12} />
          </Link>
        </AnimatedSection>

        <div className="divide-y divide-rim">
          {ventures.map((v, i) => (
            <AnimatedSection key={v.name} delay={i * 0.1}>
              <Link href={v.href} className="group block py-10">
                <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-fog text-2xl font-medium group-hover:text-amber transition-colors duration-200">
                        {v.name}
                      </h3>
                      <span className="font-code text-[11px] text-smoke tracking-wide">{v.period}</span>
                      <span className="font-code text-[11px] text-emerald-500/70 border border-emerald-500/20 px-2 py-0.5 tracking-widest">
                        {v.status}
                      </span>
                    </div>
                    <p className="text-smoke text-sm mb-4 leading-relaxed max-w-2xl">
                      {v.description}
                    </p>
                    <p className="font-code text-[11px] text-faint tracking-wide">
                      {v.tagline}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="flex lg:flex-col gap-8 lg:gap-0 lg:divide-y divide-rim lg:text-right">
                    {v.metrics.map(m => (
                      <div key={m.l} className="lg:py-3 first:lg:pt-0 last:lg:pb-0">
                        <p className="font-code text-xl text-amber tabular-nums">{m.v}</p>
                        <p className="text-smoke text-[11px] mt-0.5">{m.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-6 sm:hidden">
          <Link href="/ventures"
            className="inline-flex items-center gap-2 text-xs text-smoke hover:text-amber transition-colors tracking-widest uppercase">
            All ventures <ArrowUpRight size={12} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
