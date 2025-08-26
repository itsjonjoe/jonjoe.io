import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import WarriorPage from './WarriorPage';
import SkaldPage from './SkaldPage';
import SmithPage from './SmithPage';

const SiteOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-0 flex flex-col items-center justify-center text-center select-none text-white/5">
    <h1 className="text-5xl md:text-8xl font-black tracking-widest">JONJOE WHITFIELD</h1>
    <p className="mt-2 text-xs md:text-sm tracking-widest">
      FORGING CODE • CRAFTING SAGAS • HONING STRENGTH
    </p>
  </div>
);

const App = () => (
  <Router>
    <div className="relative">
      <SiteOverlay />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/engineering" element={<SmithPage />} />
          <Route path="/writing" element={<SkaldPage />} />
          <Route path="/warrior" element={<WarriorPage />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
