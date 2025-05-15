// src/app/api/services/route.js
import { addService, deleteService } from '@/lib/services';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// POST handler to create a new service
export async function POST(request) {
  try {
    const serviceData = await request.json();
    console.log('Received service data:', serviceData);
    
    // Validate required fields
    if (!serviceData.title || !serviceData.slug || !serviceData.description) {
      return NextResponse.json(
        { error: 'Title, slug, and description are required' },
        { status: 400 }
      );
    }
    
    // Add the new service
    const result = await addService(serviceData);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to create service' },
        { status: 500 }
      );
    }
    
    // Revalidate the services and specific service pages
    revalidatePath('/services');
    revalidatePath(`/services/${serviceData.slug}`);
    
    return NextResponse.json({ success: true, service: result.service }, { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

// DELETE handler to remove a service
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Service slug is required' },
        { status: 400 }
      );
    }
    
    const result = await deleteService(slug);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to delete service' },
        { status: 500 }
      );
    }
    
    // Revalidate services page
    revalidatePath('/services');
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}