import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Work With Me',
  description:
    'Speaking, advisory, startup conversations, and strategic partnerships with Imoyin Sampson.',
};

const engagements = [
  {
    title: 'Speaking',
    description:
      'Keynote and panel conversations on technology, entrepreneurship, and building companies in Africa. I speak from experience, not from slide decks.',
    context: 'Conferences · Events · Universities',
    href: '/contact?subject=Speaking+Inquiry',
  },
  {
    title: 'Podcasts & Interviews',
    description:
      'Conversations about building products, founding startups, and doing creative work alongside engineering. I enjoy candid, unscripted dialogue.',
    context: 'Podcasts · Media · Newsletters',
    href: '/contact?subject=Podcast+Inquiry',
  },
  {
    title: 'Startup Advisory',
    description:
      'Fractional advisory for early-stage founders navigating product, technology, and market decisions. I ask the uncomfortable questions.',
    context: 'Early-stage · Pre-seed · Seed',
    href: '/contact?subject=Advisory+Inquiry',
  },
  {
    title: 'Strategic Partnerships',
    description:
      'Co-founder conversations, joint ventures, and equity partnerships where complementary skills produce something neither party could build alone.',
    context: 'Co-founding · Equity · Joint ventures',
    href: '/contact?subject=Partnership+Inquiry',
  },
  {
    title: 'Founder Conversations',
    description:
      "If you're building something and want a thoughtful sounding board — reach out. No formal engagement required.",
    context: 'Open · Informal',
    href: '/contact?subject=Founder+Conversation',
  },
];

export default function WorkWithMePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-36 pb-20 border-b border-rim">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-8">
              Work With Me
            </p>
            <h1 className="font-display font-light text-fog leading-[0.88] mb-8"
              style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}>
              Open to the<br />
              <span className="text-amber">right conversations</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="max-w-2xl">
            <p className="text-smoke text-lg leading-relaxed">
              I'm building companies and shipping products. I take on a small number of
              engagements each year — those that align with where I'm headed or where I
              can genuinely add value.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Engagements */}
      <section className="bg-surface border-b border-rim py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-12">
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
              How I engage
            </p>
            <h2 className="font-display font-light text-fog"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              What I'm open to
            </h2>
          </AnimatedSection>

          <div className="divide-y divide-rim">
            {engagements.map((engagement, i) => (
              <AnimatedSection key={engagement.title} delay={i * 0.06}>
                <Link
                  href={engagement.href}
                  className="group grid lg:grid-cols-[200px_1fr_auto] gap-6 lg:gap-12 py-10 hover:bg-canvas/60 -mx-6 px-6 transition-colors duration-200"
                >
                  <div className="pt-0.5">
                    <p className="font-code text-xs tracking-widest uppercase text-smoke group-hover:text-amber transition-colors">
                      {engagement.title}
                    </p>
                    <p className="font-code text-[10px] text-faint mt-1.5 leading-relaxed">
                      {engagement.context}
                    </p>
                  </div>
                  <div>
                    <p className="text-smoke text-sm leading-relaxed">{engagement.description}</p>
                  </div>
                  <div className="flex items-start pt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    <ArrowRight size={16} className="text-amber" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-canvas py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-2xl">
            <h2 className="font-display font-light text-fog leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Start with a message.
            </h2>
            <p className="text-smoke text-sm leading-relaxed mb-8">
              Tell me briefly what you're working on and what you're looking for.
              If it's a fit, we'll find time to talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Send a message
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
