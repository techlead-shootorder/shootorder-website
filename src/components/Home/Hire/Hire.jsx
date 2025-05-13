import { FaArrowRight, FaStar, FaUserTie, FaBriefcase } from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: <FaUserTie className="text-white" />,
    button: "Submit Request",
    title: "Tell Us What You Need",
    sub: "Fill out a quick form about your project.",
  },
  {
    number: "02",
    icon: <FaBriefcase className="text-white" />,
    button: "Get Matched",
    title: "We Find the Right Talent",
    sub: "We match you with the best fit from our network.",
  },
  {
    number: "03",
    icon: <FaStar className="text-white" />,
    button: "Interview",
    title: "You Evaluate",
    sub: "Interview candidates to ensure a perfect match.",
  },
  {
    number: "04",
    icon: <FaArrowRight className="text-white" />,
    button: "Start Work",
    title: "Kick Off the Project",
    sub: "Begin working with your new team member.",
  },
];

export default function Hire() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Hire in 4 Easy Steps
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
