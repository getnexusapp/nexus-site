import GraphCanvas from './GraphCanvas';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hairline">
      <div className="pointer-events-none absolute inset-x-0 top-[-140px] h-[420px] bg-[radial-gradient(closest-side,rgba(226,167,94,0.14),transparent)]" />

      <div className="relative mx-auto grid max-w-content gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pb-32 lg:pt-28">
        <div>
          <h1 className="text-balance font-display text-[42px] font-semibold leading-[1.08] text-ink sm:text-[52px] lg:text-[58px]">
            Your Notes.
            <br />
            Your Browser.
            <br />
            Your AI.
            <br />
            <span className="text-amber">All Connected.</span>
          </h1>

          <div className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-ink-muted">
            <p>
              Nexus brings your notes, browser, and AI together so you can
              research, write, and ask questions without switching apps or
              constantly uploading information.
            </p>

            <p className="mt-4">
              Every note is saved locally, connected through the knowledge
              graph, and automatically available to your AI.
            </p>

            <p className="mt-4">
              No uploads. No rebuilding context. Just open Nexus and keep
              working. Your workspace already knows what matters.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="rounded-md bg-amber px-6 py-3 font-mono text-[13px] font-medium text-bg transition-colors hover:bg-amber-hover"
            >
              Download Nexus
            </a>

            <a
              href="#workspace"
              className="rounded-md border border-border px-6 py-3 font-mono text-[13px] text-ink transition-colors hover:border-border-strong"
            >
              See how it works
            </a>
          </div>
        </div>

        <GraphCanvas />
      </div>
    </section>
  );
}
