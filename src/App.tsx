import { useState } from "react";
import Footer from "./components/dex/Footer";
import Landing from "./components/dex/Landing";
import Ventures from "./components/dex/Ventures";

export default function App() {
  const [ballTrigger, setBallTrigger] = useState(0);

  const openAgent = () => {
    document.getElementById("ai-agent")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Landing
        onOpenDex={openAgent}
        ballTrigger={ballTrigger}
        onOpenProjects={() => setBallTrigger((t) => t + 1)}
      />

      <Ventures />
      <Footer />
    </main>
  );
}