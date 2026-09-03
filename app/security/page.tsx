import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Security Policy',
  description:
    'How to report security vulnerabilities in the Nexus desktop application and related infrastructure.',
};

export default function SecurityPage() {
  return (
    <LegalLayout title="Security Policy" updated="September 3, 2026">
      <p>
        Nexus is closed-source desktop software. This repository does not
        contain application source code, so standard code-scanning/pull-
        request-based disclosure doesn't apply here — but we still want to
        hear about security issues in the app, our infrastructure, or our
        website.
      </p>

      <h2>Reporting a Vulnerability</h2>

      <p>
        <strong>
          Please do not open a public GitHub issue for security
          vulnerabilities.
        </strong>{' '}
        Public issues are visible to everyone immediately, including before a
        fix ships.
      </p>

      <p>
        Instead, email <strong>getnexusupport@gmail.com</strong> with:
      </p>

      <ul>
        <li>
          A description of the issue and its potential impact
        </li>
        <li>
          Steps to reproduce, or a proof of concept if you have one
        </li>
        <li>
          The Nexus version and OS you tested on
        </li>
        <li>
          Whether you're aware of it being publicly known or exploited
        </li>
      </ul>

      <h2>What to expect</h2>

      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Acknowledgement of your report</td>
            <td>Within 3 business days</td>
          </tr>
          <tr>
            <td>Initial assessment / severity triage</td>
            <td>Within 7 business days</td>
          </tr>
          <tr>
            <td>Fix or mitigation, for confirmed issues</td>
            <td>
              Varies by severity — critical issues are prioritized
            </td>
          </tr>
          <tr>
            <td>Public disclosure</td>
            <td>
              Coordinated with you, after a fix ships
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        We'll credit reporters (with permission) in the release notes once a
        fix ships, unless you'd prefer to stay anonymous.
      </p>

      <h2>Scope</h2>

      <p>
        <strong>In scope:</strong>
      </p>

      <ul>
        <li>The Nexus desktop application (all platforms)</li>
        <li>Update/download infrastructure</li>
      </ul>

      <p>
        <strong>Out of scope:</strong>
      </p>

      <ul>
        <li>
          Social engineering, physical attacks, or attacks requiring physical
          access to a user's device
        </li>
        <li>Denial of service via resource exhaustion</li>
        <li>
          Issues in third-party dependencies with no demonstrated path to
          impacting Nexus itself (please report those upstream instead)
        </li>
      </ul>

      <p>
        Thanks for helping keep Nexus and its users safe.
      </p>
    </LegalLayout>
  );
}
