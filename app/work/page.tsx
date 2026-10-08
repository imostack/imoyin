import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { WorkCard } from '@/components/work/WorkCard';
import { clientWork, personalWork } from '@/lib/work';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected client websites and platforms built by Imoyin Sampson for businesses in oil & gas, logistics, media, education and consulting across Nigeria.',
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-36 pb-20 border-b border-rim">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-8">
              Work
            </p>
            <h1 className="font-display font-light text-fog leading-[0.88] mb-8"
              style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}>
              Built for clients,<br />
              <span className="text-amber">running in the real world</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="max-w-2xl">
            <p className="text-smoke text-lg leading-relaxed">
              Websites and platforms for businesses in oil &amp; gas, logistics, media,
              education and consulting. Alongside building products at App Guts, I take
              on a limited number of client projects — by appointment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Client work */}
      <section className="bg-surface border-b border-rim py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-14">
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
              Client work
            </p>
            <h2 className="font-display font-light text-fog"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Selected projects
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-16 lg:gap-x-16 lg:gap-y-20">
            {clientWork.map((item, i) => (
              <AnimatedSection key={item.slug} delay={(i % 2) * 0.08}>
                <WorkCard item={item} preload={i < 2} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Personal & research */}
      <section className="bg-canvas border-b border-rim py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-14">
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
              Products &amp; research
            </p>
            <h2 className="font-display font-light text-fog"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              My own work
            </h2>
            <p className="text-smoke text-sm leading-relaxed mt-4 max-w-2xl">
              Products I build and own. EventsKona, the flagship of App Guts, has its own
              page under <Link href="/ventures#eventskona" className="text-amber hover:opacity-80">Ventures</Link>.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-16 lg:gap-x-16">
            {personalWork.map(item => (
              <AnimatedSection key={item.slug}>
                <WorkCard item={item} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <AnimatedSection>
            <h2 className="font-display font-light text-fog text-4xl mb-2">
              Have a project in mind?
            </h2>
            <p className="text-smoke text-sm max-w-xl">
              Client work is by appointment. Send a short brief — it takes about
              three minutes — and I&apos;ll get back to you to book a call.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="flex-shrink-0">
            <Link href="/project-discovery"
              className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity">
              Book a consultation
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
