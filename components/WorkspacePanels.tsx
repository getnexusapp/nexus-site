type Panel = {
  eyebrow: string;
  title: string;
  copy: string;
  mock: React.ReactNode;
};

function Dots() {
  return (
    <div className="flex gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-surface-3" />
      <span className="h-2.5 w-2.5 rounded-full bg-surface-3" />
      <span className="h-2.5 w-2.5 rounded-full bg-surface-3" />
    </div>
  );
}

const PANELS: Panel[] = [
  {
    eyebrow: '01 — Notes',
    title: 'Notes that build themselves into a knowledge graph',
    copy: 'Write naturally and let Nexus connect the dots. Add #tags as you write, and Nexus automatically turns those relationships into a real, navigable knowledge graph. Your notes, links, and tags become the structure, revealing connections between ideas as your knowledge grows. Explore related concepts, follow ideas, and see how everything fits together — all while your work stays saved locally with automatic version history, so nothing gets lost.',
    mock: (
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <Dots />
          <span className="font-mono text-[10px] text-ink-faint">
            notes / research
          </span>
        </div>
        <div className="flex-1 space-y-2 px-4 py-4">
          <div className="h-3 w-2/3 rounded bg-surface-3" />
          <div className="h-2 w-full rounded bg-surface-2" />
          <div className="h-2 w-5/6 rounded bg-surface-2" />
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="rounded-full border border-amber/30 bg-amber/10 px-2 py-0.5 font-mono text-[10px] text-amber">
              Onboarding Draft
            </span>
            <span className="rounded-full border border-slate/30 bg-slate/10 px-2 py-0.5 font-mono text-[10px] text-slate">
              #roadmap
            </span>
          </div>
          <div className="h-2 w-3/4 rounded bg-surface-2" />
        </div>
      </div>
    ),
  },
  {
    eyebrow: '02 — Browser',
    title: 'A real native private browser, built into Nexus',
    copy: "Browse the web without leaving a history behind. Nexus opens websites in native browser tabs, but unlike a traditional browser, it doesn't keep a persistent record of your browsing activity. No browsing history, or a persistent browsing trail. When you close your session, there's nothing waiting in Nexus for someone else to find later. Your browsing stays temporary instead of becoming another permanent record on your device.",
    mock: (
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="rounded-t-md border border-b-0 border-border bg-surface-2 px-3 py-1.5 font-mono text-[10px] text-ink-muted">
            search.brave.com
          </span>
          <span className="ml-auto font-mono text-[10px] text-ink-faint">
            + new tab
          </span>
        </div>
        <div className="flex-1 space-y-2 px-4 py-4">
          <div className="h-2 w-full rounded bg-surface-2" />
          <div className="h-2 w-2/3 rounded bg-surface-2" />
          <div className="h-16 w-full rounded bg-surface-2" />
        </div>
      </div>
    ),
  },
  {
    eyebrow: '03 — Assistant',
    title: "An assistant that already knows what you're reading",
    copy: "Ask a question and Nexus searches your notes on-device, finds the relevant context, and combines it with the page open in your Browser tab. No uploading files. No copying and pasting. No explaining your context from scratch. Because your notes and research are already connected, the Assistant can answer questions using what you've written and what you're reading right now. Your context is already there. Just ask.",
    mock: (
      <div className="flex h-full flex-col justify-end gap-2 px-4 py-4">
        <div className="self-end max-w-[80%] rounded-xl rounded-br-sm bg-surface-3 px-3 py-2 font-mono text-[10.5px] text-ink">
          Does this page contradict my notes on caching?
        </div>
        <div className="max-w-[85%] self-start rounded-xl rounded-bl-sm border border-border bg-surface-2 px-3 py-2 font-mono text-[10.5px] leading-relaxed text-ink-muted">
          Comparing against “Cache Strategy” and the open tab — here’s where
          they differ…
        </div>
      </div>
    ),
  },
];

export default function WorkspacePanels() {
  return (
    <section id="workspace" className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-24">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-amber">
            One window
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Three tools that were built to sit next to each other
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
            Most note apps stop at notes. Nexus keeps a real browser and an
            assistant in the same window, so context never has to be copy-pasted
            between four different apps.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PANELS.map((panel) => (
            <div
              key={panel.eyebrow}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="h-[190px] border-b border-border bg-bg/40">
                {panel.mock}
              </div>
              <div className="flex-1 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                  {panel.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {panel.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                  {panel.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
