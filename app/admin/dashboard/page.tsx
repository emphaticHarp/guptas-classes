'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { Menu, X, LogOut, Home, Users, BookOpen, BarChart3, Settings, Bell, HelpCircle, Shield, FileText } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function AdminDashboard() {
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'admin') {
      router.push('/');
      return;
    }
    setLoading(false);
  }, [isAuthenticated, user, router]);

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
    { icon: Home, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Users, label: 'Manage Users', href: '/admin/users' },
    { icon: BookOpen, label: 'Manage Courses', href: '/admin/courses' },
    { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
    { icon: FileText, label: 'Reports', href: '/admin/reports' },
    { icon: Shield, label: 'Security', href: '/admin/security' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
    { icon: HelpCircle, label: 'Help & Support', href: '/admin/support' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gradient-to-b from-red-600 to-red-800 text-white transition-all duration-300 fixed h-screen overflow-y-auto z-40`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-red-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-red-600">
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
              className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-red-500 transition-colors"
              title={!sidebarOpen ? item.label : ''}
            >
              <item.icon size={20} />
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-red-500">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-red-700 transition-colors"
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
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-white font-bold">
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
            <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg p-8 mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome, {user?.name}! 👋</h1>
              <p className="text-red-100">
                Manage users, courses, and monitor system analytics.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <p className="text-gray-600 text-sm font-medium mb-2">Total Users</p>
                <p className="text-3xl font-bold text-gray-900">0</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <p className="text-gray-600 text-sm font-medium mb-2">Total Courses</p>
                <p className="text-3xl font-bold text-gray-900">3</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <p className="text-gray-600 text-sm font-medium mb-2">Active Enrollments</p>
                <p className="text-3xl font-bold text-gray-900">0</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <p className="text-gray-600 text-sm font-medium mb-2">System Health</p>
                <p className="text-3xl font-bold text-green-600">100%</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/admin/users"
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <Users size={32} className="text-red-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Manage Users</h3>
                <p className="text-sm text-gray-600">View and manage all users</p>
              </Link>

              <Link
                href="/admin/courses"
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <BookOpen size={32} className="text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Manage Courses</h3>
                <p className="text-sm text-gray-600">Create and manage courses</p>
              </Link>

              <Link
                href="/admin/analytics"
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <BarChart3 size={32} className="text-purple-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Analytics</h3>
                <p className="text-sm text-gray-600">View system analytics</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
