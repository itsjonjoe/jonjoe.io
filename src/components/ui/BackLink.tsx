import { useNavigate } from 'react-router-dom';

export default function BackLink({
  to = '/',
  color = '#8b4513',
  label = '← Return to Longhouse',
  className = '',
}: {
  to?: string;
  color?: string;
  label?: string;
  className?: string;
}) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className={`fixed top-4 left-4 px-4 py-2 text-sm md:top-8 md:left-8 md:px-6 md:py-3 rounded transition bg-black/70 hover:text-white ${className}`}
      style={{ borderColor: color, borderWidth: 2, } as React.CSSProperties}
    >
      {label}
    </button>
  );
}

