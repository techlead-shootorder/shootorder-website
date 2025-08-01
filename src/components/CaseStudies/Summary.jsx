'use client';
import React from 'react';

const Summary = () => {
    return (
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Summary</h2>
            <p className="text-gray-700 leading-relaxed text-base">
                8 Views helped ShootOrder Resorts achieve an{' '}
                <span className="font-semibold text-[#9a0c28]">83% increase in organic traffic</span>,{' '}
                <span className="font-semibold text-[#9a0c28]">117% growth in engaged sessions</span>, and{' '}
                <span className="font-semibold text-[#9a0c28]">₹24.5 lakhs</span> in revenue through a full
                website revamp, targeted SEO, and content strategies. Top keywords like{' '}
                <span className="italic text-gray-800">"day outing resorts in Hyderabad"</span> now rank in the top 3,
                driving more direct bookings and online visibility.
            </p>
        </section>
    );
};

export default Summary;
