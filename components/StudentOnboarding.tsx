'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface OnboardingData {
  course: string;
  batchTime: string;
  parentName: string;
  aadharNumber: string;
  parentPhone: string;
  additionalCourses: string[];
}

const COURSES = [
  { id: '6-8', label: 'Class 6-8', description: 'Foundation Building' },
  { id: '9-10', label: 'Class 9-10', description: 'Board Preparation' },
  { id: '11-12', label: 'Class 11-12', description: 'Advanced Level' },
];

const BATCH_TIMES = {
  '6-8': ['4:00 PM - 5:30 PM', '5:45 PM - 7:15 PM'],
  '9-10': ['4:00 PM - 5:30 PM', '5:45 PM - 7:15 PM'],
  '11-12': ['10:00 AM - 12:00 PM', '2:00 PM - 4:00 PM'],
};

const ADDITIONAL_COURSES = [
  { id: 'dress', label: 'School Dress', price: '₹500' },
  { id: 'copies', label: 'Study Copies', price: '₹300' },
  { id: 'smartClasses', label: 'Smart Classes Access', price: '₹1000' },
];

export default function StudentOnboarding() {
  const router = useRouter();
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState<OnboardingData>({
    course: '',
    batchTime: '',
    parentName: '',
    aadharNumber: '',
    parentPhone: '',
    additionalCourses: [],
  });

  useEffect(() => {
    if (!isOpen) {
      router.push('/student/dashboard');
    }
  }, [isOpen, router]);

  const handleCourseSelect = (courseId: string) => {
    setData({ ...data, course: courseId, batchTime: '' });
  };

  const handleBatchTimeSelect = (time: string) => {
    setData({ ...data, batchTime: time });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleAdditionalCourseToggle = (courseId: string) => {
    setData((prev) => ({
      ...prev,
      additionalCourses: prev.additionalCourses.includes(courseId)
        ? prev.additionalCourses.filter((c) => c !== courseId)
        : [...prev.additionalCourses, courseId],
    }));
  };

  const validateStep = () => {
    if (step === 1 && !data.course) {
      toast.error('Please select a course');
      return false;
    }
    if (step === 2 && !data.batchTime) {
      toast.error('Please select a batch time');
      return false;
    }
    if (step === 3) {
      if (!data.parentName.trim()) {
        toast.error('Please enter parent name');
        return false;
      }
      if (!data.aadharNumber.trim() || data.aadharNumber.length !== 12) {
        toast.error('Please enter valid 12-digit Aadhar number');
        return false;
      }
      if (!data.parentPhone.trim() || data.parentPhone.length !== 10) {
        toast.error('Please enter valid 10-digit phone number');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (validateStep()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/enrollment/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Enrollment failed');
        }

        toast.success('Enrollment Successful!', {
          description: 'Welcome to Gupta\'s Classes.',
        });

        // Close modal and redirect
        setIsOpen(false);
      } catch (error: any) {
        toast.error('Enrollment Error', {
          description: error.message || 'Failed to complete enrollment',
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Complete Your Enrollment</DialogTitle>
          <DialogDescription>
            Step {step} of 4 - Welcome {user?.name}!
          </DialogDescription>
          <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gray-900 h-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="py-6">
          {/* Step 1: Course Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Your Course</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {COURSES.map((course) => (
                    <button
                      key={course.id}
                      onClick={() => handleCourseSelect(course.id)}
                      className={`p-6 rounded-lg border-2 transition-all ${
                        data.course === course.id
                          ? 'border-gray-900 bg-gray-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900">{course.label}</h3>
                      <p className="text-sm text-gray-600 mt-2">{course.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Batch Time Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Batch Time</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Available times for {COURSES.find((c) => c.id === data.course)?.label}
                </p>
                <div className="space-y-3">
                  {BATCH_TIMES[data.course as keyof typeof BATCH_TIMES]?.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleBatchTimeSelect(time)}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                        data.batchTime === time
                          ? 'border-gray-900 bg-gray-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <p className="font-semibold text-gray-900">{time}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Personal Information */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Parent/Guardian Name
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={data.parentName}
                      onChange={handleInputChange}
                      placeholder="Enter parent name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Aadhar Number
                    </label>
                    <input
                      type="text"
                      name="aadharNumber"
                      value={data.aadharNumber}
                      onChange={handleInputChange}
                      placeholder="12-digit Aadhar number"
                      maxLength={12}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Parent Phone Number
                    </label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={data.parentPhone}
                      onChange={handleInputChange}
                      placeholder="10-digit phone number"
                      maxLength={10}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Additional Courses */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Additional Services</h2>
                <p className="text-gray-600 text-sm mb-6">
                  Select any additional services you'd like to add (optional)
                </p>
                <div className="space-y-3">
                  {ADDITIONAL_COURSES.map((course) => (
                    <label
                      key={course.id}
                      className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-all"
                    >
                      <input
                        type="checkbox"
                        checked={data.additionalCourses.includes(course.id)}
                        onChange={() => handleAdditionalCourseToggle(course.id)}
                        className="w-5 h-5 text-gray-900 rounded"
                      />
                      <div className="ml-4 flex-1">
                        <p className="font-semibold text-gray-900">{course.label}</p>
                      </div>
                      <p className="text-gray-900 font-bold">{course.price}</p>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between gap-4 pt-6 border-t border-gray-200">
          <Button
            onClick={handlePrevious}
            disabled={step === 1}
            variant="outline"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {step < 4 ? (
            <Button onClick={handleNext}>
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? 'Completing...' : 'Complete Enrollment'}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
