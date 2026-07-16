import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { articles, getArticle } from '@/lib/articles';

export async function generateStaticParams() {
  return articles
    .filter(a => a.published)
    .map(a => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article || !article.published || !article.Content) notFound();

  const { Content } = article;

  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-36 pb-16 border-b border-rim">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <Link
              href="/insights"
              className="font-code text-[11px] tracking-widest uppercase text-smoke hover:text-fog transition-colors mb-8 inline-block"
            >
              ← Insights
            </Link>
            <p className="font-code text-[11px] tracking-widest uppercase text-amber mb-6">
              {article.category}
            </p>
            <h1
              className="font-display font-light text-fog leading-[0.92] mb-8"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
            >
              {article.title}
            </h1>
            <div className="flex items-center gap-6">
              <span className="font-code text-[11px] text-smoke">{article.date}</span>
              <span className="font-code text-[11px] text-faint">{article.readTime} read</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-2xl">
            <Content />
          </AnimatedSection>
        </div>
      </section>

      {/* Footer nav */}
      <section className="bg-canvas border-t border-rim py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between gap-6">
          <Link
            href="/insights"
            className="font-code text-[11px] tracking-widest uppercase text-smoke hover:text-fog transition-colors"
          >
            ← All articles
          </Link>
          <Link
            href="/contact"
            className="font-code text-[11px] tracking-widest uppercase text-smoke hover:text-fog transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
