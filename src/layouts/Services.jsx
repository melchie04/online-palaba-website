import React from "react";
import { servicesData } from "../data/content";
import Heading from "../components/Heading";
import Schedule from "../components/Schedule";
import Pickup from "../components/Pickup";
import Deliver from "../components/Deliver";

const Services = () => {
  return (
    <div id="services" className="flex flex-col px-4 md:px-20 lg:px-36 py-20">
      <Heading
        pretitle={servicesData.pretitle}
        icon={servicesData.icon}
        subtitle={servicesData.subtitle}
      />
      <Schedule />
      <Pickup />
      <Deliver />
    </div>
  );
};

export default Services;
