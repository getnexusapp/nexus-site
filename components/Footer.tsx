import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <Logo size={28} />
              <span className="font-display text-[14px] font-semibold tracking-[0.12em] text-ink">
                NEXUS
              </span>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-ink-faint">
              Your Notes. Your Browser. Your AI.
              <span className="block">Local First. Private by Default.</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                Product
              </p>
              <ul className="mt-3 space-y-2 text-[13px] text-ink-muted">
                <li>
                  <a href="https://nexusdesktop.netlify.app/#workspace" className="hover:text-ink">
                    Workspace
                  </a>
                </li>
                <li>
                  <a href="https://nexusdesktop.netlify.app/#features" className="hover:text-ink">
                    Features
                  </a>
                </li>
                <li>
                  <a href="https://nexusdesktop.netlify.app/#themes" className="hover:text-ink">
                    Themes
                  </a>
                </li>
                <li>
                  <a href="https://nexusdesktop.netlify.app/#privacy" className="hover:text-ink">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="https://nexusdesktop.netlify.app/#download" className="hover:text-ink">
                    Download
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                Social
              </p>
              <ul className="mt-3 space-y-2 text-[13px] text-ink-muted">
                <li>
                  <a
                    href="https://github.com/getnexusapp"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-ink"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/getnxsapp"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-ink"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/getnexusapp"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-ink"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                Legal
              </p>
              <ul className="mt-3 space-y-2 text-[13px] text-ink-muted">
                <li>
                  <a href="/license" className="hover:text-ink">
                    Software License
                  </a>
                </li>
                <li>
                  <a href="/terms-service" className="hover:text-ink">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:text-ink">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/eula" className="hover:text-ink">
                    EULA
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-[12px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Nexus Software · Built by Nawrass
            Andaloussi Dahman.
          </p>
        </div>
      </div>
    </footer>
  );
}
