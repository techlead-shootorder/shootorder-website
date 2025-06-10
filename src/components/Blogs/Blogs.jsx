"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Function to fetch and parse WordPress RSS feed
async function getWordPressBlogs() {
  try {
    const response = await fetch("https://www.shootorder.com/blog/feed/", {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    

    if (!response.ok) {
      throw new Error("Failed to fetch RSS feed");
    }

    const xmlText = await response.text();
    // Parse XML using DOMParser (server-side compatible)
    const { parseStringPromise } = require("xml2js");
    const result = await parseStringPromise(xmlText, {
      explicitArray: false,
      ignoreAttrs: false,
    });

    const items = result.rss.channel.item || [];

    // Transform WordPress posts to match your blog structure
    const wordpressPosts = items.map((item, index) => {
      // Extract clean excerpt from description
      const cleanExcerpt =
        item.description
          ?.replace(/<[^>]*>/g, "") // Remove HTML tags
          ?.replace(/\[&#8230;\]/g, "...") // Replace WordPress ellipsis
          ?.substring(0, 150) + "...";

      // Extract categories
      const categories = Array.isArray(item.category)
        ? item.category
        : item.category
        ? [item.category]
        : [];

      // Extract featured image from content:encoded or description
      let imageUrl = null;
      const content = item["content:encoded"] || item.description || "";
      
      // Try multiple image extraction patterns
      const imgPatterns = [
        /<img[^>]+src="([^">]+)"/i,
        /<img[^>]+src='([^'>]+)'/i,
        /src="([^"]*\.(?:jpg|jpeg|png|gif|webp)[^"]*)"/i,
        /src='([^']*\.(?:jpg|jpeg|png|gif|webp)[^']*)'/i
      ];
      
      for (const pattern of imgPatterns) {
        const match = content.match(pattern);
        if (match && match[1]) {
          imageUrl = match[1];
          // Ensure the URL is absolute
          if (imageUrl.startsWith('//')) {
            imageUrl = 'https:' + imageUrl;
          } else if (imageUrl.startsWith('/')) {
            imageUrl = 'https://www.shootorder.com' + imageUrl;
          }
          break;
        }
      }
      
      // If no image found in content, try to construct a default WordPress featured image URL
      if (!imageUrl) {
        // You might want to add a default image or check WordPress media API
        // For now, we'll leave it null and show the placeholder
        imageUrl = null;
      }
      
      console.log(`Post: ${item.title}, Image URL: ${imageUrl}`);

      return {
        id: `wp-${index}`,
        title: item.title,
        slug: item.link, // Use full URL for WordPress posts
        excerpt: cleanExcerpt,
        content: item.description,
        author: item["dc:creator"] || "ShootOrder",
        publishDate: new Date(item.pubDate).toISOString(),
        category: categories[0] || "Blog",
        tags: categories,
        imageUrl: imageUrl,
        views: 0,
        published: true,
      };
    });

    return wordpressPosts;
  } catch (error) {
    console.error("Error fetching WordPress blogs:", error);
    return [];
  }
}

// Function to get only WordPress RSS blogs
async function getAllBlogs() {
  const wordpressBlogs = await getWordPressBlogs();

  // Sort WordPress blogs by publish date (newest first)
  wordpressBlogs.sort(
    (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
  );

  return wordpressBlogs;
}

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [displayedBlogs, setDisplayedBlogs] = useState([]);
  const [blogsToShow, setBlogsToShow] = useState(3);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const fetchedBlogs = await getAllBlogs();
      setBlogs(fetchedBlogs);
      setDisplayedBlogs(fetchedBlogs.slice(0, blogsToShow));
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  const handleLoadMore = () => {
    setLoadingMore(true);
    const newBlogsToShow = blogsToShow + 3;
    setBlogsToShow(newBlogsToShow);
    setDisplayedBlogs(blogs.slice(0, newBlogsToShow));

    // Simulate loading delay
    setTimeout(() => {
      setLoadingMore(false);
    }, 500);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="!max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-8 text-center">Top Blogs</h3>
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center animate-pulse">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 01-2-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <p className="text-gray-600">Loading blogs...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Blog Posts */}
      <div className="!max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-8 text-center">Top Blogs</h3>
        {blogs.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 01-2-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No blog posts yet
              </h3>
              <p className="text-gray-600 mb-8">
                We're working on creating amazing content for you. Check back
                soon!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Featured Image */}
                <div className="relative h-48 bg-gray-200">
                  {blog.imageUrl ? (
                    <Image
                      src={blog.imageUrl}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      unoptimized={true} // Add this to bypass Next.js image optimization for external URLs
                      onError={(e) => {
                        console.log(`Image failed to load: ${blog.imageUrl}`);
                        e.target.style.display = "none";
                        const placeholder = e.target.parentNode.querySelector('.image-placeholder');
                        if (placeholder) {
                          placeholder.style.display = "flex";
                        }
                      }}
                      onLoad={() => {
                        console.log(`Image loaded successfully: ${blog.imageUrl}`);
                      }}
                    />
                  ) : null}
                  
                  {/* Fallback placeholder */}
                  <div
                    className={`image-placeholder w-full h-full flex items-center justify-center ${
                      blog.imageUrl ? "hidden" : "flex"
                    }`}
                  >
                    <svg
                      className="w-16 h-16 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  {blog.category && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-[#FFFCEA] text-black text-xs font-semibold px-2.5 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="font-medium text-gray-700">
                      {blog.author}
                    </span>
                    <span className="mx-2">•</span>
                    <time dateTime={blog.publishDate}>
                      {formatDate(blog.publishDate)}
                    </time>
                    {blog.views > 0 && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{blog.views} views</span>
                      </>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <a
                      href={blog.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors"
                    >
                      {blog.title}
                    </a>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                      {blog.tags.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{blog.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  <a
                    href={blog.slug}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {blogs.length > 0 && displayedBlogs.length < blogs.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto"
            >
              {loadingMore ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading...
                </>
              ) : (
                `Load More Posts (${
                  blogs.length - displayedBlogs.length
                } remaining)`
              )}
            </button>
          </div>
        )}

        {/* Show all loaded message */}
        {blogs.length > 0 &&
          displayedBlogs.length >= blogs.length &&
          blogs.length > 3 && (
            <div className="text-center mt-12">
              <p className="text-gray-600 font-medium">
                All {blogs.length} blog posts loaded
              </p>
            </div>
          )}
      </div>
    </>
  );
}

export default Blogs;