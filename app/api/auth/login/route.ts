import { connectDB } from '@/lib/mongodb';
import User from '@/lib/models/User';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    console.log('Login request received');
    
    await connectDB();
    console.log('Database connected');

    const { email, password } = await request.json();

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Please provide email and password' },
        { status: 400 }
      );
    }

    // Find user and select password field
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Check password
    const isPasswordValid = await user.matchPassword(password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

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
        message: 'Login successful',
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
      { status: 200 }
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
    console.error('Login error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      codeName: error.codeName,
    });
    
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || 'Login failed',
        error: error.codeName || 'Unknown error'
      },
      { status: 500 }
    );
  }
}
