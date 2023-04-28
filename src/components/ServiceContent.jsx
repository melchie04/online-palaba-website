import React from "react";

const ServiceContent = ({ service }) => {
  return (
    <>
      <p className="font-semibold text-[#00abe1] text-md bg-gray-200 px-3 mb-4">
        {service.title.toUpperCase()}
      </p>
      <h1 className="text-1xl md:text-3xl font-bold text-gray-900 max-w-lg mb-4">
        {service.pretitle}
      </h1>
      <p className="text-base md:text-lg text-gray-600 max-w-md mb-4">
        {service.subtitle}
      </p>
      {service.instructions &&
        Object.values(service.instructions).map((instruction, index) => (
          <p
            className="text-base md:text-lg text-gray-600 max-w-md mb-4"
            key={index}
          >
            <span className="text-[#00abe1]">✓</span>
            <span> {instruction}</span>
          </p>
        ))}
    </>
  );
};

export default ServiceContent;
