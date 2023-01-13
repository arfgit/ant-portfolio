import React from "react";
import { motion } from "framer-motion";
import TechStackIcons from "../../features/icons/TechStackIcons";

const singles = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, image, stack }) => {
  const overlay = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={singles} className="relative">
      <div className={overlay}>
        <p className="text-2xl font-montserrat font-semibold">{title}</p>
        <p className="mt-7 font-karla font-light">{description}</p>
        <TechStackIcons stack={stack} />
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
