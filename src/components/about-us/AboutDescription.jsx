import React from 'react';

const AboutDescription = () => {
  return (
    <div className="relative !max-w-7xl mx-auto pt-16 pb-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-16">
        {/* Left Image Section */}
        <div className="flex justify-center">
          <img
            src="/images/about-us/About SO.webp"
            alt="About ShootOrder"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Right Text Content */}
        <div>
          <h2 className="text-center md:text-left font-bold text-4xl mb-4">
            About ShootOrder
          </h2>
          <div className="space-y-4 text-gray-600">
            <p className='font-semibold'>
              ShootOrder is recognized by Google as a Premier Partner, ranking
              among the top 3% of digital marketing agencies. Founded by digital
              marketing expert Rajat Jain, we have established a strong reputation
              in performance-driven digital marketing, with a growing international
              presence.
            </p>

            <p>
              With over 13 years of experience and a portfolio of 300+ global
              brands, ShootOrder delivers impactful solutions across industries
              such as e-commerce, healthcare, education, automobile, real estate,
              and lifestyle.
            </p>

            <p>
              Powered by a 50+ member in-house team, we blend creativity with data
              to drive measurable ROI across every campaign. With multiple
              recognitions from Clutch and a 92% client retention rate, ShootOrder
              has been featured in top media like YourStory, Housing.com, and
              BuiltIn.com, cementing its position as a trusted digital growth
              partner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
