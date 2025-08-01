'use client'

import React from 'react';
import { ArrowDown, TrendingUp, Users, Award, Search, Link, Globe, PenTool } from 'lucide-react';

const StickySidebar = () => {
  return (
    <div className="sticky w-full lg:w-1/4">
      <div className="lg:top-4 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="text-center mb-6 pb-4 border-b border-gray-100">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Case Study
          </h3>
          <h2 className="text-xl font-bold text-gray-900">
            ShootOrder - SEO
          </h2>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Organic Leads Generated
            </h4>
            <p className="text-3xl font-bold text-[#9a0c28]">1900+</p>
          </div>

          <div className="text-center">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Revenue Generated
            </h4>
            <p className="text-3xl font-bold text-[#9a0c28]">245 Lakhs</p>
          </div>

          <div className="text-center">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Reduced Bounce Rate
            </h4>
            <p className="text-3xl font-bold text-[#9a0c28] flex items-center justify-center">
              <ArrowDown className="w-6 h-6 mr-2" />
              19.2%
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Services Provided
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-8 h-8 bg-[#9a0c28] rounded-full flex items-center justify-center">
                  <Search className="w-4 h-4 text-white" />
                </div>
                <span>Search Engine Optimisation</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-8 h-8 bg-[#9a0c28] rounded-full flex items-center justify-center">
                  <Link className="w-4 h-4 text-white" />
                </div>
                <span>Link Building</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-8 h-8 bg-[#9a0c28] rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <span>Web Development</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-8 h-8 bg-[#9a0c28] rounded-full flex items-center justify-center">
                  <PenTool className="w-4 h-4 text-white" />
                </div>
                <span>Content Marketing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickySidebar;