'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AdminLayout from '@/components/AdminLayout';

export default function NewBlogPage() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [imagePreview, setImagePreview] = useState('');
  const [imageUploadType, setImageUploadType] = useState('url'); // 'url' or 'upload'
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: '',
    imageUrl: '',
    tags: '',
    category: '',
    published: false,
    publishDate: new Date().toISOString().split('T')[0]
  });
  
  // Generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')  // Remove special characters
      .replace(/\s+/g, '-')      // Replace spaces with hyphens
      .replace(/-+/g, '-')       // Replace multiple hyphens with single hyphen
      .trim();                   // Trim leading/trailing spaces
  };
  
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setFormData(prev => ({
      ...prev,
      title: newTitle,
      slug: generateSlug(newTitle)
    }));
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle image file upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file type
    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'Please select a valid image file.' });
      return;
    }

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'Image size should be less than 5MB.' });
      return;
    }

    try {
      // Create form data for upload
      const uploadFormData = new FormData();
      uploadFormData.append('image', file);
      uploadFormData.append('folder', 'blogs');

      // Upload image
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      const result = await response.json();

      if (response.ok) {
        const imagePath = result.path;
        setFormData(prev => ({
          ...prev,
          imageUrl: imagePath
        }));
        setImagePreview(imagePath);
        setMessage({ type: 'success', text: 'Image uploaded successfully!' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to upload image' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error uploading image. Please try again.' });
    }
  };

  // Handle URL image change
  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setFormData(prev => ({
      ...prev,
      imageUrl: url
    }));
    setImagePreview(url);
  };

  // Rich text editor functions
  const insertHtmlTag = (tag, hasClosing = true) => {
    const textarea = document.getElementById('content');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    let newText;
    if (hasClosing) {
      newText = `<${tag}>${selectedText}</${tag}>`;
    } else {
      newText = `<${tag}>`;
    }
    
    const newContent = 
      textarea.value.substring(0, start) + 
      newText + 
      textarea.value.substring(end);
    
    setFormData(prev => ({
      ...prev,
      content: newContent
    }));
    
    // Focus back to textarea
    setTimeout(() => {
      textarea.focus();
      const newPosition = start + newText.length;
      textarea.setSelectionRange(newPosition, newPosition);
    }, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });
    
    // Convert tags string to array
    const blogData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
      publishDate: new Date(formData.publishDate).toISOString()
    };
    
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });
      
      const result = await response.json();
      
      
      
      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: 'Blog created successfully!' 
        });
        
        // Redirect to the new blog page after 1 second
        setTimeout(() => {
          router.push(`/blogs/${result.blog.slug}`);
        }, 1000);
      } else {
        setMessage({ 
          type: 'error', 
          text: result.error || 'Failed to create blog' 
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
  };
  
  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>
        
        {message.text && (
          <div className={`p-4 mb-6 rounded-md ${
            message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {message.text}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                Blog Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleTitleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
                Author *
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="slug" className="block text-gray-700 font-medium mb-2">
              URL Slug *
            </label>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">/blogs/</span>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              The URL-friendly name for this blog post (auto-generated from title)
            </p>
          </div>
          
          <div className="mb-6">
            <label htmlFor="excerpt" className="block text-gray-700 font-medium mb-2">
              Excerpt *
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Brief description of the blog post..."
              required
            ></textarea>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="business">Business</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="tutorials">Tutorials</option>
                <option value="news">News</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="tags" className="block text-gray-700 font-medium mb-2">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="tag1, tag2, tag3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Separate tags with commas
              </p>
            </div>
          </div>
          
          {/* Featured Image Section */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Featured Image
            </label>
            
            {/* Image Upload Type Selector */}
            <div className="flex gap-4 mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="imageUploadType"
                  value="url"
                  checked={imageUploadType === 'url'}
                  onChange={(e) => setImageUploadType(e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm">Use URL</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="imageUploadType"
                  value="upload"
                  checked={imageUploadType === 'upload'}
                  onChange={(e) => setImageUploadType(e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm">Upload Image</span>
              </label>
            </div>

            {imageUploadType === 'url' ? (
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleImageUrlChange}
                placeholder="/images/blogs/your-image.jpg"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Choose Image File
                </button>
                <p className="text-sm text-gray-500 mt-1">
                  Supported formats: JPG, PNG, GIF (max 5MB)
                </p>
              </div>
            )}

            {/* Image Preview */}
            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm text-gray-700 mb-2">Preview:</p>
                <div className="relative w-48 h-32 border border-gray-300 rounded-md overflow-hidden">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={() => setImagePreview('')}
                  />
                </div>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="publishDate" className="block text-gray-700 font-medium mb-2">
                Publish Date *
              </label>
              <input
                type="date"
                id="publishDate"
                name="publishDate"
                value={formData.publishDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="published" className="text-gray-700 font-medium">
                Publish immediately
              </label>
            </div>
          </div>
          
          {/* Rich Text Editor Section */}
          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
              Content *
            </label>
            
            {/* Editor Toolbar */}
            <div className="border border-gray-300 rounded-t-md bg-gray-50 p-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => insertHtmlTag('h2')}
                className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
                title="Heading 2"
              >
                H2
              </button>
              <button
                type="button"
                onClick={() => insertHtmlTag('h3')}
                className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
                title="Heading 3"
              >
                H3
              </button>
              <button
                type="button"
                onClick={() => insertHtmlTag('strong')}
                className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100 font-bold"
                title="Bold"
              >
                B
              </button>
              <button
                type="button"
                onClick={() => insertHtmlTag('em')}
                className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100 italic"
                title="Italic"
              >
                I
              </button>
              <button
                type="button"
                onClick={() => insertHtmlTag('u')}
                className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100 underline"
                title="Underline"
              >
                U
              </button>
              <button
                type="button"
                onClick={() => insertHtmlTag('p')}
                className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
                title="Paragraph"
              >
                P
              </button>
              <button
                type="button"
                onClick={() => insertHtmlTag('ul')}
                className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
                title="Unordered List"
              >
                UL
              </button>
              <button
                type="button"
                onClick={() => insertHtmlTag('ol')}
                className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
                title="Ordered List"
              >
                OL
              </button>
              <button
                type="button"
                onClick={() => insertHtmlTag('li')}
                className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
                title="List Item"
              >
                LI
              </button>
              <button
                type="button"
                onClick={() => insertHtmlTag('a href=""')}
                className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
                title="Link"
              >
                Link
              </button>
              <button
                type="button"
                onClick={() => insertHtmlTag('br', false)}
                className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100"
                title="Line Break"
              >
                BR
              </button>
            </div>
            
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="15"
              className="w-full px-4 py-2 border border-gray-300 border-t-0 rounded-b-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              placeholder="<p>Your blog content here. Use the toolbar above for formatting.</p>"
              required
            ></textarea>
            
            <p className="text-sm text-gray-500 mt-2">
              Use the toolbar buttons above to insert HTML tags. You can also type HTML directly.
            </p>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <Link
              href="/admin/blogs"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 bg-[#FFFCEA] text-white rounded-md hover:bg-blue-700 transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Creating...' : 'Create Blog Post'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}