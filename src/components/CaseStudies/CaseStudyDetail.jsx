'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Download, Star, Calendar, MapPin, DollarSign, Award, TrendingUp, Target, Users, CheckCircle } from 'lucide-react';

const CaseStudyDetail = ({ caseStudy, serviceSlug }) => {
    const router = useRouter();

    const handleDownloadPDF = async () => {
        try {
            const link = document.createElement('a');
            link.href = caseStudy.pdfUrl;
            link.download = `${caseStudy.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-case-study.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading PDF:', error);
            alert('Error downloading PDF. Please try again.');
        }
    };

    const RatingCard = ({ label, value }) => (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white mb-1">{value}</div>
            <div className="text-sm text-gray-300">{label}</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-600">
           
                {/* Header */}
                <div className=" backdrop-blur-sm mt-20 bg-[#9a0c28]">
                    <div className="!max-w-7xl mx-auto px-4 py-6">
                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center cursor-pointer space-x-2 text-white/80 hover:text-white transition-colors duration-300 mb-4"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to Case Studies</span>
                        </button>

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="text-sm font-medium text-white capitalize">
                                            {serviceSlug.replace('-', ' ')}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(caseStudy.overallScore)
                                                        ? 'text-yellow-400 fill-current'
                                                        : 'text-gray-400'
                                                    }`}
                                            />
                                        ))}
                                        <span className="text-white ml-2 font-medium">{caseStudy.overallScore}</span>
                                    </div>
                                </div>

                                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                    {caseStudy.title}
                                </h1>

                                <p className="text-xl text-gray-200 mb-6">
                                    {caseStudy.description}
                                </p>
                            </div>

                            <div className="lg:ml-8">
                                <button
                                    onClick={handleDownloadPDF}
                                    className="inline-flex cursor-pointer items-center space-x-3 bg-white text-[#9a0c28] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <Download className="w-5 h-5" />
                                    <span>Download Full Case Study</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="!max-w-7xl mx-auto px-4 py-12">
                    {/* Project Overview */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="lg:col-span-2">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <Award className="w-6 h-6 mr-3" />
                                    Project Overview
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <Users className="w-5 h-5 text-gray-300" />
                                            <div>
                                                <div className="text-sm text-gray-300">Client</div>
                                                <div className="text-white font-medium">{caseStudy.client}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Target className="w-5 h-5 text-gray-300" />
                                            <div>
                                                <div className="text-sm text-gray-300">Industry</div>
                                                <div className="text-white font-medium">{caseStudy.industry}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <MapPin className="w-5 h-5 text-gray-300" />
                                            <div>
                                                <div className="text-sm text-gray-300">Location</div>
                                                <div className="text-white font-medium">{caseStudy.location}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <Calendar className="w-5 h-5 text-gray-300" />
                                            <div>
                                                <div className="text-sm text-gray-300">Duration</div>
                                                <div className="text-white font-medium">{caseStudy.duration}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <DollarSign className="w-5 h-5 text-gray-300" />
                                            <div>
                                                <div className="text-sm text-gray-300">Investment</div>
                                                <div className="text-white font-medium">{caseStudy.investment}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <TrendingUp className="w-5 h-5 text-gray-300" />
                                            <div>
                                                <div className="text-sm text-gray-300">Monthly Spend</div>
                                                <div className="text-white font-medium">{caseStudy.monthlySpend}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ratings Card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white mb-6 text-center">Client Ratings</h3>
                            <div className="space-y-4">
                                <RatingCard label="Quality" value={caseStudy.ratings.quality} />
                                <RatingCard label="Schedule" value={caseStudy.ratings.schedule} />
                                <RatingCard label="Cost" value={caseStudy.ratings.cost} />
                                <RatingCard label="Would Refer" value={caseStudy.ratings.wouldRefer} />
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/20">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-1">{caseStudy.overallScore}</div>
                                    <div className="text-sm text-gray-300">Overall Score</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services Provided */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Services Provided</h2>
                        <div className="flex flex-wrap gap-3">
                            {caseStudy.services.map((service, index) => (
                                <span
                                    key={index}
                                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-medium"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Challenge, Approach, Results */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">The Challenge</h2>
                            <p className="text-gray-200 leading-relaxed">{caseStudy.challenge}</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Our Approach</h2>
                            <p className="text-gray-200 leading-relaxed">{caseStudy.approach}</p>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <TrendingUp className="w-6 h-6 mr-3" />
                            Key Results
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {caseStudy.results.map((result, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-200">{result}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <h2 className="text-2xl font-bold text-white mb-6">Client Testimonial</h2>
                        <blockquote className="text-xl text-gray-200 italic mb-6 leading-relaxed">
                            "{caseStudy.testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="text-white font-semibold">{caseStudy.testimonial.author}</div>
                                <div className="text-gray-300 text-sm">{caseStudy.testimonial.position}</div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default CaseStudyDetail;