import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

type TabItem = { key: string; label: string; to: string };

type StickyTabsProps = {
  items: TabItem[];
  borderCls: string; // e.g., 'border-[#4682b4]/60'
  textCls: string; // e.g., 'text-[#87ceeb]'
  activeBgCls: string; // e.g., 'bg-[#4682b4]'
  hoverBgCls: string; // e.g., 'hover:bg-[#4682b4]/20'
  showBackDesktop?: boolean;
  backLabel?: string;
  onBackClick?: () => void;
  className?: string;
  scrollToTopOnChange?: boolean;
  // Optional horizontal padding on inner container
  containerPadXClass?: string; // e.g., 'px-2'
  // Optional top offset (in px) for both fixed (mobile) and sticky (desktop)
  topOffsetPx?: number;
  // Optional negative margin to cancel parent space-y
  negateSpaceYClass?: string;
};

export default function StickyTabs({
  items,
  borderCls,
  textCls,
  activeBgCls,
  hoverBgCls,
  showBackDesktop = false,
  backLabel = '← Back',
  onBackClick,
  className = '',
  scrollToTopOnChange = true,
  containerPadXClass = '',
  topOffsetPx = 0,
}: StickyTabsProps) {
  const [stuck, setStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { rootMargin: '-4px 0px 0px 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Track mobile viewport (md breakpoint is 880px)
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 879.98px)');
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  // Measure nav height to create a spacer when fixed on mobile
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const measure = () => setNavHeight(el.offsetHeight || 0);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const stuckNow = isMobile ? true : stuck;
  const ulBase = `flex w-full ${stuckNow ? 'max-w-none' : 'max-w-xl'} items-center justify-center gap-1 py-1 border ${borderCls} bg-black/40 rounded-xl transition-all duration-300 ${stuckNow ? 'sm:rounded-l-none sm:-ml-px' : ''}`;

  const navClass = isMobile
    ? `fixed left-0 right-0 z-50 m-0 w-full bg-[#1a1611]/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm py-1 ${className}`
    : `sticky z-50 mx-auto mb-1 w-full bg-[#1a1611]/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm py-1 ${className}`;

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="hidden md:block md:h-px md:-mt-px" />
      <nav
        ref={navRef}
        className={navClass}
        style={
          isMobile
            ? { top: `calc(env(safe-area-inset-top, 0px) + ${topOffsetPx}px)`, marginTop: 0, marginBottom: 0 }
            : { top: `${topOffsetPx}px`, marginTop: 0, marginBottom: 0 }
        }
      >
        <div className={`mx-auto flex max-w-5xl items-stretch justify-center ${containerPadXClass}`}>
          {stuckNow && showBackDesktop && (
            <button
              onClick={onBackClick}
              className={`hidden md:inline-flex items-center rounded-l-xl rounded-r-none border ${borderCls} bg-black/40 px-3 text-sm ${textCls} ${hoverBgCls}`}
            >
              {backLabel}
            </button>
          )}
          <ul className={ulBase}>
            {items.map(t => (
              <li key={t.key} className="flex-1">
                <NavLink
                  to={t.to}
                  onClick={() => {
                    if (scrollToTopOnChange) window.scrollTo(0, 0);
                  }}
                  className={({ isActive }) =>
                    `block text-center text-sm md:text-base px-3 py-2 rounded-lg transition-colors duration-200 ${isActive ? `${activeBgCls} text-black font-semibold` : `${textCls} ${hoverBgCls}`
                    }`
                  }
                >
                  {t.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {isMobile && <div aria-hidden className="md:hidden" style={{ height: navHeight }} />}
    </>
  );
}
