'use client'
import React from 'react'
import { ArrowDown, TrendingUp, Users, Award, Search, Link, Globe, PenTool } from 'lucide-react';

const BusinessChallenge = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Business Challenge:</h2>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#9a0c28]">
                    <div className="w-10 h-10 bg-[#9a0c28] rounded-full flex items-center justify-center flex-shrink-0">
                        <Search className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Low Visibility In Organic Search Results</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#9a0c28]">
                    <div className="w-10 h-10 bg-[#9a0c28] rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Limited Organic Website Traffic</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#9a0c28]">
                    <div className="w-10 h-10 bg-[#9a0c28] rounded-full flex items-center justify-center flex-shrink-0">
                        <PenTool className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Inconsistent Content And Technical Seo Issues</span>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#9a0c28]">
                    <div className="w-10 h-10 bg-[#9a0c28] rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Minimal Presence In Local Seo Markets</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#9a0c28]">
                    <div className="w-10 h-10 bg-[#9a0c28] rounded-full flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Underperforming Website Speed And UX</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#9a0c28]">
                    <div className="w-10 h-10 bg-[#9a0c28] rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Inadequate Lead Generation From Digital Channels</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BusinessChallenge
