import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const ComponentService = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    // Initialize AOS
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Ensures animations only happen once
    });

    // Fetch the JSON file from the public folder
    fetch("/jsonData/services.json")
      .then((response) => response.json())
      .then((data) => setServicesData(data.services))
      .catch((error) => console.error("Error fetching services data:", error));
  }, []);

  const displayedServices = servicesData.slice(0, 6);

  if (!servicesData || servicesData.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No services available at the moment.
      </div>
    );
  }

  return (
    <div className="p-6 w-7xl mx-auto">
      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
        {displayedServices.map((service, index) => (
          <div
            key={index}
            className="relative w-[350px] h-96 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group mx-auto mt-10"
            data-aos="fade-up" // Apply AOS fade-up animation
            data-aos-delay={index * 100} // Staggered delay for each card
          >
            {/* Service Image with Hover Zoom-In */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
            {/* Service Info Overlay */}
            <Link
              to={service.link}
              aria-label={`Learn more about ${service.title}`}
              className="absolute bottom-0 left-0 right-0 bg-white text-gray-900 px-4 py-3 w-11/12 mx-auto transition-all duration-300 group-hover:bg-red-800 group-hover:text-white"
            >
              <p className="text-xs uppercase tracking-wide text-gray-800 group-hover:text-white">
                {service.title.split(" ")[0]} {/* Display the first word as a category */}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
                {service.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
      {/* More Button */}
      <div className="w-full text-center mt-8">
        <Link
          to="/services"
          className="bg-[#dc3545] text-white px-6 py-2 font-semibold hover:bg-red-700 transition"
        >
          More Services
        </Link>
      </div>
    </div>
  );
};

export default ComponentService;