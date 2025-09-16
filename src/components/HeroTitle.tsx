import React from 'react';

type HeroTitleProps = {
  drop: string;
  line1: string;
  line2?: string;
  borderColor?: string; // hex/rgb
  letterColor?: string; // hex/rgb
  textColor?: string; // hex/rgb
  className?: string;
};

export default function HeroTitle({
  drop,
  line1,
  line2,
  borderColor = '#d4953a',
  letterColor = '#d4953a',
  textColor = '#ffffff',
  className = '',
}: HeroTitleProps) {
  return (
    <div className={`md:hidden ${className}`}>
      <div className="flex items-start justify-center gap-2">
        <div
          className="flex items-center justify-center w-12 h-16 rounded-md border-2 bg-black/50 shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
          style={{ borderColor }}
        >
          <span className="text-5xl font-black leading-none" style={{ color: letterColor }}>
            {drop}
          </span>
        </div>
        <div className="flex flex-col leading-tight text-left">
          <span className="text-3xl font-black tracking-widest" style={{ color: textColor }}>
            {line1}
          </span>
          {line2 ? (
            <span className="text-3xl font-black tracking-widest -mt-1" style={{ color: textColor }}>
              {line2}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

