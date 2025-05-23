// app/api/blogs/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const BLOGS_DIRECTORY = path.join(process.cwd(), 'data', 'blogs');

// Ensure the blogs directory exists
if (!fs.existsSync(BLOGS_DIRECTORY)) {
  fs.mkdirSync(BLOGS_DIRECTORY, { recursive: true });
}

// GET all blogs
export async function GET() {
  try {
    const files = fs.readdirSync(BLOGS_DIRECTORY);
    const blogs = [];

    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(BLOGS_DIRECTORY, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const blog = JSON.parse(fileContent);
        blogs.push(blog);
      }
    }

    // Sort blogs by publish date (newest first)
    blogs.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Error reading blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST create new blog
export async function POST(request) {
  try {
    const blogData = await request.json();

    // Validate required fields
    const requiredFields = ['title', 'slug', 'content', 'author', 'excerpt'];
    for (const field of requiredFields) {
      if (!blogData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Check if slug already exists
    const filePath = path.join(BLOGS_DIRECTORY, `${blogData.slug}.json`);
    if (fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'A blog with this slug already exists' },
        { status: 400 }
      );
    }

    // Create blog object with metadata
    const blog = {
      id: Date.now().toString(),
      ...blogData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      views: 0,
      likes: 0
    };

    // Write blog to file
    fs.writeFileSync(filePath, JSON.stringify(blog, null, 2));

    // Update blogs index (optional - for faster listing)
    updateBlogsIndex();

    return NextResponse.json(
      { message: 'Blog created successfully', blog },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}

// Helper function to update blogs index
function updateBlogsIndex() {
  try {
    const files = fs.readdirSync(BLOGS_DIRECTORY);
    const blogsIndex = [];

    for (const file of files) {
      if (file.endsWith('.json') && file !== 'index.json') {
        const filePath = path.join(BLOGS_DIRECTORY, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const blog = JSON.parse(fileContent);
        
        // Store only essential info in index
        blogsIndex.push({
          id: blog.id,
          title: blog.title,
          slug: blog.slug,
          excerpt: blog.excerpt,
          author: blog.author,
          category: blog.category,
          tags: blog.tags,
          publishDate: blog.publishDate,
          published: blog.published,
          imageUrl: blog.imageUrl,
          views: blog.views,
          likes: blog.likes,
          createdAt: blog.createdAt,
          updatedAt: blog.updatedAt
        });
      }
    }

    // Sort by publish date
    blogsIndex.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

    // Write index file
    const indexPath = path.join(BLOGS_DIRECTORY, 'index.json');
    fs.writeFileSync(indexPath, JSON.stringify(blogsIndex, null, 2));
  } catch (error) {
    console.error('Error updating blogs index:', error);
  }
}