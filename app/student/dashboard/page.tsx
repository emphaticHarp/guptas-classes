'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { Menu, X, LogOut, Home, BookOpen, Clock, User, Settings, Bell } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function StudentDashboard() {
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [enrollment, setEnrollment] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
      return;
    }

    // Fetch enrollment data
    const fetchEnrollment = async () => {
      try {
        const response = await fetch('/api/enrollment/get');
        const data = await response.json();
        if (data.success) {
          setEnrollment(data.enrollment);
        }
      } catch (error) {
        console.error('Failed to fetch enrollment:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollment();
  }, [isAuthenticated, router]);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      router.push('/');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/student/dashboard' },
    { icon: BookOpen, label: 'My Courses', href: '/student/courses' },
    { icon: Clock, label: 'Schedule', href: '/student/schedule' },
    { icon: User, label: 'Profile', href: '/student/profile' },
    { icon: Bell, label: 'Notifications', href: '/student/notifications' },
    { icon: Settings, label: 'Settings', href: '/student/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gradient-to-b from-blue-600 to-blue-800 text-white transition-all duration-300 fixed h-screen overflow-y-auto z-40`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-blue-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-blue-600">
              GC
            </div>
            {sidebarOpen && <span className="font-bold text-lg">Gupta's Classes</span>}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-blue-500 transition-colors"
              title={!sidebarOpen ? item.label : ''}
            >
              <item.icon size={20} />
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-blue-500">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-red-600 transition-colors"
            title={!sidebarOpen ? 'Logout' : ''}
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${sidebarOpen ? 'ml-64' : 'ml-20'} flex-1 flex flex-col transition-all duration-300`}>
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold text-gray-900">{user?.name}</p>
              <p className="text-sm text-gray-600 capitalize">{user?.role}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              {user?.name
                ?.split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()
                .slice(0, 2)}
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-6xl mx-auto">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome, {user?.name}! 👋</h1>
              <p className="text-blue-100">
                You're all set! Start exploring your courses and schedule.
              </p>
            </div>

            {/* Enrollment Info */}
            {enrollment && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <p className="text-gray-600 text-sm font-medium mb-2">Current Course</p>
                  <p className="text-2xl font-bold text-gray-900">Class {enrollment.course}</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <p className="text-gray-600 text-sm font-medium mb-2">Batch Time</p>
                  <p className="text-lg font-bold text-gray-900">{enrollment.batchTime}</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <p className="text-gray-600 text-sm font-medium mb-2">Status</p>
                  <p className="text-lg font-bold text-green-600 capitalize">{enrollment.enrollmentStatus}</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <p className="text-gray-600 text-sm font-medium mb-2">Enrolled On</p>
                  <p className="text-lg font-bold text-gray-900">
                    {new Date(enrollment.enrollmentDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/student/courses"
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <BookOpen size={32} className="text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">My Courses</h3>
                <p className="text-sm text-gray-600">View and manage your enrolled courses</p>
              </Link>

              <Link
                href="/student/schedule"
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <Clock size={32} className="text-purple-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Schedule</h3>
                <p className="text-sm text-gray-600">Check your class timings and schedule</p>
              </Link>

              <Link
                href="/student/profile"
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <User size={32} className="text-green-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Profile</h3>
                <p className="text-sm text-gray-600">Update your personal information</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
