type Feature = {
  tag: string;
  title: string;
  copy: string;
};

const FEATURES: Feature[] = [
  {
    tag: 'search',
    title: 'Semantic search, on-device',
    copy: 'A small embedding model runs locally to find notes by meaning, not just shared words — no API call, nothing sent anywhere to search your own writing.',
  },
  {
    tag: 'history',
    title: 'Version history done right',
    copy: 'Nexus quietly snapshots a note as you edit it, so an accidental rewrite or a bad find-and-replace is always one click from undone.',
  },
  {
    tag: 'trash',
    title: 'Deleting is reversible by default',
    copy: 'A deleted note moves to Trash, not the void. Everything about it — links, tags, history — stays intact until you empty it yourself or restore it.',
  },
  {
    tag: 'palette',
    title: 'A command palette for everything',
    copy: '⌘K jumps to any note, creates a folder, or switches tabs by typing a few letters — built for keeping both hands on the keyboard.',
  },
  {
    tag: 'backup',
    title: 'Your data, in formats you can leave with',
    copy: 'Export every note as plain Markdown, or back up the whole database to a single file. Nothing here is locked behind a proprietary format.',
  },
  {
    tag: 'credentials',
    title: 'Secrets live in your OS keychain',
    copy: "An API key you add is stored through your system's own credential store, never in a browser-readable file, and is never persisted anywhere else.",
  },
  {
    tag: 'themes',
    title: 'Four themes, one CSS variable away',
    copy: 'Darkness, Dusk, Daylight, and Dawn are built from the same token system — pick the one that matches how you want the room to feel.',
  },
  {
    tag: 'format',
    title: 'Pasting content awareness',
    copy: 'The editor understands what you paste and formats it accordingly — code becomes code blocks, structured text keeps its shape, and everything else gets the formatting it needs.',
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-24">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
            Details
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            The parts you notice after day one
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div key={feature.tag} className="bg-surface p-6">
              <span className="font-mono text-[11px] text-ink-faint">
                #{feature.tag}
              </span>
              <h3 className="mt-3 font-display text-[15px] font-semibold leading-snug text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                {feature.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
