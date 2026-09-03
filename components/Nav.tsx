import Link from 'next/link';
import Logo from './Logo';

const LINKS = [
  { href: '#workspace', label: 'Workspace' },
  { href: '#features', label: 'Features' },
  { href: '#themes', label: 'Themes' },
  { href: '#privacy', label: 'Privacy' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <Logo size={32} />
          <span className="font-display text-[15px] font-semibold tracking-[0.14em] text-ink">
            NEXUS
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/getnexusapp"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-[12px] text-ink-muted transition-colors hover:border-border-strong hover:text-ink sm:flex"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
