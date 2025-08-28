import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WarriorPage from './pages/WarriorPage';
import SkaldPage from './pages/SkaldPage';
import SmithPage from './pages/SmithPage';

const SiteOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-20 hidden md:flex flex-col items-center justify-center text-center select-none">
    <h1 className="text-5xl md:text-8xl font-black tracking-widest text-white/10">Jonjoe Whitfield</h1>
    <p className="mt-2 text-xs md:text-sm tracking-widest text-white/10">SMITH • SKALD • WARRIOR</p>
    <div className="mt-2 h-px w-32 bg-white/10" />
  </div>
);

const AppRoutes = () => {
  const location = useLocation();
  return (
    <div className="relative">
      {location.pathname === '/' && <SiteOverlay />}

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/engineering" element={<Navigate to="/engineering/cv" replace />} />
          <Route path="/engineering/:tab" element={<SmithPage />} />
          <Route path="/writing" element={<SkaldPage />} />
          <Route path="/warrior" element={<WarriorPage />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
