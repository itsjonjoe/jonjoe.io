import BackLink from '../components/ui/BackLink';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { posts } from '../content/posts';
import { useEffect, useRef, useState } from 'react';
import Card from '../components/ui/Card';
import PixelScribe from '../components/icons/PixelScribe';
import StickyTabs from '../components/StickyTabs';
import HeroTitle from '../components/HeroTitle';
import SectionHeader from '../components/SectionHeader';
import WipCard from '../components/WipCard';

export default function SkaldPage() {
  const navigate = useNavigate();
  const { tab } = useParams();
  const activeTab = tab === 'ash-and-hollow' || tab === 'blog' ? tab : 'shorts';
  const [tabsStuck] = useState(false);

  // Ensure page scrolls to top when switching tabs
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const WIP = (
    <WipCard
      icon={<PixelScribe className="w-20 h-20" />}
      title="Work in Progress"
      message="Pages are being inked. Check back for new writing."
      borderColor="#4682b4"
      titleColor="#87ceeb"
    />
  );

  return (
    <div className="min-h-screen bg-[#1a1611] p-4 text-[#87ceeb] md:p-8">
      <BackLink color="#4682b4" className="hidden md:block transition-all duration-300" />

      <div className="mx-auto mt-20 max-w-5xl space-y-8 md:mt-24 md:space-y-12">
        <section className="text-center space-y-4">
          <h1 className="hidden md:block text-4xl md:text-5xl font-bold">THE SKALD'S HALL</h1>
          <HeroTitle drop="S" line1="kald's" line2="Hall" borderColor="#4682b4" letterColor="#87ceeb" textColor="#87ceeb" />
          <h2 className="text-xl md:text-2xl opacity-90">Where Stories Take Wing</h2>
        </section>

        <StickyTabs
          items={[
            { key: 'shorts', label: 'Short Stories', to: '/writing/shorts' },
            { key: 'ash-and-hollow', label: 'Ash and Hollow', to: '/writing/ash-and-hollow' },
            { key: 'blog', label: 'Posts', to: '/writing/blog' },
          ]}
          borderCls="border-[#4682b4]/60"
          textCls="text-[#87ceeb]"
          activeBgCls="bg-[#4682b4]"
          hoverBgCls="hover:bg-[#4682b4]/20"
          showBackDesktop
          backLabel="← Longhouse"
          onBackClick={() => navigate('/')}
          scrollToTopOnChange
          negateSpaceYClass="-mt-8 md:-mt-12"
        />

        {activeTab === 'shorts' && (
          <section className="max-w-3xl mx-auto">
            <SectionHeader title="Short Stories" align="center" />
            {WIP}
          </section>
        )}
        {activeTab === 'ash-and-hollow' && (
          <section className="max-w-3xl mx-auto">
            <SectionHeader title="Ash and Hollow" align="center" />
            {WIP}
          </section>
        )}
        {activeTab === 'blog' && (
          <section className="max-w-3xl mx-auto">
            <SectionHeader title="Posts" align="center" />
            {posts.length === 0 ? (
              WIP
            ) : (
              <div className="space-y-4">
                {posts.map(p => (
                  <Card key={p.slug} className="border-[#4682b4] hover:border-[#87ceeb] transition">
                    <h3 className="text-xl font-semibold" style={{ color: '#87ceeb' }}>{p.title}</h3>
                    <div className="text-xs opacity-70">{p.date}</div>
                    {p.summary && <p className="mt-2 opacity-90">{p.summary}</p>}
                    {p.tags && p.tags.length > 0 && (
                      <div className="mt-2 text-xs opacity-80">{p.tags.join(' • ')}</div>
                    )}
                    <NavLink to={`/writing/blog/${p.slug}`} className="mt-3 inline-block text-sm text-[#87ceeb] hover:underline">Read →</NavLink>
                  </Card>
                ))}
              </div>
            )}
          </section>
        )}

        <p className="text-center mt-6 font-mono opacity-70">“In every word lies the power to change a world.”</p>
      </div>
    </div>
  );
}
