const EVENTSKONA_BASE = 'https://www.eventskona.com';

export interface EventsKonaTicketType {
  name: string;
  price: string;
  currency: string;
}

export interface EventsKonaEvent {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  eventFormat: 'IN_PERSON' | 'ONLINE' | 'HYBRID';
  venueName: string | null;
  city: string | null;
  country: string | null;
  startDate: string;
  startTime: string;
  timezone: string;
  coverImage: string | null;
  isFree: boolean;
  currency: string;
  ticketTypes: EventsKonaTicketType[];
}

interface EventsKonaResponse {
  success: boolean;
  message: string;
  data: EventsKonaEvent;
}

interface EventsKonaListResponse {
  success: boolean;
  message: string;
  data: EventsKonaEvent[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Server-side only. EventsKona's API returns no Access-Control-Allow-Origin
// header, so a browser-side fetch from this site would be blocked by CORS —
// this must run in a Server Component or Route Handler.
//
// Both lookups below fail soft (return null) rather than throw. This code
// runs during static generation/ISR revalidation — an unhandled throw here
// would fail the build for the whole site, not just the Speaking section,
// over a third-party API having a bad moment.
export async function getEventsKonaEvent(slugOrId: string): Promise<EventsKonaEvent | null> {
  try {
    const res = await fetch(`${EVENTSKONA_BASE}/api/events/${slugOrId}`, {
      next: { revalidate: 900 },
    });

    if (res.status === 404) return null;
    if (!res.ok) {
      console.error(`EventsKona API error fetching event "${slugOrId}": ${res.status}`);
      return null;
    }

    const json = (await res.json()) as EventsKonaResponse;
    return json.data;
  } catch (err) {
    console.error(`EventsKona API request failed for event "${slugOrId}":`, err);
    return null;
  }
}

// Next published event for a given organizer, soonest first. Self-updating —
// whatever the organizer publishes next on EventsKona shows up here without
// a code change, since this is a live query rather than a pinned slug.
export async function getOrganizerNextEvent(organizerSlug: string): Promise<EventsKonaEvent | null> {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const params = new URLSearchParams({
      organizerSlug,
      sortBy: 'startDate',
      sortOrder: 'asc',
      startDateFrom: today,
      limit: '1',
    });

    const res = await fetch(`${EVENTSKONA_BASE}/api/events?${params}`, {
      next: { revalidate: 900 },
    });

    if (!res.ok) {
      console.error(`EventsKona API error fetching organizer "${organizerSlug}" events: ${res.status}`);
      return null;
    }

    const json = (await res.json()) as EventsKonaListResponse;
    return json.data[0] ?? null;
  } catch (err) {
    console.error(`EventsKona API request failed for organizer "${organizerSlug}":`, err);
    return null;
  }
}
