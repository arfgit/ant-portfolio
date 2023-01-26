import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Landing from "./components/home/Landing";
import Dots from "./components/nav/Dots";
import Navbar from "./components/nav/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import LineGradient from "./features/gradients/LineGradient";
import useMediaQuery from "./features/hooks/useMediaQuery";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ParticleBackground from "./features/particles/ParticleBackground";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FIX THE ISSUE WITH PARTICLES AND ANIMATIONS
  return (
    <div className="app">
      {/* NAVBAR */}
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      {/* LANDING */}
      <div className="w-5/6 mx-auto md:h-full">
        <ParticleBackground />
        {isAboveMediumScreens && (
          <Dots selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />

      {/* SKILLS */}
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Skills />
        </motion.div>
      </div>
      <LineGradient />

      {/* Projects */}
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />

      {/* Contact */}
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>

      {/* Footer */}
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
