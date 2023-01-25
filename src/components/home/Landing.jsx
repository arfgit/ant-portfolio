import React from "react";
import useMediaQuery from "../../features/hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../../features/icons/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              src="assets/Me-test-1.png"
              alt="profile"
              className="hover:filter saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            />
          </div>
        ) : (
          <div>
            <img
              src="assets/its-ant.png"
              alt="profile"
              className="hover:filter saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            />
          </div>
        )}
      </div>

      {/* NAME & BIO */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADLINE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="text-6xl  hover:text-yellow ease-in transition duration-200 font-montserrat font-extrabold z-10 text-center md:text-start">
            Anthony{" "}
            <span className="xs:relative xs:font-extrabold z-20 xs:before:content-brush before:absolute before:-left-[30px] before:-top-[90px] before:z-[-1]">
              Feliz
            </span>
            <p className="mt-5 mb-7 font-montserrat font-semibold text-4xl text-center md:text-start">
              Full Stack Software Engineer
            </p>
          </div>
          <p className="mt-5 mb-7 font-karla text-xl text-center md:text-start">
            I am an active engineer committed to learning and developing new
            skills. To me, a career in tech means giving back to the world and
            being a part of something that will never stop growing.
          </p>
        </motion.div>

        {/* ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center font-montserrat md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white  ease-in transition duration-200"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Resume
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-yellow ease-in transition duration-200 w-full h-full flex items-center justify-center px-10">
              Let's Talk.
            </div>
          </AnchorLink>
        </motion.div>

        {/* MEDIA */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
