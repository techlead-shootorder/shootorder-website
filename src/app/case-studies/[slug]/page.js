import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  User,
  TrendingUp,
  Target,
  CheckCircle,
  Star,
} from 'lucide-react';

// This would typically come from your CMS or API
const caseStudyData = {
  healthcare: {
    title: "Healthcare Digital Transformation",
    client: "MedTech Solutions",
    industry: "Healthcare",
    date: "2024",
    heroImage: "/api/placeholder/1200/600",
    challenge:
      "MedTech Solutions needed to digitize their patient management system and improve online presence to compete with larger healthcare providers.",
    solution:
      "We implemented a comprehensive digital strategy including a modern website, patient portal, SEO optimization, and social media marketing.",
    results: [
      {
        metric: "Patient Engagement",
        value: "150%",
        description: "Increase in online patient interactions",
      },
      {
        metric: "Website Traffic",
        value: "200%",
        description: "Growth in organic website visits",
      },
      {
        metric: "Appointment Bookings",
        value: "180%",
        description: "Rise in online appointment scheduling",
      },
      {
        metric: "Patient Satisfaction",
        value: "95%",
        description: "Overall satisfaction rating",
      },
    ],
    testimonial: {
      quote:
        "The transformation exceeded our expectations. Our patient engagement has never been higher, and the streamlined processes have improved our efficiency dramatically.",
      author: "Dr. Sarah Johnson",
      position: "Chief Medical Officer, MedTech Solutions",
    },
    services: [
      "Web Development",
      "SEO",
      "Social Media Marketing",
      "UI/UX Design",
    ],
    timeline: "6 months",
    tags: ["Healthcare", "Digital Transformation", "Patient Engagement"],
  },
  "fashion-beauty": {
    title: "Fashion & Beauty Brand Elevation",
    client: "Glamour Cosmetics",
    industry: "Fashion & Beauty",
    date: "2024",
    heroImage: "/api/placeholder/1200/600",
    challenge:
      "Glamour Cosmetics was struggling to stand out in the competitive beauty market and needed to increase brand awareness and online sales.",
    solution:
      "We developed an influencer marketing strategy, redesigned their e-commerce platform, and launched targeted social media campaigns.",
    results: [
      {
        metric: "Online Sales",
        value: "300%",
        description: "Growth in e-commerce revenue",
      },
      {
        metric: "Social Followers",
        value: "250%",
        description: "Increase across all platforms",
      },
      {
        metric: "Brand Awareness",
        value: "180%",
        description: "Improvement in brand recognition",
      },
      {
        metric: "Customer Retention",
        value: "220%",
        description: "Increase in repeat customers",
      },
    ],
    testimonial: {
      quote:
        "Our brand has never looked better! The team understood our vision and executed it flawlessly. Sales have skyrocketed and our community is more engaged than ever.",
      author: "Maria Rodriguez",
      position: "Brand Director, Glamour Cosmetics",
    },
    services: [
      "E-commerce Development",
      "Influencer Marketing",
      "Social Media Strategy",
      "Brand Design",
    ],
    timeline: "4 months",
    tags: ["Beauty", "E-commerce", "Influencer Marketing"],
  },
  "ecommerce-retail": {
    title: "E-commerce & Retail Revolution",
    client: "RetailMax",
    industry: "E-commerce & Retail",
    date: "2024",
    heroImage: "/api/placeholder/1200/600",
    challenge:
      "RetailMax needed to modernize their outdated e-commerce platform and compete with major online retailers.",
    solution:
      "We built a modern, scalable e-commerce platform with advanced analytics, personalization features, and mobile optimization.",
    results: [
      {
        metric: "Revenue Growth",
        value: "250%",
        description: "Increase in online revenue",
      },
      {
        metric: "Page Load Speed",
        value: "70%",
        description: "Improvement in loading times",
      },
      {
        metric: "Mobile Conversions",
        value: "320%",
        description: "Boost in mobile sales",
      },
      {
        metric: "Customer Satisfaction",
        value: "92%",
        description: "Overall satisfaction score",
      },
    ],
    testimonial: {
      quote:
        "The new platform has completely transformed our business. We're now competing with the big players and winning!",
      author: "James Wilson",
      position: "CEO, RetailMax",
    },
    services: [
      "E-commerce Development",
      "Mobile Optimization",
      "Analytics Setup",
      "Performance Optimization",
    ],
    timeline: "8 months",
    tags: ["E-commerce", "Retail", "Mobile Optimization"],
  },
  "it-technology": {
    title: "IT & Technology Startup Growth",
    client: "TechInnovate",
    industry: "IT & Technology",
    date: "2024",
    heroImage: "/api/placeholder/1200/600",
    challenge:
      "TechInnovate needed to establish market presence and acquire users for their new SaaS platform.",
    solution:
      "We created a comprehensive digital marketing strategy including content marketing, SEO, PPC campaigns, and social media presence.",
    results: [
      {
        metric: "User Acquisition",
        value: "400%",
        description: "Increase in platform users",
      },
      {
        metric: "Lead Generation",
        value: "350%",
        description: "Growth in qualified leads",
      },
      {
        metric: "Brand Awareness",
        value: "280%",
        description: "Improvement in brand recognition",
      },
      {
        metric: "Revenue Growth",
        value: "450%",
        description: "Increase in monthly revenue",
      },
    ],
    testimonial: {
      quote:
        "Thanks to their strategic approach, we've grown from a startup to a recognized player in our industry within months.",
      author: "Sarah Chen",
      position: "Founder, TechInnovate",
    },
    services: [
      "Digital Marketing",
      "SEO Optimization",
      "PPC Campaigns",
      "Content Strategy",
    ],
    timeline: "5 months",
    tags: ["Technology", "SaaS", "Digital Marketing"],
  },
  seo: {
    title: "SEO Transformation Success",
    client: "Multiple Clients",
    industry: "Various Industries",
    date: "2024",
    heroImage: "/api/placeholder/1200/600",
    challenge:
      "Various clients were struggling with poor search engine visibility and needed to improve their organic traffic and rankings.",
    solution:
      "We implemented comprehensive SEO strategies including technical optimization, content marketing, link building, and local SEO.",
    results: [
      {
        metric: "Organic Traffic",
        value: "400%",
        description: "Average increase across clients",
      },
      {
        metric: "Keyword Rankings",
        value: "300%",
        description: "Improvement in top 10 rankings",
      },
      {
        metric: "Conversion Rate",
        value: "180%",
        description: "Increase in organic conversions",
      },
      {
        metric: "Revenue Growth",
        value: "250%",
        description: "Boost in organic revenue",
      },
    ],
    testimonial: {
      quote:
        "Our organic traffic has never been higher. The SEO strategy delivered results beyond our expectations.",
      author: "Multiple Clients",
      position: "Various Industries",
    },
    services: [
      "Technical SEO",
      "Content Optimization",
      "Link Building",
      "Local SEO",
    ],
    timeline: "3-6 months",
    tags: ["SEO", "Organic Traffic", "Content Marketing"],
  },
  ppc: {
    title: "PPC Campaign Excellence",
    client: "Digital Commerce Co.",
    industry: "E-commerce",
    date: "2024",
    heroImage: "/api/placeholder/1200/600",
    challenge:
      "Digital Commerce Co. was wasting budget on ineffective PPC campaigns with poor ROI and high cost per acquisition.",
    solution:
      "We restructured their PPC campaigns with better targeting, optimized ad copy, improved landing pages, and advanced bid strategies.",
    results: [
      {
        metric: "Conversion Rate",
        value: "250%",
        description: "Improvement in campaign conversions",
      },
      {
        metric: "Cost Per Click",
        value: "40%",
        description: "Reduction in average CPC",
      },
      {
        metric: "Return on Ad Spend",
        value: "350%",
        description: "Increase in ROAS",
      },
      {
        metric: "Quality Score",
        value: "60%",
        description: "Improvement in ad quality",
      },
    ],
    testimonial: {
      quote:
        "Our PPC campaigns are now profitable and scalable. The ROI improvement has been incredible.",
      author: "Mike Thompson",
      position: "Marketing Director, Digital Commerce Co.",
    },
    services: [
      "PPC Management",
      "Landing Page Optimization",
      "Ad Copy Creation",
      "Bid Strategy",
    ],
    timeline: "3 months",
    tags: ["PPC", "Google Ads", "Conversion Optimization"],
  },
};

// Generate static params for all case study slugs
export async function generateStaticParams() {
  return Object.keys(caseStudyData).map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each case study
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = caseStudyData[slug];
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.title} - Case Study`,
    description: caseStudy.challenge,
  };
}

// Main component - this is now an async server component
export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const caseStudy = caseStudyData[slug];

  // If case study doesn't exist, trigger 404
  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="!max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/case-studies"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Case Studies</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${caseStudy.heroImage})` }}
        ></div>
        <div className="relative !max-w-7xl mx-auto px-4 py-20">
          <div className="!max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {caseStudy.tags.map((tag, index) => (
                <span key={index} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {caseStudy.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-200 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{caseStudy.client}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{caseStudy.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>{caseStudy.timeline}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="!max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {caseStudy.solution}
              </p>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Results That Matter</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <TrendingUp className="w-8 h-8 text-green-500" />
                      <span className="text-3xl font-bold text-blue-600">{result.value}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{result.metric}</h3>
                    <p className="text-gray-600 text-sm">{result.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    &quot;{caseStudy.testimonial.quote}&quot;
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-800">{caseStudy.testimonial.author}</p>
                    <p className="text-gray-600">{caseStudy.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Client</p>
                  <p className="font-semibold text-gray-800">{caseStudy.client}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Industry</p>
                  <p className="font-semibold text-gray-800">{caseStudy.industry}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Timeline</p>
                  <p className="font-semibold text-gray-800">{caseStudy.timeline}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Year</p>
                  <p className="font-semibold text-gray-800">{caseStudy.date}</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Services Provided</h3>
              <div className="space-y-2">
                {caseStudy.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-3">Ready for Similar Results?</h3>
              <p className="text-blue-100 mb-4">
                Let&apos;s discuss how we can help transform your business.
              </p>
              <Link 
                href="/contact"
                className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors block text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}