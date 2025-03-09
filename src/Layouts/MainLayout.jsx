import { Outlet, useLocation, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import { useContext } from "react";
import { ServicesContext } from "../Contex/ServicesContext";

const MainLayout = () => {
  const location = useLocation();
  const { id } = useParams();
  const { servicesData } = useContext(ServicesContext);

  const service = id ? servicesData.find((s) => s.id === parseInt(id)) : null;

  const generateTitle = () => {
    let pathParts = location.pathname.split("/").filter(Boolean);

    if (id) pathParts.pop();

    let formattedTitle = pathParts
      .map((part) =>
        part
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize first letter
      )
      .join(" > ");

    // If a service is found, append its name at the end
    if (service) {
      formattedTitle += ` > ${service.title}`;
    }

    return `IAR Career Counselling > ${formattedTitle}`;
  };

  return (
    <div>
      <NavBar />
    
      {(location.pathname.startsWith("/services") || location.pathname === "/blog" || location.pathname === "/contact-us") && (
        <Banner title={generateTitle()} />
      )}

      <main>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
