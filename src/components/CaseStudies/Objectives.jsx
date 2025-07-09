'use client'
import React from 'react'
import { ArrowDown, TrendingUp, Users, Award, Search, Link, Globe, PenTool } from 'lucide-react';


const Objectives = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">The Objective</h2>
        <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#9a0c28] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Increase Organic Search Visibility
                </h3>
                <p className="text-gray-600 text-sm">
                    Boost Visibility for Resort searches in Hyderabad
                </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#9a0c28] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Boost Organic Lead Generation
                </h3>
                <p className="text-gray-600 text-sm">
                    Increase Footfall to the Resort Organically
                </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#9a0c28] rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Improve Keyword Rankings
                </h3>
                <p className="text-gray-600 text-sm">
                    Rank higher for resort-related keywords in Hyderabad
                </p>
            </div>
        </div>
    </section>
  )
}

export default Objectives
