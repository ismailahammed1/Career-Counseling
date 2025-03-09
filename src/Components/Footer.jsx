import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-[#313335] text-base-content flex flex-col py-10">
      {/* Contact Section */}
      <div className="  flex flex-col md:flex-row justify-between items-center mt-5 w-8/12 mx-auto gap-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 bg-[#bb0d21] flex justify-center items-center text-white text-2xl">
            <FaMapMarkerAlt />
          </div>
          <div className="text-lg">
            <span className="footer-title text-white font-bold">
              Offline Address
            </span>
            <p className="text-red-800 font-bold">2015 New York</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 bg-[#bb0d21] flex justify-center items-center text-white text-2xl">
            <TfiEmail />
          </div>
          <div className="text-lg" >
            <span className="footer-title text-white font-bold">
              Online Support
            </span>
            <p className="text-red-800 font-bold">info@uylpro.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 bg-[#bb0d21] flex justify-center items-center text-white text-2xl">
            <FiPhoneCall />
          </div>
          <div className="text-lg">
            <span className="footer-title text-white font-bold">
              Contact Us Free
            </span>
            <p className="text-red-800 font-bold">11 (186) 465 689</p>
          </div>
        </div>
      </div>

      {/* Footer Sections */}
      <div className=" flex flex-col   md:flex-row justify-center border-t-2 border-b-2 border-gray-700 py-4 w-full gap-10">
        {/* Our Departments Section */}
        <div className="p-3 flex flex-col w-full md:w-1/3 items-center text-white gap-2 font-medium">
          <span className="footer-title">Our Departments</span>
          <Link className="link link-hover">About Us</Link>
          <Link className="link link-hover">Customer</Link>
          <Link className="link link-hover">Best Seller</Link>
          <Link className="link link-hover">Centre</Link>
          <Link className="link link-hover">Privacy Policy</Link>
        </div>

        {/* Sign-Up Section */} 
        <div className="w-full md:w-1/3 text-white p-3 ">
          <span className="footer-title">Sign Up To Get Latest Updates</span>
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative w-full mt-3">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="bg-red-800 btn absolute top-0 right-0 rounded text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Opening Hours Section */}
        <div className="p-2 w-full md:w-1/3 flex flex-col items-center text-white gap-3 font-medium">
          <span className="footer-title">Opening Hours</span>
          <p>Mon – Tues: 0:00 AM – 0:00 PM</p>
          <p>Wed – Thurs: 0:00 AM – 0:00 PM</p>
          <p>Fri – Sat: 1:00 AM – 0:00 PM</p>
          <p>Sunday: Emergency Only</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-8/12 mx-auto flex flex-col md:flex-row justify-between items-center text-white gap-5 ">
        <h1 className="text-center text-sm">
          Copyright © 2025 IAR Career Counselling, All Rights Reserved.
        </h1>
         <div className="flex justify-between gap-5 text-center">
                    <FaFacebookSquare className="text-xl hover:text-red-800 transition" />
                    <FaXTwitter className="text-xl hover:text-red-800 transition" />
                    <FaInstagram className="text-xl hover:text-red-800 transition" />
                    <FaLinkedinIn className="text-xl hover:text-red-800 transition" />
                  </div>
        <div className="flex gap-5">
          <Link className="hover:text-red-800 transition-colors">FAQ</Link>
          <Link className="hover:text-red-800 transition-colors">Terms</Link>
          <Link className="hover:text-red-800 transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
