interface Props {
  onBack: () => void;
}

const WarriorPage = ({ onBack }: Props) => (
  <div className="min-h-screen bg-[#1a1611] text-[#d4953a] p-8 text-center">
    <button
      onClick={onBack}
      className="fixed top-8 left-8 bg-black/80 border-2 border-[#8b4513] px-6 py-3 rounded
                 hover:bg-[#8b4513] hover:text-white transition"
    >
      ← Back
    </button>

    <div className="max-w-2xl mx-auto mt-24">
      <h1 className="text-4xl mb-8 drop-shadow-lg">Warrior Portfolio</h1>
      <p className="opacity-70">
        Soon the saga of code will be etched here.
      </p>
      <div className="mt-12 p-12 border-2 border-[#8b4513] rounded-lg bg-black/50">
        Coming soon...
      </div>
    </div>
  </div>
);

export default WarriorPage;
