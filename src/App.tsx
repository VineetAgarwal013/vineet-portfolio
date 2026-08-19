import { useState } from "react";
import Footer from "./components/dex/Footer";
import Journey from "./components/dex/Journey";
import Landing from "./components/dex/Landing";
import ProjectDexModal from "./components/dex/ProjectDexModal";
import Ventures from "./components/dex/Ventures";

export default function App() {
  const [dexMode, setDexMode] = useState<"full" | "chat" | null>(null);
  const [ballTrigger, setBallTrigger] = useState(0);

  return (
    <main className="min-h-screen">
      <Landing
        onOpenDex={setDexMode}
        ballTrigger={ballTrigger}
        onOpenProjects={() => setBallTrigger((t) => t + 1)}
      />

      <Ventures />
      <Journey />
      <Footer />

      {dexMode && <ProjectDexModal mode={dexMode} onClose={() => setDexMode(null)} />}
    </main>
  );
}