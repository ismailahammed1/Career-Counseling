import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import HeaderSlider from "./HeaderSlider";

import { MdOutline6FtApart } from "react-icons/md";

const Header = () => {
  return (
    <div className="w-full overflow-hidden ">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full">
        {/* Left Section: Social Media Icons */}
        <div className="w-2/12 h-[600px] justify-center items-center hidden lg:flex">
          <div className="flex flex-col gap-5 text-center">
            <FaFacebookSquare className="text-2xl hover:text-red-800 transition" />
            <FaXTwitter className="text-2xl hover:text-red-800 transition" />
            <FaInstagram className="text-2xl hover:text-red-800 transition" />
            <FaLinkedinIn className="text-2xl hover:text-red-800 transition" />
          </div>
        </div>

        {/* Middle Section: Slider */}
        <div className="w-full lg:w-11/12 mx-auto">
          <HeaderSlider />
        </div>

        {/* Right Section: Red Background */}
        <div className="hidden lg:block w-1/4 h-[600px] bg-[#dc3545] text-white py-4 text-center"></div>
      </div>

      {/* Statistics Section */}
      <div className="flex  flex-col md:flex-row w-full">
        <div className="h-24 bg-amber-100 w-full"></div>
        <div className="h-24 bg-amber-100 w-full flex justify-center">
          <div className="mt-5 w-full md:w-[700px] flex flex-col md:flex-row justify-center gap-3 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <h1 className="text-[#af2432] font-extrabold text-4xl">545+</h1>
              <p className="font-bold">Business advices given over 30 years</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <h1 className="text-[#af2432] font-bold text-4xl">90%</h1>
              <p className="font-bold">Business excellence awards achieved</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex bg-[#dc3545] h-24 w-full">
          <div className="mt-5 w-full mx-auto  p-4 text-4xl flex justify-center text-white">
            <MdOutline6FtApart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
