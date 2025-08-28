import { useMemo } from 'react';

type Particle = { x: string; delay: string; dur: string; size: number; opacity: number };

export default function SectionParticles({
  count = 24,
  colorA = '#ffb74a',
  colorB = '#ff6a00',
  className = '',
}: {
  count?: number;
  colorA?: string;
  colorB?: string;
  className?: string;
}) {
  const parts = useMemo<Particle[]>(() => {
    return Array.from({ length: count }).map(() => ({
      x: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      dur: `${10 + Math.random() * 10}s`,
      size: 1 + Math.random() * 2,
      opacity: 0.35 + Math.random() * 0.45,
    }));
  }, [count]);

  return (
    <div className={`section-particles pointer-events-none absolute inset-0 overflow-hidden ${className}`.trim()}>
      {parts.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={
            {
              ['--x' as any]: p.x,
              ['--delay' as any]: p.delay,
              ['--dur' as any]: p.dur,
              ['--c1' as any]: colorA,
              ['--c2' as any]: colorB,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

