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
    
    </>
  );
}

export default Blogs;