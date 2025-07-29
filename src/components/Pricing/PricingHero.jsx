// components/Pricing/PricingHero.jsx
'use client'
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const PricingHero = () => {
  const router = useRouter();
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16  lg:py-20">
      <div className="!max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pricing That Matches Your{' '}
            <span className="text-[#9a0c28]">Business Needs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Make with a plus plan (5% off) every request. Your hiring goal depends on your performance, whether you need an
            improved team or big technology. A flexible, totally scalable or an in-house team.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Find top planning with the most comprehensive services, and see if that if you need the right balance. Lorem
            first top planning with the most comprehensive services, and see if that if you need the right balance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
            className="bg-[#9a0c28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7a0a20] transition-colors duration-300 inline-flex items-center"
            onClick={()=> router.push("/contact-us")}
            >

              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            {/* <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-[#9a0c28] hover:text-[#9a0c28] transition-colors duration-300">
              View All Services
            </button> */}
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              No Setup Fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Cancel Anytime
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              24/7 Support
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Money Back Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;