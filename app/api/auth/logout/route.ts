import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const response = NextResponse.json(
      { success: true, message: 'Logged out successfully' },
      { status: 200 }
    );

    // Clear auth cookie
    response.cookies.set('authToken', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Logout failed' },
      { status: 500 }
    );
  }
}
