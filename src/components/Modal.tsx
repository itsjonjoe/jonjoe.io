import { useEffect, useState } from 'react';
import Longship from './Longship';

export default function Modal({ open, onClose, children, title }: { open: boolean; onClose: () => void; children: React.ReactNode; title?: string }) {
  const [visible, setVisible] = useState(open);
  const [exiting, setExiting] = useState(false);

  // Handle ESC
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && handleClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [visible]);

  // Sync open prop with internal animated visibility
  useEffect(() => {
    if (open) {
      setVisible(true);
      setExiting(false);
    } else if (visible) {
      setExiting(true);
      const t = setTimeout(() => setVisible(false), 220);
      return () => clearTimeout(t);
    }
  }, [open]);

  const handleClose = () => {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      onClose();
    }, 200);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog" aria-label={title ?? 'Dialog'}>
      {/* Background art: longship subtle behind the dim backdrop */}
      <div className="absolute inset-0 pointer-events-none flex items-end justify-center pb-6 opacity-30">
        <Longship className="w-[360px] h-[120px] ship-rock" />
      </div>
      {/* Clickable backdrop on top of art */}
      <div className={`absolute inset-0 modal-backdrop ${exiting ? 'modal-fade-out' : 'modal-fade-in'}`} onClick={handleClose} />
      <div
        className={`relative w-full max-w-[min(92vw,32rem)] overflow-hidden rounded-2xl border border-white/10 bg-[#12100d] text-[#e8e1d1] shadow-2xl modal-panel ${
          exiting ? 'modal-zoom-out' : 'modal-zoom-in'
        }`}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] modal-runes" />
        <div
          className="pointer-events-none absolute -inset-[2px] rounded-2xl opacity-30 blur-md"
          style={{
            background:
              'conic-gradient(from 90deg at 50% 50%, rgba(212,149,58,0.35), transparent 25%, rgba(212,149,58,0.35) 50%, transparent 75%, rgba(212,149,58,0.35))',
          }}
        />
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <h3 className="text-base sm:text-lg font-semibold">{title ?? "Let's talk"}</h3>
          <button onClick={handleClose} aria-label="Close" className="rounded px-2 py-1 text-sm text-white/70 hover:bg-white/10">
            ✕
          </button>
        </div>
        <div className="relative p-5">
          {children}
          <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-25">
            <Longship className="w-[280px] h-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
