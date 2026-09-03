const RECEIPTS = [
  "Notes live in a local SQLite file on your disk — there's no Nexus server to sync them to.",
  'No account, no login, no usage tracking baked into the app.',
  'Semantic search runs through a small model loaded in-app via WebAssembly — nothing about your notes leaves the device to search them.',
  'Ask the assistant a question, and only the relevant note excerpts (plus the open pages, if you ask about them) are sent to the AI provider — never your whole vault.',
  "An API key you add is stored in your operating system's own credential store, not in a browser-readable file.",
];

export default function Privacy() {
  return (
    <section id="privacy" className="border-t border-border">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-amber">
            Privacy
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Local First - Private by Default
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">
            Here's what it actually means for Nexus, plainly, so you can judge
            it for yourself rather than take our word for it.
          </p>
        </div>

        <ul className="space-y-4">
          {RECEIPTS.map((line) => (
            <li
              key={line}
              className="flex gap-3 rounded-xl border border-border bg-surface p-4"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber"
                aria-hidden="true"
              />
              <p className="text-[13.5px] leading-relaxed text-ink-muted">
                {line}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
