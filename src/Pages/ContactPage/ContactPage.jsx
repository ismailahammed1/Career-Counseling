import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { GrContact } from "react-icons/gr";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Contact Header */}
      <div className="text-center py-10" data-aos="fade-down">
        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
        <p className="text-gray-600 mt-2">Call now or write a message</p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center gap-6 px-6" data-aos="fade-up">
        <div className="bg-white flex justify-center items-center gap-5  w-72 shadow-lg p-4 border-2 border-gray-200 text-center ">
        <FaMapMarkerAlt className="text-5xl text-red-900"/>

         <div>
         <h4 className="font-bold text-lg">Our Location</h4>
         <p>456, Lorem Street, New York, 2455, NY</p>
         </div>
        </div>
        <div className="bg-white flex justify-center items-center gap-5  w-72 shadow-lg p-4 border-2 border-gray-200 text-center ">
        <IoMdCall  className="text-5xl text-red-900"/>
      <div>
      <h4 className="font-bold text-lg">Phone Number</h4>
          <p>+1-888-654-0203</p>
          <p>+1-888-654-0215</p>
      </div>
        </div>
        <div className="bg-white flex justify-center items-center gap-5  w-72 shadow-lg p-4 border-2 border-gray-200 text-center ">
        <GrContact className="text-5xl text-red-900"/>
        <div>
        <h4 className="font-bold text-lg">Email Address</h4>
          <p>contact@example.com</p>
          <p>admin@example.com</p>
        </div>
        </div>
      </div>

      {/* Image & Form Section */}
      <div className="flex flex-col md:flex-row mt-10">
        {/* Left Image */}
        <div className="hidden md:flex w-1/2">
          <img
            src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740464842/career%20counselling/meeting-2284501_e0xhx6.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
            data-aos="fade-right"
          />
        </div>
        
        {/* Right Form */}
        <div className="w-full md:w-1/2 bg-gray-800 text-white p-8" data-aos="fade-left">
          <h3 className="text-xl font-bold mb-4">Enquiry Form</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="input input-bordered w-full" />
              <input type="email" placeholder="Email" className="input input-bordered w-full" />
            </div>
            <input type="text" placeholder="Phone" className="input input-bordered w-full" />
            <input type="text" placeholder="Subject" className="input input-bordered w-full" />
            <textarea placeholder="Message" className="textarea textarea-bordered w-full"></textarea>
            <button className="btn bg-red-600 text-white w-full">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-10 w-full h-64" data-aos="fade-up">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?v=3&hl=en&q=New+York"
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
