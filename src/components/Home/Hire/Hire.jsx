import { FaArrowRight, FaStar, FaUserTie, FaBriefcase } from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: <FaUserTie className="text-white" />,
    button: "Submit Request",
    title: "Submit Your Request",
    sub: "Tell us about your project needs and goals.",
  },
  {
    number: "02",
    icon: <FaBriefcase className="text-white" />,
    button: "Get Match",
    title: "Get Matched",
    sub: "We'll match you with the perfect service package.",
  },
  {
    number: "03",
    icon: <FaStar className="text-white" />,
    button: "Strategy",
    title: "Strategy & Proposal",
    sub: "Receive a customized strategy and proposal.",
  },
  {
    number: "04",
    icon: <FaArrowRight className="text-white" />,
    button: "Start Project",
    title: "Launch Project",
    sub: "Begin your journey to digital success.",
  },
];

export default function Hire() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Get Started With ShootOrder
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#f8f6ee] p-6 rounded-xl flex flex-col gap-4"
          >
            {/* Step Number */}
            <div className="text-4xl font-bold text-black">{step.number}</div>

            {/* Icon + Button Row */}
            <div className="flex items-center justify-start gap-2">
              <button className="bg-gray-200 text-sm px-4 py-1 rounded-full">
                {step.button}
              </button>
              <div className="bg-black rounded-full p-2">{step.icon}</div>
            </div>

            {/* Heading */}
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
