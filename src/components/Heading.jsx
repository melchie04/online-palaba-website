import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Heading = ({ pretitle, icon, subtitle }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={inView ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="flex-1 flex flex-col justify-center items-center text-center p-4"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 max-w-lg mb-4">
        <span>{pretitle} </span>
        {icon && (
          <img
            src={icon}
            alt=""
            className="max-w-[23px] md:max-w-[35px] inline mb-2 md:mb-3"
          />
        )}
      </h1>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-600 max-w-md">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default Heading;
