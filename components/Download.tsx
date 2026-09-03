const PLATFORMS = [
  { name: 'macOS', note: 'Apple Silicon & Intel' },
  { name: 'Windows', note: '.exe & .msi' },
  { name: 'Linux', note: '.deb' },
];

export default function Download() {
  return (
    <section id="download" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-24">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-amber">
                Get Nexus
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                One app. Three platforms. Everything connected.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">
                Free to try, nothing to configure on a server somewhere. Download Nexus and open your first note in under a minute.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {PLATFORMS.map((platform) => (
                  <a
                    key={platform.name}
                    href="https://github.com/getnexusapp/releases/releases/tag/v5.0.0"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex min-w-[150px] flex-col rounded-lg border border-border-strong bg-surface-2 px-4 py-3 transition-colors hover:border-amber"
                  >
                    <span className="font-display text-[14px] font-semibold text-ink">
                      {platform.name}
                    </span>
                    <span className="mt-0.5 font-mono text-[11px] text-ink-faint">
                      {platform.note}
                    </span>
                  </a>
                ))}
              </div>

              <p className="mt-6 font-mono text-[11.5px] text-ink-faint">
                Public builds publish on{' '}
                <a
                  href="https://github.com/getnexusapp/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-ink-muted underline decoration-border-strong underline-offset-2 hover:text-ink"
                >
                  github.com/getnexusapp
                </a>{' '}
                as they go out.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-bg/60 p-6 font-mono text-[12.5px] leading-relaxed text-ink-muted">
              <p className="text-ink-faint">// what's inside</p>
              <p className="mt-2">
                <span className="text-slate">runtime</span> = Tauri + Rust
              </p>
              <p>
                <span className="text-slate">ui</span> = React + TypeScript
              </p>
              <p>
                <span className="text-slate">storage</span> = SQLite, on disk
                storage
              </p>
              <p>
                <span className="text-slate">search</span> = Local embedding
                model
              </p>
              <p>
                <span className="text-slate">assistant</span> = Your own API key
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
