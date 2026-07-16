import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { articles } from '@/lib/articles';

const preview = articles.slice(0, 4);

export function InsightsPreview() {
  return (
    <section className="bg-canvas border-t border-rim py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-14 flex items-end justify-between gap-8">
          <div>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
              Writing
            </p>
            <h2 className="font-display font-light text-fog leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Thinking out loud<br />about the work
            </h2>
          </div>
          <Link href="/insights"
            className="hidden sm:inline-flex items-center gap-2 text-xs text-smoke hover:text-amber transition-colors tracking-widest uppercase flex-shrink-0">
            All writing
            <ArrowUpRight size={12} />
          </Link>
        </AnimatedSection>

        <div className="divide-y divide-rim">
          {preview.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.07}>
              {post.published ? (
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex items-start gap-6 lg:gap-12 py-7 hover:bg-surface/30 -mx-6 px-6 transition-colors"
                >
                  <ArticleRow post={post} />
                </Link>
              ) : (
                <div className="flex items-start gap-6 lg:gap-12 py-7 opacity-40 -mx-6 px-6">
                  <ArticleRow post={post} />
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleRow({ post }: { post: typeof articles[0] }) {
  return (
    <>
      <div className="flex-shrink-0 w-24 hidden sm:block pt-0.5">
        <p className="font-code text-[11px] text-smoke tracking-widest uppercase">
          {post.category}
        </p>
      </div>
      <p className="flex-1 text-fog/80 text-base group-hover:text-fog transition-colors leading-snug">
        {post.title}
      </p>
      <div className="flex-shrink-0 flex items-center gap-4 pt-0.5">
        <span className="font-code text-[11px] text-faint tabular-nums hidden lg:block">
          {post.date} · {post.readTime}
        </span>
        <ArrowUpRight
          size={14}
          className="text-faint group-hover:text-amber transition-colors flex-shrink-0"
        />
      </div>
    </>
  );
}
