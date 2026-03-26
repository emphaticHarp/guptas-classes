import Link from 'next/link';
import { Clock, Users, BookOpen, CheckCircle } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      class: 'Class 6-8',
      subjects: ['English', 'Bengali', 'Social Science'],
      timing: 'Mon-Fri: 4:00 PM - 5:30 PM',
      batchSize: '8-10 students',
      fee: '₹3,000/month',
      highlights: [
        'Foundation building',
        'Concept clarity',
        'Regular assessments',
        'Parent updates',
      ],
    },
    {
      class: 'Class 9-10',
      subjects: ['English', 'Bengali', 'Social Science'],
      timing: 'Mon-Fri: 5:45 PM - 7:15 PM',
      batchSize: '8-10 students',
      fee: '₹4,000/month',
      highlights: [
        'Board exam preparation',
        'Intensive practice',
        'Mock tests',
        'Doubt clearing sessions',
      ],
    },
    {
      class: 'Class 11-12 (Arts)',
      subjects: ['English', 'Bengali', 'History', 'Geography', 'Political Science'],
      timing: 'Sat-Sun: 10:00 AM - 12:00 PM',
      batchSize: '6-8 students',
      fee: '₹5,000/month',
      highlights: [
        'Advanced concepts',
        'Essay writing',
        'Answer writing skills',
        'Competitive exam prep',
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-6">
            <img src="/logo.jpg" alt="Gupta's Classes Logo" className="h-16 w-auto rounded-lg shadow-md" />
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Our Courses</h1>
              <p className="text-lg text-gray-600 font-light mt-2">Comprehensive Programs for Academic Excellence</p>
            </div>
          </div>
          <p className="text-2xl text-gray-700 font-light leading-relaxed max-w-3xl">
            Tailored educational programs for Class 6 to Class 12, designed to build strong foundations and achieve academic excellence
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Choose Your Course</h2>
          <p className="section-subtitle text-center">
            Tailored programs for every academic level
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="card-base border border-gray-300 hover:border-gray-400 transition-colors bg-white"
              >
                {/* Class Header */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.class}</h3>
                  <p className="text-gray-900 font-semibold text-lg">{course.fee}</p>
                </div>

                {/* Subjects */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                    <BookOpen size={18} className="text-gray-700" />
                    Subjects
                  </h4>
                  <ul className="space-y-2">
                    {course.subjects.map((subject, sidx) => (
                      <li key={sidx} className="text-gray-700 flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timing & Batch */}
                <div className="mb-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-gray-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Timing</p>
                      <p className="text-gray-900 font-medium text-sm">{course.timing}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users size={18} className="text-gray-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Batch Size</p>
                      <p className="text-gray-900 font-medium text-sm">{course.batchSize}</p>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">What's Included</h4>
                  <ul className="space-y-2">
                    {course.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="text-gray-700 flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-gray-700 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link href="/contact" className="btn-primary bg-gray-900 text-white hover:bg-gray-800 w-full text-center block">
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">What Every Course Includes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '📚',
                title: 'Comprehensive Curriculum',
                desc: 'Complete coverage of board syllabus with focus on concepts',
              },
              {
                icon: '✍️',
                title: 'Regular Assessments',
                desc: 'Monthly tests and assignments to track progress',
              },
              {
                icon: '💬',
                title: 'Doubt Clearing',
                desc: 'Dedicated sessions for clearing doubts and queries',
              },
              {
                icon: '📊',
                title: 'Progress Reports',
                desc: 'Regular feedback and progress updates to parents',
              },
              {
                icon: '🎯',
                title: 'Exam Preparation',
                desc: 'Focused preparation for board and competitive exams',
              },
              {
                icon: '📖',
                title: 'Study Materials',
                desc: 'Curated notes and practice materials provided',
              },
              {
                icon: '👥',
                title: 'Small Batches',
                desc: 'Limited students for personalized attention',
              },
              {
                icon: '🌟',
                title: 'Mentorship',
                desc: 'Guidance beyond academics for overall development',
              },
            ].map((feature, idx) => (
              <div key={idx} className="card-base text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Options */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Flexible Learning Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Regular Batches',
                desc: 'Join our scheduled batches with fixed timings and consistent peer group',
                features: ['Fixed schedule', 'Group learning', 'Peer interaction', 'Affordable'],
              },
              {
                title: 'One-on-One',
                desc: 'Personalized sessions tailored to your specific needs and pace',
                features: ['Custom timing', 'Personalized', 'Flexible pace', 'Premium'],
              },
              {
                title: 'Doubt Sessions',
                desc: 'Quick sessions to clarify specific topics or prepare for exams',
                features: ['As needed', 'Targeted help', 'Quick turnaround', 'Affordable'],
              },
            ].map((option, idx) => (
              <div key={idx} className="card-base">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-700 mb-4 text-sm">{option.desc}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, fidx) => (
                    <li key={fidx} className="text-gray-700 flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Choose a course and enroll today. Limited seats available!
          </p>
          <Link href="/contact" className="btn-primary bg-white text-gray-900 hover:bg-gray-100 inline-block">
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
}
