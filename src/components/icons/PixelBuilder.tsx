export default function PixelBuilder({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated', display: 'block' }}>
      {/* Viking builder scene */}
      <g className="animate-bob-slow">
        {/* helmet */}
        <rect x="9" y="6" width="14" height="3" fill="#6f4927" />
        <rect x="7" y="7" width="2" height="4" fill="#ece8dd" />
        <rect x="23" y="7" width="2" height="4" fill="#ece8dd" />
        {/* face */}
        <rect x="10" y="10" width="12" height="6" fill="#fdbcb4" />
        <rect x="12" y="12" width="2" height="2" fill="#1b1b1b" />
        <rect x="18" y="12" width="2" height="2" fill="#1b1b1b" />
        {/* beard */}
        <rect x="10" y="16" width="12" height="3" fill="#8b4e1a" />
        {/* body */}
        <rect x="9" y="19" width="14" height="6" fill="#585858" />
        <rect x="10" y="21" width="12" height="1" fill="#a6792b" />

        {/* anvil */}
        <rect x="14" y="23" width="8" height="2" fill="#2f2f2f" />
        <rect x="13" y="25" width="10" height="2" fill="#3b3b3b" />
        <rect x="16" y="27" width="4" height="1" fill="#4c4c4c" />

        {/* wood planks stack */}
        <rect x="4" y="26" width="5" height="2" fill="#7a5a23" />
        <rect x="4" y="24" width="6" height="2" fill="#6b4a1a" />
        <rect x="3" y="22" width="5" height="2" fill="#7a5a23" />

        {/* hammer animated toward anvil */}
        <g className="animate-swing" style={{ transformBox: 'fill-box', transformOrigin: '100% 50%' } as any}>
          <rect x="6" y="18" width="6" height="1" fill="#6b3b1a" />
          <rect x="4" y="16" width="4" height="4" fill="#8a8a8a" />
        </g>

        {/* strike sparks */}
        <rect x="20" y="22" width="1" height="1" className="spark" style={{ fill: '#ffd27a', animationDelay: '0s' }} />
        <rect x="19" y="21" width="1" height="1" className="spark" style={{ fill: '#ffb84a', animationDelay: '.2s' }} />
        <rect x="18" y="22" width="1" height="1" className="spark" style={{ fill: '#ff9f2a', animationDelay: '.4s' }} />

        {/* bench base */}
        <rect x="6" y="29" width="20" height="1" fill="#3a2a1a" />
      </g>
    </svg>
  );
}
