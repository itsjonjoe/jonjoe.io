import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AvailabilityCTA from '../components/AvailabilityCTA';
import engineeringData from '../../data/engineering.json';
import BackLink from '../components/ui/BackLink';
// import Chip from '../components/ui/Chip';
import Modal from '../components/Modal';
import SocialLinks from '../components/SocialLinks';
import ContactList from '../components/ContactList';
import Card from '../components/ui/Card';
// import ProgressBar from '../components/ui/ProgressBar';
// import ProjectCard from '../components/ProjectCard';
import WipCard from '../components/WipCard';
import SectionHeader from '../components/SectionHeader';
import PixelBuilder from '../components/icons/PixelBuilder';
import BreakableCrate from '../components/BreakableCrate';
import workExperience from '../../data/work_experience.json';
import StickyTabs from '../components/StickyTabs';
import HeroTitle from '../components/HeroTitle';
import Timeline from '../components/Timeline';
import SkillMeter from '../components/SkillMeter';
import SkillGroup from '../components/SkillGroup';
import StatsGrid from '../components/StatsGrid';
import TestimonialCard from '../components/TestimonialCard';
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
  // StickyTabs handles sticky behavior internally
  const [cratesBroken, setCratesBroken] = useState({ a: false, b: false, c: false });
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
      <BackLink color="#8b4513" className="hidden md:block transition-all duration-300" />

      {/* Hero Section */}
      <div className="mx-auto mt-20 max-w-5xl md:mt-24">
        <section className="text-center space-y-4">
          <div className="hidden md:block">
            <h1 className="text-4xl md:text-5xl font-bold">THE SMITH'S FORGE</h1>
          </div>
          <HeroTitle drop="S" line1="mith's" line2="Forge" borderColor="#8b4513" letterColor="#d4953a" textColor="#d4953a" className="justify-center" />
          <h2 className="text-xl md:text-2xl opacity-90">Where Code Becomes Legend</h2>
          <AvailabilityCTA className="mt-2" onOpenModal={() => setOpen(true)} />
        </section>
      </div>

      {/* Tabs (outside space-y containers) */}
      <StickyTabs
          items={[
            { key: 'cv', label: 'CV', to: '/engineering/cv' },
            { key: 'work-experience', label: 'Work Experience', to: '/engineering/work-experience' },
            { key: 'projects', label: 'Projects', to: '/engineering/projects' },
          ]}
          borderCls="border-[#8b4513]/60"
          textCls="text-[#d4953a]"
          activeBgCls="bg-[#8b4513]"
          hoverBgCls="hover:bg-[#8b4513]/20"
          showBackDesktop
          backLabel="← Longhouse"
          onBackClick={() => navigate('/')}
          scrollToTopOnChange
        />

      <div className="mx-auto max-w-5xl space-y-8 md:space-y-12">

        {activeTab === 'cv' && (
          <>
            {/* Professional Overview */}
            <section>
                        <SectionHeader title="Professional Overview" />
              <StatsGrid items={stats} color="#d4953a" />
            </section>

            {/* Technical Skills */}
            <section>
                        <SectionHeader title="Technical Skills" subtitle="Breadth and depth across product, mobile, web, and cloud." />
              <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                {/* Depth meters */}
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <SkillMeter key={skill.name} name={skill.name} level={skill.level} width={skill.width} color="#d4953a" />
                  ))}
                </div>
                {/* Breadth groups */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {skillGroups.map((g) => (
                    <SkillGroup key={g.title} title={g.title} items={g.items} titleColor="#d4953a" />
                  ))}
                </div>
              </div>
            </section>

            {/* Client Testimonials */}
            <section>
                        <SectionHeader title="Client Testimonials" subtitle="Feedback from colleagues and clients I've worked with" />
              <div className="grid gap-8 max-w-4xl mx-auto">
                {testimonials.map((t) => (
                  <TestimonialCard key={t.author} quote={t.quote} author={t.author} title={t.title} color="#d4953a" />
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'projects' && (
          <section>
                        <SectionHeader title="Featured Projects" subtitle="Selected work from world-class companies that trusted me to deliver" />
            <div className="grid gap-8 max-w-5xl mx-auto">
              {/* Work in Progress tile */}
              <Card className="text-center pt-6">
                <div className="mb-2 flex justify-center">
                  <div className="relative inline-block">
                    <PixelBuilder className="w-20 h-20" />
                    {/* Wooden crates around the builder */}
                    {/* Crate A */}
                    <BreakableCrate className="absolute -top-3 -left-10 rotate-[-6deg]" broken={cratesBroken.a} onBreak={() => setCratesBroken(s => ({ ...s, a: true }))} />
                    

                    {/* Crate B */}
                    <BreakableCrate className="absolute -bottom-2 -right-12 rotate-[8deg]" broken={cratesBroken.b} onBreak={() => setCratesBroken(s => ({ ...s, b: true }))} />
                    
                    {/* Crate C */}
                    <BreakableCrate className="absolute -top-6 left-8 rotate-[15deg]" broken={cratesBroken.c} onBreak={() => setCratesBroken(s => ({ ...s, c: true }))} />
                    

                  </div>
                </div>
                <div className="mt-3">
                  <WipCard
                    bare
                    icon={null}
                    title="Work in Progress"
                    message="Fresh projects are being forged. Check back soon."
                    titleColor="#d4953a"
                  />
                </div>
              </Card>
            </div>
          </section>
        )}

        {activeTab === 'work-experience' && (
          <section>
            <SectionHeader title="Work Experience" subtitle="Highlights from recent roles and engagements." />
            <Timeline items={orderedWork} dotColor="#d4953a" ruleColor="#8b4513" cardBorderColor="#8b4513" />
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
