import { motion } from "framer-motion";
import TechStackIcons from "../../features/icons/TechStackIcons";

const singles = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, image, stack, github, deployed }) => {
  const overlay = `absolute inset-0 opacity-0 hover:opacity-90 ease-in transition duration-200 bg-deep-blue text-white z-30 flex flex-col justify-center items-center text-center p-4 md:p-16 text-deep-blue`;

  return (
    <motion.div variants={singles} className="relative">
      <div className={overlay}>
        <p className="text-xl md:text-2xl font-montserrat font-semibold">
          {title}
        </p>
        <p className="text-xs md:text-sm mt-[5px] font-karla font-light">
          {description}
        </p>

        <TechStackIcons stack={stack} />
        <div className="flex -mt-[20px] justify-center font-karla md:justify-start">
          {deployed && (
            <a
              className="p-1 bg-yellow font-semibold rounded-md text-deep-blue mt-5 hover:bg-red hover:text-white ease-in transition duration-200"
              href={deployed}
              target="_blank"
              rel="noreferrer"
            >
              Deployed
            </a>
          )}
          <div className="w-[10px] h-auto inline-block"></div>
          {github && (
            <a
              className="p-1 bg-yellow font-semibold rounded-md text-deep-blue mt-5 hover:bg-red hover:text-white ease-in transition duration-200"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          )}
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className="w-full md:w-auto md:h-[400px] object-cover"
      />
    </motion.div>
  );
};

export default Project;
