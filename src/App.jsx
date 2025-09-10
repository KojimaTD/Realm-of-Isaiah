// src/App.jsx
import landingGate from "./sections/landingGate";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Showcase from "./sections/Showcase";
import Projects from "./sections/Projects";
import SkillTree from "./sections/SkillTree";
import QuestLog from "./sections/QuestLog";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Embers from "./components/Embers";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Embers />
      <main>
        <Hero />        {/* Home */}
        <About />
        <Showcase />    
        <Projects />
        <SkillTree />
        <QuestLog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
