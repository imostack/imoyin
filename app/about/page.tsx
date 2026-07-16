import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind Imoyin Sampson — engineer, co-founder, and lifelong builder.',
};

const principles = [
  {
    label: 'Startups are not solved by code.',
    body: "Most startup failures are distribution failures, not engineering ones. Building the right thing matters more than building it elegantly. I won't let a client optimise the wrong thing just because I'm good at the engineering part.",
  },
  {
    label: 'Communication is the hardest engineering problem.',
    body: "The best-written code in a broken organisation will fail. The clearest architecture won't survive a team that doesn't share a mental model. Technical excellence requires human clarity — and most founders underestimate this.",
  },
  {
    label: 'Africa deserves world-class products.',
    body: 'Not software re-skinned for Nigeria after being designed for London. Products built from a genuine understanding of how Africans actually live and work. EventsKona is one answer. More are coming.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-36 pb-20 border-b border-rim">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-8">
              About
            </p>
            <h1 className="font-display font-light text-fog leading-[0.88] mb-10"
              style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}>
              More than a<br />
              <span className="text-amber">job description</span>
            </h1>
            <p className="text-smoke text-lg leading-relaxed max-w-2xl">
              Software engineer and co-founder based in Port Harcourt, Nigeria. I build
              products at App Guts, work in the oil and gas industry, and have performed
              as a saxophonist under the name Jimmy Sampson since 2010. All three require
              the same thing: precision, commitment, and showing up.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="bg-surface border-b border-rim py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <AnimatedSection>
              <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-6">
                The story
              </p>
              <div className="space-y-5 text-smoke text-sm leading-relaxed">
                <p>
                  Around 2010 I wrote my first lines of code — Java — then set it aside.
                  I came back properly in 2020 and moved fast. I founded Alprosel Tech,
                  a web development services business, and started shipping real products.
                  By 2024 the model had run its course: services businesses don't scale the
                  way I wanted to build. I dissolved Alprosel Tech and came on as
                  co-founder at App Guts.
                </p>
                <p>
                  App Guts is a SaaS company, not a dev shop. The pivot was deliberate.
                  I'd spent enough time building for other people's visions. EventsKona —
                  a smart event ticketing and discovery platform for the Nigerian market —
                  is the first product out of App Guts. It launched in April 2026. More
                  products are in development.
                </p>
                <p>
                  Alongside software, I work as a field engineer in oil and gas. It's a slower, heavier world
                  where a failed system has real consequences — not a sprint retrospective.
                  Operating in that environment permanently shaped how I think about
                  reliability and what it means to build something that holds.
                </p>
                <p>
                  Music runs parallel to all of it. I've been performing as Jimmy Sampson
                  on the saxophone since 2010 — the same year the first line of code was
                  written. It's not a hobby. It's a discipline.
                </p>
              </div>
            </AnimatedSection>

            {/* Portrait */}
            <AnimatedSection delay={0.2} className="lg:sticky lg:top-24 self-start">
              <div className="relative aspect-[4/5] bg-canvas border border-rim overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dlcl5rqnh/image/upload/v1784116231/imo__t5vsnr.png"
                  alt="Imoyin Sampson"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="font-code text-[11px] text-faint mt-3">
                Ịmọyin Sampson · Port Harcourt, Nigeria
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-canvas border-b border-rim py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-12">
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
              Principles
            </p>
            <h2 className="font-display font-light text-fog"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              What I actually believe
            </h2>
          </AnimatedSection>

          <div className="divide-y divide-rim">
            {principles.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="py-8 grid lg:grid-cols-[260px_1fr] gap-4 lg:gap-12">
                  <p className="text-fog font-medium text-sm">{p.label}</p>
                  <p className="text-smoke text-sm leading-relaxed">{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-canvas py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <AnimatedSection>
            <h2 className="font-display font-light text-fog text-4xl mb-2">
              Want to explore a conversation?
            </h2>
            <p className="text-smoke text-sm">Reach out — no agenda required.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="flex gap-4">
            <Link href="/work-with-me"
              className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity">
              Work with me
            </Link>
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
