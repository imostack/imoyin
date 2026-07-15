import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const posts = [
  {
    category: 'Engineering',
    title: 'Why African developers need to think in products, not just code',
    date: 'Jun 2025',
    mins: '6 min',
    slug: '/insights/african-developers-think-in-products',
  },
  {
    category: 'Entrepreneurship',
    title: 'Lessons from building App Guts: what they don\'t teach in tech school',
    date: 'May 2025',
    mins: '8 min',
    slug: '/insights/lessons-from-building-app-guts',
  },
  {
    category: 'Craft',
    title: 'On being both an engineer and an artist without apology',
    date: 'Apr 2025',
    mins: '5 min',
    slug: '/insights/engineer-and-artist',
  },
  {
    category: 'Leadership',
    title: 'The hardest part of building a team isn\'t hiring — it\'s letting go',
    date: 'Mar 2025',
    mins: '7 min',
    slug: '/insights/building-a-team',
  },
];

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
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.07}>
              <Link
                href={post.slug}
                className="group flex items-start gap-6 lg:gap-12 py-7 hover:bg-surface/30 -mx-6 px-6 transition-colors"
              >
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
                    {post.date} · {post.mins}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-faint group-hover:text-amber transition-colors flex-shrink-0"
                  />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
