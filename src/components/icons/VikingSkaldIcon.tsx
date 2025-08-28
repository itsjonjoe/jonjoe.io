export default function VikingSkaldIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`w-24 h-24 md:w-32 md:h-32 ${className}`}
      style={{ imageRendering: 'pixelated', display: 'block' }}
    >
      <g className="animate-bob-slow">
        {/* Hooded cloak silhouette (no horns) */}
        <rect x="7" y="6" width="18" height="6" fill="#254561" />
        <rect x="6" y="8" width="3" height="10" fill="#254561" />
        <rect x="23" y="8" width="3" height="10" fill="#254561" />
        {/* Inner cloak highlight */}
        <rect x="8" y="7" width="16" height="2" fill="#386a94" />

        {/* Head inside hood */}
        <rect x="11" y="9" width="10" height="8" fill="#fdbcb4" />
        <g className="animate-blink">
          <rect x="13" y="12" width="2" height="2" fill="#1b1b1b" />
          <rect x="17" y="12" width="2" height="2" fill="#1b1b1b" />
        </g>

        {/* Beard shorter and tidier */}
        <rect x="12" y="16" width="8" height="3" fill="#8b4e1a" />

        {/* Robe body */}
        <rect x="6" y="20" width="20" height="8" fill="#2d4a6b" />
        <rect x="8" y="22" width="16" height="2" fill="#6fb1de" />

        {/* Book on lap */}
        <rect x="11" y="23" width="10" height="3" fill="#bfe1ff" />
        <rect x="12" y="24" width="8" height="1" fill="#87bde8" />
        {/* Page flip overlay */}
        <rect x="11" y="23" width="5" height="3" fill="#ffffff" className="animate-page" />

        {/* Quill on right */}
        <g className="animate-flutter">
          <rect x="26" y="18" width="2" height="8" fill="#8b5a2b" />
          <rect x="28" y="16" width="2" height="4" fill="#e6e6e6" />
        </g>

        {/* Decorative drifting glyphs */}
        <rect x="9" y="27" width="1" height="1" className="spark" style={{ fill: '#bfe6ff', animationDelay: '0s' }} />
        <rect x="15" y="27" width="1" height="1" className="spark" style={{ fill: '#bfe6ff', animationDelay: '0.35s' }} />
        <rect x="21" y="27" width="1" height="1" className="spark" style={{ fill: '#bfe6ff', animationDelay: '0.7s' }} />
      </g>
    </svg>
  );
}
