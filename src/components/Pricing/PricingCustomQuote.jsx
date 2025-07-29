'use client'
import React from 'react'
import { Phone, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const PricingCustomQuote = () => {
    const router = useRouter()
    return (

        <div className="bg-gradient-to-r from-[#9a0c28] to-[#b91c3c] rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
            </div>

            <div className="relative max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                        <Phone className="w-10 h-10 text-white" />
                    </div>
                </div>
                <h3 className="text-4xl font-bold mb-6">
                    Need a Custom Strategy?
                </h3>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                    Every business is unique, and so should be your marketing approach. Book a free 30-minute
                    strategy consultation to get a personalized quote tailored to your specific goals, budget, and timeline.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button 
                    className="bg-white text-[#9a0c28] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 cursor-pointer transition-all duration-300 inline-flex items-center transform hover:scale-105"
                    onClick={()=> router.push('/contact-us')}
                    >
                        Book Free Consultation
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    <p className="text-sm opacity-75">
                        ⚡ 30-min call • No commitment • Custom pricing
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PricingCustomQuote
