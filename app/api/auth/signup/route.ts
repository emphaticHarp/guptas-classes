import { connectDB } from '@/lib/mongodb';
import User from '@/lib/models/User';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    console.log('Signup request received');
    
    await connectDB();
    console.log('Database connected');

    const { name, email, phone, password, role, class: userClass } = await request.json();

    // Validation
    if (!name || !email || !phone || !password) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'Email already registered' },
        { status: 400 }
      );
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      phone,
      password,
      role: role || 'student',
      class: userClass,
      isVerified: true, // Auto-verify for now
    });

    console.log('User created:', user._id);

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    );

    // Create response with cookie
    const response = NextResponse.json(
      {
        success: true,
        message: 'User registered successfully',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          class: user.class,
        },
        token,
      },
      { status: 201 }
    );

    // Set secure cookie
    response.cookies.set('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error: any) {
    console.error('Signup error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      codeName: error.codeName,
    });
    
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || 'Signup failed',
        error: error.codeName || 'Unknown error'
      },
      { status: 500 }
    );
  }
}
