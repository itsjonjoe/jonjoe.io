type Size = 'sm' | 'md' | 'lg';

export const SOCIAL_LINKS = [
  { key: 'linkedin', href: 'https://linkedin.com/in/jonjoe', label: 'Connect on LinkedIn' },
  { key: 'github', href: 'https://github.com/jonjoe', label: 'Checkout my GitHub' },
  { key: 'instagram', href: 'https://www.instagram.com/jonyijoe/', label: 'Follow my Instagram' },
  { key: 'whatsapp', href: 'http://wa.me/+447387006958', label: 'Hit me up on WhatsApp' },
  { key: 'email', href: 'mailto:me@jonjoe.io?subject=Hello!%20I%20come%20in%20peace.', label: 'Throw me an Email' },
];

export const SocialIcon = ({ name, size = 24 }: { name: string; size?: number }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'currentColor' } as const;
  switch (name) {
    case 'linkedin':
      return (
        <svg {...common} aria-hidden>
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v15H0V8zm7.5 0h4.8v2.1h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 5.99 3.33 5.99 7.66V23H18V16.4c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V23H7.5V8z" />
        </svg>
      );
    case 'github':
      return (
        <svg {...common} aria-hidden>
          <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.86 3.16 8.98 7.55 10.43.55.1.75-.24.75-.53v-1.86c-3.07.67-3.72-1.3-3.72-1.3-.5-1.26-1.22-1.6-1.22-1.6-1-.67.08-.65.08-.65 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.9.1-.71.38-1.19.69-1.46-2.45-.28-5.02-1.23-5.02-5.46 0-1.2.43-2.18 1.13-2.95-.12-.28-.49-1.43.1-2.97 0 0 .92-.29 3.01 1.13.88-.24 1.83-.36 2.78-.37.95 0 1.9.13 2.78.37 2.09-1.42 3.01-1.13 3.01-1.13.59 1.54.22 2.69.11 2.97.7.77 1.12 1.75 1.12 2.95 0 4.24-2.58 5.18-5.04 5.45.39.33.74.98.74 1.99v2.95c0 .29.2.64.76.53 4.38-1.46 7.53-5.57 7.53-10.43C23.02 5.24 18.27.5 12 .5z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common} aria-hidden>
          <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2.5A2.5 2.5 0 1014.5 12 2.5 2.5 0 0012 9.5zM18.5 6a1.5 1.5 0 11-1.5 1.5A1.5 1.5 0 0118.5 6z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg {...common} aria-hidden>
          <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.38 0 0 5.38 0 12a11.9 11.9 0 001.63 6L0 24l6.17-1.6A11.9 11.9 0 0012 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22a10 10 0 01-5.09-1.39l-.36-.21-3.64.95.97-3.55-.23-.37A10 10 0 1122 12c0 5.52-4.48 10-10 10zm5.2-7.54c-.29-.14-1.7-.84-1.97-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.14-.17.19-.33.21-.62.07-.29-.14-1.23-.45-2.35-1.43-.87-.76-1.46-1.7-1.63-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.41s1.03 2.79 1.18 2.98c.14.19 2.03 3.1 4.92 4.35.69.3 1.22.48 1.64.62.69.22 1.32.19 1.81.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
        </svg>
      );
    case 'email':
      return (
        <svg {...common} aria-hidden>
          <path d="M3 6h18a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2z" />
          <path d="M1.5 8.5L12 13l10.5-4.5" />
          <circle cx="12" cy="12" r="2.2" />
        </svg>
      );
    default:
      return null;
  }
};

export default function SocialLinks({ size = 'md', className = '' }: { size?: Size; className?: string }) {
  const icon = size === 'sm' ? 20 : size === 'lg' ? 40 : 28;
  const circle = size === 'sm' ? 36 : size === 'lg' ? 60 : 48; // comfortable tap targets
  const gap = size === 'sm' ? 'gap-3' : size === 'lg' ? 'gap-5' : 'gap-4';
  return (
    <div className={`flex flex-wrap items-center justify-center ${gap} ${className}`}>
      {SOCIAL_LINKS.map((l) => (
        <a
          key={l.key}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className="group relative inline-flex items-center justify-center rounded-full text-[#1a1611]"
          style={{ width: circle, height: circle, background: '#d4953a' }}
        >
          <span className="absolute -inset-1 rounded-full opacity-0 transition group-hover:opacity-30" style={{ boxShadow: '0 0 18px rgba(212,149,58,0.6)' }} />
          <span className="relative text-[#1a1611]">
            <SocialIcon name={l.key} size={icon} />
          </span>
        </a>
      ))}
    </div>
  );
}
