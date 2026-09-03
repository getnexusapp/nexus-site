import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Nexus Software License',
  description:
    'The proprietary software license governing the use of the Nexus desktop application.',
};

export default function LicensePage() {
  return (
    <LegalLayout title="Nexus Software License" updated="September 3, 2026">
      <p>
        <strong>
          Copyright © 2026 Nawrass Andaloussi Dahman. All Rights Reserved.
        </strong>
      </p>

      <p>
        Nexus is proprietary software created and developed by{' '}
        <strong>Nawrass Andaloussi Dahman</strong>.
      </p>

      <p>
        This software, including its source code, compiled binaries,
        application design, user interface, documentation, and associated
        proprietary materials, is protected by applicable copyright and other
        intellectual property laws.
      </p>

      <p>
        <strong>Nexus is not open-source software.</strong> No rights are
        granted to use, copy, modify, distribute, or create derivative works
        from Nexus except as expressly stated in this license, the applicable{' '}
        <strong>Nexus End User License Agreement (EULA)</strong>, or a
        separate written agreement signed by the copyright owner.
      </p>

      <h2>1. License Grant</h2>

      <p>
        Subject to the terms of the{' '}
        <strong>Nexus End User License Agreement (EULA)</strong>, the copyright
        owner grants an end user a limited, non-exclusive, non-transferable,
        non-sublicensable license to:
      </p>

      <ul>
        <li>Download Nexus from an authorized distribution source.</li>
        <li>
          Install Nexus on devices the user owns or is authorized to control.
        </li>
        <li>Use the compiled Nexus application for personal purposes.</li>
        <li>
          Use the compiled Nexus application for the user's own internal
          business purposes.
        </li>
      </ul>

      <p>
        This license does not transfer ownership of Nexus or any of its
        intellectual property to the user.
      </p>

      <p>
        All rights not expressly granted are reserved by the copyright owner.
      </p>

      <h2>2. Restrictions</h2>

      <p>
        Unless expressly permitted by applicable law or authorized in writing
        by <strong>Nawrass Andaloussi Dahman</strong>, you may not:
      </p>

      <ul>
        <li>Copy or reproduce Nexus or its proprietary source code.</li>
        <li>
          Redistribute, publish, mirror, or publicly host Nexus or its
          proprietary components.
        </li>
        <li>
          Sell, rent, lease, sublicense, assign, or otherwise transfer Nexus.
        </li>
        <li>
          Modify, adapt, translate, or create derivative works based on Nexus.
        </li>
        <li>
          Reverse engineer, decompile, disassemble, or attempt to derive the
          source code of Nexus, except to the extent such activity cannot
          legally be restricted.
        </li>
        <li>
          Extract, reproduce, or distribute proprietary source code or other
          proprietary materials.
        </li>
        <li>
          Remove or alter copyright, trademark, attribution, licensing, or
          proprietary notices.
        </li>
        <li>
          Use Nexus or its proprietary components to develop, train, improve,
          or provide a competing product or service where prohibited by the
          EULA or applicable agreement.
        </li>
        <li>
          Circumvent technical, security, licensing, authentication, or
          access-control mechanisms.
        </li>
        <li>
          Use Nexus in violation of applicable law or the Nexus EULA.
        </li>
      </ul>

      <p>
        Nothing in this section is intended to restrict rights that cannot
        legally be restricted under applicable law.
      </p>

      <h2>3. Source Code</h2>

      <p>
        The Nexus source code is proprietary and confidential intellectual
        property of <strong>Nawrass Andaloussi Dahman</strong>, except for
        third-party components that are separately licensed.
      </p>

      <p>
        Access to, viewing of, or possession of the Nexus source code does not
        grant any license or other permission to:
      </p>

      <ul>
        <li>Copy the source code;</li>
        <li>Modify the source code;</li>
        <li>Redistribute the source code;</li>
        <li>Publish the source code;</li>
        <li>Create derivative works;</li>
        <li>Use the source code in another product; or</li>
        <li>Commercially exploit the source code.</li>
      </ul>

      <p>
        Any access to the Nexus source repository is subject to the applicable
        repository access terms and this license.
      </p>

      <h2>4. Third-Party Software</h2>

      <p>
        Nexus may include, link to, or depend upon third-party software,
        libraries, frameworks, models, fonts, assets, or other components.
      </p>

      <p>
        Third-party components may be distributed under licenses that are
        separate from this license.
      </p>

      <p>
        Examples may include open-source software and other third-party
        technologies used by Nexus.
      </p>

      <p>
        Where a third-party license grants rights or imposes obligations that
        apply to a particular component, that third-party license governs that
        component to the extent required by its terms.
      </p>

      <p>
        Nothing in this license is intended to restrict rights granted to users
        under applicable third-party open-source licenses.
      </p>

      <p>
        Applicable third-party license notices are provided separately where
        required.
      </p>

      <h2>5. Artificial Intelligence Features</h2>

      <p>
        Nexus may provide optional artificial intelligence functionality.
      </p>

      <p>
        Certain AI functionality may operate using a{' '}
        <strong>Bring Your Own Key (BYOK)</strong> model, allowing users to
        configure credentials for supported third-party AI providers.
      </p>

      <p>When a user enables an external AI provider:</p>

      <ul>
        <li>
          Requests may be transmitted directly from the user's device to the
          selected provider.
        </li>
        <li>
          The selected provider's terms, privacy policy, and usage policies may
          apply.
        </li>
        <li>
          The user is responsible for maintaining and protecting their API
          credentials.
        </li>
        <li>
          The user is responsible for charges, quotas, and usage associated
          with their external AI provider account.
        </li>
        <li>
          Nexus does not grant the user any rights to third-party AI services
          beyond those provided by the applicable provider.
        </li>
      </ul>

      <p>Nexus does not claim ownership of user-provided API credentials.</p>

      <h2>6. Local-First Data Architecture</h2>

      <p>
        Nexus is designed as a local-first desktop application.
      </p>

      <p>
        Application data such as notes, workspace information, local search
        data, and other locally stored content is designed to remain on the
        user's device unless the user explicitly enables a feature or service
        that transmits information externally.
      </p>

      <p>
        Nexus may use external services when explicitly configured or required
        by a feature, including external AI providers configured through BYOK.
      </p>

      <p>
        For additional information regarding data handling and privacy, see the{' '}
        <a href="/privacy-policy">Nexus Privacy Policy</a>.
      </p>

      <h2>7. End User License Agreement</h2>

      <p>
        Use of the Nexus application is additionally governed by the{' '}
        <a href="/eula">Nexus End User License Agreement</a>.
      </p>

      <p>The EULA may contain additional terms concerning:</p>

      <ul>
        <li>Permitted use;</li>
        <li>Account requirements;</li>
        <li>Updates;</li>
        <li>Termination;</li>
        <li>Disclaimers;</li>
        <li>Limitation of liability;</li>
        <li>Acceptable use;</li>
        <li>Third-party services; and</li>
        <li>Other terms applicable to end users.</li>
      </ul>

      <p>
        Where applicable, the EULA and this license should be read together.
      </p>

      <h2>8. Ownership</h2>

      <p>
        Nexus and all proprietary portions of the software remain the property
        of <strong>Nawrass Andaloussi Dahman</strong>.
      </p>

      <p>
        Except for rights expressly granted under this license, the EULA, or
        applicable third-party licenses, no ownership or intellectual property
        rights are transferred to the user.
      </p>

      <p>This includes, where applicable:</p>

      <ul>
        <li>Source code;</li>
        <li>Software architecture;</li>
        <li>Application design;</li>
        <li>User interface designs;</li>
        <li>Logos and branding;</li>
        <li>Original artwork;</li>
        <li>Documentation;</li>
        <li>Proprietary functionality;</li>
        <li>Proprietary models or assets; and</li>
        <li>Other original materials included with Nexus.</li>
      </ul>

      <h2>9. Trademarks and Branding</h2>

      <p>
        The name <strong>Nexus</strong>, associated logos, branding, product
        names, and other identifying marks associated with Nexus may constitute
        trademarks or other protected identifiers of{' '}
        <strong>Nawrass Andaloussi Dahman</strong>.
      </p>

      <p>
        This license does not grant permission to use Nexus branding in a
        manner that suggests endorsement, sponsorship, affiliation, or
        ownership without prior written authorization.
      </p>

      <h2>10. No Warranty</h2>

      <p>
        To the maximum extent permitted by applicable law, Nexus is provided{' '}
        <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong>, without
        warranties of any kind, whether express, implied, statutory, or
        otherwise.
      </p>

      <p>
        The applicable warranties, disclaimers, and limitations of liability
        are set out in the <strong>Nexus EULA</strong>.
      </p>

      <h2>11. Reservation of Rights</h2>

      <p>
        All rights not expressly granted under this license are reserved by{' '}
        <strong>Nawrass Andaloussi Dahman</strong>.
      </p>

      <p>Nothing in this license grants any implied license or permission.</p>

      <h2>12. Contact</h2>

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
