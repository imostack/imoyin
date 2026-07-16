import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: '#0d0d0d',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '80px',
      }}
    >
      {/* Subtle grid line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 80,
          width: 1,
          height: '100%',
          background: '#ffffff08',
          display: 'flex',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          marginBottom: 24,
          lineHeight: 1,
        }}
      >
        <span
          style={{
            fontSize: 120,
            fontWeight: 300,
            color: '#e8e8e4',
            fontFamily: '"Times New Roman", Georgia, serif',
            lineHeight: 1,
          }}
        >
          IS
        </span>
        <span
          style={{
            fontSize: 120,
            fontWeight: 300,
            color: '#f59e0b',
            fontFamily: '"Times New Roman", Georgia, serif',
            lineHeight: 1,
          }}
        >
          .
        </span>
      </div>
      <div
        style={{
          fontSize: 36,
          color: '#e8e8e4',
          fontWeight: 300,
          marginBottom: 14,
          fontFamily: '"Times New Roman", Georgia, serif',
          display: 'flex',
        }}
      >
        Imoyin Sampson
      </div>
      <div
        style={{
          fontSize: 18,
          color: '#666',
          fontFamily: 'monospace',
          letterSpacing: '0.08em',
          display: 'flex',
        }}
      >
        Software Engineer · Co-founder · Port Harcourt, Nigeria
      </div>
    </div>,
    { ...size }
  );
}
