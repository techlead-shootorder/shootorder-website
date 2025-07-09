'use client'
import React from 'react';
import { ArrowDown, TrendingUp, Users, Award, Search, Link, Globe, PenTool } from 'lucide-react';
import Image from 'next/image';


const OrganicTrafficGrowth = () => {
    return (
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Organic Traffic Growth</h2>
            <div className="flex justify-center">
                <img
                    src="/images/CaseStudies/organic-traffic.webp"
                    alt="Organic Traffic"
                    className="max-w-full h-auto rounded-lg shadow-sm"
                />
            </div>
        </section>
    )
}

export default OrganicTrafficGrowth
