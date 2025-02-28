import Aos from "aos";
import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false); // Close search bar when menu is opened
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false); // Close mobile menu when search is opened
  };

  const closeSearch = () => {
    setIsSearchOpen(false); // Close search bar
  };

  const menuBar = (
    <>
      <Link to="/" className="block py-2 hover:text-red-800">
        Home
      </Link>
      <Link to="/pages" className="block py-2 hover:text-red-800">
        Pages
      </Link>
      <div className="relative group">
        <Link className="block py-2 hover:text-red-800 "  to="/services">Services</Link>
        <div className="absolute left-0 z-10 w-48 bg-white shadow-lg lg:mt-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <Link
            to="/service1"
            className="block py-2 px-4 hover:text-gray-100 hover:bg-[#dc3545] border-b-[0.5px] border-gray-200 relative"
          >
            <a className="transition-transform transform hover:translate-x-2  inline-block">
        <span className="w-4 h-[1px] hover:bg-red-800 bg-white inline-block mr-2"></span>
        Service 1
            </a>
          </Link>
          <Link
            to="/service1"
            className="block py-2 px-4 hover:text-gray-100 
            hover:bg-[#dc3545] border-b-[0.5px] border-gray-200 relative
            "
          >
            <a className="transition-transform transform hover:translate-x-2 inline-block">
        <span className="w-4 h-[1px] hover:bg-red-800 bg-white inline-block mr-2"></span>
        Service 1
            </a>
          </Link>
          <Link
            to="/service1"
            className="block py-2 px-4 hover:text-gray-100 hover:bg-[#dc3545] border-b-[0.5px] border-gray-200 relative"
          >
            <a className="transition-transform transform hover:translate-x-2 inline-block">
        <span className="w-4 h-[1px] hover:bg-red-800 bg-white inline-block mr-2"></span>
        Service 1
            </a>
          </Link>
          <Link
            to="/service1"
            className="block py-2 px-4 hover:text-gray-100 hover:bg-[#dc3545] border-b-[0.5px] border-gray-200 relative"
          >
            <a className="transition-transform transform hover:translate-x-2 inline-block">
        <span className="w-4 h-[1px] hover:bg-red-800 bg-white inline-block mr-2"></span>
        Service 1
            </a>
          </Link>
        </div>
      </div>
      <Link to="/projects" className="block py-2 hover:text-red-800">
        Projects
      </Link>
      <Link to="/blog" className="block py-2 hover:text-red-800">
        Blog
      </Link>
      <Link to="/contact-us" className="block py-2 hover:text-red-800">
        Contact Us
      </Link>
    </>
  );

  return (
    <div className=" flex justify-between shadow-lg">
      {/* Navbar */}
      <div className=" navbar w-full items-center flex justify-center">
        <div className=" lg:ml-60 ml-16">
          <a className="text-xl font-bold text-gray-800">IAR career counselling</a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="bg-white w-full items-center flex justify-center navbar ">
        <div className="navbar-center h-20 hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 font-semibold gap-2">
            {menuBar}
          </ul>
        </div>
      </div>

      {/* Right Side Section */}
      <div className="bg-[#dc3545] w-full lg:flex justify-center text-amber-50 hidden">
        <div className="navbar font-medium text-2xl gap-4 py-2 px-4">
          <CiShoppingCart className="font-bold" />
          <IoMdSearch onClick={toggleSearch} className="cursor-pointer" />
          <MdMessage />
          <div className="flex flex-col ml-2">
            <span>Have any Question ?</span>
            <span>+0 123 888 999</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay with Black Opacity */}
      <div
        className={`fixed inset-0  bg-black bg-opacity-10 transition-opacity duration-300 ${
          isMenuOpen || isSearchOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => {
          setIsMenuOpen(false);
          setIsSearchOpen(false);
        }}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 z-50 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between">
            <CiShoppingCart className="font-bold mt-2.5" />
            <IoMdSearch
              onClick={toggleSearch}
              className="cursor-pointer font-bold mt-2.5"
            />
            <button onClick={toggleMenu} className="btn mb-4">
              ✕
            </button>
          </div>
          <ul className="menu">{menuBar}</ul>
        </div>
      </div>

      {/* Search Bar - Fullscreen */}
      <div
        className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
          isSearchOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-center items-center h-full relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-3/4 py-3 px-4 border border-gray-300 rounded-md shadow-lg"
          />
          <button
            onClick={closeSearch}
            className="absolute top-2 right-2 text-2xl text-gray-600"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Mobile menu button for toggling */}
      <div className="lg:hidden flex justify-between w-full px-6 py-3">
        <button onClick={toggleMenu} className="text-2xl text-gray-800">
          ☰
        </button>
      </div>
    </div>
  );
};

export default NavBar;
