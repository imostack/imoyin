import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import umotech from '@/public/clients/umotech.png';
import sucexpress from '@/public/clients/sucexpress.png';
import yemiBenjamin from '@/public/clients/yemi-benjamin.png';
import surfaceMetal from '@/public/clients/surface-metal.png';
import aerojim from '@/public/clients/aerojim.png';
import oneVoiceAcademy from '@/public/clients/one-voice-academy.png';
import kehmarine from '@/public/clients/kehmarine.png';

interface Client {
  name: string;
  logo?: StaticImageData;
  // Logos differ in proportion; heights are tuned so they read at a similar weight
  height?: number;
  // Card on /work, when there is one
  slug?: string;
}

const clients: Client[] = [
  { name: 'Umotech Energy', logo: umotech, height: 30, slug: 'umotech' },
  { name: 'Sucexpress', logo: sucexpress, height: 26, slug: 'sucexpress' },
  { name: 'Yemi Benjamin', logo: yemiBenjamin, height: 21, slug: 'yemi-benjamin' },
  { name: 'Surface Metal', logo: surfaceMetal, height: 30, slug: 'surface-metal' },
  { name: 'AeroJim Energy', logo: aerojim, height: 25, slug: 'aerojim' },
  { name: 'One Voice Academy', logo: oneVoiceAcademy, height: 31, slug: 'one-voice-academy' },
  { name: 'Kehmarine', logo: kehmarine, height: 28, slug: 'kehmarine' },
  // No logo files yet — shown as names until they're supplied
  { name: 'Rise.ng' },
  { name: 'Moshomes' },
];

// Single-colour treatment. The strip sits on bg-canvas, which is dark in both themes, so logos are always white.
const mark = 'opacity-55 group-hover:opacity-90 transition-opacity duration-200';

function ClientMark({ client }: { client: Client }) {
  if (!client.logo) {
    return (
      <span className={`font-display text-xl font-light whitespace-nowrap leading-none text-fog ${mark}`}>
        {client.name}
      </span>
    );
  }
  return (
    <Image
      src={client.logo}
      alt={client.name}
      style={{ height: client.height, width: 'auto' }}
      sizes="160px"
      className={`brightness-0 invert ${mark}`}
    />
  );
}

export function TrustedBy() {
  return (
    <section className="bg-canvas border-t border-rim py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            <p className="font-code text-[11px] tracking-widest uppercase text-smoke flex-shrink-0">
              Trusted by
            </p>
            <ul className="flex flex-wrap items-center gap-x-10 gap-y-8">
              {clients.map(client => (
                <li key={client.name} className="flex items-center">
                  {client.slug ? (
                    <Link
                      href={`/work#${client.slug}`}
                      aria-label={`${client.name} — see the project`}
                      className="group flex items-center"
                    >
                      <ClientMark client={client} />
                    </Link>
                  ) : (
                    <span className="group flex items-center">
                      <ClientMark client={client} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
