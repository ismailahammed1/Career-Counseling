import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Aos from "aos";
import "aos/dist/aos.css";

const HeaderSlider = () => {
  const [aosKey, setAosKey] = useState(0); // Force AOS re-render

  useEffect(() => {
    Aos.init({ duration: 1200, easing: "ease-in-out", once: false });
  }, []);

  const slides = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740464840/career%20counselling/woman-5678999_1280_rebtzb.jpg",
      title: "I can help you create positive & permanent changes in your life.",
      subtitle: "---- Easy Solution For",
      buttonText: "GET A QUOTE",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740464856/career%20counselling/pexels-august-de-richelieu-4427505_tv1m1h.jpg",
      title: "I can help you create positive & permanent changes in your life.",
      subtitle: "---- Easy Solution For",
      buttonText: "GET A QUOTE",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740464839/career%20counselling/businessman-1492563_1920_t7psj2.jpg",
      title: "Unlock your potential with professional coaching.",
      subtitle: "----- Expert Guidance",
      buttonText: "GET STARTED",
    },
  ];

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
          setAosKey((prev) => prev + 1); // Update key to re-render animations
          Aos.refreshHard(); // Ensure animations refresh properly
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="absolute w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute bg-black opacity-40 inset-0"></div>
              {/* Animated Content */}
              <div
                key={aosKey} // Force re-render for animations
                data-aos="zoom-in"
                className="absolute right-10 md:right-20 sm:left-1/2 sm:transform sm:-translate-x-1/2 top-1/2 transform -translate-y-1/2 bg-white opacity-90 
             sm:w-11/12 sm:h-auto md:w-3/4 md:h-[250px] lg:w-96 lg:h-72 
             p-4 sm:p-5 md:p-6 text-center max-w-xl shadow-lg"
              >
                <p
                  data-aos="fade-right"
                  className="uppercase text-xs sm:text-sm tracking-widest text-red-600 font-semibold text-left"
                >
                  {slide.subtitle}
                </p>
                <h1
                  data-aos="fade-left"
                  className="text-2xl sm:text-2xl md:text-3xl font-bold leading-tight mt-2 sm:mt-4"
                >
                  {slide.title}
                </h1>
                <button
                  data-aos="fade-up"
                  className="mt-4 sm:mt-6 px-5 sm:px-6 md:px-8 py-2 sm:py-3 bg-red-700 hover:bg-red-900 transition-all duration-600 text-white font-semibold"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
