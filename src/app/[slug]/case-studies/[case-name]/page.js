// app/[slug]/case-studies/[case-name]/page.js
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/CaseStudies/CaseStudyDetail";

// All case studies data
const allCaseStudies = [
    {
        id: 'seo',
        slug: 'seo-cake-company',
        title: 'Baking Up Success: How SEO Helped CountryOven Climb the Ranks',
        description: 'With targeted SEO efforts, CountryOven witnessed sustained traffic growth and 100% keyword visibility in 12 months.',
        client: 'CountryOven.com',
        industry: 'Bakery & E-commerce',
        location: 'Hyderabad, India',
        duration: 'Feb. 2015 - Ongoing',
        investment: '$50,000 to $199,999',
        monthlySpend: '$5,000 to $10,000 per month',
        overallScore: 4.0,
        ratings: {
            quality: 4.0,
            schedule: 4.5,
            cost: 3.5,
            wouldRefer: 4.5
        },
        services: ['Search Engine Optimization', 'Search Engine Marketing'],
        results: [
            'Achieved top rankings for all desired cake-related keywords',
            'Significant growth in search engine traffic year-over-year',
            'Cakes represent 80% of revenue with improved organic visibility',
            'Consistent monthly performance improvements'
        ],
        challenge: 'Within e-commerce, there are major channels for which we get visitors to the website. SEM [search engine marketing] has provided for a large reason for our traffic. Before ShootOrder, we did not have these kinds of results.',
        approach: 'ShootOrder helped achieve top positions for most cake-related keywords through strategic SEO and SEM services. They work closely with the technology team to implement required changes and maintain consistent communication.',
        testimonial: {
            quote: "I feel they're [ShootOrder] well-organized, stick to the timelines, and their promises. The head of ShootOrder is a young guy and is very hungry for business. He's always on the go.",
            author: "Vamseedhar Reddy",
            position: "CEO at CountryOven.com"
        },
        pdfUrl: '/pdfs/case-studies/seo/SEO_1.pdf',
        images: ['/api/placeholder/800/400', '/api/placeholder/600/300']
    },
    {
        id: 'seo',
        slug: 'seo-caravan-rental',
        title: 'On the Road to Success: How SEO Fueled Carawander’s Journey',
        description: 'With consistent SEO efforts, ShootOrder helped Carawander boost web-driven sales and profits by over 40% since 2021.',
        client: 'Carawander Pvt Ltd',
        industry: 'Hospitality & leisure',
        location: 'India',
        duration: 'Feb. 2021 - Ongoing',
        investment: 'Confidential',
        monthlySpend: 'Confidential',
        overallScore: 5.0,
        ratings: {
            quality: 4.0,
            schedule: 4.0,
            cost: 4.5,
            wouldRefer: 5.0
        },
        services: ['Content Marketing', 'Search Engine Optimization', 'Social Media Marketing'],
        results: [
            'Sales increased significantly',
            'Profits increased substantially',
            'Improved website performance and optimization',
            'Successful ongoing marketing campaigns'
        ],
        challenge: 'The client needed comprehensive digital services including website development, SEO optimization, and effective marketing strategies to grow their caravan and motorhome rental business.',
        approach: 'ShootOrder provided end-to-end services including website development, social media marketing campaigns, SEO optimization, and ongoing website updates. The team assigned 2-5 employees to handle different aspects of the project with dedicated project management.',
        testimonial: {
            quote: "They are goal-oriented and always ready to deliver the request at any time. Work dedication is great.",
            author: "Siddharth Arya Jolly",
            position: "CEO, Carawander Pvt Ltd"
        },
        pdfUrl: '/pdfs/case-studies/seo/SEO_2.pdf',
        images: ['/api/placeholder/800/400', '/api/placeholder/600/300']
    },
    {
        id: 'seo',
        slug: 'seo-travel-company',
        title: "Driven by Search: How SEO Accelerated a Travel Brand's Growth",
        description: 'Targeted SEO strategies helped a Dubai-based travel company boost lead generation and grow its business. ',
        client: 'Travel Company (Dubai)',
        industry: 'Hospitality & leisure',
        location: 'Dubai, United Arab Emirates',
        duration: 'Mar. 2018 - Ongoing',
        investment: '$10,000 to $49,999',
        monthlySpend: 'Around $15,000 total investment',
        overallScore: 4.0,
        ratings: {
            quality: 3.5,
            schedule: 3.5,
            cost: 4.0,
            wouldRefer: 5.0
        },
        services: ['Other Digital Marketing', 'Social Media Marketing', 'Web Development'],
        results: [
            'Significant growth in lead generation',
            'Improved lead conversion rates',
            'Enhanced business growth and customer feedback',
            'Complete website redesign on WordPress',
            'Successful social media campaigns on Facebook and Instagram'
        ],
        challenge: 'The client was looking for a kickstart in social media campaigns to grow their business on platforms like Facebook, Instagram, and Google. They also needed their creative collateral to meet professional standards.',
        approach: 'ShootOrder provided end-to-end social media digital platform services including planning promotions, creative timing decisions, target audience identification, Google Ads management, SEO, and complete WordPress website development with a new look and feel.',
        testimonial: {
            quote: "For anyone who wants to grow their business digitally, Shoot Order is a reliable company and cost-effective. ShootOrder used to come with a lot of their initiatives and established with a proper plan.",
            author: "Founder",
            position: "Travel Company CEO"
        },
        pdfUrl: '/pdfs/case-studies/seo/SEO_3.pdf',
        images: ['/api/placeholder/800/400', '/api/placeholder/600/300']
    },
    {
        id: 'google-ads',
        slug: 'ppc-edtech-company',
       title: 'Creative Content That Clicks: Social Success for an EHR Platform',
        description: 'With sharp Facebook and Google Ads tailored for India, ShootOrder helped ALPA Kids achieve 400K+ app downloads—proving big impact doesn’t need a big budget. ',
        client: 'ALPA Kids',
        industry: 'Software',
        location: 'Tallinn, Estonia',
        duration: 'Feb. 2021 - Ongoing',
        investment: 'Less than $10,000',
        monthlySpend: 'Very limited budget',
        overallScore: 5.0,
        ratings: {
            quality: 5.0,
            schedule: 5.0,
            cost: 5.0,
            wouldRefer: 5.0
        },
        services: ['Other Digital Marketing', 'Pay Per Click', 'Search Engine Optimization'],
        results: [
            '400,000 app downloads achieved in India',
            'Successful expansion from Estonia to Indian market',
            'Multiple high-quality video ads created',
            'Content suitable for both Indian and Estonian applications'
        ],
        challenge: 'ALPA Kids, successful in Estonia (70% of parents and 50% of kindergartens), needed to expand to the Indian market after being contacted by local kindergarten owners requiring digital teaching aids for Hindi language instruction.',
        approach: 'After evaluating multiple approaches, ShootOrder focused on running targeted Google and Facebook Ads campaigns while managing advertising accounts, creating ad creatives, and providing dedicated account management.',
        testimonial: {
            quote: "They have the best price-quality ratio. Lots of people helping the client to achieve their target. With our current budget and limitations they have worked wonders for us and we are very satisfied.",
            author: "Janek Jaago",
            position: "CCO, ALPA Kids"
        },
        pdfUrl: '/pdfs/case-studies/google-ads/PPC_1.pdf',
        images: ['/api/placeholder/800/400', '/api/placeholder/600/300']
    },
    {
        id: 'google-ads',
        slug: 'ppc-fertility-provider',
        title: 'How ShootOrder Boosted ROI for Oasis Fertility',
        description: 'Cost-effective lead generation with improved ROI',
        client: 'Oasis Fertility',
        industry: 'Healthcare',
        location: 'India',
        duration: 'Jan. 2018 - Ongoing',
        investment: 'Less than $10,000',
        monthlySpend: 'Cost-effective budget',
        overallScore: 4.5,
        ratings: {
            quality: 4.5,
            schedule: 4.5,
            cost: 5.0,
            wouldRefer: 5.0
        },
        services: ['Search Engine Optimization', 'Paid Campaigns Management'],
        results: [
            'Reduced cost per lead (CPL) to expected levels',
            'Increased return on investment (ROI)',
            'Improved lead quality and conversion',
            'Enhanced digital marketing performance across all channels'
        ],
        challenge: 'The fertility provider needed to generate more qualified leads at a lower cost per lead while maintaining quality and improving overall ROI from their digital marketing efforts.',
        approach: 'ShootOrder handled comprehensive digital marketing requirements including paid campaigns and SEO, with bi-monthly strategy meetings, website landing page optimization, and social media asset management with dedicated account management.',
        testimonial: {
            quote: "They reduced CPL and increased ROI. Cost effective, Good Performance.",
            author: "Sreeram Kandula",
            position: "Digital Marketing Manager, Oasis Fertility"
        },
        pdfUrl: '/pdfs/case-studies/google-ads/PPC_2.pdf',
        images: ['/api/placeholder/800/400', '/api/placeholder/600/300']
    },
    {
        id: 'google-ads',
        slug: 'ppc-health-wellness',
        title: 'Powering IPI Growth with Precision PPC',
        description: 'Complete digital transformation from offline to online presence',
        client: 'IPI India Pvt. Ltd.',
        industry: 'Consumer Products',
        location: 'Hyderabad, India',
        duration: 'May. 2019 - Ongoing',
        investment: '$10,000 to $49,999',
        monthlySpend: 'Around $1,500 per month plus ad spend',
        overallScore: 4.0,
        ratings: {
            quality: 4.0,
            schedule: 5.0,
            cost: 4.5,
            wouldRefer: 4.0
        },
        services: ['Search Engine Optimization', 'Google Ads Management', 'Social Media Marketing'],
        results: [
            'Online orders increased from $100 to $1,000 per month',
            'Achieved first page Google rankings for target keywords',
            'Significant increase in Facebook likes and impressions',
            'Successful integration with Amazon store for order tracking'
        ],
        challenge: 'International Pharmaceuticals Inc. (IPI India) was doing only offline marketing with no digital presence. They needed to extend their product offerings into the digital space and gain recognition online.',
        approach: 'ShootOrder provided comprehensive SEO and SEM services, Google Ads management, and social media management for Facebook, Instagram, and YouTube. They restructured the existing website, added relevant keywords, and aligned product offerings effectively.',
        testimonial: {
            quote: "They're pretty serious about their job, and they optimize the cash we give them. They identify parts of the media spend that are unnecessary and advise us about it.",
            author: "Nishanth Jain",
            position: "Brand Manager, IPI India Pvt. Ltd."
        },
        pdfUrl: '/pdfs/case-studies/by-service/PPC_3.pdf',
        images: ['/api/placeholder/800/400', '/api/placeholder/600/300']
    },
    {
        id: 'social-media-marketing',
        slug: 'smm-luxury-car-brand',
        title: 'How Strategic Social Media Marketing Fueled a Luxury Car Brand',
        description: 'With tailored campaigns and consistent engagement, ShootOrder elevated digital visibility and lead generation across key social platforms.',
        client: 'Luxury Car Dealership',
        industry: 'Automotive',
        location: 'Hyderabad, India',
        duration: 'Sep. 2016 - Ongoing',
        investment: 'Confidential',
        monthlySpend: 'Confidential',
        overallScore: 4.5,
        ratings: {
            quality: 4.5,
            schedule: 4.5,
            cost: 4.0,
            wouldRefer: 5.0
        },
        services: ['Social Media Marketing', 'Google Ads Management', 'Traditional Marketing'],
        results: [
            'Increased presence across multiple digital spaces',
            'Innovative lead generation and customer engagement strategies',
            'Quick content delivery and updates',
            'Streamlined budget optimization for lead generation'
        ],
        challenge: 'The luxury car dealership was looking for a comprehensive marketing agency to take over all their traditional marketing projects and enhance their digital presence.',
        approach: 'ShootOrder took over all traditional marketing projects including Google Ads and social media management, with a team of 4 people including CEO Rajat and project lead Naveen (Digital Marketing Consultant), providing weekly and fortnightly reports on keywords and social media activity.',
        testimonial: {
            quote: "ShootOrder has performed very well. In the digital space, ROI is very important. ShootOrder always encourages me to streamline the budget for generating leads. Their team looks at what's working and what isn't on different platforms.",
            author: "Marketing Manager",
            position: "Luxury Car Dealership"
        },
        pdfUrl: '/pdfs/case-studies/social-media-marketing/SMM_1.pdf',
        images: ['/api/placeholder/800/400', '/api/placeholder/600/300']
    },
    {
        id: 'social-media-marketing',
        slug: 'smm-auto-dealership',
        title: 'Driving Digital: How ShootOrder Steered Online Growth for an Auto Brand',
        description: 'Comprehensive digital platform optimization and management',
        client: 'Auto Dealership',
        industry: 'Automotive',
        location: 'Hyderabad, India',
        duration: 'Nov. 2019 - Ongoing',
        investment: '$50,000 to $199,999',
        monthlySpend: 'Around $100,000 total investment',
        overallScore: 5.0,
        ratings: {
            quality: 4.0,
            schedule: 4.0,
            cost: 5.0,
            wouldRefer: 5.0
        },
        services: ['Other Digital Marketing', 'SEO', 'PPC', 'Google Business Management'],
        results: [
            'Digital campaigns attract 20% of total bookings',
            'Significant boost in SEO performance on search results',
            'Increased traffic and inquiries for vehicle bookings',
            'Monthly auditing and continuous improvement implemented'
        ],
        challenge: 'The auto dealership needed someone to comprehensively manage their digital platforms to attract more customers and improve their online presence.',
        approach: 'ShootOrder manages all digital platforms including SEO, PPC, and Google business assets with a 3-person team, conducting monthly audits and improvements while working independently after initial guidance.',
        testimonial: {
            quote: "They're quite professional in their approach. We've been happy so far because their digital campaigns attract traffic and inquiries for booking our vehicles. Their work accounts for about 20% of our bookings.",
            author: "Managing Director",
            position: "Auto Dealership"
        },
        pdfUrl: '/pdfs/case-studies/social-media-marketing/SMM_2.pdf',
        images: ['/api/placeholder/800/400', '/api/placeholder/600/300']
    },
    {
        id: 'social-media-marketing',
        slug: 'smm-it-services',
       title: 'Creative Content That Clicks: Social Success for an EHR Platform',
        description: 'Strategic social media promotion for EHR platform',
        client: 'Orchasp Limited',
        industry: 'IT Services',
        location: 'Hyderabad, India',
        duration: 'Apr. 2025 - Ongoing',
        investment: 'Less than $10,000',
        monthlySpend: 'Around 30,000 Indian rupees per month',
        overallScore: 4.0,
        ratings: {
            quality: 3.5,
            schedule: 3.0,
            cost: 3.0,
            wouldRefer: 4.0
        },
        services: ['Content Marketing', 'Social Media Marketing'],
        results: [
            'Increased website traffic',
            'Impressive visuals and videos created',
            'Multiple content formats: static posts, carousels, and videos',
            'Scheduled content posting across Facebook, Instagram, and LinkedIn'
        ],
        challenge: 'Orchasp Limited built an electronic health record platform and wanted to market it effectively on social media to reach prospective customers.',
        approach: 'ShootOrder created social media accounts on Facebook, Instagram, and LinkedIn, developed three different content versions (static posts, carousels, and videos) to educate customers about the EHR platform, with scheduled posting and WhatsApp/Google Meet communication.',
        testimonial: {
            quote: "The visuals and videos they've created are impressive. ShootOrder has done a good job on the visuals and creative work.",
            author: "Chandra Sekhar Pattapurathi",
            position: "Managing Director & CEO, Orchasp Limited"
        },
        pdfUrl: '/pdfs/case-studies/social-media-marketing/SMM_3.pdf',
        images: ['/api/placeholder/800/400', '/api/placeholder/600/300']
    }
];

export async function generateStaticParams() {
    // Generate all possible combinations of service slugs and case study slugs
    const params = [];

    const serviceTypes = ['seo', 'google-ads', 'social-media-marketing'];

    allCaseStudies.forEach(study => {
        serviceTypes.forEach(serviceType => {
            if (study.id === serviceType) {
                params.push({
                    slug: serviceType,
                    'case-name': study.slug
                });
            }
        });
    });

    return params;
}

export async function generateMetadata({ params }) {
    const caseStudy = allCaseStudies.find(
        study => study.slug === params['case-name'] && study.id === params.slug
    );

    if (!caseStudy) {
        return {
            title: "Case Study Not Found",
        };
    }

    return {
        title: `${caseStudy.title} | ShootOrder Case Study`,
        description: caseStudy.description,
    };
}

function getCaseStudyBySlug(serviceSlug, caseSlug) {
    return allCaseStudies.find(
        study => study.slug === caseSlug && study.id === serviceSlug
    );
}

export default async function CaseStudyPage({ params }) {
    const caseStudy = getCaseStudyBySlug(params.slug, params['case-name']);

    if (!caseStudy) {
        notFound();
    }

    return <CaseStudyDetail caseStudy={caseStudy} serviceSlug={params.slug} />;
}