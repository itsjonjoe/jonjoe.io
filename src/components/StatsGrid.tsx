import Card from './ui/Card';

export type StatItem = { value: string; label: string };

type StatsGridProps = {
  items: StatItem[];
  color?: string; // text color for value/accents
  cols?: string; // tailwind grid-cols classes (default responsive)
};

export default function StatsGrid({ items, color = '#d4953a', cols = 'grid-cols-2 md:grid-cols-4' }: StatsGridProps) {
  return (
    <div className={`grid gap-6 ${cols} max-w-3xl mx-auto`}>
      {items.map((s) => (
        <Card key={s.label} className="text-center">
          <div className="font-mono text-2xl font-bold" style={{ color }}>
            {s.value}
          </div>
          <div className="text-sm opacity-80">{s.label}</div>
        </Card>
      ))}
    </div>
  );
}

