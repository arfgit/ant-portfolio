import { useEffect, useState } from "react";
import Landing from "./components/home/Landing";
import Dots from "./components/nav/Dots";
import Navbar from "./components/nav/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import LineGradient from "./features/gradients/LineGradient";
import useMediaQuery from "./features/hooks/useMediaQuery";

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
    <div className="app bg-deep-blue">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      {/* LANDING */}
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <Dots selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />

      {/* SKILLS */}
      <div className="w-5/6 mx-auto md:h-full">
        <Skills />
      </div>
      <LineGradient />
      {/* Projects */}
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
    </div>
  );
}

export default App;
