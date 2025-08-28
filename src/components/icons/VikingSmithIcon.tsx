export default function VikingSmithIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`w-24 h-24 md:w-32 md:h-32 ${className}`}
      style={{ imageRendering: 'pixelated', display: 'block' }}
    >
      <g className="animate-bob-slow">
        {/* Helmet base + band */}
        <rect x="9" y="6" width="14" height="3" fill="#6f4927" />
        <rect x="8" y="9" width="16" height="2" fill="#8b5a2b" />
        {/* Horns with shading */}
        <rect x="6" y="7" width="2" height="5" fill="#ece8dd" />
        <rect x="24" y="7" width="2" height="5" fill="#ece8dd" />
        <rect x="6" y="9" width="2" height="1" fill="#c6c1b3" />
        <rect x="24" y="9" width="2" height="1" fill="#c6c1b3" />

        {/* Face */}
        <rect x="10" y="11" width="12" height="6" fill="#fdbcb4" />

        {/* Eyes (blink) */}
        <g className="animate-blink">
          <rect x="12" y="13" width="2" height="2" fill="#1b1b1b" />
          <rect x="18" y="13" width="2" height="2" fill="#1b1b1b" />
        </g>

        {/* Beard with highlight */}
        <rect x="10" y="17" width="12" height="4" fill="#8b4e1a" />
        <rect x="10" y="19" width="12" height="1" fill="#a8672b" />

        {/* Armor */}
        <rect x="8" y="21" width="16" height="8" fill="#585858" />
        <rect x="10" y="23" width="12" height="2" fill="#d4953a" />
        <rect x="10" y="26" width="12" height="1" fill="#3a3a3a" />

        {/* Hammer (animated swing) */}
        <g className="animate-swing" style={{ transformBox: 'fill-box', transformOrigin: '100% 50%' } as any}>
          {/* handle */}
          <rect x="2" y="17" width="7" height="1" fill="#6b3b1a" />
          <rect x="2" y="18" width="7" height="1" fill="#6b3b1a" />
          {/* head */}
          <rect x="0" y="15" width="4" height="6" fill="#7a7a7a" />
          <rect x="0" y="17" width="4" height="2" fill="#9a9a9a" />
        </g>

        {/* Sparks */}
        <rect x="6" y="14" width="1" height="1" className="spark" style={{ fill: '#ffd27a', animationDelay: '0s' }} />
        <rect x="7" y="16" width="1" height="1" className="spark" style={{ fill: '#ffb84a', animationDelay: '0.2s' }} />
        <rect x="5" y="18" width="1" height="1" className="spark" style={{ fill: '#ff9f2a', animationDelay: '0.4s' }} />
      </g>
    </svg>
  );
}
