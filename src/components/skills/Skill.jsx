import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, image }) => {
  return (
    <div className="group relative flex">
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="rounded-full border border-deep-blue bg-blue object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale"
      >
        <img src="../assets/png-64px/firebase-64.png" alt="" />
        <figcaption className="flex justify-center">React</figcaption>
      </motion.div>
    </div>
  );
};

export default Skill;
