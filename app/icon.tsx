import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: '#0d0d0d',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Times New Roman", Georgia, serif',
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: '-0.5px',
        color: '#e8e8e4',
      }}
    >
      <span>IS</span>
      <span style={{ color: '#f59e0b' }}>.</span>
    </div>,
    { ...size }
  );
}
