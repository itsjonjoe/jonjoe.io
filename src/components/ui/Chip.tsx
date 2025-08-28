export default function Chip({ children, color = '#d4953a', className = '' }: { children: React.ReactNode; color?: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-mono ${className}`}
      style={{
        color,
        borderColor: `${color}44`,
        background: `${color}18`,
        borderWidth: 1,
      }}
    >
      {children}
    </span>
  );
}

