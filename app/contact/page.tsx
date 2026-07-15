import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, MapPin } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, InstagramIcon } from '@/components/ui/SocialIcons';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Imoyin Sampson — software engineering, product partnerships, advisory, and collaborations.',
};

const socials = [
  { icon: LinkedInIcon,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/imoyinsampson/', handle: 'Imoyin Sampson' },
  { icon: GitHubIcon,    label: 'GitHub',    href: 'https://github.com/imostack',                handle: '@imostack' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/imoyins',         handle: '@imoyins' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-36 pb-20 border-b border-rim">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-8">
              Contact
            </p>
            <h1 className="font-display font-light text-fog leading-[0.88] mb-8"
              style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}>
              Say hello.<br />
              <span className="text-amber">Let's talk.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="max-w-xl">
            <p className="text-smoke text-lg leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just
              want to connect — my inbox is always open. I read every message.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-surface border-b border-rim py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-10">
              <AnimatedSection>
                <h2 className="font-display font-light text-fog text-3xl mb-6">
                  Get in touch
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-2 border border-rim mt-0.5 flex-shrink-0">
                      <Mail size={16} className="text-amber" />
                    </div>
                    <div>
                      <p className="font-code text-[11px] text-smoke tracking-wide mb-1">Email</p>
                      <a
                        href="mailto:hello@imoyinsampson.com"
                        className="text-sm text-fog hover:text-amber transition-colors"
                      >
                        hello@imoyinsampson.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 border border-rim mt-0.5 flex-shrink-0">
                      <MapPin size={16} className="text-amber" />
                    </div>
                    <div>
                      <p className="font-code text-[11px] text-smoke tracking-wide mb-1">Location</p>
                      <p className="text-sm text-fog">Port Harcourt, Nigeria</p>
                      <p className="font-code text-[11px] text-faint mt-1">
                        Available for remote work worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="border-t border-rim" />
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-5">
                  Connect online
                </p>
                <div className="space-y-3">
                  {socials.map(({ icon: Icon, label, href, handle }) => (
                    <a key={label} href={href} className="flex items-center gap-4 group">
                      <div className="p-2 border border-rim group-hover:border-amber/40 transition-colors flex-shrink-0">
                        <Icon
                          size={16}
                          className="text-smoke group-hover:text-amber transition-colors"
                        />
                      </div>
                      <div>
                        <p className="font-code text-[11px] text-smoke">{label}</p>
                        <p className="text-sm text-fog group-hover:text-amber transition-colors">
                          {handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="border border-amber/20 bg-amber/[0.03] p-6">
                  <p className="font-code text-[11px] text-amber tracking-widest uppercase mb-2">
                    Response time
                  </p>
                  <p className="text-sm text-fog font-medium">Within 48 hours</p>
                  <p className="font-code text-[11px] text-smoke mt-2 leading-relaxed">
                    I personally read and respond to all messages. For urgent matters,
                    note it in your message.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
