import { useState } from 'react';
import LandingPage from './LandingPage';
import WarriorPage from './WarriorPage';
import SkaldPage from './SkaldPage';
import GymPage from './GymPage';

export type Page = 'landing' | 'warrior' | 'skald' | 'gym';

const App = () => {
  const [page, setPage] = useState<Page>('landing');

  switch (page) {
    case 'warrior':
      return <WarriorPage onBack={() => setPage('landing')} />;
    case 'skald':
      return <SkaldPage onBack={() => setPage('landing')} />;
    case 'gym':
      return <GymPage onBack={() => setPage('landing')} />;
    default:
      return <LandingPage onSelect={setPage} />;
  }
};

export default App;
