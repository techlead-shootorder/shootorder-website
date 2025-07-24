'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, TrendingUp, Award, Eye, Download } from 'lucide-react';

const CaseStudyComponent = ({service}) => {

    console.log("service in case study section", service)
  const router = useRouter();

  const processStudies = [
    {
      id: 'seo',
      title: 'SEO',
      image: '/api/placeholder/600/400',
      description: 'Dominating search rankings with strategic optimization',
      results: '400% organic traffic growth',
      color: 'from-slate-700 to-slate-800',
      pdfUrl: '/pdfs/case-studies/by-service/SEO_Country Oven.pdf'
    },
    {
      id: 'google-ads',
      title: 'Pay Per Click Advertising',
      image: '/api/placeholder/600/400',
      description: 'Maximizing ROI through targeted advertising campaigns',
      results: '250% conversion rate improvement',
      color: 'from-blue-600 to-blue-700',
      pdfUrl: '/pdfs/case-studies/by-service/PPC_IPI India Pvt. Ltd.pdf'
      
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing',
      image: '/api/placeholder/600/400',
      description: 'Building communities and driving engagement',
      results: '600% follower growth',
      color: 'from-purple-600 to-purple-700',
      pdfUrl: '/pdfs/case-studies/by-service/Social Media_Luxury Car Dealership.pdf'

    },
    {
      id: 'content',
      title: 'Content Marketing',
      image: '/api/placeholder/600/400',
      description: 'Crafting compelling narratives that convert',
      results: '300% lead generation increase',
      color: 'from-emerald-600 to-emerald-700',
      pdfUrl: '/pdfs/case-studies/by-service/Content Marketing_Nakshikathaa.pdf'
    }
  ];

  // Find the matching case study based on service prop
  const relevantStudy = processStudies.find(study => study.id === service);

  // If no matching service found, don't render anything
  if (!relevantStudy) {
    return null;
  }

  const handleCaseStudyClick = (studyId) => {
    // Navigate to individual case study page
    router.push(`/case-studies/${studyId}`);
  };

  const handleDownloadPDF = async (pdfUrl, title, event) => {
    event.stopPropagation(); // Prevent card click when button is clicked
    
    try {
      // Option 1: Direct download using anchor element (works if PDF exists)
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `${title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-case-study.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Option 2: If you need to fetch the PDF first (uncomment if needed)
      /*
      const response = await fetch(pdfUrl);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-case-study.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Failed to download PDF');
        alert('Failed to download PDF. Please try again.');
      }
      */
      
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Error downloading PDF. Please try again.');
    }
  };

  const CaseStudyCard = ({ study }) => (
    <div 
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white border border-gray-100 h-96 max-w-2xl mx-auto"
    //   onClick={() => handleCaseStudyClick(study.id)}
    >
      {/* <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-90`}></div> */}
      <div className={`absolute inset-0 bg-white opacity-90`}></div>

      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundImage: `url(${study.image})` }}
      ></div>
      
      <div className="relative h-full flex flex-col justify-between p-6 text-black">
        <div>
          <div className="flex items-center justify-between mb-4">
            <Award className="w-6 h-6 opacity-80" />
            <ChevronRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </div>
          
          <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-200 transition-colors duration-300">
            {study.title}
          </h3>
          
          <p className="text-black mb-4 text-base">
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
            
           {study.pdfUrl && <button
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

  return (
    <div className="min-h-screen bg-[#9a0c28]">
      {/* Main Content */}
      <div className="!max-w-7xl mx-auto px-4 py-16">
        <h1 className='text-center font-bold text-4xl mb-10 text-white'>Case Study</h1>
        {/* Single Case Study */}
        <div className="flex justify-center">
          <CaseStudyCard study={relevantStudy} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyComponent;