type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  color?: string; // text color for title
  className?: string;
  sizeClass?: string; // Tailwind size classes for title, default text-3xl
  titleClassName?: string; // extra classes for title
  subtitleClassName?: string; // extra classes for subtitle
};

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  color,
  className = '',
  sizeClass = 'text-3xl',
  titleClassName = '',
  subtitleClassName = '',
}: SectionHeaderProps) {
  const alignCls = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
  return (
    <div className={`${alignCls} ${className}`}>
      <h3 className={`${sizeClass} mb-2 ${titleClassName}`} style={color ? { color } : undefined}>{title}</h3>
      {subtitle ? (
        <p className={`opacity-80 mb-6 max-w-xl mx-auto ${subtitleClassName}`}>{subtitle}</p>
      ) : null}
    </div>
  );
}

