export default function VikingWarriorIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`w-24 h-24 md:w-32 md:h-32 ${className}`}
      style={{ imageRendering: 'pixelated', display: 'block' }}
    >
      <g className="animate-bob-slow">
        {/* Helmet band + horns for consistency */}
        <rect x="9" y="6" width="14" height="3" fill="#6f4927" />
        <rect x="7" y="7" width="2" height="4" fill="#ece8dd" />
        <rect x="23" y="7" width="2" height="4" fill="#ece8dd" />
        <rect x="7" y="9" width="2" height="1" fill="#c6c1b3" />
        <rect x="23" y="9" width="2" height="1" fill="#c6c1b3" />

        {/* Head */}
        <rect x="10" y="9" width="12" height="6" fill="#fdbcb4" />
        <g className="animate-blink">
          <rect x="12" y="11" width="2" height="2" fill="#1b1b1b" />
          <rect x="18" y="11" width="2" height="2" fill="#1b1b1b" />
        </g>

        {/* Beard */}
        <rect x="11" y="15" width="10" height="3" fill="#8b4e1a" />
        <rect x="11" y="17" width="10" height="1" fill="#a8672b" />

        {/* Torso armor */}
        <rect x="8" y="18" width="16" height="6" fill="#7a5a23" />
        <rect x="9" y="20" width="14" height="1" fill="#a6792b" />
        <rect x="9" y="22" width="14" height="1" fill="#5a431b" />

        {/* Arms */}
        <rect x="7" y="19" width="3" height="3" fill="#fdbcb4" />
        <rect x="22" y="19" width="3" height="3" fill="#fdbcb4" />

        {/* Legs + boots for more height */}
        <rect x="10" y="24" width="4" height="4" fill="#6b4a2a" />
        <rect x="18" y="24" width="4" height="4" fill="#6b4a2a" />
        <rect x="10" y="28" width="4" height="2" fill="#3b2a1a" />
        <rect x="18" y="28" width="4" height="2" fill="#3b2a1a" />

        {/* Barbell (animated lift) */}
        <g className="animate-lift">
          {/* Plates */}
          <rect x="3" y="18" width="3" height="6" fill="#c9c9c9" />
          <rect x="26" y="18" width="3" height="6" fill="#c9c9c9" />
          {/* Bar */}
          <rect x="6" y="20" width="20" height="2" fill="#6a6a6a" />
          {/* Inner plates */}
          <rect x="6" y="19" width="1" height="4" fill="#9a9a9a" />
          <rect x="25" y="19" width="1" height="4" fill="#9a9a9a" />
        </g>
      </g>
    </svg>
  );
}
