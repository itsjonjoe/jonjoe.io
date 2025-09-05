type LongshipProps = {
  className?: string;
  showRunner?: boolean;
  punctMode?: number;
};

function renderPunctuation(mode: number = 0, color = '#facc15') {
  // mode 0: '!!', mode 1: '?!', mode 2: '?'
  switch (mode % 3) {
    case 1:
      // '?!'
      return (
        <>
          {/* Question mark */}
          <rect x={-1.5} y={-4} width={2} height={1} fill={color} />
          <rect x={0.3} y={-3} width={1} height={1} fill={color} />
          <rect x={-0.5} y={-2} width={1} height={1} fill={color} />
          <rect x={-0.5} y={-1} width={1} height={1} fill={color} />
          <rect x={-0.5} y={-0.2} width={1} height={1} fill={color} />
          {/* Exclamation */}
          <rect x={2.1} y={-4} width={1} height={2} fill={color} />
          <rect x={2.1} y={-1.5} width={1} height={1} fill={color} />
        </>
      );
    case 2:
      // '?'
      return (
        <>
          <rect x={0.2} y={-4} width={2} height={1} fill={color} />
          <rect x={2} y={-3} width={1} height={1} fill={color} />
          <rect x={1.2} y={-2} width={1} height={1} fill={color} />
          <rect x={1.2} y={-1} width={1} height={1} fill={color} />
          <rect x={1.2} y={-0.2} width={1} height={1} fill={color} />
        </>
      );
    default:
      // '!!'
      return (
        <>
          <rect x={0.5} y={-4} width={1} height={2} fill={color} />
          <rect x={0.5} y={-1.5} width={1} height={1} fill={color} />
          <rect x={2.1} y={-4} width={1} height={2} fill={color} />
          <rect x={2.1} y={-1.5} width={1} height={1} fill={color} />
        </>
      );
  }
}

export default function Longship({ className = '', showRunner = false, punctMode = 0 }: LongshipProps) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={`${className}`}
      aria-hidden
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Hull */}
      <path d="M10 40 Q 100 60 190 40 L 180 50 Q 100 58 20 50 Z" fill="#3a2b1a" />
      {/* Dragon head */}
      <path d="M190 40 q5 -10 -5 -18 q8 2 10 8 q2 6 -5 10 z" fill="#5b3b1a" />
      {/* Shields moved below to layer above runners */}
      {/* Mast and sail */}
      <rect x="95" y="10" width="4" height="25" fill="#6b4a2a" />
      <rect x="70" y="12" width="60" height="20" fill="#b72e2e" opacity="0.9" />
      {/* Sail stripes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={i} x={72 + i * 10} y={12} width="6" height="20" fill="#7a1717" opacity="0.5" />
      ))}
      {/* Water */}
      <path d="M0 52 Q 20 48 40 52 T 80 52 T 120 52 T 160 52 T 200 52" stroke="#1f2937" strokeWidth="2" fill="none" opacity="0.6" />

      {/* Tiny pixel Viking runner (appears when rocking) */}
      {showRunner && (
        <g
          className="viking-runner"
          style={{ pointerEvents: 'none', opacity: 0, transform: 'translate(96px, 32px) scaleX(1)' }}
        >
          {/* Animated inner sprite for bob + limb motion */}
          <g className="viking-runner-sprite">
            {/* Head (group for tilt/looking) */}
            <g className="viking-head" style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}>
              <rect x="0" y="0" width="3" height="3" fill="#e5c07b" />
              {/* Helmet + horns */}
              <rect x="0" y="0" width="3" height="1" fill="#8b949e" />
              <rect x="-1" y="0" width="1" height="1" fill="#c9d1d9" />
              <rect x="3" y="0" width="1" height="1" fill="#c9d1d9" />
            </g>
            {/* Alerts above head at pauses */}
            <g className="viking-alert-right" style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}>
              {renderPunctuation(punctMode, '#facc15')}
            </g>
            <g className="viking-alert-left" style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}>
              {renderPunctuation((punctMode + 1), '#fbbf24')}
            </g>
            {/* Beard */}
            <rect x="1" y="3" width="1" height="1" fill="#a16207" />
            {/* Body + cloak */}
            <rect x="0.5" y="3" width="2" height="3" fill="#b45309" />
            <rect x="0" y="4" width="1" height="2" fill="#7c2d12" opacity="0.9" />
            {/* Belt */}
            <rect x="0.5" y="4" width="2" height="1" fill="#3f3f46" />
            {/* Hand shade (appears while looking) */}
            <rect className="viking-hand-shade" x="2.8" y="1" width="1" height="1" fill="#e5c07b" opacity="0" />
            {/* Arms (swing) */}
            <g className="viking-arm left" style={{ transformBox: 'fill-box', transformOrigin: '50% 0%' }}>
              <rect x="-0.5" y="3.5" width="1" height="1" fill="#e5c07b" />
            </g>
            <g className="viking-arm right" style={{ transformBox: 'fill-box', transformOrigin: '50% 0%' }}>
              <rect x="2.5" y="3.5" width="1" height="1" fill="#e5c07b" />
            </g>
            {/* Legs (animated stride) */}
            <g className="viking-runner-legs">
              <rect x="0.3" y="6" width="1" height="2" fill="#57534e" />
              <rect x="1.7" y="6" width="1" height="2" fill="#57534e" />
              {/* Boots */}
              <rect x="0.3" y="7" width="1" height="1" fill="#1c1917" />
              <rect x="1.7" y="7" width="1" height="1" fill="#1c1917" />
            </g>
          </g>
        </g>
      )}

      {/* Second tiny pixel Viking runner (staggered timing) */}
      {showRunner && (
        <g
          className="viking-runner viking-runner-2"
          style={{ pointerEvents: 'none', opacity: 0, transform: 'translate(96px, 32px) scaleX(-1)' }}
        >
          {/* slight vertical offset via parent transform to avoid overlap */}
          <g transform="translate(0,-1)">
            {/* Wrapper to allow independent fall-over rotation without affecting stride/bob */}
            <g className="viking-sprite-wrap">
              <g className="viking-runner-sprite">
                {/* Head (group for tilt/looking) */}
                <g className="viking-head" style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}>
                  <rect x="0" y="0" width="3" height="3" fill="#e5c07b" />
                  {/* Helmet + horns */}
                  <rect x="0" y="0" width="3" height="1" fill="#6b7280" />
                  <rect x="-1" y="0" width="1" height="1" fill="#d1d5db" />
                  <rect x="3" y="0" width="1" height="1" fill="#d1d5db" />
                </g>
                {/* Alerts above head at pauses (left and right, staggered) */}
                <g className="viking-alert-left" style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}>
                  {renderPunctuation((punctMode + 2), '#fde047')}
                </g>
                <g className="viking-alert-right" style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}>
                  {renderPunctuation(punctMode, '#facc15')}
                </g>
                {/* Beard */}
                <rect x="1" y="3" width="1" height="1" fill="#a16207" />
                {/* Body + cloak (different colors for variety) */}
                <rect x="0.5" y="3" width="2" height="3" fill="#0f766e" />
                <rect x="0" y="4" width="1" height="2" fill="#155e75" opacity="0.9" />
                {/* Belt */}
                <rect x="0.5" y="4" width="2" height="1" fill="#374151" />
                {/* Hand shade (appears while looking) */}
                <rect className="viking-hand-shade" x="2.8" y="1" width="1" height="1" fill="#e5c07b" opacity="0" />
                {/* Arms (swing) */}
                <g className="viking-arm left" style={{ transformBox: 'fill-box', transformOrigin: '50% 0%' }}>
                  <rect x="-0.5" y="3.5" width="1" height="1" fill="#e5c07b" />
                </g>
                <g className="viking-arm right" style={{ transformBox: 'fill-box', transformOrigin: '50% 0%' }}>
                  <rect x="2.5" y="3.5" width="1" height="1" fill="#e5c07b" />
                </g>
                {/* Legs (animated stride) */}
                <g className="viking-runner-legs">
                  <rect x="0.3" y="6" width="1" height="2" fill="#57534e" />
                  <rect x="1.7" y="6" width="1" height="2" fill="#57534e" />
                  {/* Boots */}
                  <rect x="0.3" y="7" width="1" height="1" fill="#1c1917" />
                  <rect x="1.7" y="7" width="1" height="1" fill="#1c1917" />
                </g>
              </g>
              {/* Skid lines (appear during fall) */}
              <g className="viking-skid" opacity="0">
                <rect x="-1" y="8.2" width="2" height="0.4" fill="#94a3b8" />
                <rect x="-2.6" y="8.6" width="2.6" height="0.4" fill="#64748b" />
              </g>
            </g>
          </g>
        </g>
      )}

      {/* Shields (drawn last so they cover runners) */}
      {Array.from({ length: 7 }).map((_, i) => {
        const cx = 30 + i * 22;
        return (
          <g key={`shield-${i}`}>
            <circle cx={cx} cy={40} r={6} fill="#8b4513" />
            <circle cx={cx} cy={40} r={2} fill="#d4953a" />
          </g>
        );
      })}
    </svg>
  );
}
