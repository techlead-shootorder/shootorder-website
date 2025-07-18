// src/lib/services.js
import fs from 'fs';
import path from 'path';

// Path to our services JSON file
const servicesFilePath = path.join(process.cwd(), 'data', 'services.json');

// Helper function to load all services
export async function getAllServices() {
  try {
    // Check if services file exists, if not create with default data
    if (!fs.existsSync(servicesFilePath)) {
      const directory = path.dirname(servicesFilePath);
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
      }
      
      // Create default services data
      const defaultServices = [{
        slug: "seo-services",
        title: "SEO Services",
        heading: "Strategic SEO Solutions",
        subheading: "Drive organic growth with data-driven SEO strategies",
        imageUrl: "/images/services/seo-banner.jpg",
        features: [
          {
            heading: "Technical SEO Optimization",
            content: "Site architecture, crawlability, and core web vitals optimization for better search performance",
            imageUrl: "/images/services/SEO/Technical SEO.webp"
          },
          {
            heading: "Meta Tags Optimization",
            content: "Strategic optimization of title tags, meta descriptions, and header tags for improved CTR",
            imageUrl: "/images/services/SEO/Meta Tags Optimization.webp"
          },
          {
            heading: "Rich Schema Markups",
            content: "Implementation of structured data for enhanced SERP visibility and featured snippets",
            imageUrl: "/images/services/SEO/Rich Mark-ups.webp"
          },
          {
            heading: "Content Optimization",
            content: "SEO-friendly content strategy with semantic relevance and user intent matching",
            imageUrl: "/images/services/SEO/SEO friendly Content Optimization.webp"
          },
          {
            heading: "Local SEO",
            content: "Optimize your local presence with Google Business Profile and local citations",
            imageUrl: "/images/services/local-seo.jpg"
          },
          {
            heading: "Performance Analytics",
            content: "Comprehensive tracking and analysis of SEO performance metrics",
            imageUrl: "/images/services/analytics.jpg"
          }
        ]
      }];
      
      // Save default services data to file
      fs.writeFileSync(servicesFilePath, JSON.stringify(defaultServices, null, 2), 'utf8');
      return defaultServices;
    }
    
    // Read from existing file
    const data = fs.readFileSync(servicesFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading services:', error);
    return [];
  }
}

// Get all service slugs for static generation
export async function getAllServiceSlugs() {
  const services = await getAllServices();
  return services.map(service => service.slug);
}

// Get a specific service by slug
export async function getServiceBySlug(slug) {
  const services = await getAllServices();
  return services.find(service => service.slug === slug);
}

// Add a new service
export async function addService(serviceData) {
  try {
    const services = await getAllServices();
    
    // Check if service with this slug already exists
    const existingIndex = services.findIndex(s => s.slug === serviceData.slug);
    
    if (existingIndex >= 0) {
      // Update existing service
      services[existingIndex] = {
        ...services[existingIndex],
        ...serviceData
      };
    } else {
      // Add new service
      services.push(serviceData);
    }
    
    // Write updated services back to file
    fs.writeFileSync(servicesFilePath, JSON.stringify(services, null, 2), 'utf8');
    return { success: true, service: serviceData };
  } catch (error) {
    console.error('Error adding service:', error);
    return { success: false, error: error.message };
  }
}

// Delete a service
export async function deleteService(slug) {
  try {
    const services = await getAllServices();
    const updatedServices = services.filter(service => service.slug !== slug);
    
    // Write updated services back to file
    fs.writeFileSync(servicesFilePath, JSON.stringify(updatedServices, null, 2), 'utf8');
    return { success: true };
  } catch (error) {
    console.error('Error deleting service:', error);
    return { success: false, error: error.message };
  }
}