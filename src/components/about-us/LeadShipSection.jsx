import Image from "next/image";
import React from "react";

const TestimonialSection = () => {
    return (
        <section className=" bg-gray-100">
            <div className="relative !max-w-7xl mx-auto grid grid-cols-2 py-16 px-4 md:px-16 ">
                {/* Content Row */}
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-4xl font-bold text-black mb-6">Leadership That Drives Innovation</h1>
                    <h2 className="text-6xl font-bold text-black ">"</h2>
                    <p className="text-base text-gray-800 mb-2">
                        Sushma Maganti helps businesses build custom AI solutions by finding the right people for the right roles at the right time.
                        </p> 
                         <p className="text-base text-gray-800 mb-2">
                        She brings together AI solutions and digital marketing to help companies grow faster, work better, and get real results.
                        </p>
                        <p className="text-base text-gray-800 mb-2 ">
                        With her strong focus on talent, right method and clear direction, Sushma makes it easier for teams to scale and succeed in today’s digital world.
                    </p>
                    <div className=" w-full flex items-center justify-end text-7xl font-bold text-black mt-2">
                        "
                    </div>
                </div>
                {/* Image on Right */}
                <div className="w-[450px] h-[450px] rounded-full ml-auto">
                    <Image
                        src="/images/about-us/Sushma.webp"
                        alt="Gray Circle"
                        width={450}
                        height={450}
                        className="rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;