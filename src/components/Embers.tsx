import { useMemo } from 'react';

type Ember = { x: string; delay: string; dur: string; size: number; opacity: number };

export default function Embers({ count = 40 }: { count?: number }) {
  const embers = useMemo<Ember[]>(() => {
    const arr: Ember[] = [];
    for (let i = 0; i < count; i++) {
      const x = `${Math.random() * 100}%`;
      const delay = `${Math.random() * 10}s`;
      const dur = `${12 + Math.random() * 8}s`;
      const size = 1 + Math.random() * 2;
      const opacity = 0.4 + Math.random() * 0.6;
      arr.push({ x, delay, dur, size, opacity });
    }
    return arr;
  }, [count]);

  return (
    <div className="embers absolute inset-0 overflow-hidden">
      {embers.map((e, i) => (
        <span
          key={i}
          className="ember"
          style={
            {
              ['--x' as any]: e.x,
              ['--delay' as any]: e.delay,
              ['--dur' as any]: e.dur,
              width: `${e.size}px`,
              height: `${e.size}px`,
              opacity: e.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

