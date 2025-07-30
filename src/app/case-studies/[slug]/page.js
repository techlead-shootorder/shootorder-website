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
  // below is the updated case studies
  "ppc-fertility-provider": {
    title: "Digital Marketing for Fertility Provider",
    client: "Oasis Fertility",
    industry: "Healthcare",
    date: "2024",
    heroImage: "",
    challenge: "The fertility provider needed to generate more qualified leads at a lower cost per lead while maintaining quality and improving overall ROI from their digital marketing efforts.",
    solution: "ShootOrder handled comprehensive digital marketing requirements including paid campaigns and SEO, with bi-monthly strategy meetings, website landing page optimization, and social media asset management with dedicated account management.",
    results: [
      {
        metric: "Online Sales",
        value: "300%",
        description: "Reduced cost per lead (CPL) to expected levels",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Increased return on investment (ROI)",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Improved lead quality and conversion",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Enhanced digital marketing performance across all channels",
      },
    ],
    testimonial: {
      quote:
        "They reduced CPL and increased ROI. Cost effective, Good Performance.",
      author: "Sreeram Kandula",
      position: "Digital Marketing Manager, Oasis Fertility",
    },
    services: [
      "Search Engine Optimization",
      "Paid Campaigns Management",
    ],
    timeline: "Jan. 2018 - Ongoing",
    tags: ["HealthCare", "Fertility", "IUI", "IVF"],
  },
  "ppc-edtech-company": {
    title: "Facebook & Google Ads Campaign for EdTech Company",
    client: "ALPA Kids",
    industry: "Software",
    date: "Feb. 2021 - Ongoing",
    heroImage: "",
    challenge: "ALPA Kids, successful in Estonia (70% of parents and 50% of kindergartens), needed to expand to the Indian market after being contacted by local kindergarten owners requiring digital teaching aids for Hindi language instruction.",
    solution: "After evaluating multiple approaches, ShootOrder focused on running targeted Google and Facebook Ads campaigns while managing advertising accounts, creating ad creatives, and providing dedicated account management.",
    results: [
      {
        metric: "Online Sales",
        value: "300%",
        description: "400,000 app downloads achieved in India",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Successful expansion from Estonia to Indian market",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Multiple high-quality video ads created",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Content suitable for both Indian and Estonian applications",
      },
    ],
    testimonial: {
      quote:
        "Content suitable for both Indian and Estonian applications",
      author: "Janek Jaago",
      position: "CCO, ALPA Kids",
    },
    services: [
      "Other Digital Marketing",
      "Pay Per Click",
      "Search Engine Optimization"
    ],
    timeline: "Feb. 2021 - Ongoing",
    tags: ["Education"],
  },
  "ppc-health-wellness": {
    title: "SEO, PPC, Social Media Marketing for Health & Wellness Firm",
    client: "IPI India Pvt. Ltd.",
    industry: "Consumer Products",
    date: "May. 2019 - Ongoing",
    heroImage: "",
    challenge: "International Pharmaceuticals Inc. (IPI India) was doing only offline marketing with no digital presence. They needed to extend their product offerings into the digital space and gain recognition online.",
    solution: "International Pharmaceuticals Inc. (IPI India) was doing only offline marketing with no digital presence. They needed to extend their product offerings into the digital space and gain recognition online.",
    results: [
      {
        metric: "Online Sales",
        value: "300%",
        description: "Online orders increased from $100 to $1,000 per month",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Achieved first page Google rankings for target keywords",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Significant increase in Facebook likes and impressions",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Successful integration with Amazon store for order tracking",
      },
    ],
    testimonial: {
      quote:
        "They're pretty serious about their job, and they optimize the cash we give them. They identify parts of the media spend that are unnecessary and advise us about it.",
      author: "Nishanth Jain",
      position: "Brand Manager, IPI India Pvt. Ltd.",
    },
    services: [
      "Search Engine Optimization",
      "Google Ads Management",
      "Social Media Marketing"
    ],
    timeline: "May. 2019 - Ongoing",
    tags: ["Healthcare"],
  },
  // seo
  "seo-cake-company": {
    title: "SEO for Cake Company",
    client: "CountryOven.com",
    industry: "Bakery & E-commerce",
    date: "Feb. 2015 - Ongoing",
    heroImage: "",
    challenge: "Within e-commerce, there are major channels for which we get visitors to the website. SEM [search engine marketing] has provided for a large reason for our traffic. Before ShootOrder, we did not have these kinds of results.",
    solution: "ShootOrder helped achieve top positions for most cake-related keywords through strategic SEO and SEM services. They work closely with the technology team to implement required changes and maintain consistent communication.",
    results: [
      {
        metric: "Online Sales",
        value: "300%",
        description: "Achieved top rankings for all desired cake-related keywords",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Significant growth in search engine traffic year-over-year",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Cakes represent 80% of revenue with improved organic visibility",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Consistent monthly performance improvements",
      },
    ],
    testimonial: {
      quote:
        "I feel they're [ShootOrder] well-organized, stick to the timelines, and their promises. The head of ShootOrder is a young guy and is very hungry for business. He's always on the go.",
      author: "Vamseedhar Reddy",
      position: "CEO at CountryOven.com",
    },
    services: [
      "Search Engine Optimization",
      "Search Engine Marketing"
    ],
    timeline: "Feb. 2015 - Ongoing",
    tags: ["Bakery", "Dilicious Cakes", "Chocolate"],
  },
  "seo-caravan-rental": {
    title: "Web Dev, SEO & Marketing for Caravan Rental Company",
    client: "Carawander Pvt Ltd",
    industry: "Hospitality & leisure",
    date: "Feb. 2021 - Ongoing",
    heroImage: "",
    challenge: "The client needed comprehensive digital services including website development, SEO optimization, and effective marketing strategies to grow their caravan and motorhome rental business.",
    solution: "ShootOrder provided end-to-end services including website development, social media marketing campaigns, SEO optimization, and ongoing website updates. The team assigned 2-5 employees to handle different aspects of the project with dedicated project management.",
    results: [
      {
        metric: "Online Sales",
        value: "300%",
        description: "Sales increased significantly",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Profits increased substantially",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Improved website performance and optimization",
      },
      {
        metric: "Online Sales",
        value: "300%",
        description: "Successful ongoing marketing campaigns",
      },
    ],
    testimonial: {
      quote:
        "They are goal-oriented and always ready to deliver the request at any time. Work dedication is great.",
      author: "Siddharth Arya Jolly",
      position: "CEO, Carawander Pvt Ltd",
    },
    services: [
      "Content Marketing",
      "Search Engine Optimization",
      "Social Media Marketing"
    ],
    timeline: "Feb. 2021 - Ongoing",
    tags: [""],
  },
  "seo-travel-company": {
    title: "Digital Marketing, SEO & Web Dev for Travel Company",
    client: "Travel Company (Dubai)",
    industry: "Hospitality & leisure",
    location: "Dubai, United Arab Emirates",
    date: "Mar. 2018 - Ongoing",
    duration: "Mar. 2018 - Ongoing",
    investment: "$10,000 to $49,999",
    monthlySpend: "Around $15,000 total investment",
    heroImage: "",
    challenge: "The client was looking for a kickstart in social media campaigns to grow their business on platforms like Facebook, Instagram, and Google. They also needed their creative collateral to meet professional standards.",
    solution: "ShootOrder provided end-to-end social media digital platform services including planning promotions, creative timing decisions, target audience identification, Google Ads management, SEO, and complete WordPress website development with a new look and feel.",
    results: [
      {
        metric: "Lead Generation",
        value: "Significant growth",
        description: "Significant growth in lead generation",
      },
      {
        metric: "Business Growth",
        value: "Enhanced",
        description: "Enhanced business growth and customer feedback",
      },
      {
        metric: "Social Media",
        value: "Successful",
        description: "Successful social media campaigns on Facebook and Instagram",
      },
      {
        metric: "Lead Conversion",
        value: "Improved",
        description: "Improved lead conversion rates",
      },
      {
        metric: "Website",
        value: "Complete redesign",
        description: "Complete website redesign on WordPress",
      }
    ],
    testimonial: {
      quote: "For anyone who wants to grow their business digitally, Shoot Order is a reliable company and cost-effective. ShootOrder used to come with a lot of their initiatives and established with a proper plan.",
      author: "Founder",
      position: "Travel Company CEO",
    },
    services: [
      "Other Digital Marketing",
      "Social Media Marketing",
      "Web Development"
    ],
    clientRatings: {
      quality: 3.5,
      schedule: 3.5,
      cost: 4,
      wouldRefer: 5,
      overallScore: 4
    },
    timeline: "Mar. 2018 - Ongoing",
    tags: ["travel", "dubai", "social-media", "web-development"],
  },
  // smm
  "smm-luxury-car-brand": {
    title: "Social Media Marketing & Google Ads for Luxury Car Brand",
    client: "Luxury Car Dealership",
    industry: "Automotive",
    location: "Hyderabad, India",
    date: "Sep. 2016 - Ongoing",
    duration: "Sep. 2016 - Ongoing",
    investment: "Confidential",
    monthlySpend: "Confidential",
    heroImage: "",
    challenge: "The luxury car dealership was looking for a comprehensive marketing agency to take over all their traditional marketing projects and enhance their digital presence.",
    solution: "ShootOrder took over all traditional marketing projects including Google Ads and social media management, with a team of 4 people including CEO Rajat and project lead Naveen (Digital Marketing Consultant), providing weekly and fortnightly reports on keywords and social media activity.",
    results: [
      {
        metric: "Digital Presence",
        value: "Increased",
        description: "Increased presence across multiple digital spaces",
      },
      {
        metric: "Content Delivery",
        value: "Quick",
        description: "Quick content delivery and updates",
      },
      {
        metric: "Lead Generation",
        value: "Innovative",
        description: "Innovative lead generation and customer engagement strategies",
      },
      {
        metric: "Budget Optimization",
        value: "Streamlined",
        description: "Streamlined budget optimization for lead generation",
      }
    ],
    testimonial: {
      quote: "ShootOrder has performed very well. In the digital space, ROI is very important. ShootOrder always encourages me to streamline the budget for generating leads. Their team looks at what's working and what isn't on different platforms.",
      author: "Marketing Manager",
      position: "Luxury Car Dealership",
    },
    services: [
      "Social Media Marketing",
      "Google Ads Management",
      "Traditional Marketing"
    ],
    clientRatings: {
      quality: 4.5,
      schedule: 4.5,
      cost: 4,
      wouldRefer: 5,
      overallScore: 4.5
    },
    timeline: "Sep. 2016 - Ongoing",
    tags: ["luxury-cars", "automotive", "google-ads", "social-media", "hyderabad"],
  },
  "smm-auto-dealership": {
    title: "Digital Platform Management for Auto Dealership",
    client: "Auto Dealership",
    industry: "Automotive",
    location: "Hyderabad, India",
    date: "Nov. 2019 - Ongoing",
    duration: "Nov. 2019 - Ongoing",
    investment: "$50,000 to $199,999",
    monthlySpend: "Around $100,000 total investment",
    heroImage: "",
    challenge: "The auto dealership needed someone to comprehensively manage their digital platforms to attract more customers and improve their online presence.",
    solution: "ShootOrder manages all digital platforms including SEO, PPC, and Google business assets with a 5-person team, conducting monthly audits and improvements while working independently after initial guidance.",
    results: [
      {
        metric: "Digital Campaigns",
        value: "20%",
        description: "Digital campaigns attract 20% of total bookings",
      },
      {
        metric: "Traffic & Inquiries",
        value: "Increased",
        description: "Increased traffic and inquiries for vehicle bookings",
      },
      {
        metric: "SEO Performance",
        value: "Significant boost",
        description: "Significant boost in SEO performance on search results",
      },
      {
        metric: "Continuous Improvement",
        value: "Monthly auditing",
        description: "Monthly auditing and continuous improvement implemented",
      }
    ],
    testimonial: {
      quote: "They're quite professional in their approach. We've been happy so far because their digital campaigns attract traffic and inquiries for booking our vehicles. Their work accounts for about 20% of our bookings.",
      author: "Managing Director",
      position: "Auto Dealership",
    },
    services: [
      "Other Digital Marketing",
      "SEO",
      "PPC",
      "Google Business Management"
    ],
    clientRatings: {
      quality: 4,
      schedule: 4,
      cost: 5,
      wouldRefer: 5,
      overallScore: 5
    },
    timeline: "Nov. 2019 - Ongoing",
    tags: ["auto-dealership", "automotive", "seo", "ppc", "google-business", "hyderabad"],
  },
  "smm-it-services": {
    title: "Content Marketing & SMM for IT Services Company",
    client: "Orchasp Limited",
    industry: "IT Services",
    location: "Hyderabad, India",
    date: "Apr. 2025 - Ongoing",
    duration: "Apr. 2025 - Ongoing",
    investment: "Less than $10,000",
    monthlySpend: "Around 30,000 Indian rupees per month",
    heroImage: "",
    challenge: "Orchasp Limited built an electronic health record platform and wanted to market it effectively on social media to reach prospective customers.",
    solution: "ShootOrder created social media accounts on Facebook, Instagram, and LinkedIn, developed three different content versions (static posts, carousels, and videos) to educate customers about the EHR platform, with scheduled posting and WhatsApp/Google Meet communication.",
    results: [
      {
        metric: "Website Traffic",
        value: "Increased",
        description: "Increased website traffic",
      },
      {
        metric: "Content Formats",
        value: "Multiple",
        description: "Multiple content formats: static posts, carousels, and videos",
      },
      {
        metric: "Visuals & Videos",
        value: "Impressive",
        description: "Impressive visuals and videos created",
      },
      {
        metric: "Content Distribution",
        value: "Scheduled",
        description: "Scheduled content posting across Facebook, Instagram, and LinkedIn",
      }
    ],
    testimonial: {
      quote: "The visuals and videos they've created are impressive. ShootOrder has done a good job on the visuals and creative work.",
      author: "Chandra Sekhar Pattaparathi",
      position: "Managing Director & CEO, Orchasp Limited",
    },
    services: [
      "Content Marketing",
      "Social Media Marketing"
    ],
    clientRatings: {
      quality: 3.5,
      schedule: 3,
      cost: 3,
      wouldRefer: 4,
      overallScore: 4
    },
    timeline: "Apr. 2025 - Ongoing",
    tags: ["it-services", "ehr-platform", "content-marketing", "social-media", "hyderabad"],
  }


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
      <div className="relative bg-[#9A0C28] text-white">
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
            <div className="flex flex-wrap items-center gap-6 text-white mb-8">
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
            <div className="bg-[#9A0C28] p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-3">Ready for Similar Results?</h3>
              <p className="text-blue-100 mb-4">
                Let&apos;s discuss how we can help transform your business.
              </p>
              <Link
                href="/contact-us"
                className="w-full bg-white text-black  px-4 py-2 rounded-lg font-semibold  transition-colors block text-center"
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