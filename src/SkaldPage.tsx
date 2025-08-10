interface Props {
  onBack: () => void;
}

export default function SkaldPage({ onBack }: Props) {
  return (
    <div className="min-h-screen bg-[#1a1611] text-[#87ceeb] p-8">
      <button
        onClick={onBack}
        className="fixed top-8 left-8 bg-black/80 border-2 border-[#4682b4] px-6 py-3 rounded hover:bg-[#4682b4] hover:text-white transition"
      >
        ← Return to Longhouse
      </button>

      <div className="max-w-3xl mx-auto mt-24 text-center space-y-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">THE SKALD'S HALL</h1>
          <h2 className="text-xl md:text-2xl opacity-90">Where Stories Take Wing</h2>
        </div>

        <div className="border-2 border-[#4682b4] rounded-lg bg-black/50 p-12">
          <div className="text-2xl my-8 opacity-50">📜 ✨ 📜</div>
          <h3 className="text-2xl md:text-3xl mb-4">Sagas in the Making...</h3>
          <p className="text-base leading-relaxed opacity-90">
            The scribes prepare their finest vellum and sharpest quills.<br />
            Tales of triumph, wisdom, and wonder<br />
            await their moment to be shared with the world.
          </p>
          <div className="text-2xl my-8 opacity-50">📜 ✨ 📜</div>
        </div>

        <p className="text-base opacity-70 font-mono">
          "In every word lies the power to change a world."
        </p>
      </div>
    </div>
  );
}

