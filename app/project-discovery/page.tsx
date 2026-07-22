import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ProjectDiscoveryWizard } from '@/components/project-discovery/ProjectDiscoveryWizard';
import { Clock, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Project Discovery Questionnaire',
  description:
    'Start a custom software engagement with Imoyin Sampson — Founder, Software Engineer, and Product Architect. A structured discovery process covering business context, scope, and requirements.',
};

export default function ProjectDiscoveryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-36 pb-16 border-b border-rim">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke mb-8">
              Project Discovery Questionnaire
            </p>
            <h1 className="font-display font-light text-fog leading-[0.95] mb-8"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Before a proposal,<br />
              <span className="text-amber">I need to understand the business.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="max-w-2xl">
            <p className="text-smoke text-lg leading-relaxed mb-8">
              I&apos;m Imoyin Sampson — Founder, Software Engineer, and Product Architect.
              I design and build custom software for businesses that need something
              built right the first time, not shipped fast and patched later. This
              questionnaire replaces the back-and-forth intro call with a structured
              brief I can actually work from.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-smoke">
                <Clock size={15} className="text-amber" />
                <span className="font-code text-[11px] tracking-wide uppercase">
                  Takes about 10–15 minutes
                </span>
              </div>
              <div className="flex items-center gap-2 text-smoke">
                <ShieldCheck size={15} className="text-amber" />
                <span className="font-code text-[11px] tracking-wide uppercase">
                  Confidential — reviewed by me personally
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Wizard */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <AnimatedSection delay={0.1}>
            <ProjectDiscoveryWizard />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
