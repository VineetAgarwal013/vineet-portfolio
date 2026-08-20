import { useState } from "react";
import Footer from "./components/dex/Footer";
import Landing from "./components/dex/Landing";
import ProjectDexModal from "./components/dex/ProjectDexModal";
import Ventures from "./components/dex/Ventures";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [ballTrigger, setBallTrigger] = useState(0);

  return (
    <main className="min-h-screen">
      <Landing
        onOpenDex={() => setChatOpen(true)}
        ballTrigger={ballTrigger}
        onOpenProjects={() => setBallTrigger((t) => t + 1)}
      />

      <Ventures />
      <Footer />

      {chatOpen && <ProjectDexModal onClose={() => setChatOpen(false)} />}
    </main>
  );
}