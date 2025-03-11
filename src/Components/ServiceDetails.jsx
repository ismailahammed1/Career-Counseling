import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ServicesContext } from "../Contex/ServicesContext";
import teamMembers from "../../public/jsonData/teamData";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ServiceDetails = () => {
  const { id } = useParams();
  const { servicesData } = useContext(ServicesContext);
  if (!servicesData) return <div>Loading...</div>;

  const service = servicesData.find((s) => s.id === parseInt(id));
  const selectedMembers = teamMembers.slice(0, 3);

  if (!service) {
    return (
      <div className="text-center py-20 text-2xl text-red-600">
        Service not found
      </div>
    );
  }

  return (

    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left Sidebar */}
      <aside className="md:col-span-1 space-y-8">
        {/* Services List */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3">
            {servicesData.map((item, index) => (
              <li key={index} className="cursor-pointer flex justify-between text-lg">
                <Link
                  to={`/services/${item.id}`}
                  className={`flex justify-between w-full ${
                    item.id === service.id
                      ? "text-[#dc3545] font-semibold"
                      : "text-gray-600 hover:text-red-500"
                  }`}
                >
                  <p>{item.title}</p> <p className="text-3xl">{">"}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Download Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Download</h3>
          <button className="w-full bg-[#dc3545] text-white py-2 rounded-lg mb-3 hover:bg-red-700">
            Download Brochure
          </button>
          <button className="w-full bg-[#dc3545] text-white py-2 rounded-lg hover:bg-red-700">
            Get a Free eBook
          </button>
        </div>

        {/* Sidebar Image */}
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1741379707/career%20counselling/ads-lyfepro_n3kvwv.png"
            alt="Expert Advice"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white p-2 w-full text-center">
            Expert Advice
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:col-span-2 space-y-12">
        {/* Service Top Image */}
        <img
          src={service.image || "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740724505/career%20counselling/pexels-photo-9034214_kcsavw.webp"}
          alt={service.title}
          className="w-full rounded-lg shadow-lg"
        />

        {/* Service Description */}
        <section>
          <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
          <p className="text-gray-700 leading-relaxed">
            We provide top-notch business training and mentoring to help you
            reach your career goals. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </section>

        {/* Highlights */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "My Mentoring", icon: "📘" },
            { title: "Training Programs", icon: "🎯" },
            { title: "Exclusive Networks", icon: "🔗" },
            { title: "Life Mentoring", icon: "💡" },
          ].map((highlight, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-red-500 text-3xl">{highlight.icon}</span>
              <h4 className="text-lg font-semibold">{highlight.title}</h4>
            </div>
          ))}
        </section>

        {/* Investment Benefits */}
        <section className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">
            The best investment you can make is in yourself
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Gain career-changing skills</li>
            <li>Join an exclusive network</li>
            <li>Work with industry mentors</li>
            <li>Advance your career strategically</li>
          </ul>
        </section>

        {/* Experts (Updated Swiper) */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Meet Our Expert Members</h2>
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
            {selectedMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="relative group overflow-hidden shadow-lg h-[400px]">
                  {/* Team Member Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Name & Position (Slide Up on Hover) */}
                  <div className="absolute bottom-0 left-0 w-full bg-gray-700 p-4 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="text-white font-bold text-lg">{member.name}</h3>
                    <p className="text-red-950 text-sm">{member.position}</p>
                  </div>

                  {/* Social Media Icons (Slide from Right to Left on Hover) */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-10 transition-transform duration-500 group-hover:translate-x-0">
                    <Link to="#" className="text-red-950 hover:text-white transition">
                      <FaFacebookF />
                    </Link>
                    <Link to="#" className="text-red-950 hover:text-white transition">
                      <FaTwitter />
                    </Link>
                    <Link to="#" className="text-red-950 hover:text-white transition">
                      <FaInstagram />
                    </Link>
                    <Link to="#" className="text-red-950 hover:text-white transition">
                      <FaLinkedin />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
    </div>
  );
};

export default ServiceDetails;
