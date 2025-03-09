import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import teamMembers from "../../public/jsonData/teamData";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamSlider = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Text Section */}
      <div className="text-section bg-gray-900 text-white p-10 w-full lg:w-1/3">
    <h2 className="text-xl text-red-500 font-bold mt-10 items-center">

    <span className="w-4 h-[1px] bg-red-400 inline-block mr-2 mb-1"></span>
      OUR LEADERSHIP</h2>
    <h3 className="text-3xl font-bold mt-2">
      A team committed to improving your business
    </h3>
    <p className="mt-4">
      Combines industry knowledge, decades of experience.
    </p>
    <Link
      to="/team"
      className="mt-4 inline-block bg-red-900 px-6 py-2 text-white"
    >
      VIEW ALL
    </Link>
  </div>

      {/* Swiper Section */}
      <div className="w-full lg:w-2/3">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden shadow-lg h-[400px]">
                {/* Team Member Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Name & Position (Slide Up on Hover) */}
                <div className="absolute bottom-0 left-0 w-full bg-gray-700  p-4 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-white font-bold text-lg">
                    {member.name}
                  </h3>
                  <p className="text-red-400 text-sm">{member.position}</p>
                </div>

                {/* Social Media Icons (Slide from Right to Left on Hover) */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-10 transition-transform duration-500 group-hover:translate-x-0">
                  <Link
                    to="#"
                    className="text-red-400 hover:text-white transition"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    to="#"
                    className="text-red-400 hover:text-white transition"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    to="#"
                    className="text-red-400 hover:text-white transition"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    to="#"
                    className="text-red-400 hover:text-white transition"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSlider;
