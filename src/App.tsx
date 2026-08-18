import { useState } from "react";
import ChatTerminal from "./components/dex/ChatTerminal";
import Header from "./components/dex/Header";
import Journey from "./components/dex/Journey";
import ProfileCard from "./components/dex/ProfileCard";
import PokeballButton from "./components/dex/PokeballButton";
import ProjectDexModal from "./components/dex/ProjectDexModal";
import Ventures from "./components/dex/Ventures";

export default function App() {
  const [dexOpen, setDexOpen] = useState(false);

  function handleOpenDex() {
    setDexOpen(true);
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section id="hero" className="scroll-mt-24">
        <div className="mx-auto w-full max-w-[1500px] px-8 pb-12 pt-10 md:px-14">
          <div className="overflow-hidden rounded-3xl border border-purple-100 bg-white/90 shadow-xl backdrop-blur-md lg:h-[560px]">
            <section className="grid h-full grid-cols-1 gap-6 p-6 lg:grid-cols-[35%_65%] lg:p-8">
              <ProfileCard />
              <ChatTerminal />
            </section>
          </div>

          <div className="flex flex-col items-center justify-center px-6 pb-24">
            <PokeballButton key={String(dexOpen)} onOpen={handleOpenDex} />
          </div>
        </div>
      </section>

      <Journey />
      <Ventures />

      <footer className="border-t border-[#1a002c]/15">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-6 py-6 font-mono text-[11px] text-slate-500 md:px-10">
          © Vineet. All rights reserved.
        </div>
      </footer>

      {dexOpen && <ProjectDexModal onClose={() => setDexOpen(false)} />}
    </main>
  );
}