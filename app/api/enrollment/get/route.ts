import { connectDB } from '@/lib/mongodb';
import Enrollment from '@/lib/models/Enrollment';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
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

    // Get enrollment
    const enrollment = await Enrollment.findOne({ studentId: userId });

    if (!enrollment) {
      return NextResponse.json(
        { success: false, message: 'No enrollment found', enrollment: null },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        enrollment,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Get enrollment error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to get enrollment' },
      { status: 500 }
    );
  }
}
