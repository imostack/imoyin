import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Reflections on building products, founding companies, software, AI, and the lessons that only show up after the fact.',
};

const articles = [
  {
    category: 'Product',
    title: 'Why African developers need to think in products, not just code',
    excerpt:
      'The shift from hired hand to product thinker is the most important move a Nigerian software engineer can make — and most never make it.',
    date: 'June 12, 2025',
    readTime: '6 min',
    featured: true,
    slug: '#',
  },
  {
    category: 'Startups',
    title: "What building App Guts actually taught me",
    excerpt:
      'Running a software company in Port Harcourt taught me more about communication, resilience, and real customer problems than any course ever could.',
    date: 'May 28, 2025',
    readTime: '8 min',
    featured: false,
    slug: '#',
  },
  {
    category: 'Creativity',
    title: 'On being an engineer and an artist without apology',
    excerpt:
      "People are often surprised that I write code and play saxophone at a high level. I've stopped explaining it. Here's why that surprised look is the problem.",
    date: 'April 15, 2025',
    readTime: '5 min',
    featured: false,
    slug: '#',
  },
  {
    category: 'Leadership',
    title: "The hardest part of building a team isn't hiring",
    excerpt:
      "As a founder who started solo, delegating technical decisions was one of the most uncomfortable — and necessary — growth experiences I've had.",
    date: 'March 3, 2025',
    readTime: '7 min',
    featured: false,
    slug: '#',
  },
  {
    category: 'Startups',
    title: 'EventsKona: why I built a product nobody asked me to build',
    excerpt:
      "The best products solve problems you've personally experienced. EventsKona started as a rant and became a company.",
    date: 'February 19, 2025',
    readTime: '9 min',
    featured: false,
    slug: '#',
  },
  {
    category: 'Systems',
    title: 'What jazz taught me about building software',
    excerpt:
      'Improvisation and architecture have more in common than most engineers want to admit. Both require structure, intuition, and the courage to commit.',
    date: 'January 7, 2025',
    readTime: '6 min',
    featured: false,
    slug: '#',
  },
];

const [featured, ...rest] = articles;

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-36 pb-20 border-b border-rim">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-8">
              Insights
            </p>
            <h1 className="font-display font-light text-fog leading-[0.88] mb-8"
              style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}>
              Thinking<br />
              <span className="text-amber">in public</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="max-w-2xl">
            <p className="text-smoke text-lg leading-relaxed">
              Reflections on building products, founding companies, software, AI, and
              the lessons that only show up after the fact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-surface border-b border-rim py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-8">
              Featured
            </p>
            <Link href={featured.slug} className="group block">
              <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-start">
                <div>
                  <p className="font-code text-[11px] text-amber tracking-widest uppercase mb-4">
                    {featured.category}
                  </p>
                  <h2 className="font-display font-light text-fog leading-tight mb-4 group-hover:text-amber transition-colors duration-200"
                    style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
                    {featured.title}
                  </h2>
                  <p className="text-smoke text-sm leading-relaxed max-w-2xl">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="flex lg:flex-col items-start lg:items-end gap-4 lg:gap-6 flex-shrink-0">
                  <div className="lg:text-right">
                    <p className="font-code text-[11px] text-smoke">{featured.date}</p>
                    <p className="font-code text-[11px] text-faint mt-1">{featured.readTime}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs text-smoke group-hover:text-amber transition-colors">
                    <span className="tracking-widest uppercase">Read</span>
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles list */}
      <section className="bg-canvas py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="divide-y divide-rim">
            {rest.map((article, i) => (
              <AnimatedSection key={article.slug + i} delay={i * 0.07}>
                <Link
                  href={article.slug}
                  className="group grid lg:grid-cols-[120px_1fr_auto] gap-6 lg:gap-12 py-10 hover:bg-surface/40 -mx-6 px-6 transition-colors duration-200"
                >
                  <div className="pt-0.5">
                    <p className="font-code text-[11px] text-amber tracking-widest uppercase mb-1">
                      {article.category}
                    </p>
                    <p className="font-code text-[11px] text-faint">{article.date}</p>
                  </div>
                  <div>
                    <h3 className="font-display font-light text-fog text-2xl leading-tight mb-2 group-hover:text-amber transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-smoke text-sm leading-relaxed max-w-2xl">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-start pt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    <ArrowUpRight size={16} className="text-amber" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16 border-t border-rim pt-8">
            <p className="font-code text-[11px] text-faint tracking-widest uppercase">
              More coming soon
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
