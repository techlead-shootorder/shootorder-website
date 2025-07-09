'use client'
import React from 'react';
import { ArrowDown, TrendingUp, Users, Award, Search, Link, Globe, PenTool } from 'lucide-react';


const OrganicGrowth = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Organic Growth (Clicks & Impressions)</h2>
        <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#9a0c28] text-white rounded-lg p-6 text-center">
                <h3 className="text-xs font-semibold uppercase tracking-wide mb-2">Total clicks</h3>
                <p className="text-3xl font-bold mb-2">50.9K</p>
                <p className="text-sm opacity-90">Last 6 months</p>
                <div className="mt-4 pt-4 border-t border-red-400">
                    <p className="text-2xl font-bold">40.7K</p>
                    <p className="text-sm opacity-90">Previous 6 months</p>
                </div>
            </div>

            <div className="bg-[#9a0c28] text-white rounded-lg p-6 text-center">
                <h3 className="text-xs font-semibold uppercase tracking-wide mb-2">Total Impressions</h3>
                <p className="text-3xl font-bold mb-2">1.02M</p>
                <p className="text-sm opacity-90">Last 6 months</p>
                <div className="mt-4 pt-4 border-t border-red-400">
                    <p className="text-2xl font-bold">520K</p>
                    <p className="text-sm opacity-90">Previous 6 months</p>
                </div>
            </div>

            <div className="bg-[#9a0c28] text-white rounded-lg p-6 text-center">
                <h3 className="text-xs font-semibold uppercase tracking-wide mb-2">Average CTR</h3>
                <p className="text-3xl font-bold mb-2">5%</p>
                <p className="text-sm opacity-90">Last 6 months</p>
                <div className="mt-4 pt-4 border-t border-red-400">
                    <p className="text-2xl font-bold">7.8%</p>
                    <p className="text-sm opacity-90">Previous 6 months</p>
                </div>
            </div>

            <div className="bg-[#9a0c28] text-white rounded-lg p-6 text-center">
                <h3 className="text-xs font-semibold uppercase tracking-wide mb-2">Average position</h3>
                <p className="text-3xl font-bold mb-2">23.1</p>
                <p className="text-sm opacity-90">Last 6 months</p>
                <div className="mt-4 pt-4 border-t border-red-400">
                    <p className="text-2xl font-bold">17.6</p>
                    <p className="text-sm opacity-90">Previous 6 months</p>
                </div>
            </div>
        </div>
    </section>
  )
}


export default OrganicGrowth
