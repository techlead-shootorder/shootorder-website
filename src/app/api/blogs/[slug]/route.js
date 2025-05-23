// app/api/blogs/[slug]/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const BLOGS_DIRECTORY = path.join(process.cwd(), 'data', 'blogs');

// GET single blog by slug
export async function GET(request, { params }) {
  try {
    const { slug } = params;
    const filePath = path.join(BLOGS_DIRECTORY, `${slug}.json`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const blog = JSON.parse(fileContent);

    // Increment view count
    blog.views = (blog.views || 0) + 1;
    blog.updatedAt = new Date().toISOString();

    // Save updated blog
    fs.writeFileSync(filePath, JSON.stringify(blog, null, 2));

    return NextResponse.json({ blog });
  } catch (error) {
    console.error('Error reading blog:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

// PUT update blog
export async function PUT(request, { params }) {
  try {
    const { slug } = params;
    const updateData = await request.json();
    const filePath = path.join(BLOGS_DIRECTORY, `${slug}.json`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const existingBlog = JSON.parse(fileContent);

    // Update blog data
    const updatedBlog = {
      ...existingBlog,
      ...updateData,
      updatedAt: new Date().toISOString()
    };

    // If slug is changed, rename the file
    if (updateData.slug && updateData.slug !== slug) {
      const newFilePath = path.join(BLOGS_DIRECTORY, `${updateData.slug}.json`);
      
      // Check if new slug already exists
      if (fs.existsSync(newFilePath)) {
        return NextResponse.json(
          { error: 'A blog with this slug already exists' },
          { status: 400 }
        );
      }

      fs.writeFileSync(newFilePath, JSON.stringify(updatedBlog, null, 2));
      fs.unlinkSync(filePath); // Delete old file
    } else {
      fs.writeFileSync(filePath, JSON.stringify(updatedBlog, null, 2));
    }

    return NextResponse.json({
      message: 'Blog updated successfully',
      blog: updatedBlog
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

// DELETE blog
export async function DELETE(request, { params }) {
  try {
    const { slug } = params;
    const filePath = path.join(BLOGS_DIRECTORY, `${slug}.json`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    fs.unlinkSync(filePath);

    return NextResponse.json({
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}