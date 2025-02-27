import { FaArrowRight } from "react-icons/fa";

const SolutionSection = () => {
  const data = [
    {
      id: 1,
      title: "Deliver Effective Presentations",
      points: [
        "E-commerce strategy",
        "Custom design",
        "Development Skill",
        "Business intelligence",
      ],
      icon: "💡",
      isActive: false,
    },
    {
      id: 2,
      title: "Inspire & grow Personal Success",
      points: [
        "E-commerce strategy",
        "Custom design",
        "Development Skill",
        "Business intelligence",
      ],
      icon: "🚀",
      isActive: false,
    },
    {
      id: 3,
      title: "Communicate Impact Present",
      points: [
        "E-commerce strategy",
        "Custom design",
        "Development Skill",
        "Business intelligence",
      ],
      icon: "💼",
      isActive: false, // Active card (Highlighted)
    },
    {
      id: 4,
      title: "Face to Face Coaching",
      points: [
        "E-commerce strategy",
        "Custom design",
        "Development Skill",
        "Business intelligence",
      ],
      icon: "👥",
      isActive: false,
    },
  ];
  return (
    <div className="w-full px-4 lg:px-20 py-12 ">
      {/* Title Section */}
      <div className="flex justify-between mb-8">
        <div>
          <p className="text-red-600 uppercase font-semibold tracking-widest inline-block border-b-2 border-red-600 px-2">
            WHY CHOOSE US
          </p>
          <h2 className="text-2xl lg:text-4xl font-bold mt-3">
            A solution is what Particular
            <br className="hidden md:block" /> People Crave Evolving
          </h2>
        </div>
        {/* Contact Us Button */}
        <button className="btn border-gray-800 px-4  flex items-center gap-2 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300">
        <span className="w-4 h-[1px] hover:bg-red-800 bg-white inline-block"></span>
          CONTACT US
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid   md:grid-cols-2 lg:grid-cols-4 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-2 border  shadow-md transition-all duration-300 hover:bg-gray-900 hover:text-white  "  >
            {/* Icon & Title */}
            <p className="text-2xl font-bold text-gray-200 text-end">{item.id}</p>
            <div className="flex  flex-col gap-3 mb-4 p-6 ">
              <span className="text-4xl font-bold ">{item.icon}</span>
              <h3 className="text-4xl font-bold ">{item.title}</h3>
            </div>

            {/* List Items */}
            <ul className="mb-4 space-y-2 px-5">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2 text-lg font-medium">
                  <span className="text-red-500 text-2xl ">•</span> {point}
                </li>
              ))}
            </ul>

            {/* Arrow Button */}
            <button className="flex items-center  gap-2 text-gray-500  font-bold p-5" >
              <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SolutionSection;
