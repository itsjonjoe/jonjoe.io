export default function Badge({
  children,
  color = '#d4953a',
  className = '',
  rounded = 'full',
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
  rounded?: 'full' | 'md' | 'sm';
}) {
  const radius = rounded === 'full' ? 'rounded-full' : rounded === 'md' ? 'rounded-md' : 'rounded';
  return (
    <span
      className={`inline-flex items-center ${radius} px-3 py-1 text-xs font-mono ${className}`}
      style={{
        color,
        borderColor: `${color}55`,
        background: `${color}1A`,
        borderWidth: 1,
      }}
    >
      {children}
    </span>
  );
}

