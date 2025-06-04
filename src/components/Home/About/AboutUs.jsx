import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/shootorder-digital-marketing-agency.jpg"
              alt="ShootOrder Office"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium">Headquarters</p>
                <p className="text-lg font-bold">Hyderabad, India</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h4 className="text-[#9a0c28] font-medium uppercase tracking-wider">
                About Us
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Leading Digital Marketing Agency in India
              </h2>
            </div>

            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                ShootOrder stands as the forefront leader in providing
                comprehensive digital marketing solutions in Hyderabad, India.
                Renowned as a premier agency, we have garnered a reputation for
                delivering exceptional results to our extensive client base of
                over 300 businesses worldwide.
              </p>
              <p className="leading-relaxed">
                Our unwavering commitment to excellence in services such as
                Content Marketing, SEO, PPC Advertising, and Social Media has
                firmly established us among the top-ranking digital marketing
                companies.
              </p>
              <p className="leading-relaxed">
                We take pride in being the driving force behind the remarkable
                success stories of numerous internet start-ups, contributing to
                their growth and triumph. With our branch office strategically
                located in Noida (Delhi NCR), we are actively expanding our
                reach across the entire nation.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-6">
              <div className="space-y-2 border-1 border-gray-300 p-3 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-[#9a0c28]">300+</h3>
                <p className="text-gray-800 font-medium">Global Clients</p>
              </div>
              <div className="space-y-2 border-1 border-gray-300 p-3 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-[#9a0c28]">2</h3>
                <p className="text-gray-800 font-medium">Major Locations</p>
              </div>
              <div className="space-y-2 border-1 border-gray-300 p-3 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-[#9a0c28]">12 +</h3>
                <p className="text-gray-800 font-medium">Years Of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
