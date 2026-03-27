import { connectDB } from '@/lib/mongodb';
import Enrollment from '@/lib/models/Enrollment';
import User from '@/lib/models/User';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    // Get user from token
    const token = request.cookies.get('authToken')?.value;
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const userId = decoded.userId;

    const { course, batchTime, parentName, aadharNumber, parentPhone, additionalCourses } =
      await request.json();

    // Validation
    if (!course || !batchTime || !parentName || !aadharNumber || !parentPhone) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create enrollment
    const enrollment = await Enrollment.create({
      studentId: userId,
      course,
      batchTime,
      parentName,
      aadharNumber,
      parentPhone,
      additionalCourses: additionalCourses || [],
      enrollmentStatus: 'active',
    });

    // Update user with enrollment info
    await User.findByIdAndUpdate(userId, {
      class: course,
      isVerified: true,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Enrollment completed successfully',
        enrollment,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Enrollment error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Enrollment failed' },
      { status: 500 }
    );
  }
}
