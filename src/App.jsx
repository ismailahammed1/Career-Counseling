import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import "./index.css";
import { ServicesProvider } from "./Contex/ServicesContext";
import AuthProvider from "./Contex/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    
      <ServicesProvider>
        <AuthProvider>
          <ToastContainer position="top-right" autoClose={3000} />
          <RouterProvider router={router} />
        </AuthProvider>
      </ServicesProvider>
  );
}

export default App;
