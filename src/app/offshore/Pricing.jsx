'use client';

import { Users, Rocket, DollarSign, Zap, MapPin } from 'lucide-react';

const plans = [
    {
        title: 'Product Manager',
        description:
            'Our experienced product managers manage the entire product development lifecycle from concept to launch, ensuring every step aligns with your business goals and market expectations.',
        price: '$5000/month',
        rate: '$31/hr',
        idealFor: 'Companies looking for strategic minds to shape product vision, lead cross-functional teams, and launch customer-focused solutions. ',
        roles: 'Product Owner, Technical Product Manager, SaaS Product Manager, Product Operations Manager & more. ',
        source: 'SaaS companies, tech startups, and mid-sized product firms',
        icon: Users,
    },
    {
        title: 'Product Marketer',
        description:
            'Experts in building strong product stories, launching go-to-market plans, and boosting adoption through focused marketing strategies',
        price: '$4500/month',
        rate: '$28/hr',
        idealFor: 'Companies looking to position products effectively, grow brand visibility, and speed up customer acquisition. .',
        roles: 'GTM Specialist, Product Marketing Strategist, Product Communications Specialist, SaaS Product Marketer & more.',
        source: 'SaaS startups, B2B tech firms, and marketing agencies',
        icon: Rocket,
    },
    {
        title: 'Product Designer',
        description:
            'Creative designers who craft intuitive, user-friendly experiences by blending design aesthetics with functionality and strong UX principles.',
        price: '$2500/month',
        rate: '$16/hr',
        idealFor: 'Teams focused on building digital products that are not just usable, but delightful, through thoughtful design, strong UX principles, and consistent visual language. ',
        roles: 'UX/UI Designer, Interaction Designer, Visual Designer, SaaS Product Designer, UX Researcher & more. ',
        source: 'SaaS companies, digital agencies, e-commerce brands, and design-first tech startups',
        icon: DollarSign,
    },
    {
        title: 'Performance Marketer',
        description:
            'Data-driven marketers focused on measurable growth through targeted campaigns, ROI optimization, and continuous performance tracking across digital channels.',
        price: '$2500/month',
        rate: '$16/hr',
        idealFor: 'Companies looking to scale user acquisition, improve conversion rates, and maximize return on ad spend through performance-based marketing. ',
        roles: 'Growth Marketer, Paid Media Specialist, PPC Manager, Performance Marketing Manager & more.',
        source: 'DTC brands, performance marketing agencies, SaaS companies, and growth-stage startups ',
        icon: Zap,
    },
    {
        title: 'SEO Specialist',
        description:
            'Experts in optimizing digital content and websites to boost organic visibility, search rankings, and long-term traffic growth. ',
        price: '$2500/month',
        rate: '$16/hr',
        idealFor: 'Businesses aiming to increase search engine presence, attract high-intent traffic, and build a sustainable inbound marketing channel. ',
        roles: 'SEO Analyst, SEO Manager, Technical SEO Specialist, Content SEO Strategist, On-Page Optimization Expert & more. ',
        source: 'SEO agencies, content-driven startups, e-commerce platforms, and digital marketing firms',
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