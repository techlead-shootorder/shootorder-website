import React from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

const BLOGS_DIRECTORY = path.join(process.cwd(), "data", "blogs");
async function getBlogs() {
  try {
    if (!fs.existsSync(BLOGS_DIRECTORY)) {
      return [];
    }
    const files = fs.readdirSync(BLOGS_DIRECTORY);
    const blogs = [];

    for (const file of files) {
      if (file.endsWith(".json") && file !== "index.json") {
        const filePath = path.join(BLOGS_DIRECTORY, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const blog = JSON.parse(fileContent);

        // Only show published blogs in production
        if (blog.published || process.env.NODE_ENV !== "production") {
          blogs.push(blog);
        }
      }
    }

    // Sort blogs by publish date (newest first)
    blogs.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

    return blogs;
  } catch (error) {
    console.error("Error reading blogs:", error);
    return [];
  }
}
async function Blogs() {
  const blogs = await getBlogs();
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  console.log(blogs);
  return (
    <>
      {/* Blog Posts */}
      <div className="!max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-8 text-center">
          Top Blogs
        </h3>
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
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
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
            {blogs.map((blog) => (
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
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
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
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
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
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {blog.title}
                    </Link>
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

                  <Link
                    href={`/blogs/${blog.slug}`}
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load More Button (for future pagination) */}
        {blogs.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium">
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Blogs;
