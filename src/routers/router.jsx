import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import MainLayout from "../Layouts/MainLayout";
import ComponentService from "../Components/ComponentService";
import ServiceDetails from "../Components/ServiceDetails"; 

import RegisterForm from "../Pages/AuthForm/RegisterForm";
import LoginForm from "../Pages/AuthForm/LoginForm";
import BlogPage from "../Pages/Blog/BlogPage";
import ContactPage from "../Pages/ContactPage/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <h1>Error Page</h1>,
  },
  {
    path: "/services",
    element: <MainLayout />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        index: true,
        element: <ComponentService />,
      },
      {
        index: true,
        path: ":id", 
        element: <ServiceDetails />, 
      },
    ],
  },
  {
    path: "/contact-us",
    element: <MainLayout />, // ✅ Use MainLayout
    children: [
      {
        index: true,
        element: <ContactPage/>, // Replace with ContactUsPage component
      },
    ],
  },
  {
    path: "/blog",
    element: <MainLayout />, // ✅ Use MainLayout
    children: [
      {
        index: true,
        element: <BlogPage />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

export default router;
