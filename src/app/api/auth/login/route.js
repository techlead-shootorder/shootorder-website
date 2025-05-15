// src/app/api/auth/login/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyAdmin } from '@/lib/auth';

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    
    // Validate credentials
    const isValid = await verifyAdmin(username, password);
    
    if (isValid) {
      // Set authentication cookie (token-based)
      // In a real application, you should use JWT or another secure method
      const token = generateAuthToken(username);
      
      // Set the cookie with HTTP-only flag for security
      const cookieStore = cookies();
      cookieStore.set('auth_token', token, { 
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // HTTPS only in production
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
        sameSite: 'strict'
      });
      
      return NextResponse.json({ 
        success: true,
        message: 'Authentication successful' 
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Authentication failed' },
      { status: 500 }
    );
  }
}

// Generate a simple token (replace with JWT in production)
function generateAuthToken(username) {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 15);
  return Buffer.from(`${username}-${timestamp}-${randomString}`).toString('base64');
}