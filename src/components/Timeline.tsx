import React, { useEffect, useRef, useState } from 'react';

export type TimelineItem = {
  title: string;
  period: string;
  summary: string;
  tech: string;
};

type TimelineProps = {
  items: TimelineItem[];
  dotColor?: string; // e.g. '#d4953a'
  ruleColor?: string; // e.g. '#8b4513'
  cardBorderColor?: string; // e.g. '#8b4513'
};

export default function Timeline({
  items,
  dotColor = '#d4953a',
  ruleColor = '#8b4513',
  cardBorderColor = '#8b4513',
}: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLLIElement>(null);
  const [lineTop, setLineTop] = useState(0);

  useEffect(() => {
    const compute = () => {
      const container = containerRef.current;
      const first = firstItemRef.current;
      if (!container || !first) return;
      const cRect = container.getBoundingClientRect();
      const fRect = first.getBoundingClientRect();
      const top = Math.max(0, fRect.top - cRect.top + fRect.height / 2);
      setLineTop(top);
    };
    const id = window.setTimeout(compute, 0);
    window.addEventListener('resize', compute);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener('resize', compute);
    };
  }, [items]);

  return (
    <div className="relative mx-auto max-w-4xl" ref={containerRef}>
      <div
        className="absolute left-4 md:left-1/2 w-px"
        style={{ top: lineTop, bottom: 0, backgroundColor: `${ruleColor}80` }}
      />
      <ul className="timeline space-y-8 list-none">
        {items.map((p, i) => (
          <li
            key={p.title + p.period}
            ref={i === 0 ? firstItemRef : undefined}
            className="relative md:flex md:items-center md:gap-8 list-none"
          >
            <div className={`hidden md:block md:flex-1 ${i % 2 ? 'order-2 text-left' : 'text-right'}`}>
              <h4 className="text-xl font-bold" style={{ color: dotColor }}>{p.title}</h4>
              <div className="opacity-80">{p.period}</div>
            </div>
            {/* Center dot */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-4 md:left-1/2 z-10">
              <span
                className="block h-3 w-3 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.3)]"
                style={{ backgroundColor: dotColor }}
              />
            </div>
            <div className="mt-2 md:mt-0 md:flex-1 pl-10 md:pl-0">
              <div
                className="rounded-lg bg-black/40 p-4"
                style={{ border: `1px solid ${cardBorderColor}` }}
              >
                <div className="mb-1 text-sm opacity-80">{p.period}</div>
                <h5 className="text-lg font-semibold mb-1">{p.title}</h5>
                <p className="text-sm opacity-90">{p.summary}</p>
                <div className="mt-2 text-xs opacity-80">Tech: {p.tech}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

