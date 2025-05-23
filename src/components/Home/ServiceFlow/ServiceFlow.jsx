import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServiceFlow() {
  const steps = [
    {
      title: "ATTRACT",
      desc: "We employ cutting-edge strategies to attract the right audience to....",
    },
    {
      title: "ENGAGE",
      desc: "We understand the importance of captivating your audience and sparking..",
    },
    {
      title: "DELIGHT",
      desc: "Retaining customers and fostering loyalty is crucial for long-term success..",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-2xl md:text-3xl w-full lg:w-1/2 font-medium !text-center lg:text-left mb-8 ">
          A leading <span className="font-bold">full service digital</span>
          <br />
          marketing agency in India
        </h2>
        <div className=" flex flex-col lg:flex-row items-start justify-between gap-24">
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/services/service-flow.png" // Put your dummy image here in /public folder
                alt="Service Flow"
                width={700}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side List */}
          <div className="w-full lg:w-1/2 space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 border rounded-md hover:shadow-md transition"
              >
                <div className="flex items-center justify-center border rounded-full w-10 h-10 min-w-[40px]">
                  <ArrowRight size={18} />
                </div>
                <div>
                  <h4 className="font-bold">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button className="mt-8 px-5 py-2 rounded-full block mx-auto " variant="black">
          Read more
        </Button>
      </div>
    </section>
  );
}
