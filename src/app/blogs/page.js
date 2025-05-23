// app/blogs/page.js
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import BannerSection from "@/components/ReusableSections/BannerSection";

const BLOGS_DIRECTORY = path.join(process.cwd(), "data", "blogs");

// Get all blogs
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

// Get unique categories
function getCategories(blogs) {
  const categories = new Set();
  blogs.forEach((blog) => {
    if (blog.category) {
      categories.add(blog.category);
    }
  });
  return Array.from(categories).sort();
}

// Generate metadata
export const metadata = {
  title: "Blog | Latest Articles & Insights",
  description:
    "Discover our latest articles, tutorials, and insights on technology, business, design, and more.",
  keywords: "blog, articles, tutorials, technology, business, design, insights",
};

export default async function BlogsPage() {
  const blogs = await getBlogs();
  const categories = getCategories(blogs);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className=" min-h-screen ">
      {/* Hero Section */}
      <div className="">
        <BannerSection>
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
               Digital Marketing
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover insights, tutorials, and the latest trends in
                technology, business, and design. Stay updated with our expert
                perspectives and industry knowledge.
              </p>
            </div>

            {/* Categories Filter */}
            {categories.length > 0 && (
              <div className="mt-12 flex flex-wrap justify-center gap-3">
                <Link
                  href="/blogs"
                  className="px-4 py-2 bg-[#FFFCEA] text-black rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  All Posts
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/blogs?category=${encodeURIComponent(category)}`}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors capitalize"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </BannerSection>
      </div>

      {/* Blog Posts */}
      <div className="!max-w-7xl mx-auto px-4 py-16">
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
                We&apos;re working on creating amazing content for you. Check back
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
            <button className="px-8 py-3  rounded-full !bg-[#f2333b] text-white hover:bg-orange-600">
              Load More Posts
            </button>
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      {/* <div className="bg-[#FFFCEA]">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Stay Updated</h2>
          <p className="text-gray mb-8 text-lg">
            Subscribe to our newsletter and never miss our latest articles and
            insights.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
