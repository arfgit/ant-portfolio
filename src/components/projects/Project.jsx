import React from "react";
import { motion } from "framer-motion";
import TechStackIcons from "../../features/icons/TechStackIcons";

const singles = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, image, stack }) => {
  const overlay = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={singles} className="relative">
      <div className={overlay}>
        <p className="text-2xl font-montserrat font-semibold">{title}</p>
        <p className="text-sm mt-7 font-karla font-light">{description}</p>
        <TechStackIcons stack={stack} />
        <a
          className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white  ease-in transition duration-200"
          href="#contact"
        >
          Resume
        </a>
        <a
          className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
          href="#contact"
        >
          <div className="bg-deep-blue hover:text-red ease-in transition duration-200 w-full h-full flex items-center justify-center px-10">
            Let's Talk.
          </div>
        </a>
        {/* <a href="https://www.google.com" target="_blank" rel="noreferrer">
          Deployed
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
          Github
        </a> */}
      </div>
      <img
        src={`../assets/${projectTitle}`}
        alt={projectTitle}
        width="400"
        height="400"
      />
    </motion.div>
  );
};

export default Project;
