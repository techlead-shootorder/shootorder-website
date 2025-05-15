'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ServicesLayout({ children }) {
  const pathname = usePathname();
  
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Services Management</h1>
          <p className="text-gray-600">Create and manage services</p>
        </div>
        <Link
          href="/admin/services/new"
          className={`px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ${
            pathname === '/admin/services/new' ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          Add New Service
        </Link>
      </div>
      
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex -mb-px">
          <Link
            href="/admin/services"
            className={`py-4 px-6 border-b-2 font-medium text-sm ${
              pathname === '/admin/services'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            All Services
          </Link>
          <Link
            href="/admin/services/new"
            className={`py-4 px-6 border-b-2 font-medium text-sm ${
              pathname === '/admin/services/new'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Add New
          </Link>
        </nav>
      </div>
      
      {children}
    </div>
  );
}