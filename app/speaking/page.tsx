import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowUpRight, BookOpen, Mic, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Speaking engagements and workshops by Imoyin Sampson on technology, entrepreneurship, and building in Africa.',
};

const topics = [
  {
    title: 'Technology & Software Engineering',
    description:
      'Modern software development practices, engineering culture, and building technology products that scale. What good engineering actually looks like in practice — not in textbooks.',
    audience: 'Developers, CTOs, Product Teams',
  },
  {
    title: 'Entrepreneurship & Startup Building',
    description:
      'The real journey of founding a company in Nigeria — the highs, the lows, the pivots, and the frameworks that actually work when your market isn\'t in Silicon Valley.',
    audience: 'Founders, Aspiring Entrepreneurs',
  },
  {
    title: 'Building SaaS for the African Market',
    description:
      'Why existing global SaaS products often fail in the African market, and how to build software from first principles for Nigerian and African users, organisers, and businesses.',
    audience: 'Product builders, Entrepreneurs, Investors',
  },
  {
    title: 'Innovation & Digital Transformation',
    description:
      'How businesses can adapt and lead in a fast-moving technology landscape. What digital transformation actually means versus what vendors sell you.',
    audience: 'Executives, Business Leaders',
  },
  {
    title: 'The Multidisciplinary Practitioner',
    description:
      'What it means to operate seriously in multiple fields — software, business, music — and why the intersection is where the most interesting work happens.',
    audience: 'General audiences, Creatives, Professionals',
  },
];

const workshops = [
  {
    icon: BookOpen,
    title: 'From Idea to Product',
    duration: '1-Day Workshop',
    description:
      'A structured, hands-on workshop that takes participants through the full product development lifecycle — from raw idea to functional prototype. Ideal for startups and innovation teams.',
    format: 'In-Person / Virtual',
  },
  {
    icon: Mic,
    title: 'Technology for Business Leaders',
    duration: 'Half-Day Workshop',
    description:
      'Designed for executives and managers who want to understand modern technology well enough to make smart decisions about it. No technical background required.',
    format: 'In-Person',
  },
  {
    icon: Users,
    title: 'Engineering Team Accelerator',
    duration: '2-Day Intensive',
    description:
      'An intensive program for software engineering teams that want to level up — in code quality, collaboration, delivery, and professional practice.',
    format: 'In-Person / Virtual',
  },
];

export default function SpeakingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-36 pb-20 border-b border-rim">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-8">
              Speaking
            </p>
            <h1 className="font-display font-light text-fog leading-[0.88] mb-8"
              style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}>
              Ideas worth<br />
              <span className="text-amber">sharing loudly</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="max-w-2xl">
            <p className="text-smoke text-lg leading-relaxed">
              I speak at conferences, lead workshops, and design training programs on
              technology, entrepreneurship, product development, and the intersection
              of creativity and technical excellence.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.25} className="mt-8">
            <Link
              href="/contact?subject=Speaking+Inquiry"
              className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Invite me to speak
              <ArrowUpRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-surface border-b border-rim py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-12">
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
              Topics
            </p>
            <h2 className="font-display font-light text-fog"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              What I talk about
            </h2>
          </AnimatedSection>

          <div className="divide-y divide-rim">
            {topics.map((topic, i) => (
              <AnimatedSection key={topic.title} delay={i * 0.08}>
                <div className="py-10 grid lg:grid-cols-[1fr_200px] gap-6 lg:gap-16 items-start">
                  <div>
                    <h3 className="text-fog font-medium text-xl mb-3">{topic.title}</h3>
                    <p className="text-smoke text-sm leading-relaxed">{topic.description}</p>
                  </div>
                  <div className="lg:text-right pt-1">
                    <span className="font-code text-[11px] text-amber border border-amber/20 px-2 py-1">
                      {topic.audience}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="bg-canvas border-b border-rim py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-12">
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
              Workshops
            </p>
            <h2 className="font-display font-light text-fog"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Deep dives that<br />
              <span className="text-amber">create change</span>
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-px bg-rim">
            {workshops.map((w, i) => {
              const Icon = w.icon;
              return (
                <AnimatedSection key={w.title} delay={i * 0.1}>
                  <div className="bg-canvas p-8 lg:p-10 h-full group hover:bg-surface transition-colors">
                    <div className="mb-6 flex items-start justify-between">
                      <div className="p-3 border border-rim group-hover:border-amber/40 transition-colors">
                        <Icon size={20} className="text-amber" />
                      </div>
                      <span className="font-code text-[11px] text-smoke border border-rim px-2 py-1">
                        {w.duration}
                      </span>
                    </div>
                    <h3 className="font-display font-light text-fog text-2xl mb-3">{w.title}</h3>
                    <div className="h-px w-8 bg-amber/40 mb-4" />
                    <p className="text-smoke text-sm leading-relaxed mb-6">{w.description}</p>
                    <p className="font-code text-[11px] text-faint">Format: {w.format}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speaking history */}
      <section className="bg-surface border-b border-rim py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-10">
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
              Track record
            </p>
            <h2 className="font-display font-light text-fog"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Past engagements
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="text-smoke text-sm leading-relaxed max-w-xl">
              Speaking history is updated as engagements are confirmed and completed.
              References and topic recordings available on request.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-canvas py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <AnimatedSection>
            <h2 className="font-display font-light text-fog text-4xl mb-2">
              Book me for your event
            </h2>
            <p className="text-smoke text-sm">
              Conferences, corporate events, university engagements, panels, and training programs.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="flex-shrink-0">
            <Link
              href="/contact?subject=Speaking+Inquiry"
              className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Get in touch ↗
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
