// src/App.jsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Embers from "./components/Embers";

import LandingGate from "./sections/LandingGate";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import SkillTree from "./sections/SkillTree";
import QuestLog from "./sections/QuestLog";
import Contact from "./sections/Contact";

// global styles are already imported in main.jsx, so no need to import here again

export default function App() {
  return (
    <>
      <Navbar />

      {/* Ambient FX behind content */}
      <Embers
        density={0.0001}
        maxParticles={85}
        targetFPS={45}
        maxDPR={1.5}
        sizeMultiplier={6}
        speedY={-9}
        wind={0.5}
      />

      {/* Shows only when no name/skip is set */}
      <LandingGate />

      <main>
        <Hero />
        <Projects />
        <SkillTree />
        <QuestLog />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
