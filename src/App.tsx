import { useState } from 'react';
import LandingPage from './LandingPage';
import WarriorPage from './WarriorPage';
import SkaldPage from './SkaldPage';
import SmithPage from './SmithPage';

const SiteOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-20 flex flex-col items-center justify-center text-center select-none text-white/10">
    <h1 className="text-5xl md:text-8xl font-black tracking-widest">Jonjoe Whitfield</h1>
    <p className="mt-2 text-xs md:text-sm tracking-widest">Tagline</p>
    <div className="mt-2 h-px w-32 bg-current opacity-10" />
  </div>
);

export type Page = 'landing' | 'smith' | 'skald' | 'warrior';

const App = () => {
  const [page, setPage] = useState<Page>('landing');

  let content: JSX.Element;
  switch (page) {
    case 'smith':
      content = <SmithPage onBack={() => setPage('landing')} />;
      break;
    case 'skald':
      content = <SkaldPage onBack={() => setPage('landing')} />;
      break;
    case 'warrior':
      content = <WarriorPage onBack={() => setPage('landing')} />;
      break;
    default:
      content = <LandingPage onSelect={setPage} />;
  }

  return (
    <div className="relative">
      {page === 'landing' && <SiteOverlay />}
      <div className="relative z-10">{content}</div>
    </div>
  );
};

export default App;
