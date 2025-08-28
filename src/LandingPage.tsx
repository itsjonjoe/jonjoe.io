import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Embers from './components/Embers';
import Longship from './components/Longship';
import VikingSmithIcon from './components/icons/VikingSmithIcon';
import VikingSkaldIcon from './components/icons/VikingSkaldIcon';
import VikingWarriorIcon from './components/icons/VikingWarriorIcon';

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

  useEffect(() => {
    const id = setInterval(() => {
      setSmithIndex(i => (i + 1) % smithTexts.length);
      setSkaldIndex(i => (i + 1) % skaldTexts.length);
      setWarriorIndex(i => (i + 1) % warriorTexts.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

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
        {/* Longship silhouette near the bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-30 hidden sm:block">
          <Longship className="w-[320px] h-[110px]" />
        </div>
      </div>

      <div className="landing-page relative flex flex-col md:flex-row md:h-screen overflow-visible md:overflow-hidden snap-y md:snap-none snap-mandatory">
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

              <span className="title-main block pt-24 sm:pt-28 md:pt-24 text-2xl font-bold tracking-widest md:text-3xl">{'<Smith />'}</span>
              <span
                key={smithIndex}
                className="title-sub block text-base italic opacity-80 transition-opacity duration-300 md:text-lg"
              >
                {smithTexts[smithIndex]}
              </span>
            </div>
            <p className="section-description mb-6 font-mono text-xs opacity-90 sm:text-sm">
              Wielding modern weapons to conquer digital realms. Building fortresses that stand the test of time.
            </p>
            <ul className="rune-list mb-8 text-left">
              {smithRunes.map(r => (
                <li key={r} className="font-mono text-xs sm:text-sm">
                  {r}
                </li>
              ))}
            </ul>
            <div className="action-hint flex items-center justify-center gap-2 text-xs font-mono opacity-70 sm:text-sm">
              <span>Enter the workshop</span>
              <span className="axe-indicator animate-axe">⚔️</span>
            </div>
          </div>
          <VikingCrest className="left-1/2 top-full md:top-1/2 md:left-full" />
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
              <span className="title-main block pt-24 sm:pt-28 md:pt-24 text-2xl font-bold tracking-widest md:text-3xl">{"\"Skald\""}</span>
              <span
                key={skaldIndex}
                className="title-sub block text-base italic opacity-80 transition-opacity duration-300 md:text-lg"
              >
                {skaldTexts[skaldIndex]}
              </span>
            </div>
            <p className="section-description mb-6 font-mono text-xs opacity-90 sm:text-sm">
              Crafting sagas that echo through the ages. Words that kindle fire in mortal hearts.
            </p>
            <ul className="rune-list mb-8 text-left">
              {skaldRunes.map(r => (
                <li key={r} className="font-mono text-xs sm:text-sm">
                  {r}
                </li>
              ))}
            </ul>
            <div className="action-hint flex items-center justify-center gap-2 text-xs font-mono opacity-70 sm:text-sm">
              <span>Enter the hall</span>
              <span className="axe-indicator animate-axe">📜</span>
            </div>
          </div>
          <VikingCrest className="left-1/2 top-full md:top-1/2 md:left-full" />
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
              <span className="title-main block pt-24 sm:pt-28 md:pt-24 text-2xl font-bold tracking-widest md:text-3xl">[Warrior]</span>
              <span
                key={warriorIndex}
                className="title-sub block text-base italic opacity-80 transition-opacity duration-300 md:text-lg"
              >
                {warriorTexts[warriorIndex]}
              </span>
            </div>
            <p className="section-description mb-6 font-mono text-xs opacity-90 sm:text-sm">
              Building strength and discipline through iron and nutrition.
            </p>
            <ul className="rune-list mb-8 text-left">
              {warriorRunes.map(r => (
                <li key={r} className="font-mono text-xs sm:text-sm">
                  {r}
                </li>
              ))}
            </ul>
            <div className="action-hint flex items-center justify-center gap-2 text-xs font-mono opacity-70 sm:text-sm">
              <span>Enter the training ground</span>
              <span className="axe-indicator animate-axe">🏋️</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
