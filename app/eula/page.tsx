import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Nexus End User License Agreement',
  description:
    'The End User License Agreement governing the download, installation, access to, and use of the Nexus desktop application.',
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Nexus End User License Agreement"
      updated="September 2, 2026"
    >
      <p>
        This End User License Agreement ("Agreement") is a legal agreement
        between you, either an individual or an entity you represent
        ("You" or "User"), and <strong>Nawrass Andaloussi Dahman</strong>, an
        individual developer based in Morocco and the creator and current
        operator of the Nexus software ("Nexus," "we," "us," or "our").
      </p>

      <p>
        This Agreement governs your download, installation, access to, and use
        of the Nexus desktop application, including its software, features,
        updates, and accompanying documentation (collectively, the
        "Software").
      </p>

      <p>
        <strong>
          Nexus is currently an independently developed software product
          operated by Nawrass Andaloussi Dahman. No corporation named "Nexus,
          Inc." currently operates the Software or is a party to this
          Agreement. If Nexus is later transferred to or operated by a
          separate legal entity, this Agreement may be updated accordingly.
        </strong>
      </p>

      <p>
        <strong>
          BY DOWNLOADING, INSTALLING, ACCESSING, OR USING THE SOFTWARE, YOU
          ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY
          THIS AGREEMENT. IF YOU DO NOT AGREE TO THIS AGREEMENT, DO NOT
          DOWNLOAD, INSTALL, ACCESS, OR USE THE SOFTWARE.
        </strong>
      </p>

      <hr />

      <h2>1. Definitions</h2>

      <p>
        <strong>"Software"</strong> means the Nexus desktop application in
        object-code form, including its features, updates, and accompanying
        documentation. The Software does not include source code that is not
        expressly provided or licensed to you.
      </p>

      <p>
        <strong>"Your Content"</strong> means notes, text, files, information,
        browser-related content, AI conversation history, and other content
        that you create, import, access, or store using the Software.
      </p>

      <p>
        <strong>"Third-Party Provider"</strong> means an external service
        provider that you choose to connect to or use through the Software,
        including an AI provider accessed using credentials or an API key
        supplied by you.
      </p>

      <p>
        <strong>"Nexus"</strong> means the Nexus software product and, where
        the context requires, Nawrass Andaloussi Dahman as the current
        developer and operator of the Software.
      </p>

      <h2>2. Grant of License</h2>

      <p>
        Subject to your compliance with this Agreement, Nawrass Andaloussi
        Dahman grants you a limited, non-exclusive, non-transferable,
        non-sublicensable, revocable license to download, install, and use the
        Software in object-code form for your personal or internal business
        purposes on devices that you own or are authorized to control.
      </p>

      <p>
        This license does not transfer ownership of the Software or any
        intellectual property rights to you.
      </p>

      <p>
        All rights not expressly granted under this Agreement are reserved by
        Nawrass Andaloussi Dahman.
      </p>

      <h2>3. Restrictions</h2>

      <p>
        You shall not, and shall not knowingly permit or assist any third party
        to:
      </p>

      <ul>
        <li>
          (a) copy, modify, translate, or create derivative works based on the
          Software, except to the extent expressly permitted by applicable law;
        </li>
        <li>
          (b) reverse engineer, decompile, disassemble, or otherwise attempt
          to derive or access the source code, underlying structure,
          algorithms, or proprietary components of the Software, except to the
          limited extent that such restriction is prohibited by applicable law;
        </li>
        <li>
          (c) distribute, sell, rent, lease, sublicense, lend, publish, or
          otherwise transfer the Software or rights granted under this
          Agreement to a third party, except as expressly authorized by Nexus;
        </li>
        <li>
          (d) remove, alter, or obscure copyright, trademark, licensing, or
          other proprietary notices contained in or accompanying the Software;
        </li>
        <li>
          (e) use the Software to develop, train, or improve a competing
          product or service, to the extent permitted by applicable law;
        </li>
        <li>
          (f) circumvent, disable, or interfere with security, licensing,
          authentication, or other technical protections incorporated into the
          Software;
        </li>
        <li>(g) use the Software to violate any applicable law or regulation;</li>
        <li>
          (h) intentionally interfere with the normal operation of the Software
          or attempt to gain unauthorized access to functionality that is not
          made available to you.
        </li>
      </ul>

      <p>
        Nothing in this section is intended to restrict rights that cannot
        legally be restricted under applicable law.
      </p>

      <h2>4. Ownership and Intellectual Property</h2>

      <p>
        The Software is licensed, not sold.
      </p>

      <p>
        All rights, title, and interest in and to the proprietary portions of
        the Software, including its source code, object code, architecture,
        design, user interface, documentation, graphics, logos, and other
        proprietary elements, are owned by or licensed to Nawrass Andaloussi
        Dahman, except for third-party materials that are subject to their own
        licenses.
      </p>

      <p>
        Nothing in this Agreement grants you ownership of the Software or any
        intellectual property rights in the Software except for the limited
        license expressly granted in Section 2.
      </p>

      <p>
        The Nexus name, logo, and other branding are proprietary assets of
        Nexus and/or Nawrass Andaloussi Dahman to the extent protected by
        applicable law.
      </p>

      <h3>Feedback</h3>

      <p>
        If you voluntarily provide suggestions, ideas, bug reports, feature
        requests, or other feedback regarding the Software ("Feedback"), you
        grant Nawrass Andaloussi Dahman a worldwide, royalty-free, perpetual,
        irrevocable, transferable, and sublicensable right to use, reproduce,
        modify, distribute, display, and otherwise exploit that Feedback for
        any lawful purpose without compensation or attribution to you.
      </p>

      <h2>5. Local-First Architecture and Your Content</h2>

      <p>
        Nexus is designed as a <strong>local-first desktop application</strong>.
      </p>

      <p>
        Nexus does not currently operate a cloud service through which your
        local workspace is routinely synchronized or stored.
      </p>

      <h3>(a) Local Storage</h3>

      <p>
        Your Content is primarily stored locally on your device.
      </p>

      <p>
        Nexus stores notes and related workspace data in local application
        storage, including a local SQLite database where applicable.
      </p>

      <p>
        Nexus does not currently require you to create a Nexus online account
        to use the Software and does not currently require your notes to be
        uploaded to a Nexus-operated cloud service.
      </p>

      <p>
        Your local workspace remains on your device unless you explicitly
        choose to export, back up, copy, synchronize, or otherwise transmit it
        through a feature or external service.
      </p>

      <h3>(b) Local Search</h3>

      <p>
        Nexus's semantic search functionality is designed to operate locally on
        your device.
      </p>

      <p>
        Where Nexus uses an embedding model for semantic search, the model is
        intended to run locally rather than requiring your notes to be uploaded
        to a Nexus-operated server for indexing.
      </p>

      <h3>(c) Local Version History and Trash</h3>

      <p>
        Nexus may maintain version history, deleted content, and related
        workspace information locally on your device.
      </p>

      <p>
        These features are designed to operate on your local workspace and are
        not intended to upload your content to Nexus-operated servers.
      </p>

      <h3>(d) Bring Your Own Key (BYOK) AI</h3>

      <p>
        Nexus's optional AI Assistant uses a{' '}
        <strong>Bring Your Own Key (BYOK)</strong> model where supported.
      </p>

      <p>
        To use the AI Assistant, you may provide credentials, such as an API
        key, for an AI provider or other Third-Party Provider that you choose.
      </p>

      <p>
        When you submit a request through the AI Assistant, information
        necessary to process that request may be transmitted from your device
        to the Third-Party Provider you selected.
      </p>

      <p>
        Depending on your request and configuration, this information may
        include:
      </p>

      <ul>
        <li>the message you submitted;</li>
        <li>relevant portions of Your Content;</li>
        <li>relevant information from a web page being used as context; and</li>
        <li>
          other information necessary for the Third-Party Provider to generate
          a response.
        </li>
      </ul>

      <p>
        The exact information transmitted depends on the features you use and
        the configuration of your Third-Party Provider.
      </p>

      <h3>(e) AI Credentials</h3>

      <p>
        Where supported by the Software, API keys and other credentials may be
        stored locally using operating-system or application-level
        credential-storage mechanisms.
      </p>

      <p>
        Your credentials are not intended to be stored in a Nexus-operated
        cloud database.
      </p>

      <p>
        You are responsible for protecting your credentials and for any
        charges, usage, or activity associated with credentials you provide to
        a Third-Party Provider.
      </p>

      <h3>(f) AI Provider Responsibility</h3>

      <p>
        Third-Party Providers are independent from Nexus.
      </p>

      <p>
        When you use a Third-Party Provider through Nexus, your use of that
        provider is governed by the provider's own terms, privacy policy, data
        practices, pricing, and security practices.
      </p>

      <p>
        Nexus does not control how a Third-Party Provider receives, processes,
        stores, uses, or deletes information submitted to that provider.
      </p>

      <p>
        You are responsible for reviewing the policies and terms of any
        Third-Party Provider before using its services with Nexus.
      </p>

      <h3>(g) Local AI Chat History</h3>

      <p>
        Nexus may save AI conversation history locally on your device.
      </p>

      <p>
        Such local chat history is part of Your Content and is not currently
        intended to be stored by Nexus on a Nexus-operated cloud service.
      </p>

      <h3>(h) Built-In Browser</h3>

      <p>
        Nexus includes a browser that allows you to access third-party websites
        and online services.
      </p>

      <p>
        When you access a third-party website through the Nexus browser, that
        website may communicate directly with its own servers and may collect
        information according to its own privacy policy and terms.
      </p>

      <p>
        Nexus does not control or guarantee the availability, accuracy,
        security, legality, content, or privacy practices of third-party
        websites.
      </p>

      <p>
        Your use of third-party websites is governed by the applicable terms
        and policies of those third parties.
      </p>

      <h3>(i) Data Transmission</h3>

      <p>
        Nexus is designed so that local workspace operations, including local
        storage and local semantic search, can operate without requiring your
        workspace to be transmitted to a Nexus-operated cloud service.
      </p>

      <p>
        Information may leave your device when you explicitly use an external
        service or a feature that requires network communication, including the
        AI Assistant, third-party websites, updates, or other network-dependent
        functionality.
      </p>

      <p>
        You are responsible for deciding what information you submit to
        Third-Party Providers and third-party websites.
      </p>

      <h2>6. No Nexus Cloud Account or Cloud Storage</h2>

      <p>
        Nexus does not currently require an online Nexus account to use the
        Software.
      </p>

      <p>
        Nexus does not currently provide or require a Nexus-operated cloud
        storage service for your workspace.
      </p>

      <p>
        Nexus does not currently provide automatic cloud synchronization of
        your notes.
      </p>

      <p>
        If Nexus introduces online services, accounts, synchronization,
        analytics, or other network-based features in the future, those
        features may be governed by additional or updated terms and privacy
        disclosures.
      </p>

      <h2>7. Backups and Data Loss</h2>

      <p>
        Because Nexus is designed around local storage, you are responsible for
        maintaining backups of Your Content.
      </p>

      <p>
        Nexus may provide tools for exporting, copying, or backing up your
        workspace.
      </p>

      <p>
        You are solely responsible for deciding whether and where to create
        backups.
      </p>

      <p>
        To the maximum extent permitted by applicable law, Nexus is not
        responsible for loss, corruption, deletion, or unavailability of Your
        Content resulting from:
      </p>

      <ul>
        <li>device failure;</li>
        <li>storage failure;</li>
        <li>operating-system failure;</li>
        <li>accidental deletion;</li>
        <li>malware or security incidents;</li>
        <li>user actions;</li>
        <li>third-party software;</li>
        <li>hardware failure;</li>
        <li>improper backups; or</li>
        <li>other events beyond the reasonable control of Nexus.</li>
      </ul>

      <p>
        <strong>You should maintain independent backups of important data.</strong>
      </p>

      <h2>8. Updates and Changes</h2>

      <p>
        Nexus may provide updates, upgrades, bug fixes, patches, security
        fixes, or new features from time to time.
      </p>

      <p>
        Nexus is not obligated to provide updates or continue supporting any
        particular version or feature of the Software, except where required by
        applicable law.
      </p>

      <p>
        Nexus may modify, suspend, replace, or discontinue features of the
        Software, subject to applicable law.
      </p>

      <p>
        Unless an update is accompanied by separate terms, this Agreement will
        continue to apply to the updated Software.
      </p>

      <h2>9. Term and Termination</h2>

      <p>
        This Agreement begins when you first download, install, access, or use
        the Software and continues until terminated.
      </p>

      <p>
        Nexus may terminate or suspend your license if you materially breach
        this Agreement or use the Software unlawfully, subject to applicable
        law.
      </p>

      <p>
        You may terminate this Agreement at any time by uninstalling the
        Software and ceasing to use it.
      </p>

      <p>
        Upon termination, you must cease using the Software and delete copies
        of the Software in your possession or control, except where retention
        is required by applicable law.
      </p>

      <p>
        Termination of your license does not automatically delete Your Content
        from your device.
      </p>

      <p>
        Sections concerning intellectual property, Feedback, Third-Party
        Providers, disclaimers, limitations of liability, indemnification, and
        provisions that by their nature should survive termination will survive
        termination.
      </p>

      <h2>10. Disclaimer of Warranties</h2>

      <p>
        <strong>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SOFTWARE IS
          PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND,
          WHETHER EXPRESS, IMPLIED, OR STATUTORY.
        </strong>
      </p>

      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEXUS DISCLAIMS IMPLIED
        WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        TITLE, AND NON-INFRINGEMENT.
      </p>

      <p>NEXUS DOES NOT WARRANT THAT THE SOFTWARE WILL:</p>

      <ul>
        <li>be uninterrupted;</li>
        <li>be error-free;</li>
        <li>be completely secure;</li>
        <li>be available at all times;</li>
        <li>be compatible with every device or operating system;</li>
        <li>be free from defects; or</li>
        <li>prevent data loss.</li>
      </ul>

      <p>
        NEXUS DOES NOT GUARANTEE THE ACCURACY, COMPLETENESS, OR RELIABILITY OF
        INFORMATION OR RESPONSES GENERATED BY AI SYSTEMS OR Third-Party
        Providers.
      </p>

      <p>
        AI-generated information may be inaccurate, incomplete, outdated, or
        inappropriate for a particular purpose.
      </p>

      <p>
        You are responsible for evaluating AI-generated information before
        relying upon it.
      </p>

      <p>
        <strong>YOU USE THE SOFTWARE AT YOUR OWN RISK.</strong>
      </p>

      <p>
        Nothing in this Agreement excludes or limits any warranty or right that
        cannot lawfully be excluded or limited under applicable law.
      </p>

      <h2>11. Limitation of Liability</h2>

      <p>
        <strong>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEXUS AND NAWRASS
          ANDALOUSSI DAHMAN SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOSS
          OF DATA, PROFITS, REVENUE, BUSINESS OPPORTUNITY, OR GOODWILL, ARISING
          OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SOFTWARE.
        </strong>
      </p>

      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE TOTAL AGGREGATE
        LIABILITY OF NEXUS AND NAWRASS ANDALOUSSI DAHMAN ARISING OUT OF OR
        RELATING TO THE SOFTWARE OR THIS AGREEMENT SHALL NOT EXCEED THE GREATER
        OF:
      </p>

      <ul>
        <li>
          (a) the amount you actually paid to Nexus for the Software during the
          twelve (12) months preceding the event giving rise to the claim; or
        </li>
        <li>(b) USD $100.</li>
      </ul>

      <p>
        THE LIMITATIONS ABOVE APPLY TO THE MAXIMUM EXTENT PERMITTED BY LAW.
      </p>

      <p>
        SOME JURISDICTIONS DO NOT PERMIT CERTAIN LIMITATIONS OF LIABILITY,
        WARRANTIES, OR DAMAGES. WHERE SUCH LIMITATIONS ARE NOT PERMITTED, THEY
        SHALL APPLY ONLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
      </p>

      <h2>12. Indemnification</h2>

      <p>
        To the extent permitted by applicable law, you agree to indemnify and
        hold harmless Nawrass Andaloussi Dahman from claims, liabilities,
        damages, losses, and reasonable expenses arising directly from:
      </p>

      <ul>
        <li>(a) your unlawful use of the Software;</li>
        <li>(b) your material breach of this Agreement;</li>
        <li>(c) your violation of applicable law; or</li>
        <li>
          (d) your infringement or violation of the rights of a third party
          through content or information that you intentionally transmit or use
          through the Software.
        </li>
      </ul>

      <p>
        This section does not require you to indemnify Nexus or Nawrass
        Andaloussi Dahman to the extent a claim results from their own unlawful
        conduct or where such indemnification is prohibited by applicable law.
      </p>

      <h2>13. Governing Law and Disputes</h2>

      <p>
        Nexus is currently operated by an individual developer based in Morocco
        and may be used by individuals and organizations in different
        jurisdictions.
      </p>

      <p>
        This Agreement is subject to applicable law and any mandatory consumer
        protections that apply to you based on your jurisdiction.
      </p>

      <p>
        Nothing in this Agreement is intended to deprive you of rights or
        protections that cannot legally be waived under the laws applicable to
        you.
      </p>

      <p>
        If Nexus is later transferred to a separate legal entity, this
        Agreement may be updated to identify the applicable contracting entity
        and appropriate governing-law and dispute-resolution provisions.
      </p>

      <h2>14. General Provisions</h2>

      <h3>(a) Entire Agreement</h3>

      <p>
        This Agreement, together with the Nexus Privacy Policy and any
        additional terms expressly incorporated into it, constitutes the
        agreement between you and Nexus concerning the Software and supersedes
        prior agreements concerning the same subject matter.
      </p>

      <h3>(b) Severability</h3>

      <p>
        If any provision of this Agreement is determined to be invalid or
        unenforceable, that provision will be enforced to the maximum extent
        permitted by applicable law, and the remaining provisions will remain in
        effect.
      </p>

      <h3>(c) No Waiver</h3>

      <p>
        Failure to enforce any provision of this Agreement does not constitute a
        waiver of that provision or any other provision.
      </p>

      <h3>(d) Assignment</h3>

      <p>
        You may not assign or transfer your rights or obligations under this
        Agreement without Nexus's prior written consent, except where such
        restriction is prohibited by applicable law.
      </p>

      <p>
        Nexus may assign or transfer this Agreement in connection with a
        reorganization, sale, merger, acquisition, transfer of the Software, or
        establishment of a successor legal entity.
      </p>

      <h3>(e) Modifications</h3>

      <p>Nexus may update this Agreement from time to time.</p>

      <p>
        If material changes are made, Nexus may provide reasonable notice
        through the Software, website, or another appropriate method where
        required by applicable law.
      </p>

      <p>
        Your continued use of the Software after an updated Agreement becomes
        effective constitutes acceptance of the updated Agreement to the extent
        permitted by applicable law.
      </p>

      <h3>(f) Export Compliance</h3>

      <p>
        You agree to use the Software in compliance with applicable export-
        control, sanctions, and other trade laws that apply to your use of the
        Software.
      </p>

      <h3>(g) Eligibility</h3>

      <p>
        You must have the legal capacity to enter into this Agreement under the
        laws applicable to you.
      </p>

      <p>
        If you are entering into this Agreement on behalf of an organization,
        you represent that you have authority to bind that organization.
      </p>

      <h3>(h) No Partnership or Agency</h3>

      <p>
        Nothing in this Agreement creates a partnership, joint venture,
        employment relationship, agency relationship, or other fiduciary
        relationship between you and Nexus.
      </p>

      <h2>15. Privacy</h2>

      <p>
        Your use of the Software may also be governed by the{' '}
        <strong>Nexus Privacy Policy</strong>.
      </p>

      <p>
        The Privacy Policy describes how Nexus handles information and how
        information may be transmitted to Third-Party Providers when you choose
        to use their services.
      </p>

      <p>
        Because Nexus is designed as a local-first application, the Privacy
        Policy should clearly distinguish information stored locally on your
        device from information transmitted to external services.
      </p>

      <p>
        The Privacy Policy should be read together with this Agreement.
      </p>

      <p>
        <a href="/privacy-policy">Nexus Privacy Policy</a>
      </p>

      <h2>16. Third-Party Licenses</h2>

      <p>
        Nexus may include third-party software and components that are
        distributed under separate licenses.
      </p>

      <p>
        Those licenses may grant rights that are independent of this Agreement.
      </p>

      <p>
        Where required, applicable third-party license notices are provided
        separately with the Software or in the Nexus repository.
      </p>

      <p>
        Nothing in this Agreement is intended to limit rights granted to you
        under applicable third-party open-source licenses.
      </p>

      <h2>17. Contact</h2>

      <p>
        Questions regarding this Agreement may be directed to:
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

      <hr />

      <p>
        <strong>
          Copyright © 2026 Nawrass Andaloussi Dahman. All Rights Reserved.
        </strong>
      </p>
    </LegalLayout>
  );
}
