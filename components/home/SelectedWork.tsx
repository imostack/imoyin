import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { WorkCard } from '@/components/work/WorkCard';
import { clientWork } from '@/lib/work';

// Only live sites make the home page
const featured = clientWork.filter(w => w.url).slice(0, 3);

export function SelectedWork() {
  return (
    <section className="bg-canvas border-t border-rim py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-14 flex items-end justify-between gap-8">
          <div>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
              Client work
            </p>
            <h2 className="font-display font-light text-fog leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Recent builds,<br />live in production
            </h2>
          </div>
          <Link href="/work"
            className="hidden sm:inline-flex items-center gap-2 text-xs text-smoke hover:text-amber transition-colors tracking-widest uppercase flex-shrink-0">
            All work
            <ArrowUpRight size={12} />
          </Link>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {featured.map((item, i) => (
            <AnimatedSection key={item.slug} delay={i * 0.08}>
              <WorkCard item={item} compact />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 sm:hidden">
          <Link href="/work"
            className="inline-flex items-center gap-2 text-xs text-smoke hover:text-amber transition-colors tracking-widest uppercase">
            All work <ArrowUpRight size={12} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
