const STEPS = [
  {
    step: '01',
    title: 'Write a link',
    copy: "Type anywhere in a note, the same way you'd write a normal sentence.",
  },
  {
    step: '02',
    title: 'Nexus resolves it',
    copy: 'On automatic save, the title is matched against your other notes — no folder structure or manual linking needed.',
  },
  {
    step: '03',
    title: 'An edge is stored',
    copy: 'The connection is written to a local link table, in both directions: backlinks and outgoing links.',
  },
  {
    step: '04',
    title: 'It shows up in the graph',
    copy: 'Open the Graph tab and every connected note is already there, sized by how many links it holds.',
  },
];

export default function HowItConnects() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-24">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-amber">
            Under the hood
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            From a typed link to a graph edge
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
            This is the actual sequence, not a simplification — it's the same
            four steps every time you type something.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, i) => (
            <li key={item.step} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl font-semibold text-ink-faint">
                  {item.step}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-px flex-1 bg-border sm:block"
                  />
                )}
              </div>
              <h3 className="mt-4 font-display text-[16px] font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                {item.copy}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
