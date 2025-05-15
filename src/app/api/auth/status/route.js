// src/app/api/auth/status/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    // Check if auth token exists
    const cookieStore = cookies();
    const authToken = cookieStore.get('auth_token');
    
    if (authToken) {
      // In a real application, you would validate the token here
      // (check if it's expired, verify signature if using JWT, etc.)
      return NextResponse.json({ 
        authenticated: true
      });
    } else {
      return NextResponse.json({ 
        authenticated: false
      });
    }
  } catch (error) {
    console.error('Auth status error:', error);
    return NextResponse.json(
      { authenticated: false, error: 'Failed to check authentication status' },
      { status: 500 }
    );
  }
}