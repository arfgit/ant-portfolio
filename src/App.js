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

  return (
    <div className="app">
      {/* NAVBAR */}
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />

      {/* PARTICLES */}
      {isAboveMediumScreens && (
        <div className="absolute">
          <ParticleBackground />
        </div>
      )}

      {/* LANDING */}
      <div className="w-5/6 mx-auto md:h-full overflow-hidden">
        {isAboveMediumScreens && (
          <Dots selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        <motion.div
          className="mb-0 md:mb-[-200px]"
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
          className="mb-0 md:mb-[-200px]"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Skills />
        </motion.div>
      </div>
      <LineGradient />

      {/* PROJECTS */}
      <div className="w-5/6 mx-auto">
        <motion.div
          className="mb-0 md:mb-[-200px]"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />

      {/* CONTACT */}
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          className="mb-0 md:mb-[-200px]"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>

      {/* FOOTER */}
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
