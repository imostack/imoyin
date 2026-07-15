import Link from 'next/link';
import { Code2, TrendingUp, Music, Users } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionLabel } from '@/components/ui/SectionLabel';

const pillars = [
  {
    icon: Code2,
    label: 'Technology',
    headline: 'Engineering with purpose',
    description:
      'Software engineering, web & mobile development, product development, and systems thinking at the intersection of code and impact.',
    tags: ['Software Engineering', 'Web Development', 'Mobile', 'Product'],
    href: '/technology',
  },
  {
    icon: TrendingUp,
    label: 'Entrepreneurship',
    headline: 'Building ventures from scratch',
    description:
      'From idea to execution — founding and building technology startups, products, and innovation-driven ventures across multiple sectors.',
    tags: ['Startups', 'App Guts', 'EventsKona', 'Innovation'],
    href: '/ventures',
  },
  {
    icon: Music,
    label: 'Music',
    headline: 'Creating as Jimmy Sampson',
    description:
      'Imoyin expresses creatively as Jimmy Sampson — a saxophonist, performer, and music mentor bridging technical precision with artistic expression.',
    tags: ['Saxophone', 'Performances', 'Mentorship', 'Events'],
    href: '/music',
  },
  {
    icon: Users,
    label: 'Leadership',
    headline: 'Educating & inspiring others',
    description:
      'Training, consulting, speaking engagements, and mentorship that empower individuals and organizations to grow through technology and creativity.',
    tags: ['Consulting', 'Training', 'Speaking', 'Mentoring'],
    href: '/speaking',
  },
];

export function IdentityPillars() {
  return (
    <section className="bg-paper dark:bg-night py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-16">
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="font-display text-5xl lg:text-6xl text-ink dark:text-paper font-light leading-tight max-w-xl">
            Four dimensions of one vision
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-mist dark:bg-charcoal">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimatedSection key={p.label} delay={i * 0.1}>
                <Link
                  href={p.href}
                  className="gold-hover group block bg-paper dark:bg-night p-8 h-full hover:bg-surface dark:hover:bg-surface-dark transition-colors duration-300"
                >
                  <div className="mb-6 inline-flex p-3 border border-mist dark:border-charcoal group-hover:border-gold transition-colors duration-300">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <p className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-3">
                    {p.label}
                  </p>
                  <h3 className="font-display text-2xl text-ink dark:text-paper font-medium mb-4 leading-snug">
                    {p.headline}
                  </h3>
                  <p className="text-sm text-smoke leading-relaxed mb-6">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-mist/50 dark:bg-charcoal text-smoke"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200 tracking-wide">
                    <span>Explore</span>
                    <div className="h-px w-6 bg-gold" />
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
