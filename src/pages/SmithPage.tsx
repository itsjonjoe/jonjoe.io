import React from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import AvailabilityCTA from '../components/AvailabilityCTA';
import engineeringData from '../../data/engineering.json';
import BackLink from '../components/ui/BackLink';
import Card from '../components/ui/Card';
import ProgressBar from '../components/ui/ProgressBar';
import ProjectCard from '../components/ProjectCard';

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
  return (
    <div className="min-h-screen bg-[#1a1611] p-4 text-[#d4953a] md:p-8">
      <BackLink color="#8b4513" />

      <div className="mx-auto mt-20 max-w-5xl space-y-8 md:mt-24 md:space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">THE SMITH'S FORGE</h1>
          <h2 className="text-xl md:text-2xl opacity-90">Where Code Becomes Legend</h2>
          <AvailabilityCTA className="mt-2" />
        </section>

        {/* Tabs */}
        <nav className="sticky top-0 z-10 mx-auto -mt-2 mb-2 max-w-5xl bg-[#1a1611]/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm py-2">
          <ul className="mx-auto flex w-full max-w-xl items-center justify-center gap-2 p-1 rounded-xl border border-[#8b4513]/60 bg-black/40">
            {[
              { key: 'cv', label: 'CV', to: '/engineering/cv' },
              { key: 'work-experience', label: 'Work Experience', to: '/engineering/work-experience' },
              { key: 'projects', label: 'Projects', to: '/engineering/projects' },
            ].map(t => (
              <li key={t.key} className="flex-1">
                <NavLink
                  to={t.to}
                  className={({ isActive }) =>
                    `block text-center text-sm md:text-base px-3 py-2 rounded-lg transition ${isActive ? 'bg-[#8b4513] text-black font-semibold' : 'text-[#d4953a] hover:bg-[#8b4513]/20'
                    }`
                  }
                >
                  {t.label}
                </NavLink>
              </li>
            ))}
          </ul>
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
              <h3 className="text-3xl mb-8 text-center">Technical Skills</h3>
              <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                {skills.map((skill) => (
                  <Card key={skill.name} className="transition transform hover:-translate-y-0.5">
                    <div className="font-semibold text-[#d4953a] mb-1">{skill.name}</div>
                    <div className="font-mono text-sm mb-4">{skill.level}</div>
                    <ProgressBar value={skill.width} />
                  </Card>
                ))}
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
              {projects.map((proj) => (
                <ProjectCard key={proj.name} project={proj} />
              ))}
            </div>
          </section>
        )}

        {activeTab === 'work-experience' && (
          <section>
            <h3 className="text-3xl text-center mb-4">Work Experience</h3>
            <p className="text-center opacity-80 mb-8 max-w-xl mx-auto">Highlights from recent roles and engagements.</p>
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[#8b4513]/50 md:left-1/2" />
              <ul className="space-y-8">
                {projects.map((p, i) => (
                  <li key={p.name} className="relative md:flex md:items-center md:gap-8">
                    <div className={`hidden md:block md:flex-1 ${i % 2 ? 'order-2 text-left' : 'text-right'}`}>
                      <h4 className="text-xl font-bold text-[#d4953a]">{p.name}</h4>
                      <div className="opacity-80">{p.subtitle}</div>
                    </div>
                    <div className="relative z-10 ml-4 md:ml-0 md:order-1">
                      <span className="block h-3 w-3 rounded-full bg-[#d4953a] shadow-[0_0_8px_rgba(212,149,58,0.6)]"></span>
                    </div>
                    <div className="mt-2 md:mt-0 md:flex-1">
                      <div className="rounded-lg border border-[#8b4513] bg-black/40 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="text-lg font-semibold">{p.name}</h5>
                          <span className="text-[#10b981] font-mono text-xs">{p.status}</span>
                        </div>
                        <p className="text-sm opacity-90">{p.description}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {p.tags.slice(0, 4).map(t => (
                            <span key={t} className="bg-[#d4953a]/10 border border-[#d4953a]/20 text-[#d4953a] px-2 py-0.5 rounded text-xs font-mono">{t}</span>
                          ))}
                        </div>
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
          <AvailabilityCTA />
        </section>

        <p className="text-center mt-12 font-mono opacity-70">
          "Even the mightiest oak was once an acorn that held its ground."
        </p>
      </div>
    </div>
  );
}
