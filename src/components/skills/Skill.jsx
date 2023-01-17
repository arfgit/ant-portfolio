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
      >
        <img
          className="mx-auto"
          src="../assets/png-64px/express-js-64-inverted.png"
          alt=""
        />
        <p className="text-center text-sm font-karla font-semibold">
          React Native
        </p>
      </motion.div>
    </div>
  );
};

export default Skill;
