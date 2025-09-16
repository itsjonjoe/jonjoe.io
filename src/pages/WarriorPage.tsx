import warrior from '../data/warrior.json';
import BackLink from '../components/ui/BackLink';
import { useNavigate } from 'react-router-dom';
import HeroTitle from '../components/HeroTitle';
import SectionHeader from '../components/SectionHeader';

type GlanceStat = {
  title: string;
  value: string;
  note?: string;
};

type IconName = 'axe' | 'shield' | 'raven';

type PersonalBest = {
  icon: IconName;
  title: string;
  value: string;
  date: string;
};

type DietItem = {
  title: string;
  content?: string;
  list?: string[];
};

type TrainingItem = {
  day: string;
  plan: string;
  cals: string;
};

type SupplementItem = {
  title: string;
  list: string[];
};

interface WarriorData {
  glanceStats: GlanceStat[];
  personalBests: PersonalBest[];
  diet: DietItem[];
  training: TrainingItem[];
  supplements: SupplementItem[];
}

const data = warrior as WarriorData;

const icons: Record<IconName, JSX.Element> = {
  axe: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M2 22l7-7 2 2-7 7H2zm11-11l-2-2 6-6 2 2-1.8 1.8 2.2 2.2-2 2-2.2-2.2L13 11z"
      />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 2l8 3v6c0 5-3.5 9.6-8 11-4.5-1.4-8-6-8-11V5l8-3z"
      />
    </svg>
  ),
  raven: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M3 12l8-2 10-6-6 8 6 6-8-3-6 5 2-7z"
      />
    </svg>
  ),
};

export default function WarriorPage() {
  const navigate = useNavigate();
  const { glanceStats, personalBests, diet, training, supplements } = data;
  return (
    <div className="min-h-screen bg-[#0b0a08] text-[#f4e8bd]">
      <BackLink color="#eab308" className="hidden md:block text-black hover:text-black" />

      <div className="mx-auto max-w-6xl p-4 pt-20 space-y-10 md:pt-24">
        {/* Hero */}
        <header className="relative overflow-hidden rounded-2xl border-2 border-[#eab308] bg-[#13100d] text-center shadow-lg">
          <div className="p-10 sm:p-12">
            <h1 className="hidden md:block bg-gradient-to-b from-yellow-200 to-yellow-600 bg-clip-text text-5xl font-bold tracking-wide text-transparent sm:text-6xl md:text-7xl">
              WARRIOR
            </h1>
            <HeroTitle drop="W" line1="arrior" borderColor="#eab308" letterColor="#eab308" textColor="#eab308" />
            <p className="mt-2 text-sm text-[#c7b98a] sm:text-base">
              Chronicle of strength and endurance · Project Viking
            </p>
          </div>
        </header>

        {/* Subnav */}
        <nav className="flex flex-wrap justify-center gap-2 text-sm" aria-label="Section navigation">
          <a href="#glance" className="rounded-full border border-[#3a2f20] px-4 py-2 text-[#c7b98a] transition hover:border-[#eab308] hover:text-[#f4e8bd]">
            At a Glance
          </a>
          <a href="#pbs" className="rounded-full border border-[#3a2f20] px-4 py-2 text-[#c7b98a] transition hover:border-[#eab308] hover:text-[#f4e8bd]">
            Personal Bests
          </a>
          <a href="#diet" className="rounded-full border border-[#3a2f20] px-4 py-2 text-[#c7b98a] transition hover:border-[#eab308] hover:text-[#f4e8bd]">
            Diet
          </a>
          <a href="#training" className="rounded-full border border-[#3a2f20] px-4 py-2 text-[#c7b98a] transition hover:border-[#eab308] hover:text-[#f4e8bd]">
            Training
          </a>
          <a href="#supps" className="rounded-full border border-[#3a2f20] px-4 py-2 text-[#c7b98a] transition hover:border-[#eab308] hover:text-[#f4e8bd]">
            Supplements
          </a>
        </nav>

        {/* At a Glance */}
        <section id="glance" className="space-y-6">
          <SectionHeader title="At a Glance" align="center" color="#eab308" sizeClass="text-2xl" titleClassName="font-semibold tracking-widest" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {glanceStats.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-[#463720] bg-[#13100d] p-4 text-center shadow hover:border-[#eab308] transition"
              >
                <h3 className="font-semibold tracking-wide text-[#eab308]">{s.title}</h3>
                <p className="mt-2 text-sm text-[#c7b98a]">
                  {s.value}
                  {s.note && (
                    <>
                      <br />
                      <em>{s.note}</em>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Bests */}
        <section id="pbs" className="space-y-6">
          <SectionHeader title="Personal Bests" align="center" color="#eab308" sizeClass="text-2xl" titleClassName="font-semibold tracking-widest" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {personalBests.map((pb) => (
              <div
                key={pb.title}
                className="relative rounded-lg border border-[#463720] bg-[#13100d] p-4 shadow hover:border-[#eab308] transition"
              >
                <div className="mb-2 flex items-center justify-center gap-2 text-[#eab308]">
                  {icons[pb.icon]}
                  <div className="text-sm font-semibold tracking-widest">{pb.title}</div>
                </div>
                <div className="text-center text-2xl font-bold text-[#ffde8a]">{pb.value}</div>
                <div className="mt-1 text-center text-xs text-[#c7b98a]">{pb.date}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Diet */}
        <section id="diet" className="space-y-6">
          <SectionHeader title="Diet" align="center" color="#eab308" sizeClass="text-2xl" titleClassName="font-semibold tracking-widest" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {diet.map((d) => (
              <div
                key={d.title}
                className="rounded-lg border border-[#463720] bg-[#13100d] p-4 shadow hover:border-[#eab308] transition"
              >
                <h3 className="font-semibold tracking-wide text-[#eab308]">{d.title}</h3>
                {d.content && (
                  <p className="mt-2 text-sm text-[#c7b98a] whitespace-pre-line">{d.content}</p>
                )}
                {d.list && (
                  <ul className="mt-2 list-disc list-inside text-sm text-[#c7b98a]">
                    {d.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Training */}
        <section id="training" className="space-y-6">
          <h2 className="text-center text-2xl font-semibold tracking-widest text-[#eab308]">Training Block</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {training.map((t) => (
              <div
                key={t.day}
                className="rounded-lg border border-[#463720] bg-[#13100d] p-4 shadow hover:border-[#eab308] transition"
              >
                <h3 className="font-semibold tracking-wide text-[#eab308]">{t.day}</h3>
                <p className="mt-2 text-sm text-[#c7b98a]">
                  {t.plan}
                  <br />
                  <em>{t.cals}</em>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Supplements */}
        <section id="supps" className="space-y-6 pb-12">
          <SectionHeader title="Supplements" align="center" color="#eab308" sizeClass="text-2xl" titleClassName="font-semibold tracking-widest" />
          <div className="grid gap-4 sm:grid-cols-2">
            {supplements.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-[#463720] bg-[#13100d] p-4 shadow hover:border-[#eab308] transition"
              >
                <h3 className="font-semibold tracking-wide text-[#eab308]">{s.title}</h3>
                <ul className="mt-2 list-disc list-inside text-sm text-[#c7b98a]">
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
