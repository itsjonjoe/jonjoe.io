import React from 'react';
import Card from './ui/Card';

type WipCardProps = {
  icon: React.ReactNode;
  title: string;
  message: string;
  borderColor?: string; // hex color for inline style or tailwind class fallback
  titleColor?: string;
  hoverBorderColor?: string;
  className?: string;
  bare?: boolean; // if true, render content without Card wrapper
};

export default function WipCard({
  icon,
  title,
  message,
  borderColor,
  titleColor,
  hoverBorderColor,
  className = '',
  bare = false,
}: WipCardProps) {
  const style: React.CSSProperties = {};
  if (borderColor) style.borderColor = borderColor;
  const content = (
    <>
      {icon ? <div className="mb-2 flex justify-center">{icon}</div> : null}
      <h4 className="text-xl font-semibold mb-1" style={titleColor ? { color: titleColor } : undefined}>
        {title}
      </h4>
      <p className="text-sm opacity-90">{message}</p>
    </>
  );
  if (bare) return content as unknown as JSX.Element;
  return (
    <Card className={`text-center transition ${className}`} style={style}>
      {content}
    </Card>
  );
}
