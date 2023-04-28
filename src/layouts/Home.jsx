import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { homeData } from "../data/content";

const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      id="home"
      className="bg-blue-pattern relative flex flex-col md:flex-row px-4 md:px-20 lg:px-36 pt-36 md:pt-20 min-h-[700px]"
    >
      <motion.div
        ref={ref}
        initial={inView ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left p-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold font-fredoka text-[#161F6D] max-w-lg mb-4 md:mb-6">
          <span>{homeData.pretitle} </span>
          <img
            src={homeData.icon}
            alt=""
            className="max-w-[30px] md:max-w-[50px] inline mb-1"
          />
        </h1>
        <p className="text-base md:text-lg text-white max-w-md mb-6 md:mb-8">
          {homeData.subtitle}
        </p>
        <div className="flex justify-between">
          <a href="#" target="_blank">
            <img
              src={homeData.btnImage.google}
              alt="Google Play"
              width="200px"
              className="hover:brightness-75"
            />
          </a>
          <a href="#" target="_blank">
            <img
              src={homeData.btnImage.apple}
              alt="App Store"
              width="200px"
              className="hover:brightness-75"
            />
          </a>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={inView ? { opacity: 0, x: 100 } : { opacity: 1, x: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex justify-center items-center p-4"
      >
        <img src={homeData.image} alt="" className="max-w-[400px] w-full" />
      </motion.div>
    </div>
  );
};

export default Home;
