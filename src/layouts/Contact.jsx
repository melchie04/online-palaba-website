import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { contactData } from "../data/content";
import Heading from "../components/Heading";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      id="contact"
      className="bg-blue-pattern flex flex-col justify-between items-center px-8 py-20 mx-4 md:mx-20 lg:mx-36 my-20"
    >
      <Heading pretitle={contactData.pretitle} />
      <motion.form
        ref={ref}
        initial={inView ? { opacity: 0, x: 100 } : { opacity: 1, x: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-4 w-full max-w-3xl"
      >
        <input
          className="bg-transparent placeholder:font-light placeholder:text-white text-white focus:ring-white focus:outline-none focus:ring-2 border border-white transition-all p-3 flex-1"
          type="email"
          placeholder={contactData.placeholder}
        />
        <button className="flex items-center justify-center bg-[#161F6D] hover:bg-[#1F2B97] text-white font-bold py-3 px-8 transition duration-300">
          {contactData.btnText}
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
