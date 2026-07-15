import { AnimatedSection } from '@/components/ui/AnimatedSection';

const clients = ['Centrifuge Group', 'Rise.ng', 'Moshomes', 'Kehmarine'];

export function TrustedBy() {
  return (
    <section className="bg-canvas border-t border-rim py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-6 lg:gap-16">
            <p className="font-code text-[11px] tracking-widest uppercase text-faint flex-shrink-0">
              Previously trusted by
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {clients.map(client => (
                <span
                  key={client}
                  className="font-display text-xl font-light whitespace-nowrap leading-none"
                  style={{ color: 'var(--fg)', opacity: 0.25 }}
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
