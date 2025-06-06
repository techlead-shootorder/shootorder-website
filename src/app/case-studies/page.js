'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, Users, TrendingUp, Award, Eye } from 'lucide-react';

const CaseStudiesPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('industry');

  const industryStudies = [
    {
      id: 'healthcare',
      title: 'Healthcare',
      image: '/api/placeholder/400/300',
      description: 'Revolutionizing patient care through digital transformation',
      results: '150% increase in patient engagement',
      color: 'from-slate-700 to-slate-800'
    },
    {
      id: 'fashion-beauty',
      title: 'Fashion & Beauty',
      image: '/api/placeholder/400/300',
      description: 'Boosting brand visibility in competitive beauty market',
      results: '300% growth in online sales',
      color: 'from-purple-600 to-purple-700'
    },
    {
      id: 'ecommerce-retail',
      title: 'Ecommerce & Retail',
      image: '/api/placeholder/400/300',
      description: 'Scaling online retail operations for maximum ROI',
      results: '250% revenue increase',
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'it-technology',
      title: 'IT & Technology',
      image: '/api/placeholder/400/300',
      description: 'Driving innovation in tech startup ecosystem',
      results: '400% user acquisition',
      color: 'from-emerald-600 to-emerald-700'
    },
    {
      id: 'entertainment',
      title: 'Entertainment',
      image: '/api/placeholder/400/300',
      description: 'Amplifying reach for entertainment brands',
      results: '500% social engagement',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'education',
      title: 'Education',
      image: '/api/placeholder/400/300',
      description: 'Transforming learning experiences digitally',
      results: '200% student enrollment',
      color: 'from-indigo-600 to-indigo-700'
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      image: '/api/placeholder/400/300',
      description: 'Modernizing property marketing strategies',
      results: '180% faster sales',
      color: 'from-teal-600 to-teal-700'
    },
    {
      id: 'events',
      title: 'Events',
      image: '/api/placeholder/400/300',
      description: 'Creating memorable event experiences',
      results: '300% attendance boost',
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'others',
      title: 'Others',
      image: '/api/placeholder/400/300',
      description: 'Diverse solutions for unique challenges',
      results: 'Custom success metrics',
      color: 'from-gray-600 to-gray-700'
    }
  ];

  const processStudies = [
    {
      id: 'seo',
      title: 'SEO',
      image: '/api/placeholder/600/400',
      description: 'Dominating search rankings with strategic optimization',
      results: '400% organic traffic growth',
      color: 'from-slate-700 to-slate-800'
    },
    {
      id: 'ppc',
      title: 'Pay Per Click Advertising',
      image: '/api/placeholder/600/400',
      description: 'Maximizing ROI through targeted advertising campaigns',
      results: '250% conversion rate improvement',
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'smm',
      title: 'Social Media Marketing',
      image: '/api/placeholder/600/400',
      description: 'Building communities and driving engagement',
      results: '600% follower growth',
      color: 'from-purple-600 to-purple-700'
    },
    {
      id: 'content',
      title: 'Content Marketing',
      image: '/api/placeholder/600/400',
      description: 'Crafting compelling narratives that convert',
      results: '300% lead generation increase',
      color: 'from-emerald-600 to-emerald-700'
    }
  ];

  const handleCaseStudyClick = (studyId) => {
    // Navigate to individual case study page
    router.push(`/case-studies/${studyId}`);
  };

  const CaseStudyCard = ({ study, isLarge = false }) => (
    <div 
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white border border-gray-100 ${isLarge ? 'h-96' : 'h-72'}`}
      onClick={() => handleCaseStudyClick(study.id)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-90`}></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundImage: `url(${study.image})` }}
      ></div>
      
      <div className="relative h-full flex flex-col justify-between p-6 text-white">
        <div>
          <div className="flex items-center justify-between mb-4">
            <Award className="w-6 h-6 opacity-80" />
            <ChevronRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </div>
          
          <h3 className={`font-bold mb-3 group-hover:text-yellow-200 transition-colors duration-300 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
            {study.title}
          </h3>
          
          <p className={`text-white/90 mb-4 ${isLarge ? 'text-base' : 'text-sm'}`}>
            {study.description}
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">{study.results}</span>
          </div>
          
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 text-sm font-medium">
            <Eye className="w-4 h-4" />
            <span>View Case Study</span>
          </div>
        </div>
      </div>
    </div>
  );

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-[#9a0c28] to-[#b91c47] text-white shadow-lg'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9a0c28]/20 to-[#b91c47]/20"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="relative !max-w-7xl mx-auto px-4 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-red-200 bg-clip-text text-transparent">
              Our Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we&apos;ve transformed businesses across industries with innovative digital solutions
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-300">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="w-6 h-6 text-[#9a0c28]" />
                <span className="text-lg">300+ Clients</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-6 h-6 text-[#9a0c28]" />
                <span className="text-lg">92% Client Retention Rate</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-[#9a0c28]" />
                <span className="text-lg">300% Avg Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="!max-w-7xl mx-auto px-4 py-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-white p-2 rounded-xl shadow-lg border border-gray-200">
            <TabButton
              id="industry"
              label="By Industry"
              isActive={activeTab === 'industry'}
              onClick={setActiveTab}
            />
            <TabButton
              id="process"
              label="By Service"
              isActive={activeTab === 'process'}
              onClick={setActiveTab}
            />
          </div>
        </div>

        {/* Content */}
        {activeTab === 'industry' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        )}

        {activeTab === 'process' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} isLarge={true} />
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-gray-800 via-slate-700 to-gray-800 text-white py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9a0c28]/30 to-[#b91c47]/30"></div>
        <div className="relative !max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let&apos;s discuss how we can help transform your business with proven strategies and innovative solutions.
          </p>
          <button className="bg-gradient-to-r from-[#9a0c28] to-[#b91c47] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#b91c47] hover:to-[#9a0c28] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Project Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;