import Link from 'next/link';
import { Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, InstagramIcon } from '@/components/ui/SocialIcons';

const nav = {
  Build: [
    { label: 'Technology',   href: '/technology' },
    { label: 'Ventures',     href: '/ventures' },
    { label: 'Work With Me', href: '/work-with-me' },
  ],
  Explore: [
    { label: 'About',    href: '/about' },
    { label: 'Insights', href: '/insights' },
    { label: 'Music',    href: '/music' },
    { label: 'Contact',  href: '/contact' },
  ],
};

const socials = [
  { Icon: LinkedInIcon,   label: 'LinkedIn',  href: 'https://www.linkedin.com/in/imoyinsampson/' },
  { Icon: GitHubIcon,     label: 'GitHub',    href: 'https://github.com/imostack' },
  { Icon: InstagramIcon,  label: 'Instagram', href: 'https://www.instagram.com/imoyins' },
  { Icon: Mail,           label: 'Email',     href: 'mailto:hello@imoyinsampson.com' },
];

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-rim">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <p className="font-display text-fog text-4xl font-light leading-tight mb-4">
              Imoyin<br />
              <span className="text-amber">Sampson</span>
            </p>
            <p className="text-smoke text-sm leading-relaxed max-w-xs mt-3">
              Software engineer, co-founder, and saxophonist. Building software,
              systems and companies that help businesses grow.
              Port Harcourt, Nigeria.
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs tracking-[0.25em] uppercase text-smoke mb-5 font-code">
                {group}
              </p>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-smoke hover:text-fog transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-rim pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
          <p className="font-code text-xs text-faint tracking-wide">
            © {new Date().getFullYear()} Imoyin Sampson
          </p>
          <div className="flex items-center gap-5">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-smoke hover:text-amber transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
