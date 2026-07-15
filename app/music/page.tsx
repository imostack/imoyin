import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Music',
  description: 'Jimmy Sampson — professional saxophonist, live performer, and mentor. The musical side of Imoyin Sampson.',
};

// Replace with a YouTube video ID from @ijsampson (e.g. 'dX4KZGF8ABC')
const FEATURED_VIDEO_ID = 'j5dUqC9qugo';

export default function MusicPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[80vh] bg-canvas flex flex-col justify-center border-b border-rim">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
          <AnimatedSection>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-8">
              Music
            </p>
            <h1
              className="font-display font-light text-fog leading-[0.85] tracking-tight mb-6"
              style={{ fontSize: 'clamp(4rem, 11vw, 10rem)' }}
            >
              Jimmy<br />
              <span className="text-amber">Sampson</span>
            </h1>
            <p className="font-code text-sm text-smoke tracking-widest mb-12">
              Professional Saxophonist · Performer · Mentor
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity"
              >
                Book a Performance
              </a>
              <a
                href="https://www.youtube.com/@ijsampson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-rim text-smoke text-sm px-6 py-3 hover:border-smoke/50 hover:text-fog transition-colors"
              >
                Watch a Performance
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Short intro */}
      <section className="py-20 lg:py-28 bg-surface border-b border-rim">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-2xl">
            <p className="text-fog text-lg lg:text-xl leading-relaxed">
              Jimmy Sampson is the musical identity of Imoyin Sampson.
              A saxophonist and live performer based in Port Harcourt, Nigeria —
              performing since 2010, and now recording. The discipline behind the
              engineering and the discipline behind the saxophone are the same thing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Performance */}
      <section className="py-20 lg:py-28 border-b border-rim">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-8">
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke">
              Featured Performance
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div
              className="aspect-video w-full max-w-4xl overflow-hidden border border-rim bg-surface"
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${FEATURED_VIDEO_ID}?rel=0&modestbranding=1`}
                title="Jimmy Sampson — Featured Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="font-code text-[11px] text-faint mt-4">
              More on{' '}
              <a
                href="https://www.youtube.com/@ijsampson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-smoke hover:text-fog transition-colors"
              >
                YouTube ↗
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mentorship */}
      <section className="py-20 lg:py-28 bg-surface border-b border-rim">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-2xl">
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-8">
              Mentorship
            </p>
            <div className="border border-rim p-8 lg:p-12">
              <h2
                className="font-display font-light text-fog leading-snug mb-5"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
              >
                The Jimmy Sampson<br />Mentorship Program
              </h2>
              <p className="text-smoke text-sm leading-relaxed mb-8 max-w-md">
                Working with young musicians who are serious about their instrument.
                If you are navigating the gap between raw talent and refined craft,
                this programme is for you.
              </p>
              <a
                href="mailto:music@imoyinsampson.com"
                className="inline-flex items-center gap-2 text-sm text-amber hover:opacity-80 transition-opacity tracking-wide"
              >
                Get in touch →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-20 lg:py-32 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-4">
              Bookings
            </p>
            <h2
              className="font-display font-light text-fog leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Book Jimmy Sampson<br />for your event.
            </h2>
            <p className="text-smoke text-sm leading-relaxed max-w-md mb-10">
              Corporate events, concerts, private functions, worship settings, and more.
              Reach out directly to discuss your event.
            </p>
            <a
              href="mailto:music@imoyinsampson.com"
              className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-medium px-7 py-3.5 hover:opacity-90 transition-opacity"
            >
              Send a Booking Enquiry
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
