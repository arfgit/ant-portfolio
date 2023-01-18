import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, image }) => {
  return (
    <div className="group relative flex">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img src={image} alt={name} title={name} />
        <p className="absolute left-2/4 -translate-x-2/4 text-xs mt-1 font-karla font-semibold">
          {name}
        </p>
      </motion.div>
    </div>
  );
};

export default Skill;
