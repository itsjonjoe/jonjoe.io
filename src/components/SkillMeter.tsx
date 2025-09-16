import Card from './ui/Card';
import ProgressBar from './ui/ProgressBar';

type SkillMeterProps = {
  name: string;
  level: string;
  width: string; // css width e.g. '80%'
  color?: string; // title color
};

export default function SkillMeter({ name, level, width, color = '#d4953a' }: SkillMeterProps) {
  return (
    <Card className="transition transform hover:-translate-y-0.5">
      <div className="flex items-end justify-between mb-2">
        <div className="font-semibold" style={{ color }}>{name}</div>
        <div className="font-mono text-xs opacity-80">{level}</div>
      </div>
      <ProgressBar value={width} />
    </Card>
  );
}

