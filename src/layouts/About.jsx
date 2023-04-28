import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebook } from "react-icons/fa";
import { aboutData } from "../data/content";
import Heading from "../components/Heading";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center px-4 md:px-20 lg:px-36 py-20"
    >
      <Heading pretitle={aboutData.pretitle} subtitle={aboutData.subtitle} />
      <motion.div
        ref={ref}
        initial={inView ? { opacity: 0, x: 100 } : { opacity: 1, x: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center pt-20"
      >
        <div className="flex flex-col md:flex-row justify-between">
          <img
            src={aboutData.img1}
            alt="Image 1"
            className="w-full md:w-1/3 mb-4 md:mb-0"
          />
          <img
            src={aboutData.img2}
            alt="Image 2"
            className="w-full md:w-1/3 mb-4 md:mb-0"
          />
          <img
            src={aboutData.img3}
            alt="Image 3"
            className="w-full md:w-1/3 mb-4 md:mb-0"
          />
        </div>
        <button className="flex items-center justify-center bg-[#161F6D] hover:bg-[#1F2B97] text-white font-bold py-3 px-8 rounded-full transition duration-300 my-4">
          <FaFacebook size={20} className="mr-2" />
          <span>{aboutData.btnText}</span>
        </button>
      </motion.div>
    </div>
  );
};

export default About;
