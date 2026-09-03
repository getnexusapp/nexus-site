import type { Config } from 'tailwindcss';

// Design tokens for the Nexus marketing site.
// Warm charcoal base (drawn from Nexus's own in-app "Dawn" theme,
// see lib/theme.ts in the product) with a two-color accent system:
// amber (primary, warm) and a soft slate-blue (secondary, drawn from
// the product's own syntax-highlight palette) so the site reads as an
// extension of the product rather than a generic dark dev-tool theme.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#14120f',
        surface: '#1b1815',
        'surface-2': '#221e19',
        'surface-3': '#2a251f',
        border: {
          DEFAULT: '#332c25',
          strong: '#55493c',
        },
        ink: {
          DEFAULT: '#f3ede3',
          muted: '#a89d8c',
          faint: '#6b6152',
        },
        amber: {
          DEFAULT: '#e2a75e',
          hover: '#f0c185',
          dim: '#8a6a3d',
        },
        slate: {
          DEFAULT: '#7fb4d9',
          hover: '#a3cfe8',
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", 'sans-serif'],
        body: ["'Inter'", 'sans-serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};

export default config;
