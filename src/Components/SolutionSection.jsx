import { FaArrowRight } from "react-icons/fa";


const SolutionSection = () => {
    const data = [
        {
          id: 1,
          title: "Deliver Effective Presentations",
          points: ["E-commerce strategy", "Custom design", "Development Skill", "Business intelligence"],
          icon: "💡",
          isActive: false,
        },
        {
          id: 2,
          title: "Inspire & grow Personal Success",
          points: ["E-commerce strategy", "Custom design", "Development Skill", "Business intelligence"],
          icon: "🚀",
          isActive: false,
        },
        {
          id: 3,
          title: "Communicate Impact Present",
          points: ["E-commerce strategy", "Custom design", "Development Skill", "Business intelligence"],
          icon: "💼",
          isActive: true, // Active card (Highlighted)
        },
        {
          id: 4,
          title: "Face to Face Coaching",
          points: ["E-commerce strategy", "Custom design", "Development Skill", "Business intelligence"],
          icon: "👥",
          isActive: false,
        },
      ];
  return (
    <div className="w-full px-4 lg:px-20 py-12">
    {/* Title Section */}
    <div className="text-start mb-8">
      <p className="text-red-600 uppercase font-semibold tracking-widest inline-block border-b-2 border-red-600 px-2">
        WHY CHOOSE US
      </p>
      <h2 className="text-2xl lg:text-4xl font-bold mt-3">
        A solution is what Particular<br className="hidden md:block" />  People Crave Evolving
      </h2>
    </div>

    {/* Cards Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className={`p-6 border rounded-lg shadow-md transition-all duration-300 
            ${item.isActive ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
          `}
        >
          {/* Icon & Title */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{item.icon}</span>
            <h3 className="text-lg font-bold">{item.title}</h3>
          </div>

          {/* List Items */}
          <ul className="mb-4 space-y-2">
            {item.points.map((point, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-red-500">•</span> {point}
              </li>
            ))}
          </ul>

          {/* Arrow Button */}
          <button className="flex items-center gap-2 text-red-500 font-bold">
            <FaArrowRight />
          </button>
        </div>
      ))}
    </div>

    {/* Contact Us Button */}
    <div className="text-center mt-8">
      <button className="btn btn-outline btn-primary px-8 py-2">Contact Us</button>
    </div>
  </div>
);
};
export default SolutionSection;