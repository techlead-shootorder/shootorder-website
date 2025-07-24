// components/Pricing/PricingFAQ.jsx
'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Are there fixed monthly fees?",
      answer: "Yes, there are fixed monthly fees. However, the pricing is structured to be transparent so individuals or teams know exactly what budgets to allocate in response to budgeted spend and plans for the year. Pricing is all-inclusive. Most of our pricing includes or requires plans so there is no need for hidden costs."
    },
    {
      question: "What exactly is included in the monthly plan?",
      answer: "Our monthly plans include comprehensive digital marketing services such as SEO optimization, content creation, social media management, analytics reporting, and dedicated account management. Specific inclusions vary by plan tier."
    },
    {
      question: "Is this a one-time fee or recurring?",
      answer: "Our pricing is based on monthly recurring subscriptions. This allows for consistent service delivery and ongoing optimization of your marketing campaigns. You can cancel anytime with 30 days notice."
    },
    {
      question: "What's included in the content management fee?",
      answer: "Content management includes content strategy development, creation of blog posts, social media content, graphic design, content calendar planning, and performance tracking across all your digital channels."
    },
    {
      question: "What's the minimum commitment period?",
      answer: "We offer flexible commitment options. While we recommend a minimum of 3 months to see meaningful results, you can start with a month-to-month plan and upgrade as needed."
    },
    {
      question: "What happens if I'm not satisfied with the talent?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with our services within the first month, we'll work to address your concerns or provide a full refund."
    },
    {
      question: "How quickly can we get a talent onboarded?",
      answer: "Typically, we can have your dedicated marketing team onboarded within 3-5 business days. This includes initial strategy sessions, account setup, and campaign planning."
    },
    {
      question: "What timezone coverage can we expect?",
      answer: "We provide coverage across multiple timezones with teams in North America, Europe, and Asia-Pacific regions. Your dedicated account manager will work within your preferred business hours."
    },
    {
      question: "Are there any additional costs?",
      answer: "Our pricing is all-inclusive for the services mentioned in each plan. The only additional costs would be advertising spend (like Google Ads or Facebook Ads budget) which goes directly to the platforms."
    },
    {
      question: "How does your pricing compare to alternatives?",
      answer: "Our pricing is competitive and transparent compared to traditional agencies. You get dedicated resources, faster turnaround times, and better ROI without the overhead costs of large agencies."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="!max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-[#9a0c28]">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our pricing and services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#9a0c28] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-white rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <button className="bg-[#9a0c28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7a0a20] transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;