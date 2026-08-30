import Footer from "./components/dex/Footer";
import Landing from "./components/dex/Landing";
import Ventures from "./components/dex/Ventures";

export default function App() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen">
      <Landing
        onOpenDex={() => scrollTo("ai-agent")}
        onOpenProjects={() => scrollTo("ai-projects")}
      />

      <Ventures />
      <Footer />
    </main>
  );
}