import { BsImage } from "react-icons/bs";

export default function AboutUs() {
  return (
    <section className="w-full  py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a dynamic digital marketing agency committed to delivering exceptional results
            through innovative strategies and a passionate team. Our mission is to help businesses
            grow by enhancing their online presence and driving measurable outcomes.
          </p>
        </div>

        {/* Dummy Image Placeholder */}
        <div className="w-full h-full">
          <div className="w-full h-80 md:h-full rounded-xl bg-gray-300 flex items-center justify-center shadow-inner">
            <BsImage className="w-16 h-16 text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
