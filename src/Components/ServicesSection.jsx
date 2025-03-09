import React from "react";
import { BsPciCardNetwork } from "react-icons/bs";
import { FaSitemap } from "react-icons/fa";
import { MdOutlineNetworkCheck } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "Coaching Session",
      description:
        "Step back from the overload and find some time for yourself with Lifepro.",
      icon: <FaSitemap />
      , 
    },
    {
      number: "02",
      title: "Day-Long Retreat",
      description:
        "Step back from the overload and find some time for yourself with Lifepro.",
      icon: <TfiWrite />
      ,
    },
    {
      number: "03",
      title: "Impact Retreat",
      description:
        "Step back from the overload and find some time for yourself with Lifepro.",
      icon: <MdOutlineNetworkCheck />
      ,
    },
    {
      number: "04",
      title: "Retreat Service",
      description:
        "Step back from the overload and find some time for yourself with Lifepro.",
      icon: <BsPciCardNetwork />
      ,
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <div className="flex flex-col text-red-600 uppercase font-semibold tracking-widest  justify-center items-center px-2 gap-2">
      <div className="text-gray-500 uppercase font-semibold tracking-widest  flex justify-center items-center px-2 gap-2">
      <span className="w-10 h-[1px] bg-gray-400 inline-block mr-2"></span>

      <p className="text-sm text-red-500 uppercase tracking-wider">
          Better Solution
        </p>
          </div>
       
     

        <h2 className="text-3xl font-bold mt-2">
          Here&apos;s a Great Place to Start
        </h2>
        <p className="text-sm text-gray-500 mt-4 max-w-2xl mx-auto">
          Combines industry knowledge, decades. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-5xl text-red-500 mb-4">{service.icon}</div>
            <p className="text-gray-300 font-bold text-xl">{service.number}</p>
            <h3 className="text-lg font-semibold mt-2">{service.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{service.description}</p>
          </div>
        ))}
      </div>

      <button className=" btn mt-12 px-6 py-3 bg-gray-800 text-white text-sm uppercase tracking-wide rounded">
        Get a Quote
      </button>
    </section>
  );
};

export default ServicesSection;
