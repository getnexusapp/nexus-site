export const socialImageSize = { width: 1200, height: 630 };

// Reuses the exact paths from components/Logo.tsx so the mark in the
// social preview matches the real app icon pixel-for-pixel.
export function SocialImageMarkup() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14120f',
        backgroundImage:
          'radial-gradient(circle at 50% 0%, rgba(226,167,94,0.22), transparent 60%)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: 40,
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(98 90) scale(1.45)">
              <path
                d="
                  M338 194 L394 226 L432 205 L377 175 Z
                  M414 370 L358 338 L320 359 L375 389 Z
                  M303.35 221.95
                  Q284 227 283.44 246.99
                  L281 335
                  L318 314
                  L319 270
                  L445 343
                  L448.65 342.05
                  Q468 337 468.56 317.01
                  L471 229
                  L434 250
                  L433 294
                  L307 221
                  Z
                "
                fill="#000000"
                transform="translate(-267 -161)"
              />
            </g>
          </svg>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: '#f3ede3',
              letterSpacing: 6,
            }}
          >
            NEXUS
          </div>
          <div style={{ marginTop: 16, fontSize: 30, color: '#a89d8c' }}>
            Your Notes. Your Browser. Your AI.
          </div>
        </div>
      </div>
    </div>
  );
}
