import { SOCIAL_LINKS, SocialIcon } from './SocialLinks';

export default function ContactList() {
  return (
    <ul className="space-y-3">
      {SOCIAL_LINKS.map((l) => (
        <li key={l.key}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-[#d4953a] hover:bg-[#d4953a]/10"
          >
            <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#d4953a] text-[#1a1611] shadow-[0_0_12px_rgba(212,149,58,0.35)]">
              <SocialIcon name={l.key} size={22} />
            </span>
            <span className="flex-1 font-semibold">{l.label}</span>
            <span className="opacity-70 group-hover:opacity-100">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

