import { Hero }             from '@/components/home/Hero';
import { TrustedBy }        from '@/components/home/TrustedBy';
import { WhatIBuild }       from '@/components/home/WhatIBuild';
import { SelectedWork }     from '@/components/home/SelectedWork';
import { FeaturedVentures } from '@/components/home/FeaturedVentures';
import { InsightsPreview }  from '@/components/home/InsightsPreview';
import { CTAStrip }         from '@/components/home/CTAStrip';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhatIBuild />
      <SelectedWork />
      <FeaturedVentures />
      <InsightsPreview />
      <CTAStrip />
    </>
  );
}
