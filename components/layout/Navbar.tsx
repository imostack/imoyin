'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';

const links = [
  { label: 'About',      href: '/about' },
  { label: 'Technology', href: '/technology' },
  { label: 'Ventures',   href: '/ventures' },
  { label: 'Insights',   href: '/insights' },
  { label: 'Music',      href: '/music' },
];

export function Navbar() {
  const scrolled  = useScrolled(48);
  const pathname  = usePathname();
  const [open, setOpen]   = useState(false);
  const [dark, setDark]   = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const sys    = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored === 'dark' || (!stored && sys);
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const isHome       = pathname === '/';
  const transparent  = isHome && !scrolled && !open;

  const navBg = transparent
    ? 'bg-transparent'
    : 'bg-[var(--bg)]/95 backdrop-blur border-b border-[var(--border)]';

  const textColor = transparent ? 'text-fog' : 'text-[var(--fg)]';
  const mutedText = transparent ? 'text-fog/50 hover:text-fog' : 'text-[var(--fg-2)] hover:text-[var(--fg)]';

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${navBg}`}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-14 lg:h-16 flex items-center justify-between">
          <Link href="/" className={`font-code text-sm font-medium tracking-widest ${textColor} transition-colors`}>
            IS<span className="text-amber">.</span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors duration-150 ${
                  pathname === l.href ? 'text-amber dark:text-amber' : mutedText
                }`}
              >
                {l.label}
              </Link>
            ))}

            <button onClick={toggleTheme} className={`${mutedText} transition-colors p-1`} aria-label="Toggle theme">
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <Link
              href="/work-with-me"
              className={`text-sm px-4 py-2 border transition-colors duration-150 ${
                transparent
                  ? 'border-fog/20 text-fog hover:border-fog/60'
                  : 'border-[var(--border)] text-[var(--fg-2)] hover:border-amber hover:text-amber'
              }`}
            >
              Work with me
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-3">
            <button onClick={toggleTheme} className={`${mutedText} p-1`} aria-label="Toggle theme">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => setOpen(v => !v)} className={`${textColor} p-1`} aria-label="Menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-canvas flex flex-col px-8 pt-24 pb-12 transition-all duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-6">
          {[...links, { label: 'Work With Me', href: '/work-with-me' }].map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-fog/70 hover:text-fog transition-colors font-light"
              style={{ transitionDelay: open ? `${i * 50}ms` : '0ms' }}
            >
              {l.label}
            </Link>
          ))}

        </nav>

        <div className="mt-auto pt-8 border-t border-rim">
          <Link href="/contact" onClick={() => setOpen(false)}
            className="text-xs text-smoke tracking-widest uppercase hover:text-fog transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
