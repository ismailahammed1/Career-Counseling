import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect, useState } from "react";

const HeaderSlider = () => {
  const [aosKey, setAosKey] = useState(0); // Force AOS re-render

  useEffect(() => {
    Aos.init({ duration: 1200, easing: "ease-in-out", once: false });
  }, []);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-[600px]"
        onSlideChange={() => {
          setAosKey(prev => prev + 1); // Update key to re-render animations
          Aos.refreshHard(); // 🔥 Ensure animations refresh properly
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740464856/career%20counselling/pexels-august-de-richelieu-4427505_tv1m1h.jpg"
              alt="Slide 1"
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute bg-black opacity-40 inset-0"></div>

            {/* Animated Content */}
            <div
              key={aosKey} // 🔥 Force re-render for animations
              data-aos="zoom-in"
              className="relative bg-white h-72 w-96 p-6 text-center max-w-xl mx-auto shadow-lg"
            >
              <p
                data-aos="fade-right"
                className="uppercase text-sm tracking-widest text-red-600 font-semibold"
              >
                ---- Easy Solution For
              </p>
              <h1
                data-aos="fade-left"
                className="text-3xl font-bold leading-tight mt-4"
              >
                I can help you create <br />
                positive & permanent <br />
                changes in your life.
              </h1>
              <button
                data-aos="fade-up"
                className="mt-6 px-8 py-3 bg-red-700 hover:bg-red-900 transition-all duration-300 text-white font-semibold"
              >
                GET A QUOTE
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740464839/career%20counselling/businessman-1492563_1920_t7psj2.jpg"
              alt="Slide 2"
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute bg-black opacity-40 inset-0"></div>

            {/* Animated Content */}
            <div
              key={aosKey} // 🔥 Force re-render for animations
              data-aos="zoom-in"
              className="relative bg-white h-72 w-96 p-6 text-center max-w-xl mx-auto shadow-lg"
            >
              <p
                data-aos="fade-right"
                className="uppercase text-sm tracking-widest text-red-600 font-semibold"
              >
                ----- Expert Guidance
              </p>
              <h1
                data-aos="fade-left"
                className="text-3xl font-bold leading-tight mt-4"
              >
                Unlock your potential with <br />
                professional coaching.
              </h1>
              <button
                data-aos="fade-up"
                className="mt-6 px-8 py-3 bg-red-700 hover:bg-red-900 transition-all duration-300 text-white font-semibold"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
