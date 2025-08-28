import BackLink from '../components/ui/BackLink';
import { useNavigate } from 'react-router-dom';

export default function SkaldPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#1a1611] p-4 text-[#87ceeb] md:p-8">
      <BackLink color="#4682b4" />

      <div className="mx-auto mt-20 max-w-3xl space-y-12 text-center md:mt-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">THE SKALD'S HALL</h1>
          <h2 className="text-xl md:text-2xl opacity-90">Where Stories Take Wing</h2>
        </div>

        <div className="rounded-lg border-2 border-[#4682b4] bg-black/50 p-8 md:p-12">
          <div className="my-6 text-2xl opacity-50 md:my-8">📜 ✨ 📜</div>
          <h3 className="text-2xl md:text-3xl mb-4">Sagas in the Making...</h3>
          <p className="text-base leading-relaxed opacity-90">
            The scribes prepare their finest vellum and sharpest quills.<br />
            Tales of triumph, wisdom, and wonder<br />
            await their moment to be shared with the world.
          </p>
          <div className="my-6 text-2xl opacity-50 md:my-8">📜 ✨ 📜</div>
        </div>

        <p className="text-base opacity-70 font-mono">
          "In every word lies the power to change a world."
        </p>
      </div>
    </div>
  );
}
// moved to pages/
