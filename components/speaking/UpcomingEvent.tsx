import Link from 'next/link';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getOrganizerNextEvent } from '@/lib/eventskona';

function formatEventDate(startDate: string, startTime: string, timezone: string) {
  const date = new Date(`${startDate.slice(0, 10)}T${startTime}:00`);
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: timezone,
  }).format(date);
}

export async function UpcomingEvent({ organizerSlug }: { organizerSlug: string }) {
  const event = await getOrganizerNextEvent(organizerSlug);
  if (!event) return null;

  const location =
    event.eventFormat === 'ONLINE'
      ? 'Online'
      : [event.venueName, event.city, event.country].filter(Boolean).join(', ');

  const price = event.isFree
    ? 'Free'
    : `From ${event.currency} ${event.ticketTypes[0]?.price ?? ''}`;

  return (
    <section className="bg-surface border-b border-rim py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-12">
          <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
            Upcoming
          </p>
          <h2
            className="font-display font-light text-fog"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Next event
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 border border-rim">
            {event.coverImage && (
              // Cover image comes from EventsKona's Cloudinary account, not the
              // one configured in next.config.ts remotePatterns — plain <img>
              // avoids a next/image optimization mismatch.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={event.coverImage}
                alt={event.title}
                className="w-full h-56 lg:h-full object-cover"
              />
            )}
            <div className="p-8 lg:p-10 flex flex-col">
              <h3 className="font-display font-light text-fog text-2xl lg:text-3xl mb-4">
                {event.title}
              </h3>

              <div className="flex flex-col gap-2 mb-6">
                <p className="flex items-center gap-2 text-smoke text-sm">
                  <Calendar size={14} className="text-amber flex-shrink-0" />
                  {formatEventDate(event.startDate, event.startTime, event.timezone)}
                </p>
                <p className="flex items-center gap-2 text-smoke text-sm">
                  <MapPin size={14} className="text-amber flex-shrink-0" />
                  {location} &middot; {price}
                </p>
              </div>

              <p className="text-smoke text-sm leading-relaxed mb-8 max-w-xl">
                {event.shortDescription}
              </p>

              <Link
                href={`https://www.eventskona.com/event/${event.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 bg-amber text-canvas text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity w-fit"
              >
                Register on EventsKona
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
