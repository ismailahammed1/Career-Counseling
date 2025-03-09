import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

const testimonials = [
  {
    rating: 4,
    text: "They spend over 50% of our waking life at work. Devoting that amount of time to a career that brings you challenge, growth and fulfillment is critical life.",
    name: "Andrew Jackson",
    title: "ADVISER",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    rating: 4,
    text: "They spend over 50% of our waking life at work. Devoting that amount of time to a career that brings you challenge, growth and fulfillment is critical life.",
    name: "Amanda Pryor",
    title: "BERKELEY, CA",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    rating: 4,
    text: "They spend over 50% of our waking life at work. Devoting that amount of time to a career that brings you challenge, growth and fulfillment is critical life.",
    name: "Rick Jason",
    title: "ADVISER",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    rating: 5,
    text: "They spend over 50% of our waking life at work. Devoting that amount of time to a career that brings you challenge, growth and fulfillment is critical life.",
    name: "Striven Smith",
    title: "CEO OF LYPPRO",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col md:flex-row w-full  md:h-[600px]">
      {/* Left Image */}
      <div className="w-full md:w-1/2 h-full">
        <img
          src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740719633/career%20counselling/img-03_q3qvka.jpg"
          alt="career counselling"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center bg-[#101820] text-white py-8 px-6">
        <h2 className="text-red-500 text-sm uppercase text-center">Our Clients</h2>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Satisfied Users Over The Globe!
        </h1>
        <p className="text-sm max-w-2xl mx-auto text-center mb-8">
          Our values drive not only our culture and how we work with clients but also how we live our lives. We partner with our clients.
        </p>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper w-full"
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#1B2733] p-4 md:p-6 rounded-lg shadow-md h-full">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-red-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-xs md:text-sm mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-xs md:text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
