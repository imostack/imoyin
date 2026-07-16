import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Reflections on building products, founding companies, software, AI, and the lessons that only show up after the fact.',
};

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
            {featured.published ? (
              <Link href={`/insights/${featured.slug}`} className="group block">
                <FeaturedInner article={featured} />
              </Link>
            ) : (
              <div className="opacity-60">
                <FeaturedInner article={featured} />
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Articles list */}
      <section className="bg-canvas py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="divide-y divide-rim">
            {rest.map((article, i) => (
              <AnimatedSection key={article.slug} delay={i * 0.07}>
                {article.published ? (
                  <Link
                    href={`/insights/${article.slug}`}
                    className="group grid lg:grid-cols-[120px_1fr_auto] gap-6 lg:gap-12 py-10 hover:bg-surface/40 -mx-6 px-6 transition-colors duration-200"
                  >
                    <ArticleRow article={article} />
                  </Link>
                ) : (
                  <div className="grid lg:grid-cols-[120px_1fr_auto] gap-6 lg:gap-12 py-10 opacity-50">
                    <ArticleRow article={article} />
                  </div>
                )}
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

function FeaturedInner({ article }: { article: typeof articles[0] }) {
  return (
    <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-start">
      <div>
        <p className="font-code text-[11px] text-amber tracking-widest uppercase mb-4">
          {article.category}
        </p>
        <h2 className="font-display font-light text-fog leading-tight mb-4 group-hover:text-amber transition-colors duration-200"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
          {article.title}
        </h2>
        <p className="text-smoke text-sm leading-relaxed max-w-2xl">
          {article.excerpt}
        </p>
      </div>
      <div className="flex lg:flex-col items-start lg:items-end gap-4 lg:gap-6 flex-shrink-0">
        <div className="lg:text-right">
          <p className="font-code text-[11px] text-smoke">{article.date}</p>
          <p className="font-code text-[11px] text-faint mt-1">{article.readTime}</p>
        </div>
        {article.published && (
          <div className="inline-flex items-center gap-2 text-xs text-smoke group-hover:text-amber transition-colors">
            <span className="tracking-widest uppercase">Read</span>
            <ArrowUpRight size={12} />
          </div>
        )}
      </div>
    </div>
  );
}

function ArticleRow({ article }: { article: typeof articles[0] }) {
  return (
    <>
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
        {article.published && <ArrowUpRight size={16} className="text-amber" />}
      </div>
    </>
  );
}
