import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology',
  description:
    'Software engineering, product development, and technical leadership by Imoyin Sampson — shipping systems that hold under pressure.',
};

const stack = {
  Frontend:    ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Query', 'Zustand'],
  Backend:     ['Node.js', 'REST APIs', 'GraphQL', 'Prisma', 'Drizzle ORM'],
  Data:        ['PostgreSQL', 'Redis', 'MongoDB', 'Supabase', 'Data modelling'],
  'DevOps & Platform': ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'Nginx', 'GitHub Actions', 'CI/CD Pipelines', 'Terraform', 'Serverless', 'Datadog', 'Prometheus'],
  Mobile:      ['React Native', 'Expo', 'iOS', 'Android', 'Push notifications'],
  Integrations:['Stripe', 'Paystack', 'Twilio', 'SendGrid', 'Mapbox', 'OpenAI API'],
};

const projects = [
  {
    name: 'App Guts — SaaS platform foundation',
    category: 'Internal tooling · SaaS',
    description:
      'Built the core technical infrastructure at App Guts: multi-tenant architecture, product delivery workflows, and the operational foundation that powers EventsKona and future products. Runs on Next.js, PostgreSQL, and AWS.',
    outcome: 'Clean separation of concerns that lets us ship new SaaS products quickly. EventsKona launched on this foundation in April 2026.',
    year: '2024–Present',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Prisma'],
  },
  {
    name: 'EventsKona — Event & ticketing platform',
    category: 'Consumer SaaS · Ticketing',
    description:
      'Full-stack event management system built for the Nigerian market: event creation, dynamic pricing, online ticketing with Paystack, real-time capacity management, attendee check-in, and post-event analytics dashboards.',
    outcome: '150+ users since April 2026 launch. Features no comparable regional platform offers. Sub-200ms API response times under load.',
    year: 'Apr 2026–Present',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Paystack', 'Redis'],
  },
  {
    name: 'Real-time logistics dashboard',
    category: 'Data engineering · Visualization',
    description:
      'Collaborative build — a fleet tracking and operations dashboard for a supply chain business. WebSocket-based real-time vehicle positions, route adherence monitoring, SLA tracking, and automated exception alerts.',
    outcome: 'Live tracking across 3 cities. Currently in beta testing ahead of full launch.',
    year: '2022',
    stack: ['React', 'WebSockets', 'Node.js', 'Mapbox', 'PostgreSQL'],
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-36 pb-20 border-b border-rim">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-8">
              Technology
            </p>
            <h1 className="font-display font-light text-fog leading-[0.88] mb-8"
              style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}>
              Code is the medium.<br />
              <span className="text-amber">Systems are the work.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="max-w-2xl">
            <p className="text-smoke text-lg leading-relaxed">
              Building software that runs in production,
              shipping features, absorbing traffic, surviving incidents,
              and handling the edge cases that nobody specified.
              I write code that future engineers can reason about.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Engineering philosophy */}
      <section className="bg-surface border-b border-rim py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <AnimatedSection>
              <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-6">
                Approach
              </p>
              <div className="space-y-4 text-smoke text-sm leading-relaxed prose-site">
                <p>
                  I'm not interested in clever code. I'm interested in code that a team
                  can modify safely six months after it's been shipped. That means clear
                  boundaries, explicit data contracts, and tests that test behaviour — not
                  implementation details.
                </p>
                <p>
                  The hardest engineering problems I've worked on weren't algorithmic.
                  They were organisational: how do you evolve a live system without
                  breaking the customers using it? How do you make a junior developer
                  productive without creating a dependency on you?
                </p>
                <p>
                  AI has changed what's possible, not what matters. The fundamentals —
                  clear data models, good API design, systems that fail gracefully are
                  more important now, not less. I use AI deliberately, as a tool,
                  not as a substitute for thinking.
                </p>
                <p>
                  I think in systems, not in sprints. Any engineer can ship features.
                  The discipline is in the invariants you maintain while doing it.
                </p>
              </div>
            </AnimatedSection>

            {/* Stack */}
            <AnimatedSection delay={0.15}>
              <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-6">
                Stack
              </p>
              <div className="space-y-5">
                {Object.entries(stack).map(([category, tools]) => (
                  <div key={category} className="flex gap-6">
                    <span className="font-code text-[11px] text-faint tracking-wide w-24 flex-shrink-0 pt-0.5">
                      {category}
                    </span>
                    <p className="text-smoke text-sm leading-relaxed">
                      {tools.join(' · ')}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Selected projects */}
      <section className="bg-canvas py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-14">
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
              Selected work
            </p>
            <h2 className="font-display font-light text-fog"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Projects that tell the story
            </h2>
          </AnimatedSection>

          <div className="divide-y divide-rim">
            {projects.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <div className="py-12">
                  <div className="grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-16">
                    <div>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-fog font-medium text-xl">{p.name}</h3>
                        <span className="font-code text-[11px] text-smoke border border-rim px-2 py-0.5">
                          {p.category}
                        </span>
                      </div>
                      <p className="text-smoke text-sm leading-relaxed mb-5 max-w-2xl">
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.stack.map(t => (
                          <span key={t} className="font-code text-[11px] text-faint border border-rim px-2 py-1">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-l border-rim pl-8 hidden lg:block">
                      <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-3">
                        Outcome
                      </p>
                      <p className="text-fog text-sm leading-relaxed">{p.outcome}</p>
                      <p className="font-code text-[11px] text-faint mt-4">{p.year}</p>
                    </div>

                    {/* Mobile outcome */}
                    <div className="lg:hidden border-t border-rim pt-5">
                      <p className="text-fog text-sm leading-relaxed mb-2">{p.outcome}</p>
                      <p className="font-code text-[11px] text-faint">{p.year}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface border-t border-rim py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <AnimatedSection>
            <h2 className="font-display font-light text-fog text-4xl mb-2">
              Have a technical challenge?
            </h2>
            <p className="text-smoke text-sm">
              Whether it's a new product, a system that's struggling, or a team that needs technical leadership.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="flex gap-4 flex-shrink-0">
            <Link href="/work-with-me"
              className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity">
              Work with me
            </Link>
            <Link href="/ventures"
              className="inline-flex items-center border border-rim text-smoke text-sm px-6 py-3 hover:border-smoke/50 hover:text-fog transition-colors">
              See my ventures
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
