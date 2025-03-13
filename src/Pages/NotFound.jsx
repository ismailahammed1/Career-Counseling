import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <img
        src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1741901301/error-404-concept-illustration_114360-1811_fmzbqb.jpg"
        alt="404 Illustration"
        className="w-64 mb-8"
      />
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#dc3545] text-white rounded-lg hover:bg-red-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;