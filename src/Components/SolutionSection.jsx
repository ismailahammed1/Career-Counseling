import { FaArrowRight } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";

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
      icon: <GiNetworkBars />,
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
      icon: <TbTargetArrow />,
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
    <div className="w-11/12 mx-auto  py-12 ">
      {/* Title Section */}
      <div className="flex justify-between mb-8 max-w-7xl mx-auto">
        <div>
          <div className="text-red-600 uppercase font-semibold tracking-widest  flex items-center px-2 gap-2">
            <span className="w-10 h-[1px] bg-red-600 inline-block"></span>

            <h1 className="text-lg">WHY CHOOSE US</h1>
          </div>
          <h2 className="text-2xl lg:text-4xl font-bold mt-3">
            A solution is what Particular
            <br className="hidden md:block" /> People Crave Evolving
          </h2>
        </div>
        {/* Contact Us Button */}
        <button className="btn border-gray-800 px-4 flex items-center gap-2 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 group text-lg">
          <span className="w-6 h-[1px] bg-gray-800 group-hover:bg-white inline-block"></span>
          CONTACT US
        </button>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center  w-full mx-auto ">
        {data.map((item) => (
          <div
            key={item.id}
            className="group p-2 border  shadow-md transition-all duration-300 hover:bg-gray-900 sm:w-full md:w-[calc(50%-1.5rem)] lg:w-96"
          >
            {/* Icon & Title */}
            <p className="text-2xl font-bold text-gray-300 text-end group-hover:text-white">
              0{item.id}
            </p>
            <div className="flex flex-col gap-3 mb-4 p-6">
              <span className="text-4xl font-bold group-hover:text-red-500">
                {item.icon}
              </span>
              <h3 className="text-4xl font-bold group-hover:text-white">
                {item.title}
              </h3>
            </div>

            {/* List Items */}
            <ul className="mb-4 space-y-2 p-5">
              {item.points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-lg font-medium group-hover:text-white"
                >
                  <span className="text-red-500 text-2xl">•</span> {point}
                </li>
              ))}
            </ul>

            {/* Arrow Button */}
            <button className="flex items-center gap-2 text-gray-500 font-bold p-5 group-hover:text-white">
              <FaArrowRight className="group-hover:text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SolutionSection;
