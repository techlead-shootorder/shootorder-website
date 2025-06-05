import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Equivalent of __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://shootorder.us/';
const OUTPUT_DIR = 'out'; // Next.js static export output directory
const EXCLUDE = ['/404', '/500'];

const generateSitemap = async () => {
    console.log('🚀 Starting sitemap generation...');

    // Static routes from your header navigation and other pages
    const staticRoutes = [
        // Main navigation
        '/',
        
        // Services (from your header mega menu)
        '/seo',
        '/blog-management', 
        '/web-design',
        '/google-ads',
        '/meta-ads',
        '/digital-pr',
        '/influencers-marketing',
        '/branding/identity',
        '/branding/audit',
        '/branding/messaging',
        '/branding/design',
        '/branding/campaigns',
        '/landing-pages',
        '/On-site-engagement',
        '/orm',
        '/analytics',
        '/smart-analysis',
        
        // Company pages
        '/about-us',
        '/about/work-flow',
        '/about/clients',
        '/case-studies',
        '/careers',
        '/training',
        
        // Contact pages
        '/contact-us',
        '/enquiry',
        '/support',
        
        // Blog and other pages
        '/blogs',
        
        // Additional static pages
        '/privacy-policy',
        '/terms-and-conditions',
        '/sitemap'
    ];

    // Fetch dynamic routes for blogs, case studies, careers
    const [blogRoutes, caseStudyRoutes, careerRoutes] = await Promise.all([
        fetchBlogRoutes(),
        fetchCaseStudyRoutes(), 
        fetchCareerRoutes()
    ]);

    // Combine all routes
    const allRoutes = [
        ...staticRoutes, 
        ...blogRoutes, 
        ...caseStudyRoutes, 
        ...careerRoutes
    ].filter(route => !EXCLUDE.includes(route));

    // Remove duplicates and sort
    const uniqueRoutes = [...new Set(allRoutes)].sort();

    console.log(`📄 Found ${uniqueRoutes.length} total routes`);

    // Generate sitemap XML
    const sitemap = generateSitemapXML(uniqueRoutes);
    
    // Ensure output directory exists
    const outputPath = path.join(__dirname, OUTPUT_DIR);
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
    }

    // Write sitemap
    const sitemapPath = path.join(outputPath, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);
    
    // Also create robots.txt
    generateRobotsTxt(outputPath);
    
    console.log('✅ Sitemap generated successfully!');
    console.log(`📁 Output: ${sitemapPath}`);
    console.log(`🔗 Total URLs: ${uniqueRoutes.length}`);
};

const generateSitemapXML = (routes) => {
    const currentDate = new Date().toISOString();
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${routes.map(route => {
    const priority = getPriority(route);
    const changefreq = getChangeFreq(route);
    
    return `  <url>
    <loc>${SITE_URL.replace(/\/$/, '')}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;
};

const getPriority = (route) => {
    if (route === '/') return '1.0';
    if (route.includes('/blogs/') || route.includes('/case-studies/')) return '0.8';
    if (['/about-us', '/contact-us', '/services'].includes(route)) return '0.9';
    if (route.includes('/careers/')) return '0.6';
    return '0.7';
};

const getChangeFreq = (route) => {
    if (route === '/') return 'daily';
    if (route.includes('/blogs/')) return 'weekly';
    if (route.includes('/case-studies/')) return 'monthly';
    if (route.includes('/careers/')) return 'weekly';
    return 'weekly';
};

const generateRobotsTxt = (outputPath) => {
    const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow crawling of main content
Allow: /blogs/
Allow: /case-studies/
Allow: /careers/
Allow: /services/`;

    fs.writeFileSync(path.join(outputPath, 'robots.txt'), robotsContent);
    console.log('🤖 robots.txt generated');
};

// Mock functions for dynamic content - replace with your actual data fetching
const fetchBlogRoutes = async () => {
    try {
        // Replace this with your actual blog data fetching logic
        // For now, returning some example blog routes
        const mockBlogs = [
            'seo-best-practices-2024',
            'digital-marketing-trends',
            'website-design-tips',
            'social-media-strategy',
            'content-marketing-guide'
        ];
        
        return mockBlogs.map(slug => `/blogs/${slug}`);
    } catch (error) {
        console.error("Error fetching blog routes:", error);
        return [];
    }
};

const fetchCaseStudyRoutes = async () => {
    try {
        // Replace with your actual case study data fetching
        const mockCaseStudies = [
            'ecommerce-seo-success',
            'brand-transformation-story',
            'lead-generation-campaign',
            'website-redesign-results'
        ];
        
        return mockCaseStudies.map(slug => `/case-studies/${slug}`);
    } catch (error) {
        console.error("Error fetching case study routes:", error);
        return [];
    }
};

const fetchCareerRoutes = async () => {
    try {
        // Replace with your actual career/job data fetching
        const mockJobs = [
            'digital-marketing-manager',
            'seo-specialist',
            'web-developer',
            'content-writer',
            'graphic-designer'
        ];
        
        return mockJobs.map(slug => `/careers/${slug}`);
    } catch (error) {
        console.error("Error fetching career routes:", error);
        return [];
    }
};

// Additional utility function to validate URLs
const validateURL = (url) => {
    try {
        new URL(url, SITE_URL);
        return true;
    } catch {
        return false;
    }
};

// Function to generate additional meta files for better SEO
const generateAdditionalFiles = (outputPath) => {
    // Generate manifest.json for PWA
    const manifest = {
        name: "ShootOrder",
        short_name: "ShootOrder",
        description: "Digital Marketing Agency",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#9a0c28",
        icons: [
            {
                src: "/images/logo/shootorder-logo.svg",
                sizes: "192x192",
                type: "image/svg+xml"
            }
        ]
    };
    
    fs.writeFileSync(
        path.join(outputPath, 'manifest.json'), 
        JSON.stringify(manifest, null, 2)
    );
    console.log('📱 manifest.json generated');
};

// Main execution
const main = async () => {
    try {
        await generateSitemap();
        
        const outputPath = path.join(__dirname, OUTPUT_DIR);
        generateAdditionalFiles(outputPath);
        
        console.log('\n🎉 Static site generation completed!');
        console.log(`📦 Output directory: ${outputPath}`);
        console.log('\n📋 Next steps:');
        console.log('1. Run: npm run build && npm run export');
        console.log('2. Upload the "out" folder contents to your cPanel public_html');
        console.log('3. Update SITE_URL in this script to match your domain');
        
    } catch (error) {
        console.error('❌ Error generating static site:', error);
        process.exit(1);
    }
};

// Run the script
main();