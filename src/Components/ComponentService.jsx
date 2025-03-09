/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ServicesContext } from "../Contex/ServicesContext";

const ComponentService = ({ limit, showMoreButton = false }) => {
  const { servicesData } = useContext(ServicesContext);
 

  if (!servicesData || servicesData.length === 0) {
    return <div className="text-center text-gray-500">No services available at the moment.</div>;
  }

  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {displayedServices.map((service) => (
          <div
            key={service.id}
            className="relative w-full h-96 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group mx-auto mt-6"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
            <Link
              to={`/services/${service.id}`} // ✅ Always use absolute path help from chatgpt
              aria-label={`Learn more about ${service.title}`}
              className="absolute -bottom-4 left-0 right-0 bg-white text-gray-900 px-4 py-5 w-11/12 mx-auto mb-3 transition-all duration-300 group-hover:bg-red-800 group-hover:text-white"
            >
              <p className="text-xs uppercase tracking-wide text-gray-800 group-hover:text-white items-center">
                <span className="w-4 h-[1px] bg-gray-400 inline-block mr-2"></span> {service.title.split(" ")[0]}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
                {service.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      {showMoreButton && (
        <div className="w-full text-center mt-10">
          <Link
            to="/services"
            className="inline-block bg-[#dc3545] text-white px-8 py-3 font-semibold rounded-md hover:bg-red-700 transition"
          >
            More Services
          </Link>
        </div>
      )}
    </div>
  );
};

export default ComponentService;
