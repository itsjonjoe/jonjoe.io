import Badge from './ui/Badge';
import Chip from './ui/Chip';
import Card from './ui/Card';

export interface ProjectItem {
  name: string;
  subtitle: string;
  status: string;
  badges: string[];
  description: string;
  tags: string[];
}

export default function ProjectCard({ project, color = '#d4953a' }: { project: ProjectItem; color?: string }) {
  return (
    <Card border={color} className="transform transition hover:-translate-y-1">
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="text-2xl font-bold mb-1" style={{ color }}>{project.name}</h4>
          <p className="opacity-80">{project.subtitle}</p>
        </div>
        <div className="mt-2 flex items-center gap-2 font-mono text-sm text-[#10b981] md:mt-0">
          <span className="h-2 w-2 rounded-full bg-[#10b981] shadow-[0_0_6px_#10b981]" />
          <span>{project.status}</span>
        </div>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.badges.map((b) => (
          <Badge key={b} color={color}>{b}</Badge>
        ))}
      </div>
      <p className="mb-4 opacity-90 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Chip key={t} color={color}>{t}</Chip>
        ))}
      </div>
    </Card>
  );
}

