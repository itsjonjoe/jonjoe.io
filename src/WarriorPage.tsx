import React from 'react';

interface Props {
  onBack: () => void;
}

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '15+', label: 'Enterprise Clients' },
  { value: '100%', label: 'Client Satisfaction' },
];

const skills = [
  { name: 'React Native', level: 'Expert', width: '95%' },
  { name: 'TypeScript', level: 'Expert', width: '90%' },
  { name: 'Node.js', level: 'Expert', width: '95%' },
  { name: 'AWS', level: 'Advanced', width: '80%' },
];

const projects = [
  {
    name: 'The Economist',
    subtitle: 'Visual Journalism Platform',
    status: 'Completed',
    badges: ['50M+ readers', '+40% engagement', '15-person team'],
    description:
      'Led the Visual Journalism Team transformation with next-generation tools and frameworks. Architected scalable data visualization solutions that increased story engagement across 50+ million global readers.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
  },
  {
    name: 'Toyota',
    subtitle: 'Legacy System Migration',
    status: 'Delivered',
    badges: ['Zero downtime', '-60% response time', '8 systems migrated'],
    description:
      'Re-platformed 8 legacy systems onto modern web stack. Led distributed teams across 3 time zones through complex technical migrations while maintaining 100% uptime and achieving 60% performance improvement.',
    tags: ['AWS', 'Microservices', 'React', 'Node.js'],
  },
  {
    name: 'Guardian',
    subtitle: 'Mobile Authentication',
    status: 'Completed',
    badges: ['5M+ users', '+25% conversion', '2-week delivery'],
    description:
      'Delivered Apple Sign In for React Native applications. Enhanced mobile experience for 5+ million readers worldwide, increasing mobile auth conversion rates by 25%.',
    tags: ['React Native', 'iOS', 'Android', 'OAuth'],
  },
  {
    name: 'British Gas',
    subtitle: 'Next-Gen Mobile App',
    status: 'Completed',
    badges: ['Engineering Excellence', 'SOLID Principles', 'Multiple Awards'],
    description:
      'Built next-generation mobile app as part of core team. Won multiple internal awards for engineering excellence and SOLID principles implementation.',
    tags: ['React Native', 'SOLID', 'Redux', 'Testing'],
  },
  {
    name: 'Indee Softworks',
    subtitle: 'Software Consultancy',
    status: 'Co-Founded',
    badges: ['Co-Founder', 'Team Builder', 'Multiple Clients'],
    description:
      'Co-founded and built something special from the ground up. Led development of multiple client projects and built an engineering team.',
    tags: ['Ruby on Rails', 'Laravel', 'PostgreSQL', 'Leadership'],
  },
  {
    name: 'Shell',
    subtitle: 'Digital R&D Projects',
    status: 'Completed',
    badges: ['R&D Innovation', 'Energy Sector', 'Digital Solutions'],
    description:
      'Worked on digital R&D projects including Node services and React Native apps. Delivered innovative solutions for energy sector challenges.',
    tags: ['React Native', 'Node.js', 'React', 'R&D'],
  },
];

const testimonials = [
  {
    quote:
      'He is able to articulate highly technical subject matter effectively across all stakeholders. Very approachable and down to earth which made it easy for our design function to work well with engineering.',
    author: 'Rishi Michael Arch',
    title: 'Senior Product Designer',
  },
  {
    quote:
      "Jonjoe is one of the nicest, most dedicated and innovative people I have ever worked with. Always looking to push the boundaries of possibility and with sound logic always delivers to a really high standard.",
    author: 'Andrew Machin',
    title: 'Managing Director @ Kounter',
  },
  {
    quote:
      'In an increasingly corporate world Jonjoe is a blast of fresh air. You will learn more from overhearing a conversation with Jonjoe than from many more formal training resources.',
    author: 'Mick Stevens',
    title: 'Systems Engineer @ BAE Systems',
  },
];

export default function WarriorPage({ onBack }: Props) {
  return (
    <div className="min-h-screen bg-[#1a1611] p-4 text-[#d4953a] md:p-8">
      <button
        onClick={onBack}
        className="fixed top-4 left-4 rounded border-2 border-[#8b4513] bg-black/80 px-4 py-2 transition hover:bg-[#8b4513] hover:text-white md:top-8 md:left-8 md:px-6 md:py-3"
      >
        ← Return to Longhouse
      </button>

      <div className="mx-auto mt-20 max-w-5xl space-y-12 md:mt-24 md:space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">THE WARRIOR'S FORGE</h1>
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
