'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  'Are these fixed monthly fees?',
  'What exactly is included in the monthly rate?',
  'Is this a one-time fee or recurring?',
  'What\'s included in the contract management fee?',
  'What’s the minimum commitment period?',
  'What happens if I\'m not satisfied with the talent?',
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#9a0c28] py-16 px-4">
      <div className="!max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-200">
          Frequently Asked <span className="font-bold">Questions</span>
        </h2>
        <div className="bg-gray-200 rounded-3xl shadow-sm p-4 md:p-6 space-y-4">
          {faqs.map((question, index) => (
            <div key={index} className="border border-gray-400 rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left p-4 md:p-5 text-base md:text-lg font-medium text-black focus:outline-none"
              >
                {question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm md:text-base">
                  {/* Replace this with real answer text */}
                  This is a sample answer for the question. You can replace this with real content as needed.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
