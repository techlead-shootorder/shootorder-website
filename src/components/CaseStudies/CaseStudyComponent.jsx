'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, TrendingUp, Award, Eye, Download } from 'lucide-react';

const CaseStudyComponent = ({ service }) => {
  const router = useRouter();

  const processStudies = [
    {
      id: 'seo',
      slug: 'seo-cake-company',
      title: 'Baking Up Success: How SEO Helped CountryOven Climb the Ranks',
      image: '/api/placeholder/600/400',
      description: 'With targeted SEO efforts, CountryOven witnessed sustained traffic growth and 100% keyword visibility in 12 months.',
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
      title: 'On the Road to Success: How SEO Fueled Carawander’s Journey',
      image: '/api/placeholder/600/400',
      description: 'With consistent SEO efforts, ShootOrder helped Carawander boost web-driven sales and profits by over 40% since 2021.',
      results: 'Overall Score 5.0',
      color: 'from-slate-700 to-slate-800',
      pdfUrl: '/pdfs/case-studies/seo/SEO_2.pdf',
      client: 'Caravan Adventures Ltd',
      industry: 'Travel & Tourism',
      duration: 'Jan. 2020 - Ongoing',
      investment: '$10,000 to $25,000 per month'
    },
    {
      id: 'seo',
      slug: 'seo-travel-company',
      title: "Driven by Search: How SEO Accelerated a Travel Brand's Growth",
      image: '/api/placeholder/600/400',
      description: 'Targeted SEO strategies helped a Dubai-based travel company boost lead generation and grow its business. ',
      results: 'Overall Score 4.0',
      color: 'from-slate-700 to-slate-800',
      pdfUrl: '/pdfs/case-studies/seo/SEO_3.pdf',
      client: 'Global Travel Solutions',
      industry: 'Travel & Tourism',
      duration: 'Mar. 2019 - Dec. 2022',
      investment: '$15,000 to $30,000 per month'
    },
    {
      id: 'google-ads',
      slug: 'ppc-edtech-company',
     title: 'Creative Content That Clicks: Social Success for an EHR Platform',
      image: '/api/placeholder/600/400',
      description: 'With sharp Facebook and Google Ads tailored for India, ShootOrder helped ALPA Kids achieve 400K+ app downloads—proving big impact doesn’t need a big budget. ',
      results: 'Overall Score 5.0',
      color: 'from-blue-600 to-blue-700',
      pdfUrl: '/pdfs/case-studies/google-ads/PPC_1.pdf',
      client: 'IPI India Pvt. Ltd',
      industry: 'Education Technology',
      duration: 'Aug. 2020 - Mar. 2023',
      investment: '$25,000 to $50,000 per month'
    },
    {
      id: 'google-ads',
      slug: 'ppc-fertility-provider',
      title: 'How ShootOrder Boosted ROI for Oasis Fertility',
      image: '/api/placeholder/600/400',
      description: 'By streamlining AD campaigns, ShootOrder helped Oasis Fertility cut cost-per-lead and boost returns—delivering consistent, cost-effective performance. ',
      results: 'Overall Score 4.5',
      color: 'from-blue-600 to-blue-700',
      pdfUrl: '/pdfs/case-studies/google-ads/PPC_2.pdf',
      client: 'Advanced Fertility Center',
      industry: 'Healthcare',
      duration: 'Jun. 2021 - Ongoing',
      investment: '$8,000 to $15,000 per month'
    },
    {
      id: 'google-ads',
      slug: 'ppc-health-wellness',
      title: 'Powering IPI Growth with Precision PPC',
      image: '/api/placeholder/600/400',
      description: 'ShootOrder’s paid ad strategy helped IPI India scale online orders from $100 to $1,000/month while optimizing every rupee spent.',
      results: 'Overall Score 4.0',
      color: 'from-blue-600 to-blue-700',
      pdfUrl: '/pdfs/case-studies/by-service/PPC_3.pdf',
      client: 'Wellness Plus Solutions',
      industry: 'Health & Wellness',
      duration: 'Jan. 2022 - Ongoing',
      investment: '$12,000 to $20,000 per month'
    },
    {
      id: 'social-media-marketing',
      slug: 'smm-luxury-car-brand',
      title: 'How Strategic Social Media Marketing Fueled a Luxury Car Brand',
      image: '/api/placeholder/600/400',
      description: 'With tailored campaigns and consistent engagement, ShootOrder elevated digital visibility and lead generation across key social platforms.',
      results: 'Overall Score 4.5',
      color: 'from-purple-600 to-purple-700',
      pdfUrl: '/pdfs/case-studies/social-media-marketing/SMM_1.pdf',
      client: 'Elite Motors Group',
      industry: 'Automotive - Luxury',
      duration: 'Sep. 2020 - Ongoing',
      investment: '$20,000 to $35,000 per month'
    },
    {
      id: 'social-media-marketing',
      slug: 'smm-auto-dealership',
      title: 'Driving Digital: How ShootOrder Steered Online Growth for an Auto Brand',
      image: '/api/placeholder/600/400',
      description: 'By managing SEO, PPC, and Google assets, ShootOrder helped generate 20% of all vehicle bookings through digital platforms.',
      results: 'Overall Score 5.0',
      color: 'from-purple-600 to-purple-700',
      pdfUrl: '/pdfs/case-studies/social-media-marketing/SMM_2.pdf',
      client: 'Metro Auto Sales',
      industry: 'Automotive',
      duration: 'May 2021 - Ongoing',
      investment: '$15,000 to $25,000 per month'
    },
    {
      id: 'social-media-marketing',
      slug: 'smm-it-services',
     title: 'Creative Content That Clicks: Social Success for an EHR Platform',
      image: '/api/placeholder/600/400',
      description: 'With standout visuals and consistent social media campaigns, ShootOrder amplified visibility for Orchasp’s healthcare tech across Facebook, Instagram, and LinkedIn. ',
      results: 'Overall Score 4.0',
      color: 'from-purple-600 to-purple-700',
      pdfUrl: '/pdfs/case-studies/social-media-marketing/SMM_3.pdf',
      client: 'TechFlow Solutions',
      industry: 'Information Technology',
      duration: 'Nov. 2021 - Ongoing',
      investment: '$8,000 to $18,000 per month'
    }
  ];

  // Find the matching case studies based on service prop
  const relevantStudies = processStudies.filter(study => study.id === service);

  // If no matching service found, don't render anything
  if (!relevantStudies || relevantStudies.length === 0) {
    return null;
  }

  const handleCaseStudyClick = (studySlug) => {
    // Navigate to individual case study page with the service context
    // router.push(`/${service}/case-studies/${studySlug}`);

    router.push(`/case-studies/${studySlug}`);
    
  };

  const handleDownloadPDF = async (pdfUrl, title, event) => {
    event.stopPropagation(); // Prevent card click when button is clicked

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

  const CaseStudyCard = ({ study, index }) => (
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
        <div>
          <div className="flex items-center justify-between mb-4">
            <Award className="w-6 h-6 opacity-80" />
            <ChevronRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </div>

          <h3 className="text-2xl font-bold mb-3 group-hover:text-[#9a0c28] transition-colors duration-300">
            {study.title}
          </h3>

          <p className="text-black mb-4 text-base">
            {study.description}
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">{study.results}</span>
          </div>

          <div className="flex space-x-2">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 text-sm font-medium flex-1">
              <Eye className="w-4 h-4" />
              <span>View Case Study</span>
            </div>

            {study.pdfUrl && <button
              onClick={(e) => handleDownloadPDF(study.pdfUrl, study.title, e)}
              className="inline-flex items-center space-x-2 bg-[#9a0c28]/80 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-[#9a0c28] transition-all duration-300 text-sm font-medium text-white"
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

  return (
    <div className="min-h-screen bg-[#9a0c28]">
      <div className="!max-w-7xl mx-auto px-4 py-16">
        <h1 className='text-center font-bold text-4xl mb-10 text-white'>Case Studies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relevantStudies.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyComponent;