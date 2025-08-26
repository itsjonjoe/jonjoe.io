import React from 'react';
import { useNavigate } from 'react-router-dom';
import engineeringData from '../data/engineering.json';

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
  return (
    <div className="min-h-screen bg-[#1a1611] p-4 text-[#d4953a] md:p-8">
      <button
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 rounded border-2 border-[#8b4513] bg-black/80 px-4 py-2 transition hover:bg-[#8b4513] hover:text-white md:top-8 md:left-8 md:px-6 md:py-3"
      >
        ← Return to Longhouse
      </button>

      <div className="mx-auto mt-20 max-w-5xl space-y-12 md:mt-24 md:space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">THE SMITH'S FORGE</h1>
          <h2 className="text-xl md:text-2xl opacity-90">Where Code Becomes Legend</h2>
          <div className="mx-auto max-w-xl rounded-lg border-2 border-[#8b4513] bg-black/30 p-6 md:p-8">
            <div className="flex items-center gap-2 text-[#10b981] font-mono text-sm justify-center mb-4">
              <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></span>
              <span>Available for new projects</span>
            </div>
            <p className="text-base leading-relaxed opacity-90">
              Building <span className="text-[#d4953a] font-semibold">products people love</span> is what drives me. Principal Engineer with{' '}
              <span className="text-[#d4953a] font-semibold">10+ years</span> crafting exceptional digital experiences for world-class kingdoms.
            </p>
          </div>
        </section>

        {/* Professional Overview */}
        <section>
          <h3 className="text-3xl mb-8 text-center">Professional Overview</h3>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-black/50 border border-[#8b4513] rounded-lg p-6 text-center">
                <div className="font-mono text-2xl font-bold text-[#d4953a]">{s.value}</div>
                <div className="text-sm opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h3 className="text-3xl mb-8 text-center">Technical Skills</h3>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-black/50 border border-[#8b4513] rounded-lg p-6 transition transform hover:border-[#d4953a] hover:-translate-y-0.5"
              >
                <div className="font-semibold text-[#d4953a] mb-1">{skill.name}</div>
                <div className="font-mono text-sm mb-4">{skill.level}</div>
                <div className="h-1.5 bg-[#d4953a]/20 rounded">
                  <div className="h-full bg-[#d4953a] rounded" style={{ width: skill.width }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <h3 className="text-3xl text-center mb-4">Featured Projects</h3>
          <p className="text-center opacity-80 mb-8 max-w-xl mx-auto">
            Selected work from world-class companies that trusted me to deliver
          </p>
          <div className="grid gap-8 max-w-5xl mx-auto">
            {projects.map((proj) => (
              <div
                key={proj.name}
                className="transform rounded-xl border border-[#8b4513] bg-black/50 p-6 transition hover:-translate-y-1 hover:border-[#d4953a] md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-1 text-[#d4953a]">{proj.name}</h4>
                    <p className="opacity-80">{proj.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#10b981] font-mono text-sm mt-2 md:mt-0">
                    <span className="w-2 h-2 bg-[#10b981] rounded-full shadow-[0_0_4px_#10b981]"></span>
                    <span>{proj.status}</span>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap mb-4">
                  {proj.badges.map((b) => (
                    <span
                      key={b}
                      className="bg-[#d4953a]/10 border border-[#d4953a]/30 text-[#d4953a] px-3 py-1 rounded-full text-xs font-mono"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <p className="opacity-90 leading-relaxed mb-4">{proj.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#d4953a]/10 border border-[#d4953a]/20 text-[#d4953a] px-2 py-0.5 rounded text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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
              <div
                key={t.author}
                className="relative rounded-xl border border-[#8b4513] bg-black/50 p-6 transition hover:-translate-y-1 hover:border-[#d4953a] md:p-8"
              >
                <div className="absolute top-5 left-6 text-5xl font-bold opacity-20 text-[#d4953a]">"</div>
                <p className="relative text-lg leading-relaxed mb-6 opacity-90 pl-4">{t.quote}</p>
                <div className="text-right font-semibold text-[#d4953a]">
                  {t.author}
                  <div className="text-sm opacity-70 font-normal">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h3 className="text-3xl mb-4">Let's Work Together</h3>
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border-2 border-[#8b4513] bg-black/30 p-10 md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,149,58,0.05)_0%,transparent_70%)] pointer-events-none"></div>
            <h4 className="text-4xl font-bold mb-4 relative z-10">
              Ready to build something <span className="text-[#8b4513]">exceptional</span>?
            </h4>
            <p className="text-xl mb-8 opacity-90 relative z-10">
              Interested in working together? Let's discuss your next challenge.<br />I'll buy the coffee ☕
            </p>
            <a
              href="mailto:contact@jonjoe.dev"
              className="inline-block bg-[#d4953a] text-[#1a1611] px-6 py-3 rounded-md font-semibold text-lg transition-transform relative z-10 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,149,58,0.3)]"
            >
              Start a Conversation
            </a>
          </div>
        </section>

        <p className="text-center mt-12 font-mono opacity-70">
          "Even the mightiest oak was once an acorn that held its ground."
        </p>
      </div>
    </div>
  );
}
