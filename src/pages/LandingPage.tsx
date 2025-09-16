import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Embers from '../components/Embers';
import Longship from '../components/Longship';
import VikingSmithIcon from '../components/icons/VikingSmithIcon';
import VikingSkaldIcon from '../components/icons/VikingSkaldIcon';
import VikingWarriorIcon from '../components/icons/VikingWarriorIcon';
import Reveal from '../components/Reveal';
import SectionParticles from '../components/SectionParticles';
import Modal from '../components/Modal';
import ContactList from '../components/ContactList';

const smithTexts = ['Code Forger', 'System Builder', 'Tech Viking', 'Digital Warrior'];
const skaldTexts = ['Tale Weaver', 'Word Smith', 'Story Teller', 'Saga Writer'];

const warriorTexts = ['Strength Seeker', 'Nutrition Sage', 'Health Warrior', 'Iron Viking'];

const smithRunes = ['React Native', 'TypeScript', 'Node.js', 'AWS', 'Architecture'];
const skaldRunes = ['Epic Tales', 'Verses', 'Chronicles', 'Legends', 'Ballads'];
const warriorRunes = ['Weightlifting', 'Macros', 'Consistency', 'Recovery'];

const VikingCrest = ({ className = '' }: { className?: string }) => (
  <div
    className={`viking-crest pointer-events-none absolute z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#8b4513] bg-black/60 md:h-20 md:w-20 ${className}`}
  >
    <div className="shield-ring ring-outer absolute inset-0 rounded-full border-2 border-[#d4953a]/60 animate-spin-slow" />
    <div className="shield-ring ring-inner absolute inset-1.5 rounded-full border-2 border-[#d4953a]/60 animate-spin-slower" />
    <div className="text-2xl font-bold text-[#d4953a]">⚡</div>
  </div>
);

export default function LandingPage() {
  const navigate = useNavigate();
  const [smithIndex, setSmithIndex] = useState(0);
  const [skaldIndex, setSkaldIndex] = useState(0);
  const [warriorIndex, setWarriorIndex] = useState(0);
  const [openMobile, setOpenMobile] = useState<'smith' | 'skald' | 'warrior' | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [ctaOffset, setCtaOffset] = useState(120);

  useEffect(() => {
    const id = setInterval(() => {
      setSmithIndex(i => (i + 1) % smithTexts.length);
      setSkaldIndex(i => (i + 1) % skaldTexts.length);
      setWarriorIndex(i => (i + 1) % warriorTexts.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // Measure the mobile CTA height and set boat bottom offset to CTA height + margin (8px)
  useEffect(() => {
    const compute = () => {
      const el = ctaRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // base margin from bottom-2 is 8px
      setCtaOffset(Math.ceil(rect.height + 8));
    };
    // compute on mount and on resize
    const id = window.setTimeout(compute, 0);
    window.addEventListener('resize', compute);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener('resize', compute);
    };
  }, []);

  const MOBILE_HDR = 64; // px for collapsed header height (title + icon)
  const MOBILE_SIDE_PAD = 8; // 0.5rem from inline style
  const CLOSED_HEIGHT = MOBILE_HDR + MOBILE_SIDE_PAD; // ensure header fully visible

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-20 animate-flame"
          style={{
            background: 'radial-gradient(circle, #d4953a, transparent)',
            top: '20%',
            left: '15%',
          }}
        />
        <div
          className="absolute w-[250px] h-[250px] rounded-full blur-3xl opacity-20 animate-flame"
          style={{
            background: 'radial-gradient(circle, #8b4513, transparent)',
            bottom: '20%',
            right: '15%',
          }}
        />
        {/* Floating embers */}
        <Embers count={28} />
        {/* Longship silhouette near the bottom (moved outside this non-interactive layer) */}
      </div>

      {/* Interactive Longship (clickable) */}
      <InteractiveLongship bottomOffset={ctaOffset} />

      {/* Mobile Accordion */}
      {/* Mobile Title (ghost overlay style with drop-cap J) */}
      <div className="md:hidden relative z-10 px-4 pt-0 pb-1 select-none">
        <h1 className="px-2 m-0">
          <div className="flex items-start justify-center gap-2">
            <div className="flex items-center justify-center w-12 h-16 rounded-md border-2 border-[#d4953a] bg-black/50 shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
              <span className="text-5xl font-black leading-none text-[#d4953a]">J</span>
            </div>
            <div className="flex flex-col leading-tight text-left">
              <span className="text-3xl font-black tracking-widest text-white/70">onjoe</span>
              <span className="text-3xl font-black tracking-widest text-white/70 -mt-1">Whitfield</span>
            </div>
          </div>
        </h1>
        <p className="mt-2 text-center text-sm tracking-widest text-white/40">SMITH • SKALD • WARRIOR</p>
        <div className="mt-2 h-px w-24 mx-auto bg-white/10" />
      </div>

      <div className="md:hidden relative z-10 px-2 pt-1 pb-24 space-y-2" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 90px)' }}>
        {([
          {
            key: 'smith' as const,
            title: '<Smith />',
            icon: <VikingSmithIcon className="w-20 h-20 -mt-4 relative z-10" />,
            bg: 'from-[#2c1810] via-[#4a2c1a] to-[#1a1611]',
            border: 'border-[#8b4513] text-[#d4953a]',
            body: (
              <>
                <p className="section-description mb-4 font-mono text-sm opacity-90">
                  Wielding modern weapons to conquer digital realms. Building fortresses that stand the test of time.
                </p>
                <ul className="rune-list mb-4 text-left">
                  {smithRunes.map(r => (
                    <li key={r} className="font-mono text-sm">{r}</li>
                  ))}
                </ul>
                <div className="mt-2">
                  <button
                    aria-label="Enter the workshop"
                    onClick={() => navigate('/engineering')}
                    className="w-full rounded-lg bg-[#d4953a] py-3 text-center text-sm font-semibold text-black shadow-[0_6px_16px_rgba(212,149,58,0.45)] active:translate-y-px"
                  >
                    Enter the workshop
                  </button>
                </div>
              </>
            ),
          },
          {
            key: 'skald' as const,
            title: '"Skald"',
            icon: <VikingSkaldIcon className="w-20 h-20 -mt-4 relative z-10" />,
            bg: 'from-[#1a2332] via-[#2d4a6b] to-[#1a1611]',
            border: 'border-[#4682b4] text-[#87ceeb]',
            body: (
              <>
                <p className="section-description mb-4 font-mono text-sm opacity-90">
                  Crafting sagas that echo through the ages. Words that kindle fire in mortal hearts.
                </p>
                <ul className="rune-list mb-4 text-left">
                  {skaldRunes.map(r => (
                    <li key={r} className="font-mono text-sm">{r}</li>
                  ))}
                </ul>
                <div className="mt-2">
                  <button
                    aria-label="Enter the hall"
                    onClick={() => navigate('/writing')}
                    className="w-full rounded-lg bg-[#4682b4] py-3 text-center text-sm font-semibold text-black shadow-[0_6px_16px_rgba(70,130,180,0.45)] active:translate-y-px"
                  >
                    Enter the hall
                  </button>
                </div>
              </>
            ),
          },
          {
            key: 'warrior' as const,
            title: '[Warrior]',
            icon: <VikingWarriorIcon className="w-20 h-20 -mt-4 relative z-10" />,
            bg: 'from-[#33260f] via-[#5b4a1a] to-[#1a1611]',
            border: 'border-[#eab308] text-[#eab308]',
            body: (
              <>
                <p className="section-description mb-4 font-mono text-sm opacity-90">
                  Building strength and discipline through iron and nutrition.
                </p>
                <ul className="rune-list mb-4 text-left">
                  {warriorRunes.map(r => (
                    <li key={r} className="font-mono text-sm">{r}</li>
                  ))}
                </ul>
                <div className="mt-2">
                  <button
                    aria-label="Enter the training ground"
                    onClick={() => navigate('/warrior')}
                    className="w-full rounded-lg bg-[#eab308] py-3 text-center text-sm font-semibold text-black shadow-[0_6px_16px_rgba(234,179,8,0.45)] active:translate-y-px"
                  >
                    Enter the training ground
                  </button>
                </div>
              </>
            ),
          },
        ]).map(section => {
          const open = openMobile === section.key;
          return (
            <div
              key={section.key}
              className={`accordion overflow-visible rounded-xl border ${section.border} bg-gradient-to-br ${section.bg}`}
              style={{ maxHeight: open ? 1000 : CLOSED_HEIGHT, padding: '0.5rem' }}
            >
              <div className="flex w-full items-center justify-between" style={{ height: MOBILE_HDR }}>
                <button
                  onClick={() => setOpenMobile(open ? null : section.key)}
                  className="flex w-full items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    {section.icon}
                    <span className="font-extrabold tracking-widest text-2xl leading-none">
                      {section.title}
                    </span>
                  </div>
                </button>
              </div>
              <div className="text-left overflow-hidden px-2" style={{ maxHeight: open ? 1000 : 0 }}>
                <div className="mt-2">
                  {open && section.body}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Say Hello CTA for mobile */}
      <div ref={ctaRef} className="md:hidden fixed left-2 right-2 bottom-2 z-20">
        <button
          onClick={() => setContactOpen(true)}
          className="w-full rounded-lg bg-[#d4953a] py-3 text-center text-sm font-semibold text-black shadow-[0_6px_16px_rgba(212,149,58,0.45)] active:translate-y-px"
        >
          Say Hello
        </button>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex landing-page relative flex-col md:flex-row md:h-screen overflow-visible md:overflow-hidden snap-y md:snap-none snap-mandatory">
        {/* Smith Section */}
        <section
          onClick={() => navigate('/engineering')}
          className="group section-smith knot-border relative flex flex-1 cursor-pointer items-center justify-center border-b-2 border-[#8b4513] bg-gradient-to-br from-[#2c1810] via-[#4a2c1a] to-[#1a1611] text-[#d4953a] transition-all duration-500 hover:flex-[1.2] md:border-b-0 md:border-r-2 min-h-[100svh] md:min-h-0 p-8 sm:p-12 snap-start"
        >
          <div className="section-content relative z-10 mx-auto flex max-w-xs flex-col items-center text-center">
            <div className="relative mb-6 flex flex-col items-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 md:-top-12">
                <VikingSmithIcon className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" />
              </div>

              <Reveal>
                <span className="title-main block pt-24 sm:pt-28 md:pt-24 text-2xl font-bold tracking-widest md:text-3xl">{'<Smith />'}</span>
                <div className="title-rule" />
              </Reveal>
              <span
                key={smithIndex}
                className="title-sub block text-base italic opacity-80 transition-opacity duration-300 md:text-lg"
              >
                {smithTexts[smithIndex]}
              </span>
            </div>
            <Reveal>
              <p className="section-description mb-6 font-mono text-sm sm:text-base md:text-lg font-semibold opacity-95">
                Wielding modern weapons to conquer digital realms. Building fortresses that stand the test of time.
              </p>
            </Reveal>
            <Reveal>
              <ul className="rune-list mb-8 text-left">
                {smithRunes.map(r => (
                  <li key={r} className="font-mono text-xs sm:text-sm">
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="action-hint flex items-center justify-center gap-2 text-xs font-mono opacity-80 sm:text-sm">
              <span>Forge</span>
              <span className="axe-indicator animate-axe">⚔️</span>
            </div>
          </div>
          <VikingCrest className="left-1/2 top-full md:top-1/2 md:left-full" />
          <SectionParticles className="z-0" count={20} colorA="#ffcf78" colorB="#d4953a" />
        </section>

        {/* Skald Section */}
        <section
          onClick={() => navigate('/writing')}
          className="group section-skald knot-border relative flex flex-1 cursor-pointer items-center justify-center border-t-2 border-b-2 border-[#4682b4] bg-gradient-to-br from-[#1a2332] via-[#2d4a6b] to-[#1a1611] text-[#87ceeb] transition-all duration-500 hover:flex-[1.2] md:border-t-0 md:border-b-0 md:border-l-2 md:border-r-2 min-h-[100svh] md:min-h-0 p-8 sm:p-12 snap-start"
        >
          <div className="section-content relative z-10 mx-auto flex max-w-xs flex-col items-center text-center">
            <div className="relative mb-6 flex flex-col items-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 md:-top-12">
                <VikingSkaldIcon className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" />
              </div>
              <Reveal>
                <span className="title-main block pt-24 sm:pt-28 md:pt-24 text-2xl font-bold tracking-widest md:text-3xl">{"\"Skald\""}</span>
                <div className="title-rule" />
              </Reveal>
              <span
                key={skaldIndex}
                className="title-sub block text-base italic opacity-80 transition-opacity duration-300 md:text-lg"
              >
                {skaldTexts[skaldIndex]}
              </span>
            </div>
            <Reveal>
              <p className="section-description mb-6 font-mono text-sm sm:text-base md:text-lg font-semibold opacity-95">
                Crafting sagas that echo through the ages. Words that kindle fire in mortal hearts.
              </p>
            </Reveal>
            <Reveal>
              <ul className="rune-list mb-8 text-left">
                {skaldRunes.map(r => (
                  <li key={r} className="font-mono text-xs sm:text-sm">
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="action-hint flex items-center justify-center gap-2 text-xs font-mono opacity-80 sm:text-sm">
              <span>Recite</span>
              <span className="axe-indicator animate-axe">📜</span>
            </div>
          </div>
          <VikingCrest className="left-1/2 top-full md:top-1/2 md:left-full" />
          <SectionParticles className="z-0" count={20} colorA="#bfe4ff" colorB="#6fb1de" />
        </section>

        {/* Warrior Section */}
        <section
          onClick={() => navigate('/warrior')}
          className="group section-warrior knot-border relative flex flex-1 cursor-pointer items-center justify-center border-t-2 border-[#eab308] bg-gradient-to-br from-[#33260f] via-[#5b4a1a] to-[#1a1611] text-[#eab308] transition-all duration-500 hover:flex-[1.2] md:border-t-0 md:border-l-2 min-h-[100svh] md:min-h-0 p-8 sm:p-12 snap-start"
        >
          <div className="section-content relative z-10 mx-auto flex max-w-xs flex-col items-center text-center">
            <div className="relative mb-6 flex flex-col items-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 md:-top-12">
                <VikingWarriorIcon className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" />
              </div>
              <Reveal>
                <span className="title-main block pt-24 sm:pt-28 md:pt-24 text-2xl font-bold tracking-widest md:text-3xl">[Warrior]</span>
                <div className="title-rule" />
              </Reveal>
              <span
                key={warriorIndex}
                className="title-sub block text-base italic opacity-80 transition-opacity duration-300 md:text-lg"
              >
                {warriorTexts[warriorIndex]}
              </span>
            </div>
            <Reveal>
              <p className="section-description mb-6 font-mono text-sm sm:text-base md:text-lg font-semibold opacity-95">
                Building strength and discipline through iron and nutrition.
              </p>
            </Reveal>
            <Reveal>
              <ul className="rune-list mb-8 text-left">
                {warriorRunes.map(r => (
                  <li key={r} className="font-mono text-xs sm:text-sm">
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="action-hint flex items-center justify-center gap-2 text-xs font-mono opacity-80 sm:text-sm">
              <span>Train</span>
              <span className="axe-indicator animate-axe">🏋️</span>
            </div>
          </div>
          <SectionParticles className="z-0" count={20} colorA="#fff0a6" colorB="#eab308" />
        </section>
      </div>
      <Modal open={contactOpen} onClose={() => setContactOpen(false)} title="Say Hello">
        <ContactList />
      </Modal>
    </div>
  );
}

function InteractiveLongship({ bottomOffset = 120 }: { bottomOffset?: number }) {
  const [rocking, setRocking] = useState(false);
  const [running, setRunning] = useState(false);
  const [cycle, setCycle] = useState(0);
  const timerRef = useRef<number | null>(null);
  const runTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      if (runTimerRef.current) {
        window.clearTimeout(runTimerRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    setRocking(true);
    setRunning(true);
    setCycle(c => c + 1);
    // Rocking runs for 6s
    timerRef.current = window.setTimeout(() => {
      setRocking(false);
      timerRef.current = null;
    }, 6000);
    // Runners need 8s so runner 2 can finish 2s after runner 1
    runTimerRef.current = window.setTimeout(() => {
      setRunning(false);
      runTimerRef.current = null;
    }, 8000);
  };

  return (
    <div
      className="fixed md:absolute z-10 left-1/2 -translate-x-1/2 opacity-30 block pointer-events-auto cursor-pointer select-none md:bottom-4"
      style={{ bottom: `calc(env(safe-area-inset-bottom, 0px) + ${bottomOffset}px)` }}
      onClick={handleClick}
      aria-label="Rock the longship"
      title="Rock the longship"
    >
      <Longship className={`w-[320px] h-[110px] ${rocking ? 'ship-rock-strong' : ''}`} showRunner={running} punctMode={cycle % 3} />
    </div>
  );
}
