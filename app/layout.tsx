import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexus - Your Notes. Your Browser. Your AI.',
  description:
    'Nexus is a local-first workspace that connects your notes, web research, and AI in one place. Write in Markdown, browse the web, and ask AI questions with your context already connected — all running locally on your private machine.',
  metadataBase: new URL('https://nexusdesktop.netlify.app/'),
  openGraph: {
    title: 'Nexus - Your Notes. Your Browser. Your AI.',
    description:
      'Nexus is a local-first workspace that connects your notes, web research, and AI in one place. Write in Markdown, browse the web, and ask AI questions with your context already connected — all running locally on your private machine.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus - Your Notes. Your Browser. Your AI.',
    description:
      'Nexus is a local-first workspace that connects your notes, web research, and AI in one place. Write in Markdown, browse the web, and ask AI questions with your context already connected — all running locally on your private machine.',
  },
  icons: {
    icon: '/nexus-black.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Space Grotesk (display), Inter (body), JetBrains Mono (labels/code) —
            loaded via link tags rather than next/font so this also builds
            in network-restricted environments; swap for next/font/google
            freely once deploying somewhere with unrestricted egress. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
