import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { WorkItem } from '@/lib/work';

interface WorkCardProps {
  item: WorkItem;
  // Compact cards (home page) drop the "what I built" list
  compact?: boolean;
  preload?: boolean;
}

function Screenshot({ item, preload }: { item: WorkItem; preload?: boolean }) {
  return (
    <div className="border border-rim bg-canvas overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 h-7 border-b border-rim">
        <span className="w-2 h-2 rounded-full bg-rim" />
        <span className="w-2 h-2 rounded-full bg-rim" />
        <span className="w-2 h-2 rounded-full bg-rim" />
        <span className="ml-3 font-code text-[10px] text-faint truncate">
          {item.url ? item.url.replace(/^https?:\/\//, '') : item.name.toLowerCase()}
        </span>
      </div>
      <Image
        src={item.image}
        alt={`${item.name} website homepage`}
        placeholder="blur"
        preload={preload}
        sizes="(min-width: 1024px) 600px, 100vw"
        className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>
  );
}

export function WorkCard({ item, compact, preload }: WorkCardProps) {
  const body = (
    <>
      <Screenshot item={item} preload={preload} />
      <div className="pt-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
          <h3 className="text-fog font-medium text-lg group-hover:text-amber transition-colors duration-200">
            {item.name}
          </h3>
          <span className="font-code text-[11px] text-faint">{item.year}</span>
        </div>
        <p className="font-code text-[11px] text-smoke tracking-wide mb-3">{item.industry}</p>
        <p className="text-smoke text-sm leading-relaxed mb-4">{item.summary}</p>

        {!compact && (
          <ul className="space-y-1.5 mb-5">
            {item.built.map(b => (
              <li key={b} className="text-smoke text-sm leading-relaxed flex gap-3">
                <span className="text-amber flex-shrink-0">—</span>
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mb-5">
          {item.stack.map(t => (
            <span key={t} className="font-code text-[11px] text-faint border border-rim px-2 py-1">
              {t}
            </span>
          ))}
        </div>

        {item.url ? (
          <span className="inline-flex items-center gap-1.5 text-sm text-amber">
            Visit site
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        ) : (
          item.note && <span className="font-code text-[11px] text-faint">{item.note}</span>
        )}
      </div>
    </>
  );

  if (!item.url) return <div>{body}</div>;

  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block">
      {body}
    </a>
  );
}
