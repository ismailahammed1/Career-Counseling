import { FaQuoteLeft } from "react-icons/fa";

const AboutComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 p-6 lg:p-10 max-w-7xl mx-auto">
      {/* Left Image Section */}
      <div className="relative w-full lg:w-1/2">
        <div className="absolute top-4 left-4 w-full h-full bg-[#dc3545] -z-10"></div>
        <img
          src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740464839/career%20counselling/job-5382501_1920_ychbqw.jpg"
          alt="Coaching"
          className="w-full h-auto object-cover shadow-2xl"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <p className="text-red-600 font-semibold uppercase tracking-widest">
          About Us
        </p>
        <h2 className="text-2xl lg:text-3xl font-bold mt-2">
          Why Most People Get Excited About Coaching
        </h2>
        <p className="text-gray-600 mt-3 text-sm lg:text-base">
          Combines industry knowledge, decades. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        {/* Quote Section */}
        <div className="mt-5 p-4 lg:p-5 bg-gray-100 border-l-4 border-red-600">
          <FaQuoteLeft className="text-[#dc3545] text-2xl" />
          <p className="text-gray-700 italic mt-2 text-sm lg:text-base">
            Vestibulum commodo volutpat a, convallis ac laoreet enim. Phasellus
            fermentum to deliver excellence to our clients experience.
          </p>
          <p className="font-bold mt-2 text-sm lg:text-base">- Jason K. Manson</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="border bg-[#dc3545] px-4 lg:px-6 py-2 flex items-center gap-2 text-white font-semibold hover:bg-red-900 hover:text-white transition text-sm lg:text-base">
            <span className="w-4 lg:w-6 h-[1px] bg-white inline-block"></span>
            Read More
          </button>
          <button className="border border-gray-800 px-4 lg:px-6 py-2 flex items-center gap-2 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition text-sm lg:text-base">
            <span className="w-4 lg:w-6 h-[1px] bg-gray-800 inline-block group-hover:bg-white"></span>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;