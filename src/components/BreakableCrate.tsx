import React from 'react';

type BreakableCrateProps = {
  className?: string; // positioning
  broken: boolean;
  onBreak: () => void;
};

export default function BreakableCrate({ className = '', broken, onBreak }: BreakableCrateProps) {
  return (
    <div role="button" aria-label="wooden crate" onClick={onBreak} className={`${className} w-8 h-8 cursor-pointer select-none`}>
      {!broken ? (
        <div className="relative w-full h-full bg-[#6b4a2a] border border-[#8b4513] shadow-[0_2px_4px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-1 border border-[#8b4513]/70" />
          <div className="absolute left-1 right-1 top-1 h-px bg-[#8b4513]/60" />
          <div className="absolute left-1 right-1 bottom-1 h-px bg-[#8b4513]/60" />
          <div className="absolute top-1 bottom-1 left-2 w-px bg-[#8b4513]/50" />
          <div className="absolute top-1 bottom-1 right-2 w-px bg-[#8b4513]/50" />
          <div className="absolute inset-1">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-[#3a2b1a]/60 rotate-45 transform origin-center" />
            <div className="absolute left-0 right-0 top-1/2 h-px bg-[#3a2b1a]/60 -rotate-45 transform origin-center" />
          </div>
          <div className="absolute w-1 h-1 bg-[#d6a960] top-1 left-1" />
          <div className="absolute w-1 h-1 bg-[#d6a960] top-1 right-1" />
          <div className="absolute w-1 h-1 bg-[#d6a960] bottom-1 left-1" />
          <div className="absolute w-1 h-1 bg-[#d6a960] bottom-1 right-1" />
        </div>
      ) : (
        <div className="relative w-full h-full crate-broken">
          <div className="crate-shard w-1 h-1 bg-[#6b4a2a]" style={{ left: '4px', top: '4px', ['--dx' as any]: '-10px', ['--dy' as any]: '22px', ['--rot' as any]: '-35deg' }} />
          <div className="crate-shard w-1 h-1 bg-[#8b4513]" style={{ left: '2px', top: '2px', ['--dx' as any]: '-6px', ['--dy' as any]: '28px', ['--rot' as any]: '22deg' }} />
          <div className="crate-shard w-1 h-1 bg-[#8b4513]" style={{ left: '6px', top: '6px', ['--dx' as any]: '8px', ['--dy' as any]: '24px', ['--rot' as any]: '30deg' }} />
          <div className="crate-shard w-1 h-1 bg-[#3a2b1a]" style={{ left: '1px', top: '6px', ['--dx' as any]: '-4px', ['--dy' as any]: '26px', ['--rot' as any]: '-18deg' }} />
          <div className="crate-shard w-1 h-1 bg-[#d6a960]" style={{ left: '5px', top: '1px', ['--dx' as any]: '4px', ['--dy' as any]: '30px', ['--rot' as any]: '45deg' }} />
          <div className="crate-shard w-1 h-1 bg-[#6b4a2a]" style={{ left: '7px', top: '3px', ['--dx' as any]: '-2px', ['--dy' as any]: '18px', ['--rot' as any]: '-10deg' }} />
        </div>
      )}
    </div>
  );
}

