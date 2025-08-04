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
  DollarSign,
  Award,
  Clock,
  Users,
} from 'lucide-react';

// This would typically come from your CMS or API
const caseStudyData = {
  // healthcare: {
  //   title: "Healthcare Digital Transformation",
  //   client: "MedTech Solutions",
  //   industry: "Healthcare",
  //   date: "2024",
  //   heroImage: "/api/placeholder/1200/600",
  //   challenge:
  //     "MedTech Solutions needed to digitize their patient management system and improve online presence to compete with larger healthcare providers.",
  //   solution:
  //     "We implemented a comprehensive digital strategy including a modern website, patient portal, SEO optimization, and social media marketing.",
  //   results: [
  //     {
  //       metric: "Patient Engagement",
  //       value: "150%",
  //       description: "Increase in online patient interactions",
  //     },
  //     {
  //       metric: "Website Traffic",
  //       value: "200%",
  //       description: "Growth in organic website visits",
  //     },
  //     {
  //       metric: "Appointment Bookings",
  //       value: "180%",
  //       description: "Rise in online appointment scheduling",
  //     },
  //     {
  //       metric: "Patient Satisfaction",
  //       value: "95%",
  //       description: "Overall satisfaction rating",
  //     },
  //   ],
  //   testimonial: {
  //     quote:
  //       "The transformation exceeded our expectations. Our patient engagement has never been higher, and the streamlined processes have improved our efficiency dramatically.",
  //     author: "Dr. Sarah Johnson",
  //     position: "Chief Medical Officer, MedTech Solutions",
  //   },
  //   services: [
  //     "Web Development",
  //     "SEO",
  //     "Social Media Marketing",
  //     "UI/UX Design",
  //   ],
  //   timeline: "6 months",
  //   tags: ["Healthcare", "Digital Transformation", "Patient Engagement"],
  // },
  // "fashion-beauty": {
  //   title: "Fashion & Beauty Brand Elevation",
  //   client: "Glamour Cosmetics",
  //   industry: "Fashion & Beauty",
  //   date: "2024",
  //   heroImage: "/api/placeholder/1200/600",
  //   challenge:
  //     "Glamour Cosmetics was struggling to stand out in the competitive beauty market and needed to increase brand awareness and online sales.",
  //   solution:
  //     "We developed an influencer marketing strategy, redesigned their e-commerce platform, and launched targeted social media campaigns.",
  //   results: [
  //     {
  //       metric: "Online Sales",
  //       value: "300%",
  //       description: "Growth in e-commerce revenue",
  //     },
  //     {
  //       metric: "Social Followers",
  //       value: "250%",
  //       description: "Increase across all platforms",
  //     },
  //     {
  //       metric: "Brand Awareness",
  //       value: "180%",
  //       description: "Improvement in brand recognition",
  //     },
  //     {
  //       metric: "Customer Retention",
  //       value: "220%",
  //       description: "Increase in repeat customers",
  //     },
  //   ],
  //   testimonial: {
  //     quote:
  //       "Our brand has never looked better! The team understood our vision and executed it flawlessly. Sales have skyrocketed and our community is more engaged than ever.",
  //     author: "Maria Rodriguez",
  //     position: "Brand Director, Glamour Cosmetics",
  //   },
  //   services: [
  //     "E-commerce Development",
  //     "Influencer Marketing",
  //     "Social Media Strategy",
  //     "Brand Design",
  //   ],
  //   timeline: "4 months",
  //   tags: ["Beauty", "E-commerce", "Influencer Marketing"],
  // },
  // "ecommerce-retail": {
  //   title: "E-commerce & Retail Revolution",
  //   client: "RetailMax",
  //   industry: "E-commerce & Retail",
  //   date: "2024",
  //   heroImage: "/api/placeholder/1200/600",
  //   challenge:
  //     "RetailMax needed to modernize their outdated e-commerce platform and compete with major online retailers.",
  //   solution:
  //     "We built a modern, scalable e-commerce platform with advanced analytics, personalization features, and mobile optimization.",
  //   results: [
  //     {
  //       metric: "Revenue Growth",
  //       value: "250%",
  //       description: "Increase in online revenue",
  //     },
  //     {
  //       metric: "Page Load Speed",
  //       value: "70%",
  //       description: "Improvement in loading times",
  //     },
  //     {
  //       metric: "Mobile Conversions",
  //       value: "320%",
  //       description: "Boost in mobile sales",
  //     },
  //     {
  //       metric: "Customer Satisfaction",
  //       value: "92%",
  //       description: "Overall satisfaction score",
  //     },
  //   ],
  //   testimonial: {
  //     quote:
  //       "The new platform has completely transformed our business. We're now competing with the big players and winning!",
  //     author: "James Wilson",
  //     position: "CEO, RetailMax",
  //   },
  //   services: [
  //     "E-commerce Development",
  //     "Mobile Optimization",
  //     "Analytics Setup",
  //     "Performance Optimization",
  //   ],
  //   timeline: "8 months",
  //   tags: ["E-commerce", "Retail", "Mobile Optimization"],
  // },
  // "it-technology": {
  //   title: "IT & Technology Startup Growth",
  //   client: "TechInnovate",
  //   industry: "IT & Technology",
  //   date: "2024",
  //   heroImage: "/api/placeholder/1200/600",
  //   challenge:
  //     "TechInnovate needed to establish market presence and acquire users for their new SaaS platform.",
  //   solution:
  //     "We created a comprehensive digital marketing strategy including content marketing, SEO, PPC campaigns, and social media presence.",
  //   results: [
  //     {
  //       metric: "User Acquisition",
  //       value: "400%",
  //       description: "Increase in platform users",
  //     },
  //     {
  //       metric: "Lead Generation",
  //       value: "350%",
  //       description: "Growth in qualified leads",
  //     },
  //     {
  //       metric: "Brand Awareness",
  //       value: "280%",
  //       description: "Improvement in brand recognition",
  //     },
  //     {
  //       metric: "Revenue Growth",
  //       value: "450%",
  //       description: "Increase in monthly revenue",
  //     },
  //   ],
  //   testimonial: {
  //     quote:
  //       "Thanks to their strategic approach, we've grown from a startup to a recognized player in our industry within months.",
  //     author: "Sarah Chen",
  //     position: "Founder, TechInnovate",
  //   },
  //   services: [
  //     "Digital Marketing",
  //     "SEO Optimization",
  //     "PPC Campaigns",
  //     "Content Strategy",
  //   ],
  //   timeline: "5 months",
  //   tags: ["Technology", "SaaS", "Digital Marketing"],
  // },
  // seo: {
  //   title: "SEO Transformation Success",
  //   client: "Multiple Clients",
  //   industry: "Various Industries",
  //   date: "2024",
  //   heroImage: "/api/placeholder/1200/600",
  //   challenge:
  //     "Various clients were struggling with poor search engine visibility and needed to improve their organic traffic and rankings.",
  //   solution:
  //     "We implemented comprehensive SEO strategies including technical optimization, content marketing, link building, and local SEO.",
  //   results: [
  //     {
  //       metric: "Organic Traffic",
  //       value: "400%",
  //       description: "Average increase across clients",
  //     },
  //     {
  //       metric: "Keyword Rankings",
  //       value: "300%",
  //       description: "Improvement in top 10 rankings",
  //     },
  //     {
  //       metric: "Conversion Rate",
  //       value: "180%",
  //       description: "Increase in organic conversions",
  //     },
  //     {
  //       metric: "Revenue Growth",
  //       value: "250%",
  //       description: "Boost in organic revenue",
  //     },
  //   ],
  //   testimonial: {
  //     quote:
  //       "Our organic traffic has never been higher. The SEO strategy delivered results beyond our expectations.",
  //     author: "Multiple Clients",
  //     position: "Various Industries",
  //   },
  //   services: [
  //     "Technical SEO",
  //     "Content Optimization",
  //     "Link Building",
  //     "Local SEO",
  //   ],
  //   timeline: "3-6 months",
  //   tags: ["SEO", "Organic Traffic", "Content Marketing"],
  // },
  // ppc: {
  //   title: "PPC Campaign Excellence",
  //   client: "Digital Commerce Co.",
  //   industry: "E-commerce",
  //   date: "2024",
  //   heroImage: "/api/placeholder/1200/600",
  //   challenge:
  //     "Digital Commerce Co. was wasting budget on ineffective PPC campaigns with poor ROI and high cost per acquisition.",
  //   solution:
  //     "We restructured their PPC campaigns with better targeting, optimized ad copy, improved landing pages, and advanced bid strategies.",
  //   results: [
  //     {
  //       metric: "Conversion Rate",
  //       value: "250%",
  //       description: "Improvement in campaign conversions",
  //     },
  //     {
  //       metric: "Cost Per Click",
  //       value: "40%",
  //       description: "Reduction in average CPC",
  //     },
  //     {
  //       metric: "Return on Ad Spend",
  //       value: "350%",
  //       description: "Increase in ROAS",
  //     },
  //     {
  //       metric: "Quality Score",
  //       value: "60%",
  //       description: "Improvement in ad quality",
  //     },
  //   ],
  //   testimonial: {
  //     quote:
  //       "Our PPC campaigns are now profitable and scalable. The ROI improvement has been incredible.",
  //     author: "Mike Thompson",
  //     position: "Marketing Director, Digital Commerce Co.",
  //   },
  //   services: [
  //     "PPC Management",
  //     "Landing Page Optimization",
  //     "Ad Copy Creation",
  //     "Bid Strategy",
  //   ],
  //   timeline: "3 months",
  //   tags: ["PPC", "Google Ads", "Conversion Optimization"],
  // },
  // below is the updated case studies
 "ppc-fertility-provider": {
  title: "Digital Marketing for Fertility Provider",
  client: "Oasis Fertility",
  industry: "Healthcare",
  date: "Jan. 2018 - Ongoing",
  heroImage: "",
  
  // Project Details from PDF
  projectType: "Search Engine Optimization",
  budget: "Less than $10,000",
  monthlySpend: "Less than $10,000",
  duration: "7+ years (Ongoing)",
  location: "India",
  
  // Client Information
  clientCEO: "Sreeram Kandula",
  clientTitle: "Digital Marketing Manager, Oasis Fertility",
  clientIndustry: "Healthcare",
  
  // Ratings from PDF
  ratings: {
    overall: 4.5,
    quality: 4.5,
    schedule: 4.5,
    cost: 5.0,
    wouldRefer: 5.0
  },
  
  // Business Description from PDF
  businessDescription: "Digital Marketing Manager - Point of contact for all Online efforts and Business generation.",
  
  // Background context
  backgroundContext: "",
  
  challenge: "Handle paid campaigns and SEO",
  
  // Approach/Solution from PDF
  approach: "By interviewing multiple agencies and evaluating on internal KPI's",
  
  solution: "Have to handle our digital marketing requirements on 360. meet ups every month twice to discuss the strategy, performance and upcoming plans and budgets. Work on website landing pages and social media asset management.",
  
  // How they found ShootOrder
  howFound: "By interviewing multiple agencies and evaluating on internal KPI's",
  
  // Team composition
  teamComposition: "An dedicated account manager and team under him to take care of our requirement.",
  
  // Meeting frequency
  meetingSchedule: "meet ups every month twice to discuss the strategy, performance and upcoming plans and budgets",
  
  // Outcomes from PDF
  outcomes: [
    "Reduced CPL to the expected and increased ROI",
    "Our internal efforts to those leads helped us to get good resuts"
  ],
  
  results: [
    {
      metric: "Cost Per Lead",
      value: "Reduced",
      description: "Cost per lead was reduced",
    },
    {
      metric: "Return on Investment",
      value: "Increased",
      description: "Return on investment was increased because of ShootOrder",
    }
  ],
  
  // Workflow feedback from PDF
  workflow: "Whatsapp and Regular Call",
  
  // What was impressive from PDF
  impressive: "COst effective, Good Performance",
  
  // Areas for improvement from PDF
  improvements: "Finishing jobs in deadlines",
  
  testimonial: {
    quote: "They reduced CPL and increased ROI.",
    author: "Sreeram Kandula",
    position: "Digital Marketing Manager, Oasis Fertility",
  },
  
  services: [
    "Paid Campaigns",
    "Search Engine Optimization",
    "Website Landing Pages",
    "Social Media Management"
  ],
  
  timeline: "Jan. 2018 - Ongoing",
  tags: ["Healthcare", "Fertility", "Lead Generation"],
  
  // Measurement from PDF
  measurement: "Cost per lead was reduced and the return on investment was increased because of ShootOrder. Their team was cost-effective and performed well, although they could finish the jobs more within deadlines.",
},
  "ppc-edtech-company": {
 title: "Facebook & Google Ads Campaign for EdTech Company",
 client: "ALPA Kids",
 industry: "Software",
 date: "Feb. 2021 - Ongoing",
 heroImage: "",
 
 // Project Details from PDF
 projectType: "Other Digital Marketing, Pay Per Click, Search Engine Optimization",
 budget: "Less than $10,000",
 monthlySpend: "Very limited budget",
 duration: "3+ years (Ongoing)",
 location: "Tallinn, Estonia",
 
 // Client Information
 clientCEO: "Janek Jaago",
 clientTitle: "CCO, ALPA Kids",
 clientIndustry: "Software",
 
 // Ratings from PDF
 ratings: {
   overall: 5.0,
   quality: 5.0,
   schedule: 5.0,
   cost: 5.0,
   wouldRefer: 5.0
 },
 
 // Business Description from PDF
 businessDescription: "I´m the CCO of EdTech startup ALPA Kids. ALPA Kids is creating educational mobile applications for children aged 3-8, their parents and teachers to help children learn the essentials like colors, numbers, the alphabet, local flora and fauna etc. through the examples of their own culture and local nature.",
 
 // Background context
 backgroundContext: "Our application is being used by 70% of Estonian parents (Europe´s PISA #1 country) and 50 % of local kindergartens. After the success and many Governmental awards in Estonia, ALPA Kids decided to expand to India because we were contacted by local kindergarten owners who needed a good digital teaching aid to teach Hindi language in Indian kindergartens.",
 
 challenge: "We decided that the best way to rise awareness on Indian market is to hire local digital marketing agency for local campaigns and expansions projects.",
 
 // Approach/Solution from PDF
 approach: "We went through lots of different possibilities to rise awareness about our app but in the end the one that worked the best and still works the best is running Google and Facebook Ads. Shootorder manages those advertising accounts and also creates the creatives for the ads.",
 
 solution: "ShootOrder is helping an EdTech firm leverage digital marketing to raise awareness and expand their reach in India. They manage the client's Facebook and Google Ads accounts and produce creative for the ads.",
 
 // How they found ShootOrder
 howFound: "We used Clutch and Google to create a shortlist of suitable companies and after having several meetings with them we decided to hire Shootorder.",
 
 // Team composition
 teamComposition: "We have worked with several different people in the company but the main contact is our own Account Manager that we can contact any time and who always caters to our needs.",
 
 // Meeting frequency
 meetingSchedule: "We do as many meetings as we need on current phase of expansions. It has changed over the time and at the moment we have a recurring standup meeting in every two weeks.",
 
 // Outcomes from PDF
 outcomes: [
   "We have grown to 400k downloads with our app in India with very limited budget",
   "We have received several good videoads not only to our Indian application but also to our Estonian version"
 ],
 
 results: [
   {
     metric: "App Downloads",
     value: "400,000",
     description: "Achieved 400k downloads in India with very limited budget",
   },
   {
     metric: "Market Expansion",
     value: "Successful",
     description: "Successfully expanded from Estonia to Indian market",
   },
   {
     metric: "Creative Assets",
     value: "Multiple",
     description: "Received several good video ads for both Indian and Estonian versions",
   },
   {
     metric: "Awareness Campaign",
     value: "Effective",
     description: "Successfully raised awareness in Indian market through targeted campaigns",
   },
 ],
 
 // Workflow feedback from PDF
 workflow: "Everything works smooth.",
 
 // What was impressive from PDF
 impressive: "They have the best price-quality ratio. Lots of people helping the client to achieve their target.",
 
 // Areas for improvement from PDF
 improvements: "With our current budget and limitations they have worked wonders for us and we are very satisfied.",
 
 testimonial: {
   quote: "They have the best price-quality ratio. Lots of people helping the client to achieve their target.",
   author: "Janek Jaago",
   position: "CCO, ALPA Kids",
 },
 
 services: [
   "Google Ads Management",
   "Facebook Ads Management",
   "Creative Production",
   "Video Ad Creation",
   "Digital Marketing Strategy",
   "Market Expansion Support",
   "Account Management"
 ],
 
 timeline: "Feb. 2021 - Ongoing",
 tags: ["EdTech", "Educational Apps", "Children Learning"],
 
 // Measurement from PDF
 measurement: "Despite the limited budget, ShootOrder has helped the client record 400,000 app downloads in India. They've also delivered several good video ads that the client can use for both their Indian and Estonian apps. Moreover, they facilitate a smooth workflow and hold bi-weekly standup meetings.",
},
 "ppc-health-wellness": {
  title: "SEO, PPC, Social Media Marketing for Health & Wellness Firm",
  client: "IPI India Pvt. Ltd.",
  industry: "Consumer Products",
  date: "May. 2019 - Ongoing",
  heroImage: "",
  
  // Project Details from PDF
  projectType: "Search Engine Optimization",
  budget: "$10,000 to $49,999",
  monthlySpend: "around $1,500 a month",
  duration: "5+ years (Ongoing)",
  location: "Hyderabad, India",
  
  // Client Information
  clientCEO: "Nishanth Jain",
  clientTitle: "Brand Manager, IPI India Pvt. Ltd.",
  clientIndustry: "Consumer Products",
  
  // Ratings from PDF
  ratings: {
    overall: 4.0,
    quality: 4.0,
    schedule: 5.0,
    cost: 4.5,
    wouldRefer: 4.0
  },
  
  // Business Description from PDF
  businessDescription: "I'm the brand manager for IPI India, which stands for International Pharmaceuticals, Inc. I'm in charge of marketing, advertising, and branding.",
  
  // Background context
  backgroundContext: "Before working with ShootOrder, we were only doing offline marketing — nothing on the digital front. We scouted a few agencies that could help us gain recognition in the digital world, and selected ShootOrder.",
  
  challenge: "The main challenge was extending our product offerings in the digital space.",
  
  // Approach/Solution from PDF
  approach: "We made a search on Google and interviewed a few agencies, but they either weren't clear on the deliverables or were very expensive. We found ShootOrder after interviewing 3–4 agencies. They were reasonable in terms of cost, and they could offer the services we wanted.",
  
  solution: "ShootOrder has provided SEO and SEM, Google Ads management, and social media management. The ads roll into our Amazon store, so we can track the growth of our order rates. For now, they're managing our Facebook, Instagram, and YouTube profiles. We had a basic website that was done one and a half years back. ShootOrder added relevant keywords to it, changed its structure, and aligned the product offerings in a very convincing manner.",
  
  // How they found ShootOrder
  howFound: "We made a search on Google and interviewed a few agencies",
  
  // Team composition
  teamComposition: "I'm in regular touch with 5–6 people from their team. We have two brands, each with its own account manager, and they have teams for Google Ads, SEO, and SEM.",
  
  // Meeting frequency
  meetingSchedule: "We have a weekly call with them to discuss analytics, and we visit each other at our offices once a month for a review meeting. We discuss any shortcomings and improvements, and what has transpired in the last period.",
  
  // Outcomes from PDF
  outcomes: [
    "We've seen an increase in Facebook likes and impressions",
    "our online orders have increased from around $100 to $1,000 per month",
    "We're on the first page of Google for certain keywords as well"
  ],
  
  results: [
    {
      metric: "Online Orders",
      value: "10x increase",
      description: "Online orders increased from around $100 to $1,000 per month",
    },
    {
      metric: "Social Media Engagement",
      value: "Increased",
      description: "Increase in Facebook likes and impressions",
    },
    {
      metric: "Search Rankings",
      value: "First Page",
      description: "On the first page of Google for certain keywords",
    }
  ],
  
  // Workflow feedback from PDF
  workflow: "They share Excel reports with us through Google Drive, covering all the metrics. Their team also prepares documentation for the monthly review meeting, which makes everything easy to understand. There are technical aspects I wouldn't understand if they didn't frame them in laymen's terms.",
  
  // What was impressive from PDF
  impressive: "They're pretty serious about their job, and they optimize the cash we give them. They identify parts of the media spend that are unnecessary and advise us about it.",
  
  // Areas for improvement from PDF
  improvements: "Their creative execution could be improved, in terms of social media posts. It's just about mediocre, and I think it could be improved.",
  
  testimonial: {
    quote: "They're pretty serious about their job, and they optimize the cash we give them.",
    author: "Nishanth Jain",
    position: "Brand Manager, IPI India Pvt. Ltd.",
  },
  
  services: [
    "SEO and SEM",
    "Google Ads Management",
    "Social Media Management",
    "Facebook Management",
    "Instagram Management", 
    "YouTube Management",
    "Website Optimization"
  ],
  
  timeline: "May. 2019 - Ongoing",
  tags: ["Health & Wellness", "Consumer Products", "Digital Transformation"],
  
  // Measurement from PDF
  measurement: "Social media engagement and online-based revenue have increased significantly since ShootOrder came onboard. They provide detail-oriented project management through extensive documentation and use of Google Drive technologies. Customers can expect a cost-conscious partner.",
},  
  // seo
  "seo-cake-company": {
    title: "SEO for Cake Company",
    client: "CountryOven.com",
    industry: "Bakery & E-commerce",
    date: "Feb. 2015 - Ongoing",
    heroImage: "",

    // Project Details from PDF
    projectType: "Search Engine Optimization",
    budget: "$50,000 to $199,999",
    monthlySpend: "$5,000 to $10,000 per month",
    duration: "1.5+ years (Ongoing)",
    location: "Hyderabad, India",

    // Client Information
    clientCEO: "Vamseedhar Reddy",
    clientTitle: "CEO at CountryOven.com",
    clientIndustry: "IT Services",

    // Ratings from PDF
    ratings: {
      overall: 4.0,
      quality: 4.0,
      schedule: 4.5,
      cost: 3.5,
      wouldRefer: 4.5
    },

    // Business Description from PDF
    businessDescription: "CountryOven.com is in the bakery business. One of our verticals is the e-commerce vertical, where we provide gifting for consumers where people can buy gifts for their family and friends online.",

    challenge: "Within e-commerce, there are major channels for which we get visitors to the website. SEM [search engine marketing] has provided for a large reason for our traffic. Before ShootOrder, we did not have these kinds of results.",

    // Approach/Solution from PDF
    approach: "We work with them on SEO. They have helped us do much better in terms of ranking for specific keywords. They have helped us reach the top position for most of the cake related keywords. Cakes are more than 80% of our revenue. The services they are providing are SEO and SEM.",

    solution: "ShootOrder helped achieve top positions for most cake-related keywords through strategic SEO and SEM services. They work closely with the technology team to implement required changes and maintain consistent communication.",

    // Outcomes from PDF
    outcomes: [
      "Reached top position for most cake-related keywords",
      "Good growth in search engine traffic year-over-year",
      "Much better numbers compared to before ShootOrder",
      "Cakes represent more than 80% of revenue with improved rankings"
    ],

    results: [
      {
        metric: "Keyword Rankings",
        value: "Top Position",
        description: "Achieved top rankings for all desired cake-related keywords",
      },
      {
        metric: "Search Traffic",
        value: "Significant Growth",
        description: "Good growth in search engine traffic year-over-year",
      },
      {
        metric: "Revenue Impact",
        value: "80%+",
        description: "Cakes represent 80% of revenue with improved organic visibility",
      },
      {
        metric: "Performance",
        value: "Ongoing Success",
        description: "Consistent monthly performance improvements over 1.5+ years",
      },
    ],

    // Project Management feedback from PDF
    projectManagement: "I feel they're well-organized, stick to the timelines, and their promises. They're very prompt. I email them and they respond quickly.",

    // What was impressive from PDF
    impressive: "The head of ShootOrder is a young guy and is very hungry for business. He's always on the go. He makes sure that he talks to our team about the feedback once a month to make sure we are happy with them. They also have a very good knowledge of their core business - SEO. They constantly work with our technology team about the new changes that are required.",

    // Areas for improvement from PDF
    improvements: "They could get into other areas of digital marketing. We haven't worked with them in other areas.",

    testimonial: {
      quote: "I feel they're [ShootOrder] well-organized, stick to the timelines, and their promises. The head of ShootOrder is a young guy and is very hungry for business. He's always on the go.",
      author: "Vamseedhar Reddy",
      position: "CEO at CountryOven.com",
    },

    services: [
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)"
    ],

    timeline: "Feb. 2015 - Ongoing",
    tags: ["Bakery", "Delicious Cakes", "E-commerce"],

    // Measurement from PDF
    measurement: "We use Google Analytics to measure metrics. There has been good growth in our search engine traffic over a year on year basis. The numbers are much better now.",
  },
  "seo-caravan-rental": {
    title: "Web Dev, SEO & Marketing for Caravan Rental Company",
    client: "Carawander Pvt Ltd",
    industry: "Hospitality & leisure",
    date: "Feb. 2021 - Ongoing",
    heroImage: "",

    // Project Details from PDF
    projectType: "Content Marketing, Search Engine Optimization, Social Media Marketing",
    budget: "Confidential",
    monthlySpend: "Confidential",
    duration: "3+ years (Ongoing)",
    location: "India",

    // Client Information
    clientCEO: "Siddharth Arya Jolly",
    clientTitle: "CEO, Carawander Pvt Ltd",
    clientIndustry: "Hospitality & leisure",

    // Ratings from PDF
    ratings: {
      overall: 5.0,
      quality: 4.0,
      schedule: 4.0,
      cost: 4.5,
      wouldRefer: 5.0
    },

    // Business Description from PDF
    businessDescription: "We provide caravans and motorhomes on rent.",

    challenge: "Making website, SEO, Marketing",

    // Approach/Solution from PDF
    approach: "Website Development. Social media marketing in the starting and then later on they helped in optimisation of SEO. They help in updating the website and are continuing marketing work for the company.",

    solution: "ShootOrder provides website development, SEO, and marketing services for a caravan rental company. The team updates the client's website, handles SMM campaigns, and augments the client's SEO efforts.",

    // How they found ShootOrder
    howFound: "Online Search",

    // Why selected ShootOrder
    whySelected: [
      "High ratings",
      "Pricing fit our budget",
      "Good value for cost"
    ],

    // Team size
    teamSize: "2-5 Employees",

    // Outcomes from PDF
    outcomes: [
      "Sales increased",
      "Profits increased"
    ],

    results: [
      {
        metric: "Sales Performance",
        value: "Increased",
        description: "Sales increased significantly after implementation",
      },
      {
        metric: "Profit Margins",
        value: "Increased",
        description: "Profits increased as a result of improved marketing and SEO",
      },
      {
        metric: "Website Performance",
        value: "Enhanced",
        description: "Complete website development and ongoing updates",
      },
      {
        metric: "Online Presence",
        value: "Optimized",
        description: "SEO optimization and social media marketing campaigns",
      },
    ],

    // Project Management feedback from PDF
    projectManagement: "Ravi is my project manager. He is very sincere and Hardworking. Yes they deliver everything on time. They respond everything on time.",

    // Communication methods from PDF
    communicationMethods: [
      "Virtual Meeting",
      "Email or Messaging App"
    ],

    // What was impressive from PDF
    impressive: "They are goal-oriented and always ready to deliver the request at any time. Work dedication is great",

    // Areas for improvement from PDF
    improvements: "Nothing at the moment regarding to my project needs",

    testimonial: {
      quote: "They are goal-oriented and always ready to deliver the request at any time. Work dedication is great",
      author: "Siddharth Arya Jolly",
      position: "CEO, Carawander Pvt Ltd",
    },

    services: [
      "Website Development",
      "Search Engine Optimization (SEO)",
      "Content Marketing",
      "Social Media Marketing"
    ],

    timeline: "Feb. 2021 - Ongoing",
    tags: ["Caravan Rental", "Motorhomes", "Hospitality"],

    // Measurement from PDF
    measurement: "With the help of ShootOrder, the client's sales and profit have increased. The goal-oriented team delivers tasks on time and is responsive to queries.",
  },
  "seo-travel-company": {
    title: "Digital Marketing, SEO & Web Dev for Travel Company",
    client: "Travel Company",
    industry: "Hospitality & leisure",
    date: "Mar. 2018 - Ongoing",
    heroImage: "",

    // Project Details from PDF
    projectType: "Other Digital Marketing, Social Media Marketing, Web Development",
    budget: "$10,000 to $49,999",
    monthlySpend: "Around $15,000 total investment",
    duration: "6+ years (Ongoing)",
    location: "Dubai, United Arab Emirates",

    // Client Information
    clientCEO: "Founder, Travel Company",
    clientTitle: "Founder and CEO of a travel company",
    clientIndustry: "Hospitality & leisure",

    // Ratings from PDF
    ratings: {
      overall: 4.0,
      quality: 3.5,
      schedule: 3.5,
      cost: 4.0,
      wouldRefer: 5.0
    },

    // Business Description from PDF
    businessDescription: "I'm the founder and CEO of a travel company. We are a very professional leisure travel company and specialized in what we do. We take more of a consultative approach if people are looking for a destination, what to do, what to eat, and where to go. We are specialized in that.",

    challenge: "I was looking for a kickstart in social media campaigns to grow my business on platforms like Facebook, Instagram, and Google. Also, our creative collateral had to be up to the standard.",

    // Approach/Solution from PDF
    approach: "ShootOrder provided end-to-end social media digital platform services to us in terms of planning promotions on social media, deciding the timing in terms of creativity, and identifying what should go into the creative. They also helped us identify and make efforts to reach our target audience. Their team handles Google Ads and SEO. They also built our website on WordPress. We had an existing website, but they did a completely new look and feel.",

    solution: "ShootOrder provides SEO & digital marketing services for a travel company. After identifying a target audience, they run campaigns on the partner's Facebook and Instagram as well as manage their Google Ads.",

    // How they found ShootOrder
    howFound: "I was introduced to them by one of my close friends who is very hands-on in terms of their e-commerce business. He had worked with ShootOrder in the past.",

    // Team composition
    teamComposition: "I work directly with one person who is my main point of contact. The owner is involved if a very high level of discussion is required.",

    // Total investment
    totalInvestment: "I've spent around $15,000.",

    // Outcomes from PDF
    outcomes: [
      "Their team delivered the results in terms of lead generation",
      "We get good feedback from our customers",
      "Have seen growth in the business and leads",
      "My team was able to convert those leads into business"
    ],

    results: [
      {
        metric: "Lead Generation",
        value: "Increased",
        description: "Delivered results in terms of lead generation with growth in business",
      },
      {
        metric: "Lead Conversion",
        value: "Improved",
        description: "Lead conversion rate has increased significantly",
      },
      {
        metric: "Business Growth",
        value: "Enhanced",
        description: "Seen growth in the business and leads with good customer feedback",
      },
      {
        metric: "Target Audience",
        value: "Optimized",
        description: "Successfully reaches the correct target audience through strategic campaigns",
      },
    ],

    // Project Management feedback from PDF
    projectManagement: "They give us weekly, bi-monthly, and monthly reports. We have discussions based on how our campaign is performing and what the future looks like. We do strategic planning with ShootOrder as well.",

    // What was impressive from PDF
    impressive: "ShootOrder used to come with a lot of their initiatives and established with a proper plan. They have hands-on experience in terms of reach, Google Ads, who to target, how much the budget should be, as well as the timing of the promotions. They have expertise in those areas.",

    // Areas for improvement from PDF
    improvements: "Their time management needs to improve. If the timelines are set, they need to deliver within that time because time is very precious in terms of business. If I'm to launch a campaign on a particular date, it cannot be delayed. They always deliver good quality, but they need to deliver within the set times.",

    // Advice for potential customers
    advice: "I'd definitely recommend them to others so they can benefit from their expertise. For anyone who wants to grow their business digitally, Shoot Order is a reliable company and cost-effective as well.",

    testimonial: {
      quote: "For anyone who wants to grow their business digitally, Shoot Order is a reliable company and cost-effective.",
      author: "Founder, Travel Company",
      position: "Founder and CEO of a travel company",
    },

    services: [
      "Social Media Marketing (Facebook & Instagram)",
      "Google Ads Management",
      "Search Engine Optimization (SEO)",
      "Web Development (WordPress)",
      "Digital Marketing Strategy",
      "Creative Content Development"
    ],

    timeline: "Mar. 2018 - Ongoing",
    tags: ["Travel", "Tourism", "Leisure"],

    // Measurement from PDF
    measurement: "The partner's lead generation and business have both grown. What's more, their lead conversion rate has increased as well. ShootOrder delivers effective results and successfully reaches the correct target audience. They produce thorough reports and also provide strategic planning efforts.",
  },
  // smm
  "smm-luxury-car-brand": {
    title: "Social Media Marketing & Google Ads for Luxury Car Brand",
    client: "Luxury Car Dealership",
    industry: "Automotive",
    date: "Sep. 2016 - Ongoing",
    heroImage: "",

    // Project Details from PDF
    projectType: "Social Media Marketing",
    budget: "Confidential",
    monthlySpend: "Confidential",
    duration: "8+ years (Ongoing)",
    location: "Hyderabad, India",

    // Client Information
    clientCEO: "Marketing Manager, Luxury Car Dealership",
    clientTitle: "Marketing Manager of an auto dealer",
    clientIndustry: "Automotive",

    // Ratings from PDF
    ratings: {
      overall: 4.5,
      quality: 4.5,
      schedule: 4.5,
      cost: 4.0,
      wouldRefer: 5.0
    },

    // Business Description from PDF
    businessDescription: "I'm the marketing manager of an auto dealer.",

    challenge: "We were looking for a marketing agency.",

    // Approach/Solution from PDF
    approach: "ShootOrder took over all our traditional marketing projects, including Google Ads and social media management.",

    solution: "An auto dealer hired ShootOrder to take over their marketing services. The team manages Google Ads and social media. They send status reports on keyword and social media activity.",

    // How they found ShootOrder
    howFound: "We needed to find a digital agency, so I searched for well-performing companies in Hyderabad. I found ShootOrder.",

    // Team composition
    teamComposition: "I have constant interactions with four people from their team, including Rajat (CEO). Naveen (Digital Marketing Consultant) is the project lead.",

    // Key team members
    keyTeamMembers: [
      "Rajat (CEO)",
      "Naveen (Digital Marketing Consultant) - Project Lead"
    ],

    // Outcomes from PDF
    outcomes: [
      "Our focus has been increasing our presence across different digital spaces",
      "ShootOrder has performed very well",
      "They're able to deliver content and make quick updates",
      "Their team gives us innovative ideas on lead generation and customer engagement",
      "They're also prompt when it comes to reporting"
    ],

    results: [
      {
        metric: "Digital Presence",
        value: "Increased",
        description: "Successfully increased presence across different digital spaces",
      },
      {
        metric: "Content Delivery",
        value: "Optimized",
        description: "Able to deliver content and make quick updates efficiently",
      },
      {
        metric: "Lead Generation",
        value: "Enhanced",
        description: "Provided innovative ideas on lead generation and customer engagement",
      },
      {
        metric: "Reporting",
        value: "Prompt",
        description: "Timely and accurate reporting on keywords and social media activity",
      },
    ],

    // Project Management feedback from PDF
    projectManagement: "The communication is always through me. They send us weekly and fortnightly reports on keywords and social media activity. I submit those to my management.",

    // What was impressive from PDF
    impressive: "In the digital space, ROI is very important. ShootOrder always encourages me to streamline the budget for generating leads. Their team looks at what's working and what isn't on different platforms. They've always been willing to come to our office for a meeting, and they always follow up with us.",

    // Areas for improvement from PDF
    improvements: "Digital marketing is always evolving, and they have to focus on that part.",

    // Advice for potential customers
    advice: "Clients have to be proactive in sensing the market situations and plan accordingly on how to take things forward.",

    testimonial: {
      quote: "ShootOrder has performed very well. They're able to deliver content and make quick updates. Their team gives us innovative ideas on lead generation and customer engagement.",
      author: "Marketing Manager, Luxury Car Dealership",
      position: "Marketing Manager of an auto dealer",
    },

    services: [
      "Google Ads Management",
      "Social Media Management",
      "Traditional Marketing Projects",
      "Lead Generation Strategy",
      "Customer Engagement",
      "Digital Marketing Reporting"
    ],

    timeline: "Sep. 2016 - Ongoing",
    tags: ["Luxury Cars", "Automotive", "Digital Marketing"],

    // Measurement from PDF
    measurement: "ShootOrder exceeded expectations, providing innovative strategies and tips for marketing and lead generation. Their quick responsiveness complemented their communication style. They're knowledgable about the digital space.",
  },
 "smm-auto-dealership": {
 title: "Digital Platform Management for Auto Dealership",
 client: "Auto Dealership",
 industry: "Automotive",
 date: "Nov. 2019 - Ongoing",
 heroImage: "",
 
 // Project Details from PDF
 projectType: "Other Digital Marketing",
 budget: "$50,000 to $199,999",
 monthlySpend: "About $100,000 total investment",
 duration: "5+ years (Ongoing)",
 location: "Hyderabad, India",
 
 // Client Information
 clientCEO: "Managing Director, Auto Dealership",
 clientTitle: "Managing director of an auto dealership",
 clientIndustry: "Automotive",
 
 // Ratings from PDF
 ratings: {
   overall: 5.0,
   quality: 4.0,
   schedule: 4.0,
   cost: 5.0,
   wouldRefer: 5.0
 },
 
 // Business Description from PDF
 businessDescription: "I'm the managing director of an auto dealership.",
 
 challenge: "We needed someone to manage our digital platforms.",
 
 // Approach/Solution from PDF
 approach: "They manage our digital platforms, handling SEO, PPC, and Google business assets. At this point, they're auditing and improving upon their work on a monthly basis.",
 
 solution: "ShootOrder manages digital platforms for an auto dealership. They handle SEO, PPC, and Google business assets and actively analyze their own performance to determine areas for improvement.",
 
 // How they found ShootOrder
 howFound: "They were referred to me.",
 
 // Team composition
 teamComposition: "There are around three people.",
 
 // Total investment
 totalInvestment: "We spent about $100,000.",
 
 // Outcomes from PDF
 outcomes: [
   "We've been happy so far because their digital campaigns attract traffic and inquiries for booking our vehicles",
   "Their work accounts for about 20% of our bookings",
   "Otherwise, we generate conversions through walk-ins",
   "Their work has boosted our SEO performance on search results pages"
 ],
 
 results: [
   {
     metric: "Customer Acquisition",
     value: "20%",
     description: "Their work accounts for about 20% of our current bookings",
   },
   {
     metric: "Traffic & Inquiries",
     value: "Increased",
     description: "Digital campaigns attract traffic and inquiries for booking vehicles",
   },
   {
     metric: "SEO Performance",
     value: "Boosted",
     description: "Their work has boosted our SEO performance on search results pages",
   },
   {
     metric: "Digital Platform Management",
     value: "Optimized",
     description: "Successfully managing SEO, PPC, and Google business assets with monthly audits",
   },
 ],
 
 // Project Management feedback from PDF
 projectManagement: "We had to do some hand-holding at first, but they were able to work independently later into the project.",
 
 // What was impressive from PDF
 impressive: "Their work has boosted our SEO performance on search results pages.",
 
 // Areas for improvement from PDF
 improvements: "No, everything is fine. We review them regularly and give feedback on how they can more efficiently target our audience through digital channels.",
 
 // Advice for potential customers
 advice: "They're quite professional in their approach. There's some hand-holding in the beginning, but that goes away with time.",
 
 testimonial: {
   quote: "They're quite professional in their approach. There's some hand-holding in the beginning, but that goes away with time.",
   author: "Managing Director, Auto Dealership",
   position: "Managing director of an auto dealership",
 },
 
 services: [
   "Search Engine Optimization (SEO)",
   "Pay-Per-Click (PPC) Management",
   "Google Business Assets Management",
   "Digital Platform Management",
   "Performance Analysis & Auditing",
   "Digital Marketing Strategy"
 ],
 
 timeline: "Nov. 2019 - Ongoing",
 tags: ["Auto Dealership", "Digital Platforms", "SEO"],
 
 // Measurement from PDF
 measurement: "With their work attracting 20 percent of the client's current customers, ShootOrder has thoroughly satisfied the client. After initial instruction, they have been able to work independently as the project has progressed.",
},
  "smm-it-services": {
 title: "Content Marketing & SMM for IT Services Company",
 client: "Orchasp Limited",
 industry: "IT Services",
 date: "Apr. 2025 - Ongoing",
 heroImage: "",
 
 // Project Details from PDF
 projectType: "Content Marketing, Social Media Marketing",
 budget: "Less than $10,000",
 monthlySpend: "Around 30,000 Indian rupees per month",
 duration: "Ongoing (Started April 2025)",
 location: "Hyderabad, India",
 
 // Client Information
 clientCEO: "Chandra Sekhar Pattapurathi",
 clientTitle: "Managing Director & CEO, Orchasp Limited",
 clientIndustry: "IT Services",
 
 // Ratings from PDF
 ratings: {
   overall: 4.0,
   quality: 3.5,
   schedule: 3.0,
   cost: 3.0,
   wouldRefer: 4.0
 },
 
 // Business Description from PDF
 businessDescription: "I'm the managing director and CEO of Orchasp Limited, an IT services company. We built an electronic health record platform and wanted to market it on social media.",
 
 challenge: "We built an electronic health record platform and wanted to market it on social media.",
 
 // Approach/Solution from PDF
 approach: "We've created social media accounts on Facebook, Instagram, and LinkedIn. We've also educated ShootOrder about our platform and asked them to post about it online. They've created three different versions of the content: a static post, a carousel, and a video. The video educates prospective customers about our platform. ShootOrder has posted the content online in a scheduled manner.",
 
 solution: "An IT services company has hired ShootOrder to promote their EHR platform on social media. The team creates static posts, carousels, and videos to market the platform on Facebook, Instagram, and LinkedIn.",
 
 // How they found ShootOrder
 howFound: "We found them on Google and contacted them.",
 
 // Team composition
 teamComposition: "Initially, I contacted a marketing person. Once we closed the commercial and scope of services, we started interacting with two people. We've also had one escalation point with their boss.",
 
 // Monthly investment
 monthlyInvestment: "We've spent around 30,000 Indian rupees per month.",
 
 // Content types created
 contentTypes: [
   "Static posts",
   "Carousels", 
   "Educational videos"
 ],
 
 // Social media platforms
 platforms: [
   "Facebook",
   "Instagram", 
   "LinkedIn"
 ],
 
 // Outcomes from PDF
 outcomes: [
   "Website traffic has increased, but conversions haven't begun yet",
   "The offering we made, which ShootOrder posted on social media, is complimentary for three months to people who register for our services",
   "Revenue-wise, it's not measurable",
   "On the content they created, ShootOrder has done a good job on the visuals and creative work"
 ],
 
 results: [
   {
     metric: "Website Traffic",
     value: "Increased",
     description: "Website traffic has increased through social media campaigns",
   },
   {
     metric: "Visual Content",
     value: "Impressive",
     description: "The visuals and videos created are impressive and well-crafted",
   },
   {
     metric: "Content Variety",
     value: "Diversified",
     description: "Created three different content formats: static posts, carousels, and videos",
   },
   {
     metric: "Social Media Presence",
     value: "Established",
     description: "Successfully established presence on Facebook, Instagram, and LinkedIn",
   },
 ],
 
 // Project Management feedback from PDF
 projectManagement: "In the first month, they slipped the deadline. They were supposed to make about 15 posts but fell short by 5–6. They covered it up, and that's how it got delayed. They send us the content through WhatsApp, and we give our corrections and amendments. We approve the content through WhatsApp. We also use Google Meet, phone calls, and WhatsApp to communicate.",
 
 // Communication methods
 communicationMethods: [
   "WhatsApp",
   "Google Meet",
   "Phone calls"
 ],
 
 // What was impressive from PDF
 impressive: "ShootOrder has done a good job. The visuals and videos they've created are impressive.",
 
 // Areas for improvement from PDF
 improvements: "Initially, I expected them to meet us and get clarity. They only tried on Google Meet and wanted to take some notes. It would have worked better if they had sat with me and understood what I wanted to express in the visuals. That didn't happen in the first month, but there was a marked improvement after the first month. Strategically, they need to position themselves better. In a campaign, you should have a target audience, and your target should be planned. After I gave them the target audience and persona, I'm not sure how they're doing it with others. They're just creating content and pushing it online, and it doesn't work that way.",
 
 // Advice for potential customers
 advice: "In your first meeting, set the expectation of what you're looking for. Communicate your target; otherwise, it will go haywire.",
 
 testimonial: {
   quote: "The visuals and videos they've created are impressive. ShootOrder has done a good job on the visuals and creative work.",
   author: "Chandra Sekhar Pattapurathi",
   position: "Managing Director & CEO, Orchasp Limited",
 },
 
 services: [
   "Social Media Marketing",
   "Content Marketing",
   "Visual Content Creation",
   "Video Production",
   "Carousel Design",
   "Static Post Design",
   "Scheduled Content Posting"
 ],
 
 timeline: "Apr. 2025 - Ongoing",
 tags: ["EHR Platform", "Healthcare Technology", "B2B Marketing"],
 
 // Measurement from PDF
 measurement: "The client is impressed with the visuals and videos created by ShootOrder. The team communicates well via WhatsApp and Google Meet. The client has noted that the team has had improved after the first month. However, they expected the team to understand their needs better during the initial meeting.",
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

            {/* Client Introduction - New Section from PDF */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About the Client</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                {caseStudy.businessDescription}
              </p>
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#9a0c28] rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{caseStudy.clientCEO}</h4>
                    <p className="text-gray-600">{caseStudy.clientTitle}</p>
                    <p className="text-sm text-gray-500">{caseStudy.location}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Challenge */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </section>

            {/* Our Approach - New Section from PDF */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Approach</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {caseStudy.approach}
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-3">Investment Details:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-500">Monthly Investment</p>
                      <p className="font-semibold text-gray-800">{caseStudy.monthlySpend}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Project Duration</p>
                      <p className="font-semibold text-gray-800">{caseStudy.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <TrendingUp className="w-8 h-8 text-green-500" />
                      <span className="text-2xl font-bold text-[#9a0c28]">{result.value}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{result.metric}</h3>
                    <p className="text-gray-600 text-sm">{result.description}</p>
                  </div>
                ))}
              </div>

              {/* Detailed Outcomes - New from PDF */}
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Key Outcomes Achieved:
                </h4>
                <ul className="space-y-2">
                  {caseStudy.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Measurement & Analytics - New Section from PDF */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Measurement & Analytics</h2>
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {caseStudy.measurement}
                </p>
              </div>
            </section>

            {/* Project Management Experience - New Section from PDF */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Management Experience</h2>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {caseStudy.projectManagement}
                </p>
              </div>
            </section>

            {/* What Made Us Stand Out - New Section from PDF */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What Made Us Stand Out</h2>
              <div className="bg-purple-50 p-6 rounded-xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {caseStudy.impressive}
                </p>
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

            {/* Areas for Future Growth - New Section from PDF */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Future Opportunities</h2>
              <div className="bg-orange-50 p-6 rounded-xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Client Feedback:</strong> {caseStudy.improvements}
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Client Ratings - New Section from PDF */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Award className="w-6 h-6 text-yellow-500 mr-2" />
                Client Ratings
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Overall Score</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg">{caseStudy.ratings.overall}</span>
                    <div className="flex space-x-1">
                      {[...Array(Math.floor(caseStudy.ratings.overall))].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Quality</span>
                  <span className="font-semibold">{caseStudy.ratings.quality}/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Schedule</span>
                  <span className="font-semibold">{caseStudy.ratings.schedule}/5</span>
                </div>
                {/* <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cost</span>
                  <span className="font-semibold">{caseStudy.ratings.cost}/5</span>
                </div> */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Would Refer</span>
                  <span className="font-semibold">{caseStudy.ratings.wouldRefer}/5</span>
                </div>
              </div>
            </div>

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
                  <p className="text-sm text-gray-500 mb-1">Project Type</p>
                  <p className="font-semibold text-gray-800">{caseStudy.projectType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Timeline</p>
                  <p className="font-semibold text-gray-800">{caseStudy.timeline}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Total Budget</p>
                  <p className="font-semibold text-gray-800">{caseStudy.budget}</p>
                </div>
                {/* <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="font-semibold text-gray-800">{caseStudy.location}</p>
                </div> */}
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
                className="w-full bg-white text-black px-4 py-2 rounded-lg font-semibold transition-colors block text-center"
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