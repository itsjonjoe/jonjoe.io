import { useEffect, useState } from 'react';
import { Page } from './App';

interface Props {
  onSelect: (p: Page) => void;
}

const warriorTexts = ['Code Forger', 'System Builder', 'Tech Viking', 'Digital Warrior'];
const skaldTexts = ['Tale Weaver', 'Word Smith', 'Story Teller', 'Saga Writer'];

export default function LandingPage({ onSelect }: Props) {
  const [warriorIndex, setWarriorIndex] = useState(0);
  const [skaldIndex, setSkaldIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWarriorIndex(i => (i + 1) % warriorTexts.length);
      setSkaldIndex(i => (i + 1) % skaldTexts.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen flex">
      <section
        onClick={() => onSelect('warrior')}
        className="relative flex-1 flex flex-col items-center justify-center cursor-pointer
                   bg-center bg-cover transition-transform duration-500 hover:scale-105"
        style={{ backgroundImage: "url('https://via.placeholder.com/1200x800?text=Warrior')" }}
      >
        <h1 className="text-5xl mb-4 font-bold drop-shadow-xl">Warrior</h1>
        <p className="text-xl transition-opacity duration-300" key={warriorIndex}>
          {warriorTexts[warriorIndex]}
        </p>
      </section>

      <div className="w-px bg-[#d4953a]/50"></div>

      <section
        onClick={() => onSelect('skald')}
        className="relative flex-1 flex flex-col items-center justify-center cursor-pointer
                   bg-center bg-cover transition-transform duration-500 hover:scale-105"
        style={{ backgroundImage: "url('https://via.placeholder.com/1200x800?text=Skald')" }}
      >
        <h1 className="text-5xl mb-4 font-bold drop-shadow-xl">Skald</h1>
        <p className="text-xl transition-opacity duration-300" key={skaldIndex}>
          {skaldTexts[skaldIndex]}
        </p>
      </section>
    </div>
  );
}
