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
      const defaultServices = [
        {
          slug: 'software-engineering',
          title: 'Software Engineering',
          description: 'Custom software solutions for businesses of all sizes.',
          imageUrl: '/images/services/software-engineering.jpg',
          features: [
            'Full-stack development',
            'Custom web applications',
            'Mobile app development',
            'API development',
            'Legacy system modernization'
          ],
          content: '<p>Our software engineering services provide end-to-end solutions from concept to deployment.</p>'
        },
        {
          slug: 'seo',
          title: 'Web Development',
          description: 'Professional web development services using the latest technologies.',
          imageUrl: '/images/services/web-development.jpg',
          features: [
            'Responsive website design',
            'E-commerce solutions',
            'Content management systems',
            'Progressive web apps',
            'Website optimization'
          ],
          content: '<p>We build modern, fast, and secure websites that help your business stand out.</p>'
        }
      ];
      
      // Save default services
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