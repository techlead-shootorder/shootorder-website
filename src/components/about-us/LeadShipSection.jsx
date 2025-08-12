import Image from "next/image";
import React from "react";

const TestimonialSection = () => {
    return (
        <section className="bg-gray-100">
            <div className="relative !max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 py-0 sm:py-16 px-4 md:px-16">
                {/* Image - First on mobile, second on desktop */}
                <div className="flex justify-center md:order-2 mb-8 md:mb-0">
                    <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full md:ml-auto">
                        <Image
                            src="/images/about-us/Sushma.webp"
                            alt="Sushma Maganti"
                            width={450}
                            height={450}
                            className="rounded-full w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content - Second on mobile, first on desktop */}
                <div className="flex flex-col justify-center md:order-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-black text-center mb-4">Sushma Maganti</h1>
                    <h2 className="text-lg md:text-2xl font-bold text-gray-800 text-center mb-8">Building the Future of Scalable, AI-Driven Success</h2>
                    <h2 className="text-4xl md:text-6xl font-bold text-black">"</h2>
                  
                    <p className="text-sm md:text-base text-gray-800 mb-2">
                        Sushma Maganti helps businesses build custom AI solutions by finding the right people for the right roles at the right time. She brings together AI solutions and digital marketing to help companies grow faster, work better, and get real results. With her strong focus on talent, right method and clear direction, Sushma makes it easier for teams to scale and succeed in today's digital world.
                    </p>
                        
                    <div className="w-full flex items-center justify-end text-5xl md:text-7xl font-bold text-black mt-2">
                        "
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;