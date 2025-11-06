// src/lib/auth.js
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

// Path to admin users file
const adminUsersPath = path.join(process.cwd(), 'data', 'admin-users.json');

// Initialize admin users if they don't exist
export async function initializeAdminUsers() {
  try {
    // Check if admin users file exists
    if (!fs.existsSync(adminUsersPath)) {
      // Create data directory if it doesn't exist
      const dataDir = path.dirname(adminUsersPath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      
      // Create default admin user
      // In production, replace this with a secure way to set up the initial admin
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const defaultAdmins = [
        {
          username: 'admin',
          passwordHash: hashedPassword,
          role: 'admin',
          name: 'Administrator'
        }
      ];
      
      // Save default admin users
      fs.writeFileSync(adminUsersPath, JSON.stringify(defaultAdmins, null, 2), 'utf8');
      
    }
  } catch (error) {
    console.error('Error initializing admin users:', error);
  }
}

// Verify admin credentials
export async function verifyAdmin(username, password) {
  try {
    await initializeAdminUsers();
    
    // Read admin users
    const data = fs.readFileSync(adminUsersPath, 'utf8');
    const adminUsers = JSON.parse(data);
    
    // Find user by username
    const user = adminUsers.find(u => u.username === username);
    
    if (!user) {
      return false;
    }
    
    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    return isPasswordValid;
  } catch (error) {
    console.error('Error verifying admin:', error);
    return false;
  }
}

// Get current authenticated user (for server components)
export async function getCurrentUser() {
  try {
    const cookieStore = cookies();
    const authToken = cookieStore.get('auth_token')?.value;
    
    if (!authToken) {
      return null;
    }
    
    // In a real application with JWT, you would decode and verify the token
    // For this example, we'll extract the username from our simple token
    const decodedToken = Buffer.from(authToken, 'base64').toString('utf-8');
    const username = decodedToken.split('-')[0];
    
    // Get user details (excluding password)
    const data = fs.readFileSync(adminUsersPath, 'utf8');
    const adminUsers = JSON.parse(data);
    const user = adminUsers.find(u => u.username === username);
    
    if (!user) {
      return null;
    }
    
    // Return user without password hash
    const { passwordHash, ...userWithoutPassword } = user;
    return userWithoutPassword;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

// Check if the user is authenticated (for client components)
export async function isAuthenticated() {
  try {
    const response = await fetch('/api/auth/status');
    const data = await response.json();
    return data.authenticated;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
}

// Function to install the bcryptjs package - important for setup
export async function installBcrypt() {
  try {
    const { execSync } = require('child_process');
    execSync('npm install bcryptjs', { stdio: 'inherit' });
    
  } catch (error) {
    console.error('Failed to install bcryptjs:', error);
    
  }
}