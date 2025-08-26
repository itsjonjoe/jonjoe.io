import React from 'react';

interface Props {
  onBack: () => void;
}

const glanceStats = [
  { title: 'Bodyweight', value: '92.4 kg', note: '▼ 0.6 kg/wk' },
  { title: 'Body Fat', value: '18–20%', note: 'Target <15%' },
  { title: 'Weekly Deficit', value: '–4,200 kcal', note: '≈0.5 kg loss' },
  { title: 'Row 10′', value: '2.3 → 2.5 km', note: '' },
  { title: 'Pull-ups', value: '8 → 12', note: '' },
  { title: 'Sleep', value: '7.5 h', note: 'Goal 8 h' },
];

const icons = {
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

const personalBests = [
  { icon: icons.axe, title: 'Deadlift', value: '145 kg × 3', date: '2025-08-23' },
  { icon: icons.shield, title: 'Barbell Row', value: '105 kg × 6', date: '2025-08-26' },
  { icon: icons.shield, title: 'Back Squat', value: '100 kg × 6', date: 'Baseline' },
  { icon: icons.raven, title: 'Clean & Press', value: '55 kg × 5', date: '2025-08-23' },
  { icon: icons.axe, title: 'Flat DB Press', value: '40 kg × 3', date: '2025-08-23' },
  { icon: icons.raven, title: 'Row (10:33)', value: '2319 m', date: '~137 W avg' },
];

const diet = [
  {
    title: 'Macros',
    content: '~2,535 kcal/day\nProtein 226 g · Fat 100 g · Carbs 187 g',
  },
  {
    title: 'Meals',
    list: [
      '3 eggs, 3× toast, spread, spinach, cottage cheese',
      '3 eggs, 2× toast, spread, spinach, cottage cheese',
      '2× whey shakes + yogurt',
      '2 chicken legs + 60g rice + veg',
    ],
  },
  {
    title: 'Rules',
    list: ['No snacks', 'Monster Ultra ≤2 before 17:00', '≥2L water daily'],
  },
];

const training = [
  { day: 'Mon — Chest', plan: 'Bench GVT + Flys', cals: '~632 kcal' },
  { day: 'Tue — Back', plan: 'Pull-ups · Rows · Pulldown', cals: '~665–700 kcal' },
  { day: 'Wed — Shoulders', plan: 'Press · Laterals · Upright Rows', cals: '~641 kcal' },
  { day: 'Thu — Legs', plan: 'Squat · RDL · Lunges', cals: '~701 kcal' },
  { day: 'Fri — Arms', plan: 'Bicep/Tricep GVT', cals: '~940 kcal' },
  { day: 'Sat — Pump', plan: 'Chest/Shoulder pump', cals: '~696 kcal' },
  { day: 'Sun — Recovery', plan: 'Fast walk + sleep focus', cals: '~413 kcal' },
];

const supplements = [
  {
    title: 'Morning Stack',
    list: [
      'AREDS2 · Omega-3 · D3',
      'Ginseng · Lion’s Mane · B12',
      'Shilajit · Maca · Creatine',
      'Pump/Beetroot (training/rest)',
    ],
  },
  {
    title: 'Evening Stack',
    list: ['Magnesium Glycinate', 'Ashwagandha', 'Omega-3 (optional split)'],
  },
];

export default function WarriorPage({ onBack }: Props) {
  return (
    <div className="min-h-screen bg-[#0b0a08] text-[#f4e8bd]">
      <button
        onClick={onBack}
        className="fixed top-4 left-4 rounded border-2 border-[#eab308] bg-black/60 px-4 py-2 text-sm transition hover:bg-[#eab308] hover:text-black md:top-8 md:left-8 md:px-6 md:py-3"
      >
        ← Return to Longhouse
      </button>

      <div className="mx-auto max-w-6xl p-4 pt-20 space-y-10 md:pt-24">
        {/* Hero */}
        <header className="relative overflow-hidden rounded-2xl border-2 border-[#eab308] bg-[#13100d] text-center shadow-lg">
          <div className="p-10 sm:p-12">
            <h1 className="bg-gradient-to-b from-yellow-200 to-yellow-600 bg-clip-text text-5xl font-bold tracking-wide text-transparent sm:text-6xl md:text-7xl">
              WARRIOR
            </h1>
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
          <h2 className="text-center text-2xl font-semibold tracking-widest text-[#eab308]">At a Glance</h2>
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
          <h2 className="text-center text-2xl font-semibold tracking-widest text-[#eab308]">Personal Bests</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {personalBests.map((pb) => (
              <div
                key={pb.title}
                className="relative rounded-lg border border-[#463720] bg-[#13100d] p-4 shadow hover:border-[#eab308] transition"
              >
                <div className="mb-2 flex items-center justify-center gap-2 text-[#eab308]">
                  {pb.icon}
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
          <h2 className="text-center text-2xl font-semibold tracking-widest text-[#eab308]">Diet</h2>
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
          <h2 className="text-center text-2xl font-semibold tracking-widest text-[#eab308]">Supplements</h2>
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
