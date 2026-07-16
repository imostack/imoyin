import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How imoyinsampson.com handles personal data submitted through the contact form.',
};

const LAST_UPDATED = 'July 2026';

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-canvas pt-36 pb-20 border-b border-rim">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-8">
              Legal
            </p>
            <h1
              className="font-display font-light text-fog leading-[0.88] mb-8"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
            >
              Privacy Policy
            </h1>
            <p className="font-code text-[11px] text-faint">Last updated: {LAST_UPDATED}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl space-y-12 text-smoke text-sm leading-relaxed">

            <AnimatedSection>
              <p>
                This site is a personal brand website operated by Imoyin Sampson
                (<strong className="text-fog font-medium">imoyinsampson.com</strong>).
                This policy explains what personal data is collected when you use this site,
                why it is collected, and how it is handled. The site is designed to collect
                as little data as possible.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="font-display font-light text-fog text-2xl mb-4">
                What data is collected
              </h2>
              <p className="mb-4">
                The only personal data this site collects is what you voluntarily submit
                through the contact form: your <strong className="text-fog font-medium">name</strong>,{' '}
                <strong className="text-fog font-medium">email address</strong>, and{' '}
                <strong className="text-fog font-medium">message</strong>.
              </p>
              <p>
                No analytics software, tracking pixels, or advertising cookies are installed
                on this site. The site does store a single item in your browser's local
                storage to remember your light or dark theme preference. This is not a cookie
                and is not transmitted anywhere.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="font-display font-light text-fog text-2xl mb-4">
                How contact form data is used
              </h2>
              <p className="mb-4">
                When you submit the contact form, your name, email address, and message are
                sent via <strong className="text-fog font-medium">Resend</strong> (a
                transactional email service) to a private inbox. The data is used solely to
                respond to your enquiry.
              </p>
              <p>
                Your data is not stored in a database, not added to a mailing list, and not
                shared with or sold to any third party. Resend processes the transmission
                according to their own privacy policy.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="font-display font-light text-fog text-2xl mb-4">
                Third-party services
              </h2>
              <div className="space-y-4">
                <p>
                  <strong className="text-fog font-medium">YouTube (privacy-enhanced mode).</strong>{' '}
                  The Music page embeds a video using{' '}
                  <span className="font-code text-[11px]">youtube-nocookie.com</span>, which
                  is YouTube's privacy-enhanced embed mode. Google states this mode does not
                  store cookies on your device unless you play the video.
                </p>
                <p>
                  <strong className="text-fog font-medium">Vercel.</strong>{' '}
                  This site is hosted on Vercel, which may collect standard server logs
                  (IP address, browser type, page requested, timestamp) for operational
                  purposes. These logs are outside the control of this site.
                </p>
                <p>
                  <strong className="text-fog font-medium">External links.</strong>{' '}
                  Links to Apple Music, Audiomack, YouTube Music, LinkedIn, GitHub, and
                  Instagram lead to third-party platforms. Their own privacy policies govern
                  any data collected when you visit them.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="font-display font-light text-fog text-2xl mb-4">
                Your rights
              </h2>
              <p>
                Under Nigeria's Data Protection Act (2023) and, where applicable, the GDPR,
                you have the right to request access to, correction of, or deletion of any
                personal data submitted through this site. To exercise any of these rights,
                send an email to{' '}
                <a
                  href="mailto:hello@imoyinsampson.com"
                  className="text-amber hover:opacity-80 transition-opacity"
                >
                  hello@imoyinsampson.com
                </a>.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="font-display font-light text-fog text-2xl mb-4">
                Contact
              </h2>
              <p>
                Questions about this policy can be directed to{' '}
                <a
                  href="mailto:hello@imoyinsampson.com"
                  className="text-amber hover:opacity-80 transition-opacity"
                >
                  hello@imoyinsampson.com
                </a>.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-smoke hover:text-fog transition-colors"
              >
                ← Back to home
              </Link>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
}
