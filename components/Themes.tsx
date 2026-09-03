// Pulled directly from the product's own theme.ts — real shipped
// values, not illustrative placeholders.
const THEMES = [
  {
    id: 'default',
    label: 'Darkness',
    description: 'The original near-black look Nexus always had.',
    bg: '#111111',
    text: '#eeeeee',
    accent: '#8fb8ff',
  },
  {
    id: 'dusk',
    label: 'Dusk',
    description: 'Deep navy-blue instead of neutral black, cooler overall.',
    bg: '#0a0e1a',
    text: '#edf1fc',
    accent: '#6ea8ff',
  },
  {
    id: 'daylight',
    label: 'Daylight',
    description: 'White and gray — a proper light mode.',
    bg: '#ffffff',
    text: '#16171a',
    accent: '#2f6fed',
  },
  {
    id: 'dawn',
    label: 'Dawn',
    description: 'Warm charcoal with an amber accent instead of blue.',
    bg: '#161412',
    text: '#f0ebe3',
    accent: '#e0a85e',
  },
];

export default function Themes() {
  return (
    <section id="themes" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
              Appearance
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Four themes, switched instantly
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Every color in Nexus is a CSS variable, so switching themes is
              instant and never requires a restart.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {THEMES.map((theme) => (
            <div
              key={theme.id}
              className="overflow-hidden rounded-xl border border-border bg-surface"
            >
              <div
                className="flex h-24 items-center justify-between px-4"
                style={{ backgroundColor: theme.bg }}
              >
                <span
                  className="font-display text-lg font-bold"
                  style={{ color: theme.text }}
                >
                  Aa
                </span>
                <span
                  className="h-3.5 w-3.5 rounded-full"
                  style={{ backgroundColor: theme.accent }}
                />
              </div>
              <div className="p-4">
                <p className="font-display text-[14px] font-semibold text-ink">
                  {theme.label}
                </p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-ink-muted">
                  {theme.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
