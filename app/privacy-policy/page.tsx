import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Nexus Privacy Policy',
  description:
    'How Nexus handles information, including local storage, AI features, third-party services, browser activity, and privacy rights.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Nexus Privacy Policy" updated="August 23, 2026">
      <p>
        <strong>Last Updated: August 23, 2026</strong>
      </p>

      <p>
        Nexus is developed and operated by{' '}
        <strong>Nawrass Andaloussi Dahman</strong>, an independent software
        developer based in Morocco.
      </p>

      <p>
        This Privacy Policy explains how Nexus handles information when you
        use the Nexus desktop application ("Nexus" or the "Software").
      </p>

      <p>Nexus is designed around a simple principle:</p>

      <blockquote>
        <p>
          <strong>
            Your workspace belongs on your device, not on our servers.
          </strong>
        </p>
      </blockquote>

      <p>
        Nexus is designed as a local-first application. Nexus does not
        currently operate a cloud backend or require an online account to
        store, synchronize, or process your workspace.
      </p>

      <h2>1. Information Nexus Does Not Collect</h2>

      <p>
        When you use the Nexus desktop application, Nexus does not
        intentionally collect or store the following information on
        Nexus-operated servers:
      </p>

      <ul>
        <li>Your notes;</li>
        <li>Your local workspace;</li>
        <li>Your local SQLite database;</li>
        <li>Your local search index;</li>
        <li>Your locally generated embeddings;</li>
        <li>Your local version history;</li>
        <li>Your local Trash contents;</li>
        <li>Your locally stored AI conversation history;</li>
        <li>Your API keys or AI provider credentials;</li>
        <li>The contents of your AI conversations; and</li>
        <li>The contents of websites you browse through Nexus.</li>
      </ul>

      <p>
        Nexus does not currently operate a server that receives or stores your
        workspace data.
      </p>

      <p>
        No Nexus account is required to use the core desktop application.
      </p>

      <h2>2. Local Storage</h2>

      <p>
        Nexus is designed to store your workspace locally on your device.
      </p>

      <p>
        Your notes and related workspace information are stored in local files
        and databases on your computer.
      </p>

      <p>This may include:</p>

      <ul>
        <li>Notes;</li>
        <li>Folders;</li>
        <li>Tags;</li>
        <li>Wiki links;</li>
        <li>Backlinks;</li>
        <li>Version history;</li>
        <li>Trash;</li>
        <li>Search indexes;</li>
        <li>Embeddings;</li>
        <li>Browser-related application data;</li>
        <li>AI conversation history; and</li>
        <li>Other application settings.</li>
      </ul>

      <p>
        This information is stored locally rather than being uploaded to a
        Nexus cloud service.
      </p>

      <p>
        You are responsible for securing your device and maintaining backups
        of important information.
      </p>

      <h2>3. Local Search and Embeddings</h2>

      <p>
        Nexus provides search functionality, including semantic or
        meaning-based search.
      </p>

      <p>
        Where semantic search is used, the embedding model runs locally on
        your device.
      </p>

      <p>
        Your notes are not sent to a Nexus-operated server merely to perform
        searches or generate local embeddings.
      </p>

      <p>
        The resulting search indexes and embeddings are stored locally as part
        of your Nexus workspace.
      </p>

      <h2>4. AI Assistant and Bring Your Own Key (BYOK)</h2>

      <p>
        Nexus provides an optional AI Assistant using a{' '}
        <strong>Bring Your Own Key (BYOK)</strong> architecture.
      </p>

      <p>
        Nexus does not provide a Nexus-hosted AI model or AI API server.
      </p>

      <p>
        To use the AI Assistant, you choose an AI provider and provide the
        credentials required by that provider.
      </p>

      <p>
        When you submit an AI request, information required to generate the
        response may be sent directly from your device to the AI provider you
        selected.
      </p>

      <p>Depending on your request, this may include:</p>

      <ul>
        <li>Your question or prompt;</li>
        <li>Relevant portions of your notes;</li>
        <li>
          Information from the web page you are currently using as context;
        </li>
        <li>Other context selected by you or required by the AI feature; and</li>
        <li>
          Other information necessary for the provider to process your
          request.
        </li>
      </ul>

      <h3>Nexus does not operate an intermediary server</h3>

      <p>
        Nexus is designed so that your AI request does not need to pass
        through a Nexus-operated backend.
      </p>

      <p>
        Nexus does not intentionally receive, log, store, or sell the contents
        of your AI requests or responses.
      </p>

      <p>
        The AI provider you choose receives the information necessary to
        process your request.
      </p>

      <h2>5. AI Provider Privacy</h2>

      <p>AI providers are independent third parties.</p>

      <p>
        When you use an AI provider through Nexus, that provider may collect,
        retain, process, or otherwise use information according to its own
        terms and privacy policy.
      </p>

      <p>
        Nexus does not control the privacy practices, retention policies,
        security, or data processing practices of the AI provider you choose.
      </p>

      <p>
        You are responsible for reviewing the applicable terms and privacy
        policy of your chosen AI provider.
      </p>

      <p>
        For example, if you connect Nexus to an AI API, the API provider may
        process your request according to the agreement and settings applicable
        to your account.
      </p>

      <h2>6. API Keys and Credentials</h2>

      <p>
        Nexus is designed to store AI provider credentials locally using
        security facilities provided by your operating system where available.
      </p>

      <p>
        Nexus does not intentionally upload your API keys to a Nexus-operated
        server.
      </p>

      <p>
        You are responsible for protecting your API keys and other
        credentials.
      </p>

      <p>
        You are also responsible for any usage fees or charges associated with
        the credentials you provide to an AI provider.
      </p>

      <p>
        If you believe an API key has been compromised, you should immediately
        revoke or rotate it through the relevant provider.
      </p>

      <h2>7. Browser</h2>

      <p>Nexus includes a built-in web browser.</p>

      <p>
        When you visit a website through the Nexus browser, your browser
        requests may communicate directly with the website and other services
        operated by third parties.
      </p>

      <p>Those websites may collect information such as:</p>

      <ul>
        <li>IP address;</li>
        <li>Browser and device information;</li>
        <li>Cookies;</li>
        <li>Authentication information;</li>
        <li>Usage information; and</li>
        <li>Other information according to their own privacy policies.</li>
      </ul>

      <p>
        Nexus does not control the privacy practices of websites that you
        visit.
      </p>

      <p>
        Your use of those websites is governed by their respective terms and
        privacy policies.
      </p>

      <h2>8. Websites and External Services</h2>

      <p>
        Nexus may provide links or functionality that allows you to interact
        with external websites and services.
      </p>

      <p>External websites and services are not operated by Nexus.</p>

      <p>Nexus is not responsible for:</p>

      <ul>
        <li>Their privacy practices;</li>
        <li>Their security;</li>
        <li>Their availability;</li>
        <li>Their content;</li>
        <li>Their data retention;</li>
        <li>Their use of cookies;</li>
        <li>Their collection of personal information; or</li>
        <li>Their compliance with applicable privacy laws.</li>
      </ul>

      <p>
        You should review the privacy policy of each external service you use.
      </p>

      <h2>9. Backups and Exports</h2>

      <p>
        Nexus is designed so that backups and exports are controlled by you.
      </p>

      <p>
        If you export your notes, copy your workspace, or create a backup, the
        resulting files are under your control.
      </p>

      <p>
        If you upload those files to another service, send them to another
        person, or store them using a cloud-storage provider, that provider
        may process the information according to its own policies.
      </p>

      <p>
        Nexus does not control what happens to your data after you
        intentionally transfer it outside the application.
      </p>

      <h2>10. No Nexus Cloud Synchronization</h2>

      <p>
        Nexus does not currently provide automatic cloud synchronization of
        your workspace.
      </p>

      <p>
        Your workspace does not automatically synchronize to Nexus-operated
        servers.
      </p>

      <p>
        If cloud synchronization or other online services are introduced in a
        future version of Nexus, the applicable privacy practices will be
        disclosed before or when those features become available, as required
        by applicable law.
      </p>

      <h2>11. Website, Downloads, and GitHub</h2>

      <p>
        The Nexus desktop application is separate from websites, repositories,
        download services, and other infrastructure used to distribute Nexus.
      </p>

      <p>
        For example, Nexus may use third-party services such as GitHub to host
        source code, documentation, releases, or issue trackers.
      </p>

      <p>
        Those services may collect information according to their own privacy
        policies.
      </p>

      <p>
        Nexus does not control the information collected by third-party
        hosting or distribution platforms.
      </p>

      <p>
        If you interact with Nexus through a third-party platform, that
        platform's privacy policy applies to the information it collects.
      </p>

      <h2>12. Analytics and Telemetry</h2>

      <p>
        Nexus is designed to avoid unnecessary analytics and telemetry.
      </p>

      <p>
        Nexus does not intentionally collect the contents of your notes,
        workspace, AI conversations, or local search index for analytics
        purposes.
      </p>

      <p>
        If future versions of Nexus introduce optional or necessary telemetry,
        diagnostics, crash reporting, or analytics, Nexus will provide
        appropriate information about such functionality and, where required,
        obtain appropriate consent or provide applicable controls.
      </p>

      <h2>13. Crash Reports and Diagnostics</h2>

      <p>
        Nexus may in the future provide optional diagnostic or crash-reporting
        functionality.
      </p>

      <p>
        If such functionality is introduced, the information collected will be
        described in the applicable documentation or user interface.
      </p>

      <p>
        Nexus does not intentionally include the contents of your private
        workspace in a crash report unless you explicitly choose to provide
        that information.
      </p>

      <h2>14. Security</h2>

      <p>
        Nexus is designed to minimize unnecessary transmission of user data.
      </p>

      <p>
        However, no software or computer system can be guaranteed to be
        completely secure.
      </p>

      <p>
        Your device, operating system, installed software, network connection,
        AI provider, browser websites, and third-party services may introduce
        security risks outside Nexus's control.
      </p>

      <p>You are responsible for:</p>

      <ul>
        <li>Securing your device;</li>
        <li>Using appropriate operating-system security;</li>
        <li>Protecting your API keys;</li>
        <li>Maintaining backups;</li>
        <li>Keeping software updated; and</li>
        <li>Deciding what information to submit to external services.</li>
      </ul>

      <h2>15. Children's Privacy</h2>

      <p>Nexus is not specifically directed at children.</p>

      <p>
        You should not use Nexus in violation of applicable age requirements or
        laws in your jurisdiction.
      </p>

      <p>
        If you are a parent or guardian and believe a child has provided
        personal information to Nexus through a service operated by Nexus, you
        may contact us using the information below.
      </p>

      <h2>16. International Users</h2>

      <p>
        Nexus is developed by Nawrass Andaloussi Dahman in Morocco and may be
        used internationally.
      </p>

      <p>
        Because Nexus is designed to store workspace information locally,
        Nexus does not currently require your workspace to be transferred to
        Nexus-operated servers in another country.
      </p>

      <p>
        However, information may be transmitted to third-party services when
        you choose to use them, including AI providers and websites accessed
        through the built-in browser.
      </p>

      <p>Those services may operate in countries different from your own.</p>

      <h2>17. Your Privacy Rights</h2>

      <p>
        Depending on where you live, you may have legal rights concerning
        personal information processed by a service provider.
      </p>

      <p>
        Because Nexus is designed not to collect or store your workspace on
        Nexus-operated servers, many categories of workspace information
        remain under your direct control on your device.
      </p>

      <p>
        If you believe Nexus itself has processed personal information about
        you and you have a privacy-related request, you may contact us using
        the information below.
      </p>

      <p>
        Nothing in this Privacy Policy is intended to limit rights that cannot
        legally be limited under applicable law.
      </p>

      <h2>18. Changes to This Privacy Policy</h2>

      <p>This Privacy Policy may be updated from time to time.</p>

      <p>
        If material changes are made, we may provide notice through the Nexus
        website, Software, repository, or another appropriate method.
      </p>

      <p>
        The "Last Updated" date at the beginning of this Privacy Policy
        indicates when it was most recently revised.
      </p>

      <h2>19. Contact</h2>

      <p>
        Privacy questions and requests may be directed to:
      </p>

      <p>
        <strong>Nawrass Andaloussi Dahman</strong>
        <br />
        Developer and Creator of Nexus
        <br />
        Morocco
      </p>

      <p>
        <strong>Email:</strong>{' '}
        <a href="mailto:getnexusupport@gmail.com">
          getnexusupport@gmail.com
        </a>
      </p>
    </LegalLayout>
  );
}
