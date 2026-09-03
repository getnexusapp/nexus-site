import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

type Props = {
  title: string;
  updated: string; // e.g. "September 3, 2026"
  children: React.ReactNode;
};

export default function LegalLayout({ title, updated, children }: Props) {
  return (
    <>
      <Nav />
      <main className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-20">
          <Link
            href="/"
            className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-faint transition-colors hover:text-ink"
          >
            ← Back to Nexus
          </Link>

          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.12em] text-amber">
            Legal
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 font-mono text-[12px] text-ink-faint">
            Last updated: {updated}
          </p>

          <div className="legal mt-12 max-w-[70ch] text-[15px] leading-relaxed text-ink-muted">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
