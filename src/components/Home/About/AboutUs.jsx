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
                ShootOrder - Digital Marketing Agency
              </h2>
            </div>

            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                ShootOrder is a leading full-service digital marketing agency
                helping businesses across the United States grow smarter and
                faster.
              </p>
              <p className="leading-relaxed">
                Trusted by over 300 businesses worldwide, we&apos;ve built a
                strong reputation for delivering real results through proven
                strategies in Content Marketing, SEO, PPC Advertising, and
                Social Media Marketing.
              </p>
              <p className="leading-relaxed">
                Our team has been instrumental in scaling numerous internet
                startups, helping them transform into industry leaders. With our
                growing presence, we’re continuing to expand our impact across
                the U.S., bringing global expertise with a local edge.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-6">
              <div className="space-y-2 border-1 border-gray-300 p-3 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-[#9a0c28]">12 +</h3>
                <p className="text-gray-800 font-medium">Years Of Experience</p>
              </div>

              <div className="space-y-2 border-1 border-gray-300 p-3 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-[#9a0c28]">2</h3>
                <p className="text-gray-800 font-medium">Major Locations</p>
              </div>
              <div className="space-y-2 border-1 border-gray-300 p-3 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-[#9a0c28]">300+</h3>
                <p className="text-gray-800 font-medium">Global Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
