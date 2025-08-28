import BackLink from '../components/ui/BackLink';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Card from '../components/ui/Card';
import PixelScribe from '../components/icons/PixelScribe';

export default function SkaldPage() {
  const navigate = useNavigate();
  const { tab } = useParams();
  const activeTab = tab === 'ash-and-hollow' || tab === 'blog' ? tab : 'shorts';
  const [tabsStuck, setTabsStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => setTabsStuck(!e.isIntersecting), { rootMargin: '-4px 0px 0px 0px' });
    io.observe(el); return () => io.disconnect();
  }, []);

  const WIP = (
    <Card className="text-center border-[#4682b4]">
      <div className="mb-2 flex justify-center">
        <PixelScribe className="w-20 h-20" />
      </div>
      <h4 className="text-xl font-semibold mb-1" style={{ color: '#87ceeb' }}>Work in Progress</h4>
      <p className="text-sm opacity-90">Pages are being inked. Check back for new writing.</p>
    </Card>
  );

  return (
    <div className="min-h-screen bg-[#1a1611] p-4 text-[#87ceeb] md:p-8">
      <BackLink color="#4682b4" className={`transition-all duration-300 ${tabsStuck ? 'sm:opacity-0 sm:-translate-y-1 sm:pointer-events-none' : ''}`} />

      <div className="mx-auto mt-20 max-w-5xl space-y-8 md:mt-24 md:space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">THE SKALD'S HALL</h1>
          <h2 className="text-xl md:text-2xl opacity-90">Where Stories Take Wing</h2>
        </section>

        <div ref={sentinelRef} aria-hidden className="h-1" />
        <nav className="sticky top-0 z-20 mx-auto -mt-2 mb-2 w-full bg-[#1a1611]/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm py-2">
          <div className="mx-auto flex max-w-5xl items-stretch justify-center px-2">
            {tabsStuck && (
              <button
                onClick={() => navigate('/')}
                className="hidden sm:inline-flex items-center rounded-l-xl rounded-r-none border border-[#4682b4]/60 bg-black/40 px-3 text-sm text-[#87ceeb] hover:bg-[#4682b4]/20"
              >
                ← Longhouse
              </button>
            )}
            <ul className={`flex w-full max-w-xl items-center justify-center gap-2 p-1 border border-[#4682b4]/60 bg-black/40 rounded-xl transition-all duration-300 ${tabsStuck ? 'sm:rounded-l-none sm:-ml-px' : ''}`}>
              {[
                { key: 'shorts', label: 'Short Stories', to: '/writing/shorts' },
                { key: 'ash-and-hollow', label: 'Ash and Hollow', to: '/writing/ash-and-hollow' },
                { key: 'blog', label: 'Posts', to: '/writing/blog' },
              ].map(t => (
                <li key={t.key} className="flex-1">
                  <NavLink
                    to={t.to}
                    className={({ isActive }) => `block text-center text-sm md:text-base px-3 py-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-[#4682b4] text-black font-semibold' : 'text-[#87ceeb] hover:bg-[#4682b4]/20'}`}
                  >
                    {t.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {activeTab === 'shorts' && (<section className="max-w-3xl mx-auto">{WIP}</section>)}
        {activeTab === 'ash-and-hollow' && (<section className="max-w-3xl mx-auto">{WIP}</section>)}
        {activeTab === 'blog' && (<section className="max-w-3xl mx-auto">{WIP}</section>)}

        <p className="text-center mt-6 font-mono opacity-70">“In every word lies the power to change a world.”</p>
      </div>
    </div>
  );
}
