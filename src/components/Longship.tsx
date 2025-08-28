export default function Longship({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={`ship-rock ${className}`}
      aria-hidden
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Hull */}
      <path d="M10 40 Q 100 60 190 40 L 180 50 Q 100 58 20 50 Z" fill="#3a2b1a" />
      {/* Dragon head */}
      <path d="M190 40 q5 -10 -5 -18 q8 2 10 8 q2 6 -5 10 z" fill="#5b3b1a" />
      {/* Shields */}
      {Array.from({ length: 7 }).map((_, i) => {
        const cx = 30 + i * 22;
        return (
          <g key={i}>
            <circle cx={cx} cy={40} r={6} fill="#8b4513" />
            <circle cx={cx} cy={40} r={2} fill="#d4953a" />
          </g>
        );
      })}
      {/* Mast and sail */}
      <rect x="95" y="10" width="4" height="25" fill="#6b4a2a" />
      <rect x="70" y="12" width="60" height="20" fill="#b72e2e" opacity="0.9" />
      {/* Sail stripes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={i} x={72 + i * 10} y={12} width="6" height="20" fill="#7a1717" opacity="0.5" />
      ))}
      {/* Water */}
      <path d="M0 52 Q 20 48 40 52 T 80 52 T 120 52 T 160 52 T 200 52" stroke="#1f2937" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );
}

