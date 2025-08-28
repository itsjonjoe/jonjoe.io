export default function ProgressBar({ value, color = '#d4953a' }: { value: string; color?: string }) {
  return (
    <div className="h-1.5 w-full rounded bg-white/10">
      <div className="h-full rounded" style={{ width: value, background: color }} />
    </div>
  );
}

