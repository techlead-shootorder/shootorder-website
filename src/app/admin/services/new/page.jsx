'use client';

import { useState, useCallback, memo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AdminLayout from '@/components/AdminLayout';

// Memoized Feature Component to prevent unnecessary re-renders
const FeatureField = memo(({ 
  feature, 
  index, 
  onFeatureChange, 
  onRemove, 
  canRemove 
}) => {
  return (
    <div className="p-4 mb-4 border border-gray-200 rounded-md bg-gray-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-md font-medium">Feature {index + 1}</h3>
        {canRemove && (
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="p-1 text-red-600 hover:text-red-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-medium mb-1">
          Image URL
        </label>
        <input
          type="text"
          value={feature.imageUrl}
          onChange={(e) => onFeatureChange(index, 'imageUrl', e.target.value)}
          placeholder="/images/features/icon.svg"
          autoComplete="off"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
        />
      </div>
      
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-medium mb-1">
          Heading
        </label>
        <input
          type="text"
          value={feature.heading}
          onChange={(e) => onFeatureChange(index, 'heading', e.target.value)}
          placeholder="Feature Title"
          autoComplete="off"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
        />
      </div>
      
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1">
          Content
        </label>
        <textarea
          value={feature.content}
          onChange={(e) => onFeatureChange(index, 'content', e.target.value)}
          rows="2"
          placeholder="Describe this feature"
          autoComplete="off"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
        ></textarea>
      </div>
    </div>
  );
});

FeatureField.displayName = 'FeatureField';

export default function NewServicePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [formData, setFormData] = useState({
    heading: '',
    subheading: '',
    title: '',
    slug: '',
    description: '',
    imageUrl: '',
    features: [
      {
        imageUrl: '',
        heading: '',
        content: ''
      }
    ],
    content: ''
  });
  
  // Generate slug from title
  const generateSlug = useCallback((title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }, []);
  
  // Generic handler for simple field updates
  const handleFieldChange = useCallback((field) => (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value,
      // Auto-generate slug when title changes
      ...(field === 'title' && { slug: generateSlug(value) })
    }));
  }, [generateSlug]);
  
  // Feature change handler
  const handleFeatureChange = useCallback((index, field, value) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.map((feature, i) => 
        i === index ? { ...feature, [field]: value } : feature
      )
    }));
  }, []);
  
  // Add feature handler
  const addFeatureField = useCallback(() => {
    setFormData(prev => ({
      ...prev,
      features: [
        ...prev.features, 
        { imageUrl: '', heading: '', content: '' }
      ]
    }));
  }, []);
  
  // Remove feature handler
  const removeFeatureField = useCallback((index) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  }, []);
  
  // Submit handler
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });
    
    // Filter out empty features
    const cleanedData = {
      ...formData,
      features: formData.features.filter(feature => 
        feature.heading.trim() !== '' || 
        feature.imageUrl.trim() !== '' || 
        feature.content.trim() !== ''
      )
    };
    
    try {
      const response = await fetch('/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedData),
      });
      
      const result = await response.json();
      
      console.log("result for the service", result);
      
      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: 'Service created successfully!' 
        });
        
        setTimeout(() => {
          router.push(`/${result.service.slug}`);
        }, 1000);
      } else {
        setMessage({ 
          type: 'error', 
          text: result.error || 'Failed to create service' 
        });
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'An error occurred. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, router]);
  
  return (
    <AdminLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create New Service</h1>
        
        {message.text && (
          <div className={`p-4 mb-6 rounded-md ${
            message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {message.text}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          {/* Page Heading */}
          <div className="mb-6">
            <label htmlFor="heading" className="block text-gray-700 font-medium mb-2">
              Page Heading *
            </label>
            <input
              type="text"
              id="heading"
              name="heading"
              value={formData.heading}
              onChange={handleFieldChange('heading')}
              placeholder="Main heading for the service page"
              autoComplete="off"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              This will be displayed as the main heading on the service page
            </p>
          </div>

          {/* Page Subheading */}
          <div className="mb-6">
            <label htmlFor="subheading" className="block text-gray-700 font-medium mb-2">
              Page Subheading
            </label>
            <input
              type="text"
              id="subheading"
              name="subheading"
              value={formData.subheading}
              onChange={handleFieldChange('subheading')}
              placeholder="Supporting text under the main heading"
              autoComplete="off"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <p className="text-sm text-gray-500 mt-1">
              Optional subheading text that appears below the main heading
            </p>
          </div>
          
          {/* Service Title */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Service Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleFieldChange('title')}
              placeholder="Enter service title"
              autoComplete="off"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              The title of the service (used for navigation and SEO)
            </p>
          </div>
          
          {/* URL Slug */}
          <div className="mb-6">
            <label htmlFor="slug" className="block text-gray-700 font-medium mb-2">
              URL Slug *
            </label>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">/services/</span>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleFieldChange('slug')}
                placeholder="url-friendly-name"
                autoComplete="off"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              The URL-friendly name for this service (auto-generated from title)
            </p>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleFieldChange('description')}
              rows="3"
              placeholder="Brief description of the service"
              autoComplete="off"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
            <p className="text-sm text-gray-500 mt-1">
              Short description used in service listings and meta descriptions
            </p>
          </div>
          
          {/* Image URL */}
          <div className="mb-6">
            <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">
              Hero Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleFieldChange('imageUrl')}
              placeholder="/images/services/your-image.jpg"
              autoComplete="off"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <p className="text-sm text-gray-500 mt-1">
              Path to your service hero image in the public folder
            </p>
          </div>
          
          {/* Features Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <label className="block text-gray-700 font-medium">
                Service Features
              </label>
              <button
                type="button"
                onClick={addFeatureField}
                className="flex items-center text-red-600 hover:text-red-800 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Feature
              </button>
            </div>
            
            {formData.features.map((feature, index) => (
              <FeatureField
                key={index}
                feature={feature}
                index={index}
                onFeatureChange={handleFeatureChange}
                onRemove={removeFeatureField}
                canRemove={formData.features.length > 1}
              />
            ))}
          </div>
          
          {/* Content */}
          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
              Detailed Content (HTML)
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleFieldChange('content')}
              rows="8"
              autoComplete="off"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 font-mono text-sm"
              placeholder="<p>Your detailed content here. HTML is allowed.</p>
<p>You can include:</p>
<ul>
  <li>Rich text formatting</li>
  <li>Lists and structure</li>
  <li>Images and links</li>
</ul>"
            ></textarea>
            <p className="text-sm text-gray-500 mt-1">
              Full HTML content for the service page. This appears below the features section.
            </p>
          </div>
          
          {/* Form Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <Link
              href="/admin/services"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Creating...' : 'Create Service'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}