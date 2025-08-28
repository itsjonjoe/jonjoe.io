import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import AvailabilityCTA from '../components/AvailabilityCTA';
import engineeringData from '../../data/engineering.json';
import BackLink from '../components/ui/BackLink';
import Chip from '../components/ui/Chip';
import Modal from '../components/Modal';
import SocialLinks from '../components/SocialLinks';
import ContactList from '../components/ContactList';
import Card from '../components/ui/Card';
import ProgressBar from '../components/ui/ProgressBar';
import ProjectCard from '../components/ProjectCard';
import PixelBuilder from '../components/icons/PixelBuilder';
import workExperience from '../../data/work_experience.json';
type WorkItem = { title: string; period: string; summary: string; tech: string };
const workItems = workExperience as WorkItem[];
const orderedWork = [...workItems].reverse(); // latest first

interface Stat {
  value: string;
  label: string;
}

interface Skill {
  name: string;
  level: string;
  width: string;
}

interface Project {
  name: string;
  subtitle: string;
  status: string;
  badges: string[];
  description: string;
  tags: string[];
}

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

interface EngineeringData {
  stats: Stat[];
  skills: Skill[];
  projects: Project[];
  testimonials: Testimonial[];
}

const { stats, skills, projects, testimonials } =
  engineeringData as EngineeringData;

export default function SmithPage() {
  const navigate = useNavigate();
  const { tab } = useParams();
  const activeTab = (tab === 'work-experience' || tab === 'projects') ? tab : 'cv';
  const [open, setOpen] = useState(false);
  const [tabsStuck, setTabsStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setTabsStuck(!entry.isIntersecting),
      { rootMargin: '-4px 0px 0px 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const skillGroups: { title: string; items: string[] }[] = [
    { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
    { title: 'Mobile', items: ['React Native', 'Expo', 'iOS', 'Android'] },
    { title: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind', 'Storybook'] },
    { title: 'Backend', items: ['Node.js', 'Express', 'GraphQL', 'tRPC', 'WebSockets'] },
    { title: 'Cloud & Infra', items: ['AWS', 'GCP', 'Lambda', 'API Gateway', 'S3', 'CloudFront', 'RDS', 'DynamoDB', 'CDK', 'Terraform', 'Docker', 'CI/CD'] },
    { title: 'Data & Viz', items: ['D3.js', 'ETL', 'PostgreSQL', 'SQLite', 'Analytics'] },
    { title: 'Testing & Quality', items: ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'MSW', 'ESLint', 'Prettier'] },
    { title: 'Practices', items: ['Architecture', 'Domain Modeling', 'Design Systems', 'Accessibility', 'Performance', 'Security', 'SOLID'] },
  ];
  return (
    <div className="min-h-screen bg-[#1a1611] p-4 text-[#d4953a] md:p-8">
      <BackLink
        color="#8b4513"
        className={`transition-all duration-300 opacity-100 translate-y-0 ${
          tabsStuck ? 'sm:opacity-0 sm:-translate-y-1 sm:pointer-events-none' : 'sm:opacity-100 sm:translate-y-0'
        }`}
      />

      <div className="mx-auto mt-20 max-w-5xl space-y-8 md:mt-24 md:space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">THE SMITH'S FORGE</h1>
          <h2 className="text-xl md:text-2xl opacity-90">Where Code Becomes Legend</h2>
          <AvailabilityCTA className="mt-2" onOpenModal={() => setOpen(true)} />
        </section>

        {/* Tabs */}
        <div ref={sentinelRef} aria-hidden className="h-1" />
        <nav className="sticky top-0 z-20 mx-auto -mt-2 mb-2 w-full bg-[#1a1611]/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm py-2">
          <div className="mx-auto flex max-w-5xl items-stretch justify-center px-2">
            {tabsStuck && (
              <button
                onClick={() => navigate('/')}
                className="hidden sm:inline-flex items-center border border-[#8b4513]/60 bg-black/40 px-3 text-sm text-[#d4953a] hover:bg-[#8b4513]/20 rounded-l-xl rounded-r-none transition-all duration-300 opacity-100 translate-x-0"
              >
                ← Longhouse
              </button>
            )}
            <ul className={`flex w-full max-w-xl items-center justify-center gap-2 p-1 border border-[#8b4513]/60 bg-black/40 rounded-xl transition-all duration-300 ${
              tabsStuck ? 'sm:rounded-l-none sm:-ml-px' : ''
            }`}>
              {[
                { key: 'cv', label: 'CV', to: '/engineering/cv' },
                { key: 'work-experience', label: 'Work Experience', to: '/engineering/work-experience' },
                { key: 'projects', label: 'Projects', to: '/engineering/projects' },
              ].map(t => (
                <li key={t.key} className="flex-1">
                  <NavLink
                    to={t.to}
                    className={({ isActive }) =>
                    `block text-center text-sm md:text-base px-3 py-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-[#8b4513] text-black font-semibold' : 'text-[#d4953a] hover:bg-[#8b4513]/20'
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

        {activeTab === 'cv' && (
          <>
            {/* Professional Overview */}
            <section>
              <h3 className="text-3xl mb-8 text-center">Professional Overview</h3>
              <div className="grid gap-6 grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto">
                {stats.map((s) => (
                  <Card key={s.label} className="text-center">
                    <div className="font-mono text-2xl font-bold text-[#d4953a]">{s.value}</div>
                    <div className="text-sm opacity-80">{s.label}</div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="text-3xl mb-2 text-center">Technical Skills</h3>
              <p className="text-center opacity-80 mb-6">Breadth and depth across product, mobile, web, and cloud.</p>
              <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                {/* Depth meters */}
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <Card key={skill.name} className="transition transform hover:-translate-y-0.5">
                      <div className="flex items-end justify-between mb-2">
                        <div className="font-semibold text-[#d4953a]">{skill.name}</div>
                        <div className="font-mono text-xs opacity-80">{skill.level}</div>
                      </div>
                      <ProgressBar value={skill.width} />
                    </Card>
                  ))}
                </div>
                {/* Breadth groups */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {skillGroups.map((g) => (
                    <Card key={g.title} className="">
                      <div className="mb-2 font-semibold tracking-wide text-[#d4953a]">{g.title}</div>
                      <div className="flex flex-wrap gap-2">
                        {g.items.map((it) => (
                          <Chip key={it} color="#d4953a">{it}</Chip>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Client Testimonials */}
            <section>
              <h3 className="text-3xl text-center mb-4">Client Testimonials</h3>
              <p className="text-center opacity-80 mb-8 max-w-xl mx-auto">
                Feedback from colleagues and clients I've worked with
              </p>
              <div className="grid gap-8 max-w-4xl mx-auto">
                {testimonials.map((t) => (
                  <Card key={t.author} className="relative transition hover:-translate-y-1">
                    <div className="absolute top-5 left-6 text-5xl font-bold opacity-20 text-[#d4953a]">"</div>
                    <p className="relative text-lg leading-relaxed mb-6 opacity-90 pl-4">{t.quote}</p>
                    <div className="text-right font-semibold text-[#d4953a]">
                      {t.author}
                      <div className="text-sm opacity-70 font-normal">{t.title}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'projects' && (
          <section>
            <h3 className="text-3xl text-center mb-4">Featured Projects</h3>
            <p className="text-center opacity-80 mb-8 max-w-xl mx-auto">
              Selected work from world-class companies that trusted me to deliver
            </p>
            <div className="grid gap-8 max-w-5xl mx-auto">
              {/* Work in Progress tile */}
              <Card className="text-center">
                <div className="mb-2 flex justify-center">
                  <PixelBuilder className="w-20 h-20" />
                </div>
                <h4 className="text-xl font-semibold mb-1 text-[#d4953a]">Work in Progress</h4>
                <p className="text-sm opacity-90">Fresh projects are being forged. Check back soon.</p>
              </Card>
            </div>
          </section>
        )}

        {activeTab === 'work-experience' && (
          <section>
            <h3 className="text-3xl text-center mb-4">Work Experience</h3>
            <p className="text-center opacity-80 mb-8 max-w-xl mx-auto">Highlights from recent roles and engagements.</p>
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[#8b4513]/50 md:left-1/2" />
              <ul className="timeline space-y-8 list-none">
                {orderedWork.map((p, i) => (
                  <li key={p.title + p.period} className="relative md:flex md:items-center md:gap-8 list-none">
                    <div className={`hidden md:block md:flex-1 ${i % 2 ? 'order-2 text-left' : 'text-right'}`}>
                      <h4 className="text-xl font-bold text-[#d4953a]">{p.title}</h4>
                      <div className="opacity-80">{p.period}</div>
                    </div>
                    {/* Center dot aligned to timeline rule */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                      <span className="block h-3 w-3 rounded-full bg-[#d4953a] shadow-[0_0_8px_rgba(212,149,58,0.6)]"></span>
                    </div>
                    <div className="mt-2 md:mt-0 md:flex-1">
                      <div className="rounded-lg border border-[#8b4513] bg-black/40 p-4">
                        <div className="mb-1 text-sm opacity-80">{p.period}</div>
                        <h5 className="text-lg font-semibold mb-1">{p.title}</h5>
                        <p className="text-sm opacity-90">{p.summary}</p>
                        <div className="mt-2 text-xs opacity-80">Tech: {p.tech}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Call to Action (footer) */}
        <section className="text-center">
          <AvailabilityCTA onOpenModal={() => setOpen(true)} />
          <div className="mt-10 mb-2">
            <SocialLinks size="sm" />
          </div>
        </section>

        <p className="text-center mt-6 font-mono opacity-70">
          "Even the mightiest oak was once an acorn that held its ground."
        </p>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Start a Conversation">
        <ContactList />
      </Modal>
    </div>
  );
}
