'use client'
import React from 'react'
import { ChevronRight, Users, TrendingUp, Award, Eye } from 'lucide-react';

const Hero = () => {
  return (
    <div>
        <div className="relative bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9a0c28]/20 to-[#b91c47]/20"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="relative !max-w-7xl mx-auto px-4 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-red-200 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we&apos;ve transformed businesses across industries with innovative digital solutions
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-300">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="w-6 h-6 text-[#9a0c28]" />
                <span className="text-lg">300+ Clients</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-6 h-6 text-[#9a0c28]" />
                <span className="text-lg">92% Client Retention Rate</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-[#9a0c28]" />
                <span className="text-lg">300% Avg Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
