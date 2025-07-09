'use client';
import React from 'react';
import { BarChart2, Settings, Share2, Search, Globe, Link } from 'lucide-react';

const approachData = [
  {
    icon: <BarChart2 className="text-white" size={20} />,
    title: 'Technical SEO Optimisation',
    description:
      'Following detailed consultations, we successfully convinced the client to revamp the website. The redesigned site is now SEO-friendly and user-centric, leading to enhanced performance, faster load times, and a more engaging user experience.',
    bg: 'bg-teal-400',
  },
  {
    icon: <Settings className="text-white" size={20} />,
    title: 'On-Page Enhancements',
    description:
      'We optimized the site architecture with targeted keywords, improved meta tags, headings, and body content, and implemented structured data to boost search engine visibility and click-through rates.',
    bg: 'bg-yellow-400',
  },
  {
    icon: <Share2 className="text-white" size={20} />,
    title: 'Off-Page SEO Strategies',
    description:
      'By securing high-quality backlinks from reputable sources, we strengthened the site’s Domain Authority, building trust and credibility in the eyes of search engines and users alike.',
    bg: 'bg-pink-400',
  },
];

const OurApproach = () => {
    const approachData = [
        {
            icon: <Search className="text-white" size={20} />,
            title: 'Technical SEO Optimisation',
            description:
                'Following detailed consultations, we successfully convinced the client to revamp the website. The redesigned site is now SEO-friendly and user-centric, leading to enhanced performance, faster load times, and a more engaging user experience.',
            bg: 'bg-[#9a0c28]',
        },
        {
            icon: <Globe className="text-white" size={20} />,
            title: 'On-Page Enhancements',
            description:
                'We optimized the site architecture with targeted keywords, improved meta tags, headings, and body content, and implemented structured data to boost search engine visibility and click-through rates.',
            bg: 'bg-[#9a0c28]',
        },
        {
            icon: <Link className="text-white" size={20} />,
            title: 'Off-Page SEO Strategies',
            description:
                "By securing high-quality backlinks from reputable sources, we strengthened the site's Domain Authority, building trust and credibility in the eyes of search engines and users alike",
            bg: 'bg-[#9a0c28]',
        },
    ];

    return (
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Approach</h2>
            <div className="space-y-6">
                {approachData.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className={`p-3 rounded-full ${item.bg} flex-shrink-0`}>
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurApproach;
