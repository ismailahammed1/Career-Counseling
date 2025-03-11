import { useContext, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; 
import { CiShoppingCart } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import { ServicesContext } from "../Contex/ServicesContext";
import { AuthContext } from "../Contex/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const {servicesData}=useContext(ServicesContext)
  const {user}=useContext(AuthContext)

 
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false); 
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false); 
  };

  const closeSearch = () => {
    setIsSearchOpen(false); 
  };

  
  useEffect(() => {
    if (isMenuOpen) {
      Aos.refresh(); 
    }
  }, [isMenuOpen]);

  const menuBar = (
    <>
      <Link to="/" className="block py-2 hover:text-red-800">
        Home
      </Link>
  
      <div className="relative group">
        <Link className="block py-2 hover:text-red-800" to="/services">
          Services
        </Link>
        <div className="absolute left-0 z-10 w-48 bg-white shadow-lg lg:mt-7 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
          {servicesData.map((data, index) => (
            <Link
              key={data.id || index}
              to={`${data.id}`}
              className="py-5 px-4 hover:text-gray-100 hover:bg-[#dc3545] border-b-[0.5px] border-gray-200 flex items-center transition-colors duration-300 group"
            >
              {/* Left-to-Right Hover Animation */}
              <span className="w-4 h-[1px] bg-gray-400 inline-block mr-2"></span>
              <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                {data.title}
              </span>
            </Link>
          ))}
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
      <p className="block py-2 hover:text-red-800">{user.name} ({user.email})</p>

      <Link to="/register" className="block py-2 hover:text-red-800">
        Sign up
      </Link>
    
    </>
  );

  return (
    <div className="flex justify-between shadow-lg">
      {/* Navbar */}
      <div className="navbar w-full items-center flex justify-center">
        <div className="lg:ml-60 ml-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            IAR career counselling
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="bg-white w-full items-center flex justify-center navbar ">
        <div className="navbar-center h-20 hidden lg:flex px-10">
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
        className={`fixed inset-0 bg-black bg-opacity-10 transition-opacity duration-300 z-20 ${
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
        style={{ top: 0 }} // Ensure the menu sticks to the top
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
