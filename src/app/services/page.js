// src/app/services/page.jsx
import Link from 'next/link';
import { getAllServices } from '@/lib/services';

export const metadata = {
  title: 'All Services | ShootOrder',
  description: 'Explore the full range of services offered by ShootOrder',
};

export default async function ServicesPage() {
  const services = await getAllServices();
  
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link 
            href={`/services/${service.slug}`}
            key={service.slug}
            className="block group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              {service.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex justify-end">
                  <span className="text-red-600 font-medium group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Link
          href="/admin/services/new"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Create New Service
        </Link>
      </div>
    </div>
  );
}