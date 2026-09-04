import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Nexus Terms of Service',
  description:
    'The terms governing your use of the Nexus website and desktop application.',
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Nexus Terms of Service" updated="September 4, 2026">
      <p>
        Please read these Terms of Service ("Terms") carefully before using
        Nexus. These Terms govern your use of the Nexus website and the Nexus
        desktop application (together, the "Service"), currently developed and
        operated by <strong>Nawrass Andaloussi Dahman</strong> ("Nexus,"
        "we," "us"), as an individual.
      </p>

      <p>
        By downloading, installing, or using Nexus, or by using{' '}
        <strong>nexusdesktop.netlify.app</strong> (the "Site"), you agree to
        these Terms. If you do not agree to these Terms, do not use the
        Service.
      </p>

      <p>
        These Terms work alongside, and not instead of, our other policies:
      </p>

      <ul>
        <li>
          Our <a href="/privacy-policy">Privacy Policy</a> governs how we
          handle data.
        </li>
        <li>
          Our <a href="/eula">End User License Agreement (EULA)</a> governs
          your license to install and run the desktop application
          specifically.
        </li>
        <li>
          These Terms govern everything else, including your general use of
          the Service and Site.
        </li>
      </ul>

      <p>
        If something in these Terms conflicts with the EULA regarding use of
        the installed software specifically, the EULA controls for that
        narrow purpose.
      </p>

      <h2>1. What Nexus Is</h2>

      <p>
        Nexus is a local-first desktop application that combines a notes
        editor, a native web browser, and an AI assistant in a single
        application.
      </p>

      <p>
        Your notes and data are stored locally on your own device. Certain
        features, specifically the AI Assistant, require you to provide your
        own API key for a third-party AI provider, currently Google Gemini,
        and may involve sending limited data to that provider, as described in
        our <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>2. Eligibility</h2>

      <p>
        You must be at least <strong>16 years old</strong> to use Nexus. By
        using the Service, you confirm that you meet this requirement.
      </p>

      <h2>3. Your Account</h2>

      <p>
        Nexus's core features do not currently require an account.
      </p>

      <p>
        If we introduce optional paid features in the future, such as
        cross-device cloud synchronization, that require an account,
        additional terms specific to that account and any applicable
        subscription will apply at that time.
      </p>

      <p>
        Creating such an account will constitute acceptance of those
        additional terms.
      </p>

      <p>
        You will be responsible for keeping any future account credentials
        secure and for all activity occurring under your account.
      </p>

      <h2>4. Your Content</h2>

      <p>
        Your notes, folders, tags, and other content you create in Nexus
        ("Your Content") belong to you. We do not claim ownership of Your
        Content.
      </p>

      <p>
        Because Nexus is local-first, Your Content is stored on your own
        device by default, and we do not have access to it unless you
        explicitly choose to send portions of it to a third-party AI provider
        through the Assistant feature, as described in these Terms and our{' '}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <p>
        You are solely responsible for Your Content and for having the legal
        right to use, store, and process it.
      </p>

      <h2>5. The AI Assistant and Third-Party Services</h2>

      <p>
        The Nexus AI Assistant relies on Google's Gemini API. To use this
        feature, you provide your own Gemini API key, obtained directly from
        Google.
      </p>

      <p>When you use the AI Assistant:</p>

      <ul>
        <li>
          Requests are sent directly from your device to Google using your
          API key and are not routed through any server operated by Nexus.
        </li>
        <li>
          Your use of Gemini is subject to Google's own terms of service,
          privacy policy, and applicable usage policies, which we do not
          control and are not a party to.
        </li>
        <li>
          We are not responsible for the availability, accuracy, reliability,
          or output of any third-party AI service, including content generated
          by the Assistant.
        </li>
        <li>
          AI-generated content may be inaccurate, incomplete, or misleading,
          and you are responsible for evaluating it before relying upon it.
        </li>
        <li>
          The Assistant is a general-purpose AI feature and must not be used
          to generate content that is illegal, infringing, or otherwise
          violates Google's applicable usage policies for the Gemini API.
        </li>
      </ul>

      <h2>6. The Browser Feature</h2>

      <p>
        Nexus includes a native browser for viewing web content within the
        application.
      </p>

      <p>
        When you visit a website through this feature, your device connects
        directly to that website in substantially the same manner as when
        using any other web browser.
      </p>

      <p>
        We have no control over, and are not responsible for, the content,
        policies, availability, security, or practices of third-party
        websites that you access through Nexus.
      </p>

      <h2>7. Acceptable Use</h2>

      <p>You agree not to:</p>

      <ul>
        <li>
          Use Nexus for any unlawful purpose or to violate any applicable law
          or regulation.
        </li>
        <li>
          Attempt to reverse-engineer, decompile, disassemble, or circumvent
          the licensing or security of the Service, except as expressly
          permitted by the EULA or applicable law.
        </li>
        <li>
          Use the Service to develop a competing product using our proprietary
          code or materials where such code or materials are not otherwise
          made available under an open-source license.
        </li>
        <li>
          Interfere with or disrupt the Service, or attempt to gain
          unauthorized access to any part of it.
        </li>
        <li>
          Misrepresent your affiliation with Nexus.
        </li>
        <li>
          Use the Nexus name, logo, or branding without permission, except as
          permitted by applicable fair-use principles.
        </li>
      </ul>

      <h2>8. Intellectual Property</h2>

      <p>
        The Nexus name, logo, branding, and all content on the Site that is
        not Your Content are owned by us or our licensors and are protected
        by applicable intellectual property laws.
      </p>

      <p>
        Nothing in these Terms grants you rights to our trademarks, branding,
        or other intellectual property beyond what is reasonably necessary to
        refer to the Service accurately.
      </p>

      <p>
        Source code that we make publicly available on GitHub is governed by
        the license included in the applicable repository. That license takes
        precedence over these Terms with respect to matters of code reuse,
        modification, and redistribution.
      </p>

      <h2>9. Paid Features</h2>

      <p>
        Nexus's core local functionality is, and is intended to remain,
        free.
      </p>

      <p>
        We may introduce optional paid features in the future, such as
        encrypted cloud synchronization across devices.
      </p>

      <p>
        Any paid features will be subject to additional pricing and terms
        disclosed at the time they are offered, including applicable terms
        concerning billing, renewal, and cancellation.
      </p>

      <p>
        Nothing in these Terms currently obligates you to pay for anything in
        order to use Nexus's core features.
      </p>

      <h2>10. Disclaimers</h2>

      <p>
        To the maximum extent permitted by applicable law, the Service is
        provided <strong>"AS IS"</strong> and{' '}
        <strong>"AS AVAILABLE"</strong>, without warranties of any kind,
        whether express or implied.
      </p>

      <p>
        This includes, without limitation, implied warranties of
        merchantability, fitness for a particular purpose, and
        non-infringement.
      </p>

      <p>
        We do not warrant that the Service will be uninterrupted, error-free,
        secure, or free from defects, or that any AI-generated output will be
        accurate, complete, or reliable.
      </p>

      <p>
        You are responsible for maintaining your own backups of Your Content.
        While Nexus includes backup and export tools, we are not responsible
        for data loss.
      </p>

      <h2>11. Limitation of Liability</h2>

      <p>
        To the maximum extent permitted by applicable law, Nexus and its
        founder and operator will not be liable for any indirect, incidental,
        special, consequential, exemplary, or punitive damages, or for any
        loss of data, profits, revenue, or other economic loss arising from
        your use of, or inability to use, the Service, even if we have been
        advised of the possibility of such damages.
      </p>

      <h2>12. Termination</h2>

      <p>
        You may stop using Nexus at any time by uninstalling the application
        or otherwise discontinuing your use of the Service.
      </p>

      <p>
        We may suspend or terminate access to any account-based features, if
        and when such features exist, if you violate these Terms or other
        applicable terms governing the Service.
      </p>

      <p>
        Because the core functionality of Nexus is local and does not
        currently require an account, termination of account-based features
        does not affect your ability to use data already stored on your own
        device.
      </p>

      <h2>13. Changes to These Terms</h2>

      <p>
        We may update these Terms from time to time. When we do, we will
        update the <strong>"Last updated"</strong> date displayed at the top
        of this page.
      </p>

      <p>
        Your continued use of the Service after revised Terms become
        effective constitutes acceptance of the revised Terms.
      </p>

      <p>
        For material changes, we will make reasonable efforts to provide
        notice, which may include notice through the Site or within the Nexus
        application itself.
      </p>

      <h2>14. Governing Law and Disputes</h2>

      <p>
        These Terms are governed by the laws of the{' '}
        <strong>Kingdom of Morocco</strong>, without regard to its
        conflict-of-law principles.
      </p>

      <p>
        Any disputes arising out of or relating to these Terms or the Service
        will be resolved by the competent courts of Morocco.
      </p>

      <h2>15. Contact</h2>

      <p>
        Questions about these Terms can be sent to:
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
