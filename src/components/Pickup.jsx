import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { servicesData } from "../data/content";
import ServiceContent from "../components/ServiceContent";

const Pickup = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="flex flex-col-reverse md:flex-row px-4 pt-20">
      <motion.div
        ref={ref}
        initial={inView ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex justify-center items-center p-4"
      >
        <div className="max-w-[350px] w-full flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <ServiceContent service={servicesData.pickup} />
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={inView ? { opacity: 0, x: 100 } : { opacity: 1, x: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex justify-center items-center p-4"
      >
        <img
          src={servicesData.pickup.image}
          alt=""
          className="max-w-[350px] w-full"
        />
      </motion.div>
    </div>
  );
};

export default Pickup;
