import Aos from "aos";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import HeaderSlider from "./HeaderSlider";

const Header = () => {
  Aos.init({
    duration: 1200,
    easing: "ease-in-out",
    delay: 200,
    once: false,
    mirror: true,
  });

  return (
    <div className=" mx-auto overflow-hidden"> {/* Prevents scrollbar */}
      <div className="relative flex justify-center items-center px-6 lg:px-20">
        {/* Social Media Icons */}
    <div className="mr-5 left-5  transform -translate-y-1/2">
    <div className="flex flex-col gap-3">
          <FaFacebookSquare className="text-2xl hover:text-red-800 transition" />
          <FaXTwitter className="text-2xl hover:text-red-800 transition" />
          <FaInstagram className="text-2xl hover:text-red-800 transition" />
          <FaLinkedinIn className="text-2xl hover:text-red-800 transition" />
        </div>
    </div>

        {/* Slider with reduced width */}
        <div className="w-full mx-auto">  
          <HeaderSlider />
        </div>
        <div className="w-96 h-[600px] bg-[#dc3545] text-white py-4 text-center">
        This is the bottom section
      </div>
      </div>

      {/* Bottom Section */}
     
    </div>
  );
};

export default Header;
