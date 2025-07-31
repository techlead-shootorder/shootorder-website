'use client';

import { Users, Rocket, DollarSign, Zap, MapPin } from 'lucide-react';

const plans = [
    {
        title: 'Product Manager',
        description:
            'Experienced professionals adept at overseeing product development from conception to launch, ensuring alignment with market needs and business objectives.',
        price: '$5000/month',
        rate: '$31/hr',
        idealFor: 'Companies seeking strategic leaders to drive product vision, manage cross-functional teams, and deliver products that resonate with customers.',
        roles: 'Product Owner, Technical Product Manager, SaaS Product Manager, Product Operations Manager',
        source: 'Product-based SaaS companies, tech startups, mid-size enterprises, and global tech consultancies',
        icon: Users,
    },
    {
        title: 'Product Marketer',
        description:
            'Specialists skilled in crafting compelling product narratives, executing go-to-market strategies, and driving product adoption through targeted marketing initiatives.',
        price: '$4500/month',
        rate: '$28/hr',
        idealFor: 'Organizations aiming to effectively position their products in the market, enhance brand awareness, and accelerate customer acquisition.',
        roles: 'GTM Specialist, Product Marketing Strategist, Product Communications Specialist, SaaS Product Marketer',
        source: 'Marketing agencies, SaaS startups, B2B tech companies, digital-first brands',
        icon: Rocket,
    },
    {
        title: 'Product Designer',
        description:
            'Creative designers proficient in user-centered design principles, responsible for developing intuitive and aesthetically pleasing product interfaces and experiences.',
        price: '$2500/month',
        rate: '$16/hr',
        idealFor: 'Teams focused on delivering exceptional user experiences through thoughtful design and seamless interaction.',
        roles: 'UX/UI Designer, Interaction Designer, Visual Designer, SaaS Product Designer, UX Researcher',
        source: 'Digital agencies, SaaS companies, e-commerce businesses, design studios, consumer tech startups',
        icon: DollarSign,
    },
    {
        title: 'Performance Marketer',
        description:
            'Experts in data-driven marketing strategies, adept at managing and optimizing paid campaigns to achieve measurable results and maximize ROI.',
        price: '$2500/month',
        rate: '$16/hr',
        idealFor: 'Businesses looking to scale their marketing efforts through targeted advertising and performance optimization.',
        roles: 'Paid Media Specialist, PPC Manager, Growth Marketer, Digital Advertising Specialist, Demand Generation Expert',
        source: 'Performance marketing agencies, SaaS companies, digital-first startups, B2B/B2C enterprises',
        icon: Zap,
    },
    {
        title: 'SEO Specialist',
        description:
            'Professionals with deep knowledge of search engine algorithms and optimization techniques, dedicated to improving organic search visibility and driving website traffic.',
        price: '$2500/month',
        rate: '$16/hr',
        idealFor: 'Companies aiming to enhance their online presence, increase search rankings, and attract quality leads through organic channels.',
        roles: 'SEO Analyst, Technical SEO Specialist, Organic Growth Marketer, SEO Content Strategist',
        source: 'Digital marketing agencies, SEO consultancies, tech startups, e-commerce brands, publishing platforms',
        icon: MapPin,
    },
];

export default function Pricing() {
    return (
        <section className="bg-white py-16">
            <div className="!max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-black mb-2">Marketers</h1>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {plans.map((plan, idx) => {
                        const IconComponent = plan.icon;
                        return (
                            <div
                                key={idx}
                                className="border border-dashed border-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col h-full bg-white"
                            >
                                <div className='flex flex-col p-4'>
                                    {/* Icon */}
                                    <div className="mt-4">
                                        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                                            <IconComponent className="w-8 h-8 text-[#9a0c28]" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="mb-4">
                                        <h3 className="font-medium text-lg leading-tight h-[2.5rem] flex items-center">
                                            {plan.title}
                                        </h3>
                                    </div>

                                    {/* Description - Fixed height */}
                                    <div className="mb-6">
                                        <p className="text-[14px] text-gray-600 leading-relaxed h-[8.8rem] overflow-hidden">
                                            {plan.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Pricing - This will now align across all cards */}
                                <div className="mb-6 text-center bg-[#9a0c28] p-4">
                                    <p className="text-sm text-gray-200 mb-2">
                                        Starting at{' '}
                                        <span className="bg-gray-200 font-medium px-2 py-1 rounded-full text-xs text-black">
                                            {plan.rate}
                                        </span>
                                    </p>
                                    <p className="text-2xl font-bold text-gray-200">{plan.price}</p>
                                </div>

                                <div className='p-4 flex-grow flex flex-col'>
                                    {/* Details */}
                                    <div className="flex-grow space-y-4 mb-6">
                                        <div className="text-sm">
                                            <p className="font-semibold text-[#9a0c28] mb-2 text-xs uppercase tracking-wide">
                                                IDEAL FOR
                                            </p>
                                            <p className="text-gray-700 leading-relaxed h-[4.5rem] overflow-hidden">
                                                {plan.idealFor}
                                            </p>
                                        </div>

                                        <div className="text-sm">
                                            <p className="font-semibold text-[#9a0c28] mb-2 text-xs uppercase tracking-wide">
                                                COMMON ROLES
                                            </p>
                                            <p className="text-gray-700 leading-relaxed h-[3rem] overflow-hidden">
                                                {plan.roles}
                                            </p>
                                        </div>

                                        <div className="text-sm">
                                            <p className="font-semibold text-[#9a0c28] mb-2 text-xs uppercase tracking-wide">
                                                TALENT SOURCE
                                            </p>
                                            <p className="text-gray-700 leading-relaxed h-[3rem] overflow-hidden">
                                                {plan.source}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <button className="w-full bg-black text-white text-sm font-semibold py-3 rounded-lg hover:bg-[#9a0c28] transition-colors duration-300 mt-auto">
                                        Hire Now
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}