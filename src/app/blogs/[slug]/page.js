// app/blogs/[slug]/page.js
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

const BLOGS_DIRECTORY = path.join(process.cwd(), "data", "blogs");

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    if (!fs.existsSync(BLOGS_DIRECTORY)) {
      return [];
    }

    const files = fs.readdirSync(BLOGS_DIRECTORY);
    return files
      .filter((file) => file.endsWith(".json") && file !== "index.json")
      .map((file) => ({
        slug: file.replace(".json", ""),
      }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Get blog data
async function getBlogData(slug) {
  try {
    const filePath = path.join(BLOGS_DIRECTORY, `${slug}.json`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading blog:", error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const blog = await getBlogData(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: blog.tags?.join(", "),
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.publishDate,
      authors: [blog.author],
      images: blog.imageUrl ? [blog.imageUrl] : [],
    },
  };
}

export default async function BlogPage({ params }) {
  const blog = await getBlogData(params.slug);

  if (!blog) {
    notFound();
  }

  // Don't show unpublished blogs in production
  if (!blog.published && process.env.NODE_ENV === "production") {
    notFound();
  }

  const publishDate = new Date(blog.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="  bg-gray-50">
      {/* Featured Image */}
      {blog.imageUrl && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-128 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
      {/* Hero Section */}
      <div className="!max-w-7xl mx-auto bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <nav className="mb-8">
            <Link
              href="/blogs"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              ← Back to Blogs
            </Link>
          </nav>

          <div className="mb-6">
            {blog.category && (
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">
                {blog.category}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {blog.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {blog.excerpt}
            </p>
          </div>

          <div className="flex items-center text-sm text-gray-500 mb-8">
            <span className="font-medium text-gray-900">{blog.author}</span>
            <span className="mx-2">•</span>
            <time dateTime={blog.publishDate}>{publishDate}</time>
            <span className="mx-2">•</span>
            <span>{blog.views || 0} views</span>
          </div>

          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="!max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>

        {/* Share Section */}
        <div className="mt-12 p-8 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Share this article
          </h3>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#FFFCEA] text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              Twitter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-.967 0-1.75-.79-1.75-1.756s.783-1.756 1.75-1.756 1.75.79 1.75 1.756-.783 1.756-1.75 1.756zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border-l-4 border-blue-500">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-600">
                {blog.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                About {blog.author}
              </h4>
              <p className="text-gray-600 text-sm">
                Content creator and industry expert sharing insights on{" "}
                {blog.category || "various topics"}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
