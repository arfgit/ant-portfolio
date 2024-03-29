import { useRef } from "react";
import LineGradient from "../../features/gradients/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Quote from "../../features/quote/Quote";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const formRef = useRef();

  const handleSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) e.preventDefault();
  };

  return (
    <section id="contact" className="py-48">
      {/* HEADING */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-montserrat font-semibold text-4xl">
            <span className="text-yellow">CONTACT</span> ME
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* FORM */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          {/* <img src="../assets/quote.png" alt="contact" className="rounded-lg" /> */}
          <Quote
            quote="The goal of the Web is to serve humanity. We build it now so that those who come to it later will be able to create things that we cannot ourselves imagine."
            author="Tim Berners-Lee"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            action="https://formsubmit.co/57a5d2dad40c73e4f743db4222cb431f"
            method="POST"
          >
            <input
              className="w-full bg-blue font-semibold placeholder-deep-blue p-3"
              type="text"
              name="name"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-error mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-blue font-semibold placeholder-deep-blue p-3 mt-5"
              type="text"
              name="email"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-error mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-blue font-semibold placeholder-deep-blue p-3 mt-5"
              type="text"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-error mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-5 bg-yellow font-semibold   text-deep-blue mt-5 hover:bg-red hover:text-white ease-in transition duration-200"
              type="submit"
            >
              SEND
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
