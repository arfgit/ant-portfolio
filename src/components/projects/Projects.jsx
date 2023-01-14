import React from "react";
import LineGradient from "../../features/gradients/LineGradient";
import { motion } from "framer-motion";
import Project from "./Project";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projects = [
  {
    title: "Beatdriver",
    description:
      "Beatdriver is a beginner-friendly music creation tool you can use right in the browser. Users can create beats with built-in sounds and effects, upload their samples, and save and record their projects to share with anyone!",
    image: "../assets/beatdriver.png",
    github: "",
    deployed: "",
    stack: [
      { name: "Nextjs", image: "../assets/Nextjs-32.png" },
      { name: "React", image: "../assets/React-32.png" },
      { name: "Web Audio API", image: "../assets/WebAudioAPI-32.png" },
      { name: "Firebase", image: "../assets/Firebase-32.png" },
      { name: "Nodejs", image: "../assets/Nodejs-32.png" },
      { name: "Tailwind CSS", image: "../assets/tailwindCSS-32.png" },
    ],
  },
  {
    title: "Chit Chat",
    description:
      "Chit Chat is an app where users can message other logged-in users. The primary focus of this app was to set up a real-time chat with a filter to block toxic messages.",
    image: "../assets/beatdriver.png",
    github: "",
    deployed: "",
    stack: [
      { name: "React", image: "../assets/React-32.png" },
      { name: "Firebase", image: "../assets/Firebase-32.png" },
      { name: "Tensorflow", image: "../assets/tensorflow-32.png" },
    ],
  },
  {
    title: "GameMap",
    description:
      "Developed with the PERN stack, GameMap is an e-commerce website that sells video games. Users can view all products and add games to their cart for checkout.",
    image: "../assets/beatdriver.png",
    github: "",
    deployed: "",
    stack: [
      { name: "PostgreSQL", image: "../assets/postgresql-32.png" },
      { name: "Express", image: "../assets/express-32.png" },
      { name: "React", image: "../assets/React-32.png" },
      { name: "Nodejs", image: "../assets/Nodejs-32.png" },
      { name: "Material UI", image: "../assets/MUI-32.png" },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-montserrat font-semibold text-4xl">
            MY <span className="text-red">PRO</span>JECTS
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-1/3" />
        </div>
        {/* <p className="mt-10 mb-7">Testing shit</p> */}
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-montserrat font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          {projects?.map(({ title, description, image, stack }, i) => (
            <Project
              key={i}
              title={title}
              description={description}
              image={image}
              stack={stack}
            />
          ))}

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-montserrat font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
