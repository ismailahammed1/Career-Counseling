/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("/jsonData/services.json")
      .then((response) => response.json())
      .then((data) => setServicesData(data.services))
      .catch((error) => toast.error("Error fetching services data:", error));
  }, []);

  return (
    <ServicesContext.Provider value={{ servicesData }}>
      {children}
    </ServicesContext.Provider>
  );
};
