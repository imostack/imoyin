import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ventures',
  description:
    'App Guts and EventsKona — SaaS products built by Imoyin Sampson from Port Harcourt, Nigeria.',
};

export default function VenturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-36 pb-20 border-b border-rim">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-8">
              Ventures
            </p>
            <h1 className="font-display font-light text-fog leading-[0.88] mb-8"
              style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}>
              Building products,<br />
              <span className="text-amber">not services</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="max-w-2xl">
            <p className="text-smoke text-lg leading-relaxed">
              App Guts is a SaaS company built to own what it creates. We build our own
              products — starting with EventsKona — for the Nigerian and African market.
              This is the beginning of a longer story.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* App Guts */}
      <section id="app-guts" className="bg-surface border-b border-rim py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 border border-rim flex items-center justify-center">
                <span className="font-code text-xs text-amber">AG</span>
              </div>
              <div>
                <p className="font-code text-[11px] tracking-widest uppercase text-smoke">App Guts</p>
                <p className="font-code text-[11px] text-faint">Founded 2024 · Active</p>
              </div>
            </div>
            <h2 className="font-display font-light text-fog mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              A SaaS company building for the African market
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimatedSection>
              <div className="space-y-4 text-smoke text-sm leading-relaxed">
                <p>
                  App Guts emerged from the dissolution and rebranding of Alprosel Tech —
                  a web development services business I ran from 2020. When I folded
                  Alprosel Tech in 2024, it wasn't a shutdown. It was a deliberate pivot:
                  stop selling development hours, start building products.
                </p>
                <p>
                  The distinction matters. A services business grows by hiring more people
                  and taking on more clients. A SaaS company grows by building something
                  once and letting it scale. App Guts is the latter. We're not looking
                  for web development clients. We're building software that earns its keep
                  while we sleep.
                </p>
                <p>
                  EventsKona is the first product out of App Guts. It won't be the last.
                  We're already thinking about the next problems worth solving in this
                  market — and we have the engineering foundation to move fast when we do.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="space-y-0 divide-y divide-rim">
                {[
                  { label: 'Company type',   value: 'SaaS' },
                  { label: 'Founded',        value: '2024 (from Alprosel Tech, est. 2020)' },
                  { label: 'Flagship product', value: 'EventsKona' },
                  { label: 'Focus',          value: 'Nigerian & African market' },
                  { label: 'Status',         value: 'Active — building' },
                ].map(row => (
                  <div key={row.label} className="py-4 grid grid-cols-2 gap-4">
                    <span className="font-code text-[11px] text-smoke tracking-wide">{row.label}</span>
                    <span className="text-sm text-fog">{row.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* EventsKona */}
      <section id="eventskona" className="bg-canvas border-b border-rim py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 border border-rim flex items-center justify-center">
                <span className="font-code text-xs text-amber">EK</span>
              </div>
              <div>
                <p className="font-code text-[11px] tracking-widest uppercase text-smoke">EventsKona</p>
                <p className="font-code text-[11px] text-faint">Launched April 2026 · Growing</p>
              </div>
            </div>
            <h2 className="font-display font-light text-fog mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Smart event ticketing and discovery<br />
              <span className="text-amber">built for this region</span>
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimatedSection>
              <div className="space-y-4 text-smoke text-sm leading-relaxed">
                <p>
                  EventsKona is a smart event ticketing and discovery platform — the
                  flagship product of App Guts. It launched in April 2026 and is built
                  specifically for the Nigerian market, with features and workflows
                  that no comparable platform in the region currently offers.
                </p>
                <p>
                  The idea came from a straightforward observation: event organisers
                  in Nigeria were managing complex operations manually — ticket sales
                  through DMs, attendance tracking on paper, zero post-event data.
                  The tools that existed were either too expensive, not localised,
                  or simply not built with the Nigerian organiser in mind.
                </p>
                <p>
                  EventsKona addresses that gap. Organisers get a complete platform:
                  event creation, ticketing, discovery, attendee management, and
                  analytics. Attendees get a native experience for finding and
                  booking events. We're building the user base now, focused on
                  getting the product experience right before we push for scale.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="https://eventskona.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-amber hover:opacity-80 transition-opacity group"
                >
                  Visit EventsKona
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="space-y-0 divide-y divide-rim mb-8">
                {[
                  { label: 'Launched',    value: 'April 2026' },
                  { label: 'Users',       value: '150+ and growing' },
                  { label: 'Model',       value: 'SaaS · Ticketing platform' },
                  { label: 'Market',      value: 'Nigeria (expanding)' },
                  { label: 'Status',      value: 'Active — growing user base' },
                ].map(row => (
                  <div key={row.label} className="py-4 grid grid-cols-2 gap-4">
                    <span className="font-code text-[11px] text-smoke tracking-wide">{row.label}</span>
                    <span className="text-sm text-fog">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="border border-rim p-6">
                <p className="font-code text-[11px] text-smoke tracking-widest uppercase mb-3">
                  What makes it different
                </p>
                <p className="text-smoke text-sm leading-relaxed">
                  EventsKona offers features no competing platform in the region
                  currently has — built from scratch around how events actually
                  work in Nigeria, not adapted from a foreign product.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's next */}
      <section className="bg-surface border-b border-rim py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-10">
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
              What's next
            </p>
            <h2 className="font-display font-light text-fog"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              More products in development
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-2xl space-y-4 text-smoke text-sm leading-relaxed mb-10">
              <p>
                EventsKona is the first, not the last. App Guts is building a
                portfolio of SaaS products for the Nigerian and African market —
                each one solving a problem that's real, local, and underserved
                by the tools currently available.
              </p>
              <p>
                The next products are in research and early design. If you're
                working on a problem in this space and want to explore a
                partnership or collaboration, reach out.
              </p>
            </div>
            <Link
              href="/contact?subject=Partnership+Inquiry"
              className="inline-flex items-center gap-2 border border-rim text-smoke text-sm px-6 py-3 hover:border-smoke/50 hover:text-fog transition-colors"
            >
              Start a conversation
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-canvas py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <AnimatedSection>
            <h2 className="font-display font-light text-fog text-4xl mb-2">
              Interested in what we're building?
            </h2>
            <p className="text-smoke text-sm">
              Follow the progress or get in touch about partnerships and investment.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="flex gap-4 flex-shrink-0">
            <a href="https://eventskona.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity">
              Visit EventsKona ↗
            </a>
            <Link href="/contact"
              className="inline-flex items-center border border-rim text-smoke text-sm px-6 py-3 hover:border-smoke/50 hover:text-fog transition-colors">
              Get in touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
