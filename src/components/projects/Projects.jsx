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
    image: "../assets/beatdriver-resize.gif",
    github: "https://github.com/FC-TEAM-VISA/music-collab-app",
    deployed: "https://beatdriver.vercel.app/",
    stack: [
      { name: "Nextjs", image: "../assets/png-32px/nextjs-32-inverted.png" },
      { name: "React", image: "../assets/png-32px/React-32.png" },
      { name: "Web Audio API", image: "../assets/png-32px/WebAudioAPI-32.png" },
      { name: "Firebase", image: "../assets/png-32px/Firebase-32.png" },
      { name: "Nodejs", image: "../assets/png-32px/Nodejs-32.png" },
      { name: "Tailwind CSS", image: "../assets/png-32px/tailwindCSS-32.png" },
    ],
  },
  {
    title: "Chit Chat",
    description:
      "Chit Chat is an app where users can message other logged-in users. The primary focus of this app was to set up a real-time chat with a filter to block toxic messages.",
    image: "../assets/chatapp.gif",
    github: "https://github.com/arfgit/chat-app",
    deployed: "https://chat-app-git-main-arfgit1.vercel.app/login",
    stack: [
      { name: "React", image: "../assets/png-32px/React-32.png" },
      { name: "Firebase", image: "../assets/png-32px/Firebase-32.png" },
      { name: "Tensorflow", image: "../assets/png-32px/tensorflow-32.png" },
    ],
  },
  {
    title: "GameMap",
    description:
      "Developed with the PERN stack, GameMap is an e-commerce website that sells video games. Users can view all products and add games to their cart for checkout.",
    image: "../assets/gamemap.gif",
    github: "https://github.com/graceshopper-team-map/graceshopper-project",
    deployed: "",
    stack: [
      { name: "PostgreSQL", image: "../assets/png-32px/postgresql-32.png" },
      { name: "Express", image: "../assets/png-32px/express-32-inverted.png" },
      { name: "React", image: "../assets/png-32px/React-32.png" },
      { name: "Nodejs", image: "../assets/png-32px/Nodejs-32.png" },
      { name: "Material UI", image: "../assets/png-32px/MUI-32.png" },
    ],
  },
  {
    title: "PokeApp",
    description:
      "A React application using the Pokemon API. This app simulates a PokeDex where users can search, filter, and get more information on any pokemon within the first 5 regions.",
    image: "../assets/pokeapp.gif",
    github: "https://github.com/arfgit/poke-app",
    deployed: "https://poke-app-arfg.vercel.app/",
    stack: [
      { name: "React", image: "../assets/png-32px/React-32.png" },
      { name: "Redux", image: "../assets/png-32px/redux-32.png" },
      { name: "Material UI", image: "../assets/png-32px/MUI-32.png" },
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
            <span className="text-blue">PRO</span>JECTS
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-1/3" />
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="md:grid md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects?.map(
            ({ title, description, image, stack, github, deployed }, i) => (
              <Project
                key={i}
                title={title}
                description={description}
                image={image}
                stack={stack}
                github={github}
                deployed={deployed}
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
