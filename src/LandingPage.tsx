import { useEffect, useState } from 'react';
import { Page } from './App';

interface Props {
  onSelect: (p: Page) => void;
}

const warriorTexts = ['Code Forger', 'System Builder', 'Tech Viking', 'Digital Warrior'];
const skaldTexts = ['Tale Weaver', 'Word Smith', 'Story Teller', 'Saga Writer'];

const warriorRunes = ['React Native', 'TypeScript', 'Node.js', 'AWS', 'Architecture'];
const skaldRunes = ['Epic Tales', 'Verses', 'Chronicles', 'Legends', 'Ballads'];

const VikingWarriorIcon = () => (
  <svg
    viewBox="0 0 32 32"
    className="w-24 h-24 md:w-32 md:h-32"
    style={{ imageRendering: 'pixelated', display: 'block' }}
  >
    <rect x="0" y="0" width="32" height="32" fill="transparent" />
    {/* Helmet */}
    <rect x="10" y="6" width="12" height="2" fill="#8b4513" />
    <rect x="8" y="8" width="16" height="2" fill="#8b4513" />
    <rect x="6" y="10" width="4" height="2" fill="#8b4513" />
    <rect x="22" y="10" width="4" height="2" fill="#8b4513" />
    {/* Horns */}
    <rect x="4" y="8" width="2" height="4" fill="#ddd" />
    <rect x="26" y="8" width="2" height="4" fill="#ddd" />
    {/* Face */}
    <rect x="10" y="10" width="12" height="6" fill="#fdbcb4" />
    {/* Eyes */}
    <rect x="12" y="12" width="2" height="2" fill="#000" />
    <rect x="18" y="12" width="2" height="2" fill="#000" />
    {/* Beard */}
    <rect x="10" y="16" width="12" height="4" fill="#8b4513" />
    <rect x="8" y="18" width="16" height="2" fill="#8b4513" />
    {/* Body/Armor */}
    <rect x="8" y="20" width="16" height="8" fill="#696969" />
    <rect x="10" y="22" width="12" height="2" fill="#d4953a" />
    {/* Axe Handle */}
    <rect x="2" y="16" width="6" height="2" fill="#8b4513" />
    {/* Axe Blade */}
    <rect x="0" y="14" width="4" height="6" fill="#696969" />
  </svg>
);

const VikingSkaldIcon = () => (
  <svg
    viewBox="0 0 32 32"
    className="w-24 h-24 md:w-32 md:h-32"
    style={{ imageRendering: 'pixelated', display: 'block' }}
  >
    <rect x="0" y="0" width="32" height="32" fill="transparent" />
    {/* Head */}
    <rect x="10" y="6" width="12" height="10" fill="#fdbcb4" />
    {/* Hair */}
    <rect x="8" y="4" width="16" height="4" fill="#8b4513" />
    <rect x="6" y="6" width="4" height="6" fill="#8b4513" />
    <rect x="22" y="6" width="4" height="6" fill="#8b4513" />
    {/* Eyes */}
    <rect x="12" y="10" width="2" height="2" fill="#000" />
    <rect x="18" y="10" width="2" height="2" fill="#000" />
    {/* Beard */}
    <rect x="10" y="14" width="12" height="6" fill="#8b4513" />
    {/* Robes */}
    <rect x="6" y="20" width="20" height="8" fill="#4682b4" />
    <rect x="8" y="22" width="16" height="2" fill="#87ceeb" />
    {/* Scroll/Book */}
    <rect x="2" y="18" width="4" height="6" fill="#f4e4bc" />
    <rect x="2" y="20" width="4" height="1" fill="#8b4513" />
    <rect x="2" y="22" width="4" height="1" fill="#8b4513" />
    {/* Quill */}
    <rect x="26" y="16" width="2" height="8" fill="#8b4513" />
    <rect x="28" y="14" width="2" height="4" fill="#ddd" />
  </svg>
);

export default function LandingPage({ onSelect }: Props) {
  const [warriorIndex, setWarriorIndex] = useState(0);
  const [skaldIndex, setSkaldIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWarriorIndex(i => (i + 1) % warriorTexts.length);
      setSkaldIndex(i => (i + 1) % skaldTexts.length);
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
      </div>

      <div className="landing-page flex h-screen flex-col md:flex-row">
        {/* Warrior Section */}
        <section
          onClick={() => onSelect('warrior')}
          className="group relative flex flex-1 cursor-pointer items-center justify-center overflow-hidden border-b-2 border-[#8b4513] bg-gradient-to-br from-[#2c1810] via-[#4a2c1a] to-[#1a1611] text-[#d4953a] transition-all duration-500 hover:flex-[1.2] md:border-b-0 md:border-r-2"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="title-background text-[4rem] sm:text-[6rem] md:text-[8rem] font-black tracking-widest opacity-10">WARRIOR</div>
          </div>
          <div className="section-content relative z-10 mx-auto flex max-w-xs flex-col items-center text-center">
            <div className="relative mb-6 flex flex-col items-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 md:-top-12">
                <VikingWarriorIcon />
              </div>

              <span className="title-main block pt-28 md:pt-24 text-2xl font-bold tracking-widest md:text-3xl">WARRIOR</span>
              <span
                key={warriorIndex}
                className="title-sub block text-base italic opacity-80 transition-opacity duration-300 md:text-lg"
              >
                {warriorTexts[warriorIndex]}
              </span>
            </div>
            <p className="section-description mb-6 font-mono text-xs opacity-90 sm:text-sm">
              Wielding modern weapons to conquer digital realms. Building fortresses that stand the test of time.
            </p>
            <div className="skill-runes mb-8 flex flex-wrap justify-center gap-2">
              {warriorRunes.map(r => (
                <span
                  key={r}
                  className="rune-tag rounded border border-current bg-black/30 px-2 py-1 text-xs font-mono sm:text-sm"
                >
                  {r}
                </span>
              ))}
            </div>
            <div className="action-hint flex items-center justify-center gap-2 text-xs font-mono opacity-70 sm:text-sm">
              <span>Enter the workshop</span>
              <span className="axe-indicator animate-axe">⚔️</span>
            </div>
          </div>
        </section>
        
        {/* Central Divider */}
        <div className="central-divider relative h-1 w-full bg-gradient-to-r from-[#d4953a] via-[#8b4513] to-[#4682b4] md:h-full md:w-1 md:bg-gradient-to-b">
          {/* Viking Crest */}
          <div className="viking-crest pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#8b4513] bg-black/60 md:h-20 md:w-20">
            <div className="shield-ring ring-outer absolute inset-0 rounded-full border-2 border-[#d4953a]/60 animate-spin-slow" />
            <div className="shield-ring ring-inner absolute inset-1.5 rounded-full border-2 border-[#d4953a]/60 animate-spin-slower" />
            <div className="text-2xl font-bold text-[#d4953a]">⚡</div>
          </div>
        </div>

        {/* Skald Section */}
        <section
          onClick={() => onSelect('skald')}
          className="group relative flex flex-1 cursor-pointer items-center justify-center overflow-hidden border-t-2 border-[#4682b4] bg-gradient-to-br from-[#1a2332] via-[#2d4a6b] to-[#1a1611] text-[#87ceeb] transition-all duration-500 hover:flex-[1.2] md:border-t-0 md:border-l-2"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="title-background text-[4rem] sm:text-[6rem] md:text-[8rem] font-black tracking-widest opacity-10">SKALD</div>
          </div>
          <div className="section-content relative z-10 mx-auto flex max-w-xs flex-col items-center text-center">
            <div className="relative mb-6 flex flex-col items-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 md:-top-12">
                <VikingSkaldIcon />
              </div>
              <span className="title-main block pt-28 md:pt-24 text-2xl font-bold tracking-widest md:text-3xl">SKALD</span>
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
            <div className="story-runes mb-8 flex flex-wrap justify-center gap-2">
              {skaldRunes.map(r => (
                <span
                  key={r}
                  className="rune-tag rounded border border-current bg-black/30 px-2 py-1 text-xs font-mono sm:text-sm"
                >
                  {r}
                </span>
              ))}
            </div>
            <div className="action-hint flex items-center justify-center gap-2 text-xs font-mono opacity-70 sm:text-sm">
              <span>Enter the hall</span>
              <span className="axe-indicator animate-axe">📜</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
