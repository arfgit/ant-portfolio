import React from "react";
import LineGradient from "../../features/gradients/LineGradient";
import { motion } from "framer-motion";
import Skill from "./Skill";

const skills = {
  frontend: [
    { name: "React", image: "../assets/png-64px/react-64.png" },
    { name: "Nextjs", image: "../assets/png-64px/nextjs-64-inverted.png" },
    { name: "Redux", image: "../assets/png-64px/redux-64.png" },
    { name: "Javascript", image: "../assets/png-64px/javascript-64.png" },
    { name: "HTML", image: "../assets/png-64px/html-64.png" },
    { name: "CSS3", image: "../assets/png-64px/css-64.png" },
    { name: "TailwindCSS", image: "../assets/png-64px/tailwindcss-64.png" },
    { name: "MUI", image: "../assets/png-64px/MUI-64.png" },
  ],
  backend: [
    { name: "Nodejs", image: "../assets/png-64px/node-js-64.png" },
    { name: "Express", image: "../assets/png-64px/express-js-64-inverted.png" },
    { name: "Sequelize", image: "../assets/png-64px/sequelize-64.png" },
    { name: "PostgreSQL", image: "../assets/png-64px/postgresql-64.png" },
    { name: "Firebase", image: "../assets/png-64px/firebase-64.png" },
  ],
  tools: [
    { name: "Git", image: "../assets/png-64px/git-64.png" },
    { name: "Github", image: "../assets/png-64px/github-64-inverted.png" },
    { name: "Jasmine", image: "../assets/png-64px/jasmine-64.png" },
    { name: "Mocha", image: "../assets/png-64px/mocha-64.png" },
    { name: "Chai", image: "../assets/png-64px/chai-64.png" },
    { name: "Linux", image: "../assets/png-64px/linux-64-inverted.png" },
    { name: "Webpack", image: "../assets/png-64px/webpack-64.png" },
  ],
};

const Grid = ({ skills }) => {
  return (
    <motion.div
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto mt-14 items-center"
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="grid grid-cols-5 gap-10">
        {skills?.map(({ name, image }, i) => (
          <Skill key={i} name={name} image={image} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="pt-10 pb-48">
      {/* HEADER */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-montserrat font-semibold text-4xl mb-5">
            MY <span className="text-yellow">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
      </div>

      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Frontend */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-montserrat font-semibold text-5xl">01</p>
              <p className="font-montserrat font-semibold text-3xl mt-3">
                Frontend
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 border-yellow bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <Grid skills={skills?.frontend} />
        </motion.div>

        {/* Backend */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-montserrat font-semibold text-5xl">02</p>
              <p className="font-montserrat font-semibold text-3xl mt-3">
                Backend
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <Grid skills={skills?.backend} />
        </motion.div>

        {/* Tools */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-montserrat font-semibold text-5xl">03</p>
              <p className="font-montserrat font-semibold text-3xl mt-3">
                DevTools & Extras
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <Grid skills={skills?.tools} />
        </motion.div>
      </div>

      {/* SKILLS */}
    </section>
  );
};

export default Skills;
