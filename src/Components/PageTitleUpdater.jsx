import { useLocation } from 'react-router-dom';

const PageTitleUpdater = () => {
  const location = useLocation();


  const routeTitles = {
    "/": "Home - IAR Career Counselling",
    "/services": "Services - IAR Career Counselling",
    "/services/:id": "Service Details - IAR Career Counselling",
    "/blog": "Blog - IAR Career Counselling",
    "/contact-us": "Contact Us - IAR Career Counselling",
    "/register": "Register - IAR Career Counselling",
    "/login": "Login - IAR Career Counselling",
  };

  // Match the current route to the title
  const matchedRoute = Object.keys(routeTitles).find((route) => {
    const routePattern = new RegExp(`^${route.replace(/:\w+/g, "\\w+")}$`);
    return routePattern.test(location.pathname);
  });

  const title = matchedRoute ? routeTitles[matchedRoute] : "IAR Career Counselling";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={title} />
      <meta name="author" content="IAR Career Counselling" />
    </>
  );
};

export default PageTitleUpdater;
