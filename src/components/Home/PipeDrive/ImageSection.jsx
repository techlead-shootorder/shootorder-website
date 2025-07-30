import React from "react";
import Image from "next/image";


const ImageSection = () => {

    return (
        <div className="relative h-[813px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
                src="/images/background/home page contact.webp"
                alt="ShootOrder Office"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium">Headquarters</p>
                    <p className="text-lg font-bold">Connecticut, USA</p>
                </div>
            </div>
        </div>
    )

}

export default ImageSection;