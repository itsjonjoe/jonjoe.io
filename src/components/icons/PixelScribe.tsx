export default function PixelScribe({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated', display: 'block' }}>
      <g className="animate-bob-slow">
        {/* hood */}
        <rect x="8" y="6" width="16" height="4" fill="#254561" />
        <rect x="6" y="8" width="4" height="8" fill="#254561" />
        <rect x="22" y="8" width="4" height="8" fill="#254561" />
        <rect x="8" y="7" width="16" height="1" fill="#386a94" />
        {/* head */}
        <rect x="11" y="9" width="10" height="7" fill="#fdbcb4" />
        <rect x="13" y="12" width="2" height="2" fill="#1b1b1b" />
        <rect x="17" y="12" width="2" height="2" fill="#1b1b1b" />
        {/* beard/chin */}
        <rect x="12" y="15" width="8" height="2" fill="#8b4e1a" />
        {/* robe */}
        <rect x="6" y="20" width="20" height="7" fill="#2d4a6b" />
        <rect x="8" y="22" width="16" height="1" fill="#6fb1de" />
        {/* book */}
        <rect x="11" y="23" width="10" height="2" fill="#bfe1ff" />
        <rect x="11" y="23" width="5" height="2" className="animate-page" style={{ fill: '#ffffff' }} />
        {/* quill */}
        <g className="animate-flutter">
          <rect x="26" y="18" width="2" height="7" fill="#8b5a2b" />
          <rect x="28" y="16" width="2" height="4" fill="#e6e6e6" />
        </g>
      </g>
    </svg>
  );
}

