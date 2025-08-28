import { NavLink } from 'react-router-dom';

export default function AvailabilityCTA({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto max-w-2xl overflow-hidden rounded-2xl border-2 border-[#8b4513] bg-black/40 p-8 sm:p-10 md:p-12 ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,149,58,0.08)_0%,transparent_70%)]" />
        <div className="absolute -inset-[2px] rounded-2xl opacity-40 blur-md"
             style={{
               background:
                 'conic-gradient(from 90deg at 50% 50%, rgba(212,149,58,0.35), transparent 25%, rgba(212,149,58,0.35) 50%, transparent 75%, rgba(212,149,58,0.35))',
             }} />
      </div>

      <div className="mb-4 flex items-center justify-center gap-2 text-[#10b981] font-mono text-xs sm:text-sm">
        <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_6px_#10b981] animate-pulse" />
        <span>Available for new projects</span>
      </div>

      <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
        Building <span className="text-[#d4953a]">products people love</span> is what drives me.
      </h4>
      <p className="mt-3 text-center opacity-90 text-sm sm:text-base">
        Principal Engineer with <span className="text-[#d4953a] font-semibold">10+ years</span> crafting
        exceptional digital experiences for world‑class kingdoms.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="mailto:contact@jonjoe.dev?subject=Project%20Inquiry"
          className="inline-flex items-center justify-center rounded-md bg-[#d4953a] px-5 py-2.5 text-[#1a1611] font-semibold shadow-[0_8px_25px_rgba(212,149,58,0.25)] transition-transform hover:-translate-y-0.5"
        >
          Start a Conversation
        </a>
        <NavLink
          to="/engineering/cv"
          className="inline-flex items-center justify-center rounded-md border border-[#d4953a] px-5 py-2.5 text-[#d4953a] hover:bg-[#d4953a]/10"
        >
          View CV
        </NavLink>
      </div>
    </div>
  );
}

