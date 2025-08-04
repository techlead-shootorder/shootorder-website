'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, Users, TrendingUp, Award, Eye, Download, ArrowLeft } from 'lucide-react';

const CaseStudiesPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('industry');
  const [selectedService, setSelectedService] = useState(null);

  const industryStudies = [
    {
      id: 'healthcare',
      title: 'Healthcare',
      image: '/api/placeholder/400/300',
      description: 'Revolutionizing patient care through digital transformation',
      results: '150% increase in patient engagement',
      color: 'from-slate-700 to-slate-800',
      pdfUrl: '/pdfs/case-studies/by-industry/Healthcare_Oasis-Fertility.pdf'
    },
    {
      id: 'fashion-beauty',
      title: 'Fashion & Beauty',
      image: '/api/placeholder/400/300',
      description: 'Boosting brand visibility in competitive beauty market',
      results: '300% growth in online sales',
      color: 'from-purple-600 to-purple-700',
    },
    {
      id: 'ecommerce-retail',
      title: 'Ecommerce & Retail',
      image: '/api/placeholder/400/300',
      description: 'Scaling online retail operations for maximum ROI',
      results: '250% revenue increase',
      color: 'from-blue-600 to-blue-700',
      pdfUrl: '/pdfs/case-studies/by-industry/Ecommerce_Nakshikathaa.pdf'
    },
    {
      id: 'it-technology',
      title: 'IT & Technology',
      image: '/api/placeholder/400/300',
      description: 'Driving innovation in tech startup ecosystem',
      results: '400% user acquisition',
      color: 'from-emerald-600 to-emerald-700',
      pdfUrl: '/pdfs/case-studies/by-industry/IT & Technology_Orchasp Limited.pdf'
    },
    {
      id: 'entertainment',
      title: 'Entertainment',
      image: '/api/placeholder/400/300',
      description: 'Amplifying reach for entertainment brands',
      results: '500% social engagement',
      color: 'from-orange-500 to-orange-600',
      pdfUrl: '/pdfs/case-studies/by-industry/Entertainment_Carawander.pdf'
    },
    {
      id: 'education',
      title: 'Education',
      image: '/api/placeholder/400/300',
      description: 'Transforming learning experiences digitally',
      results: '200% student enrollment',
      color: 'from-indigo-600 to-indigo-700',
      pdfUrl: '/pdfs/case-studies/by-industry/Education_ALPA Kids.pdf'
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      image: '/api/placeholder/400/300',
      description: 'Modernizing property marketing strategies',
      results: '180% faster sales',
      color: 'from-teal-600 to-teal-700',
    },
    {
      id: 'events',
      title: 'Events',
      image: '/api/placeholder/400/300',
      description: 'Creating memorable event experiences',
      results: '300% attendance boost',
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 'others',
      title: 'Others',
      image: '/api/placeholder/400/300',
      description: 'Diverse solutions for unique challenges',
      results: 'Custom success metrics',
      color: 'from-gray-600 to-gray-700',
      pdfUrl: '/pdfs/case-studies/by-industry/Others_Home Healthcare Services Company.pdf'
    }
  ];

  const processStudies = [
    {
      id: 'seo',
      serviceKey: 'seo',
      title: 'SEO Optimization',
      image: '/api/placeholder/600/400',
      description: 'Dominating search rankings with strategic optimization',
      results: '400% organic traffic growth',
      color: 'from-slate-700 to-slate-800',
      pdfUrl: '/pdfs/case-studies/by-service/SEO_Country Oven.pdf'
    },
    {
      id: 'ppc',
      serviceKey: 'google-ads',
      title: 'Paid Advertising',
      image: '/api/placeholder/600/400',
      description: 'Maximizing ROI through targeted advertising campaigns',
      results: '250% conversion rate improvement',
      color: 'from-blue-600 to-blue-700',
      pdfUrl: '/pdfs/case-studies/by-service/PPC_IPI India Pvt. Ltd.pdf'
    },
    {
      id: 'smm',
      serviceKey: 'social-media-marketing',
      title: 'Social Media Marketing',
      image: '/api/placeholder/600/400',
      description: 'Building communities and driving engagement',
      results: '600% follower growth',
      color: 'from-purple-600 to-purple-700',
      pdfUrl: '/pdfs/case-studies/by-service/Social Media_Luxury Car Dealership.pdf'
    }
  ];

  const handleCaseStudyClick = (studyId) => {
    // Navigate to individual case study page
    router.push(`case-studies/${studyId}`);
  };

  const handleServiceClick = (serviceKey) => {
    setSelectedService(serviceKey);
  };

  const handleBackToServices = () => {
    setSelectedService(null);
  };

  const handleDownloadPDF = async (pdfUrl, title, event) => {
    event.stopPropagation();

    try {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `${title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-case-study.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Error downloading PDF. Please try again.');
    }
  };

  const CaseStudyCard = ({ study, isLarge = false, isServiceCard = false }) => (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white border border-gray-100`}
      onClick={() => isServiceCard ? handleServiceClick(study.serviceKey) : handleCaseStudyClick(study.id)}
    >
      <div className={`absolute inset-0 bg-[#910c28]`}></div>
      {/* <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundImage: `url(${study.image})` }}
      ></div> */}

      <div className="relative flex flex-col p-6 text-white">
        <div className='mb-4'>
          <div className="flex items-center justify-between mb-4">
            <Award className="w-6 h-6 opacity-80" />
            <ChevronRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </div>

          <h3 className={`font-bold mb-3 transition-colors duration-300 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
            {study.title}
          </h3>

          <p className={`text-white/90 mb-4 ${isLarge ? 'text-base' : 'text-sm'}`}>
            {study.description}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">{study.results}</span>
          </div>

          <div className="flex space-x-2">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 text-sm font-medium flex-1">
              <Eye className="w-4 h-4" />
              <span>View Case Study</span>
            </div>

            {study.pdfUrl && !isServiceCard && <button
              onClick={(e) => handleDownloadPDF(study.pdfUrl, study.title, e)}
              className="inline-flex items-center space-x-2 bg-[#9a0c28]/80 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-[#9a0c28] transition-all duration-300 text-sm font-medium"
              title={`Download ${study.title} Case Study PDF`}
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">PDF</span>
            </button>}
          </div>
        </div>
      </div>
    </div>
  );

  const getServiceTitle = () => {
    switch (selectedService) {
      case 'seo': return 'SEO Optimization';
      case 'google-ads': return 'Paid Advertising';
      case 'social-media-marketing': return 'Social Media Marketing';
      default: return 'Case Studies';
    }
  };

  const getRelevantStudies = () => {
    const allCaseStudies = [
      {
        id: 'seo',
        slug: 'seo-cake-company',
        title: 'SEO for Cake Company',
        image: '/api/placeholder/600/400',
        description: 'Dominating search rankings with strategic optimization',
        results: 'Overall Score 4.0',
        pdfUrl: '/pdfs/case-studies/seo/SEO_1.pdf',
        client: 'CountryOven.com',
        industry: 'Bakery & E-commerce',
        duration: 'Feb. 2015 - Ongoing',
        investment: '$5,000 to $10,000 per month'
      },
      {
        id: 'seo',
        slug: 'seo-caravan-rental',
        title: 'Web Dev, SEO & Marketing for Caravan Rental Company',
        image: '/api/placeholder/600/400',
        description: 'Comprehensive digital transformation with strategic optimization',
        results: 'Overall Score 5.0',
        pdfUrl: '/pdfs/case-studies/seo/SEO_2.pdf',
        client: 'Caravan Adventures Ltd',
        industry: 'Travel & Tourism',
        duration: 'Jan. 2020 - Ongoing',
        investment: '$10,000 to $25,000 per month'
      },
      {
        id: 'seo',
        slug: 'seo-travel-company',
        title: 'Digital Marketing, SEO & Web Dev for Travel Company',
        image: '/api/placeholder/600/400',
        description: 'Complete digital ecosystem for travel industry success',
        results: 'Overall Score 4.0',
        pdfUrl: '/pdfs/case-studies/seo/SEO_3.pdf',
        client: 'Global Travel Solutions',
        industry: 'Travel & Tourism',
        duration: 'Mar. 2019 - Dec. 2022',
        investment: '$15,000 to $30,000 per month'
      },
      {
        id: 'google-ads',
        slug: 'ppc-edtech-company',
        title: 'Facebook & Google Ads Campaign for EdTech Company',
        image: '/api/placeholder/600/400',
        description: 'Maximizing ROI through targeted advertising campaigns',
        results: 'Overall Score 5.0',
        pdfUrl: '/pdfs/case-studies/google-ads/PPC_1.pdf',
        client: 'IPI India Pvt. Ltd',
        industry: 'Education Technology',
        duration: 'Aug. 2020 - Mar. 2023',
        investment: '$25,000 to $50,000 per month'
      },
      {
        id: 'google-ads',
        slug: 'ppc-fertility-provider',
        title: 'Digital Marketing for Fertility Provider',
        image: '/api/placeholder/600/400',
        description: 'Sensitive healthcare marketing with targeted precision',
        results: 'Overall Score 4.5',
        pdfUrl: '/pdfs/case-studies/google-ads/PPC_2.pdf',
        client: 'Advanced Fertility Center',
        industry: 'Healthcare',
        duration: 'Jun. 2021 - Ongoing',
        investment: '$8,000 to $15,000 per month'
      },
      {
        id: 'google-ads',
        slug: 'ppc-health-wellness',
        title: 'SEO, PPC, Social Media Marketing for Health & Wellness Firm',
        image: '/api/placeholder/600/400',
        description: 'Holistic digital approach for wellness industry growth',
        results: 'Overall Score 4.0',
        pdfUrl: '/pdfs/case-studies/google-ads/PPC_3.pdf',
        client: 'Wellness Plus Solutions',
        industry: 'Health & Wellness',
        duration: 'Jan. 2022 - Ongoing',
        investment: '$12,000 to $20,000 per month'
      },
      {
        id: 'social-media-marketing',
        slug: 'smm-luxury-car-brand',
        title: 'Social Media Marketing & Google Ads for Luxury Car Brand',
        image: '/api/placeholder/600/400',
        description: 'Premium brand positioning through strategic social presence',
        results: 'Overall Score 4.5',
        pdfUrl: '/pdfs/case-studies/social-media-marketing/SMM_1.pdf',
        client: 'Elite Motors Group',
        industry: 'Automotive - Luxury',
        duration: 'Sep. 2020 - Ongoing',
        investment: '$20,000 to $35,000 per month'
      },
      {
        id: 'social-media-marketing',
        slug: 'smm-auto-dealership',
        title: 'Digital Platform Management for Auto Dealership',
        image: '/api/placeholder/600/400',
        description: 'Comprehensive digital presence for automotive sales',
        results: 'Overall Score 5.0',
        pdfUrl: '/pdfs/case-studies/social-media-marketing/SMM_2.pdf',
        client: 'Metro Auto Sales',
        industry: 'Automotive',
        duration: 'May 2021 - Ongoing',
        investment: '$15,000 to $25,000 per month'
      },
      {
        id: 'social-media-marketing',
        slug: 'smm-it-services',
        title: 'Content Marketing & SMM for IT Services Company',
        image: '/api/placeholder/600/400',
        description: 'B2B thought leadership through strategic content',
        results: 'Overall Score 4.0',
        pdfUrl: '/pdfs/case-studies/social-media-marketing/SMM_3.pdf',
        client: 'TechFlow Solutions',
        industry: 'Information Technology',
        duration: 'Nov. 2021 - Ongoing',
        investment: '$8,000 to $18,000 per month'
      }
    ];

    return allCaseStudies.filter(study => study.id === selectedService);
  };

  const ServiceCaseStudyCard = ({ study, index }) => {
    const handleCaseStudyClick = (studySlug) => {
      router.push(`/case-studies/${studySlug}`);
    };

    return (
      <div key={index}
        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white border border-gray-100"
        onClick={() => handleCaseStudyClick(study.slug)}
      >
        <div className={`absolute inset-0 bg-white opacity-90`}></div>

        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ backgroundImage: `url(${study.image})` }}
        ></div>

        <div className="relative h-full flex flex-col p-6 text-black">
          <div className='mb-4'>
            <div className="flex items-center justify-between mb-4">
              <Award className="w-6 h-6 opacity-80 text-[#9a0c28]" />
              <ChevronRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[#9a0c28]" />
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-[#9a0c28] transition-colors duration-300">
              {study.title}
            </h3>

            <p className="text-gray-700 mb-4 text-sm">
              {study.description}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-[#9a0c28]" />
              <span className="text-sm font-medium">{study.results}</span>
            </div>

            <div className="flex space-x-2">
              <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm font-medium flex-1">
                <Eye className="w-4 h-4" />
                <span>View Case Study</span>
              </div>

              {study.pdfUrl && <button
                onClick={(e) => handleDownloadPDF(study.pdfUrl, study.title, e)}
                className="inline-flex items-center space-x-2 bg-[#9a0c28] px-4 py-2 rounded-lg hover:bg-[#b91c47] transition-all duration-300 text-sm font-medium text-white"
                title={`Download ${study.title} Case Study PDF`}
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">PDF</span>
              </button>}
            </div>
          </div>
        </div>
      </div>
    );
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-slate-50">
      {/* Hero Section */}
      <div
        className="relative text-white mt-20"
        style={{
          backgroundImage: "url('/images/CaseStudies/Case study banner.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#9a0c28]/20 to-[#b91c47]/20"></div> */}

        <div className="relative !max-w-7xl mx-auto px-4 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-red-200 bg-clip-text text-transparent">
              Our Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover How We&apos;ve Transformed Businesses Across Industries With Innovative Digital Solutions
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-300">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="w-6 h-6 text-white" />
                <span className="text-lg">50+ Retainership</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-6 h-6 text-white" />
                <span className="text-lg">92% Client Retention Rate</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
                <span className="text-lg">12+ Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="!max-w-7xl mx-auto px-4 py-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <h2 className='text-5xl font-semibold'>Case Study</h2>
        </div>

        {/* Content */}
        {!selectedService ? (
          // Show main service cards
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} isLarge={true} isServiceCard={true} />
            ))}
          </div>
        ) : (
          // Show case study cards for selected service
          <div>
            <div className="flex items-center mb-10">
              <button
                onClick={handleBackToServices}
                className="flex items-center space-x-2 text-[#9a0c28] hover:text-[#b91c47] transition-colors duration-300 mr-6 px-4 py-2 rounded-lg cursor-pointer"
              >
                <ArrowLeft className="w-6 h-6" />
                <span className="text-lg font-medium">Back to Services</span>
              </button>
              <h2 className='font-bold text-4xl text-gray-800'>{getServiceTitle()} Case Studies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getRelevantStudies().map((study, index) => (
                <ServiceCaseStudyCard key={study.slug} study={study} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="relative bg-[#f0f0f1]  text-white py-16">
        <div className="absolute inset-0 "></div>
        <div className="relative !max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-gray-800">
            Let&apos;s discuss how we can help transform your business with proven strategies and innovative solutions.
          </p>
          <button
            className="cursor-pointer bg-gradient-to-r from-[#9a0c28] to-[#b91c47] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#b91c47] hover:to-[#9a0c28] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            onClick={() => router.push('/contact-us')}
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </div>
  );
};



export default CaseStudiesPage;