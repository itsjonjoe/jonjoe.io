import Card from './ui/Card';
import Chip from './ui/Chip';

type SkillGroupProps = {
  title: string;
  items: string[];
  titleColor?: string;
};

export default function SkillGroup({ title, items, titleColor = '#d4953a' }: SkillGroupProps) {
  return (
    <Card>
      <div className="mb-2 font-semibold tracking-wide" style={{ color: titleColor }}>
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <Chip key={it} color={titleColor}>
            {it}
          </Chip>
        ))}
      </div>
    </Card>
  );
}

