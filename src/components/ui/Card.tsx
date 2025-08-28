import React from 'react';

export default function Card({
  children,
  className = '',
  border = '#8b4513',
  padding = 'p-6 md:p-8',
}: {
  children: React.ReactNode;
  className?: string;
  border?: string;
  padding?: string;
}) {
  return (
    <div
      className={`rounded-lg border bg-black/50 ${padding} ${className}`}
      style={{ borderColor: border }}
    >
      {children}
    </div>
  );
}

