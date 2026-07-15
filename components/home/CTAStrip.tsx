import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

export function CTAStrip() {
  return (
    <section className="bg-surface border-t border-rim py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="max-w-3xl">
          <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-8">
            Let's talk
          </p>
          <h2 className="font-display font-light text-fog leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Building something meaningful?<br />I'd like to hear about it.
          </h2>
          <p className="text-smoke text-base leading-relaxed mb-10 max-w-xl">
            Whether it's a speaking invitation, a partnership conversation, startup advisory,
            or something harder to categorise — reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/work-with-me"
              className="group inline-flex items-center gap-2.5 bg-amber text-canvas text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Work with me
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border border-rim text-smoke text-sm px-6 py-3 hover:border-smoke/50 hover:text-fog transition-colors"
            >
              Send a message
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
