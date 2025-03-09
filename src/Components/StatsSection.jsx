const StatsSection = () => {
  return (
    <div className="w-full mx-auto flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full">
        <div className="bg-gray-600 flex flex-col lg:flex-row w-full">
          <div className="p-10 lg:p-20">
            <p className="px-2 py-2 flex items-center gap-2 font-bold text-[#dc3545]">
              <span className="w-6 h-[1px] bg-[#dc3545] inline-block"></span>
              Who We Are
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-white tracking-wide">
              It&apos;s time to dream big and discover your calling
            </h2>
            <p className="mt-3 text-white text-lg tracking-wide text-justify">
              Our values drive not only our culture and how we work with clients but also how we live our lives. We partner with our clients to achieve their goals and empower transformation.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740719423/career%20counselling/img-04_c6p2fa.png"
            className="w-full lg:w-auto h-80 object-cover"
          />
        </div>

        {/* Stats Section */}
        <div className="bg-gray-100 py-12 px-4 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Stat 1 */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-5xl font-bold text-gray-800">185+</h3>
              <p className="text-gray-900 text-lg font-medium mt-4 tracking-widest
">
                Most people are aware of exactly what their purpose is and who they are trying to coach.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-5xl font-bold text-gray-800">85%</h3>
              <p className="text-gray-900 text-lg font-medium mt-4 tracking-widest
">
                People achieve higher success rates with guided coaching.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-red-800  p-8 shadow-lg rounded-lg">
              <h3 className="text-5xl font-bold text-white">85M</h3>
              <p className="text-white text-lg font-medium mt-4 tracking-widest
">
                Coaching impacts millions by helping them achieve their dreams.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-auto">
        <img
          src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740719487/career%20counselling/img-02_aux2od.jpg"
          className="w-full lg:h-full object-cover"
        />
      </div>
    </div>
  );
};
export default StatsSection;
