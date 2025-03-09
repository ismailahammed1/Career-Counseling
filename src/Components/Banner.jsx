/* eslint-disable react/prop-types */
const Banner = ({ title }) => {
  return (
    <div
      className="relative w-full h-60 md:h-72 lg:h-80 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dfn1s2ysa/image/upload/v1741241653/career%20counselling/title-01_wuh2e4.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative text-center text-white">
        <h2 className="text-xl md:text-xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default Banner;
