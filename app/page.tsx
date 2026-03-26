import Image from 'next/image';
import Link from 'next/link';
import { Star, Users, BookOpen, Award, ArrowRight } from 'lucide-react';
import TestimonialWall from '@/components/TestimonialWall';
import BrandTicker from '@/components/BrandTicker';
import ExpandingGallery from '@/components/ExpandingGallery';
import ToppersGallery from '@/components/ToppersGallery';
import { analytics } from '@/lib/analytics';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200 py-12 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
                <img src="/logo.jpg" alt="Gupta's Classes Logo" className="h-14 md:h-20 w-auto rounded-lg shadow-md" />
                <div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                    Gupta's Classes
                  </h1>
                  <p className="text-sm md:text-lg text-gray-600 font-light mt-1">Excellence in Education Since 2014</p>
                </div>
              </div>
              <p className="text-lg md:text-2xl lg:text-3xl text-gray-700 mb-4 md:mb-6 font-light leading-relaxed">
                Building Strong Foundations for Academic Success
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-10 leading-relaxed">
                Personalized education with expert guidance. Join 500+ successful students who have transformed their academic journey with our concept-based learning approach and dedicated mentorship.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                <Link href="/contact" className="btn-primary bg-gray-900 text-white hover:bg-gray-800 text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                  Start Your Journey
                </Link>
                <a
                  href="https://wa.me/919101234567?text=Hello! I am interested in joining Gupta's Classes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary border-gray-300 text-gray-900 hover:bg-gray-50 text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-200">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Students Taught</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">95%</p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Pass Rate</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">10+</p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 shadow-xl border border-gray-300">
                <div className="bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-6">👨‍🏫</div>
                    <p className="text-gray-900 font-bold text-2xl">Diptanu Gupta</p>
                    <p className="text-gray-700 text-lg mt-2">Founder & Lead Educator</p>
                    <p className="text-gray-600 text-sm mt-4">M.A. in Education | 10+ Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo & Institution Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Gupta's Classes</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Established in 2014 | Trusted by 500+ Students | 95% Pass Rate
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <img src="/logo.jpg" alt="Gupta's Classes Official Logo" className="h-20 md:h-24 w-auto rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Ticker Section */}
      <BrandTicker />

      {/* Teacher Highlight Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Meet Your Educator</h2>
            <p className="section-subtitle">
              Learn from an experienced and dedicated educator with proven track record
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Experience Card */}
            <div className="card-base text-center animate-fade-in-up hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-6">📚</div>
              <h3 className="text-3xl font-bold mb-3 text-gray-900">10+ Years</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Dedicated experience in teaching and mentoring students across multiple boards and curricula
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">Taught 500+ students successfully</p>
              </div>
            </div>

            {/* Subjects Card */}
            <div className="card-base text-center animate-fade-in-up hover:shadow-lg transition-shadow" style={{ animationDelay: '0.1s' }}>
              <div className="text-6xl mb-6">🎓</div>
              <h3 className="text-3xl font-bold mb-3 text-gray-900">Multiple Subjects</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Expert in English, Bengali, and Social Science for CBSE and TBSE boards
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">English</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Bengali</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Social Science</span>
                </div>
              </div>
            </div>

            {/* Approach Card */}
            <div className="card-base text-center animate-fade-in-up hover:shadow-lg transition-shadow" style={{ animationDelay: '0.2s' }}>
              <div className="text-6xl mb-6">💡</div>
              <h3 className="text-3xl font-bold mb-3 text-gray-900">Concept-Based</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Focus on building strong fundamentals and deep understanding of concepts
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">95% student pass rate consistently</p>
              </div>
            </div>
          </div>

          {/* Teacher Bio */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 md:p-12 shadow-md border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">About Diptanu Gupta</h4>
                <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                  Diptanu Gupta is a passionate educator with over 10 years of dedicated experience in teaching. With a deep commitment to student success, he has helped hundreds of students achieve their academic goals through personalized attention and concept-based learning.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Teaching Philosophy</h4>
                <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                  His teaching philosophy centers on understanding each student's unique learning style and building strong foundations that lead to long-term academic success. He believes in making education engaging and meaningful.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Achievements</h4>
                <ul className="text-gray-700 text-xs md:text-sm space-y-2">
                  <li>✓ Recognized as Best Educator in Agartala</li>
                  <li>✓ 4.9/5 average rating from students</li>
                  <li>✓ 20-30% average grade improvement</li>
                  <li>✓ Active in educational community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Why Choose Gupta's Classes?</h2>
            <p className="section-subtitle">
              Discover what makes us the preferred choice for quality education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {[
              {
                icon: '👨‍🏫',
                title: 'Experienced Teacher',
                desc: '10+ years of proven teaching excellence with 500+ successful students',
                details: ['Expert in multiple subjects', 'Personalized approach', 'Proven results']
              },
              {
                icon: '👥',
                title: 'Personal Attention',
                desc: 'Small batches ensuring individual focus and customized learning',
                details: ['8-10 students per batch', 'One-on-one sessions', 'Doubt clearing']
              },
              {
                icon: '💡',
                title: 'Concept-Based Learning',
                desc: 'Deep understanding over rote memorization for lasting knowledge',
                details: ['Interactive sessions', 'Real-world examples', 'Critical thinking']
              },
              {
                icon: '📈',
                title: 'Proven Results',
                desc: 'Consistent student improvement with 95% pass rate',
                details: ['20-30% grade improvement', '4.9/5 rating', 'Top performers']
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card-base text-center animate-fade-in-up hover:shadow-lg transition-all hover:-translate-y-1"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <div className="pt-4 border-t border-gray-200">
                  <ul className="text-xs text-gray-600 space-y-1">
                    {item.details.map((detail, i) => (
                      <li key={i}>✓ {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Regular Assessments', desc: 'Monthly tests and assignments to track progress' },
                { title: 'Study Materials', desc: 'Curated notes and practice materials provided' },
                { title: 'Progress Reports', desc: 'Regular feedback and updates to parents' },
                { title: 'Flexible Timings', desc: 'Batch and one-on-one sessions available' },
                { title: 'Exam Preparation', desc: 'Focused preparation for board exams' },
                { title: 'Mentorship', desc: 'Guidance beyond academics for overall development' },
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Student Testimonials</h2>
          <p className="section-subtitle text-center">
            What our students and parents say
          </p>

          <TestimonialWall />
        </div>
      </section>

      {/* Expanding Gallery Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Institution Glimpses</h2>
          <ExpandingGallery />
        </div>
      </section>

      {/* Toppers Gallery Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Our Top Performers</h2>
          <p className="section-subtitle text-center mb-12">
            Meet our exceptional students who achieved outstanding results
          </p>
          <ToppersGallery />
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Results & Impact</h2>
            <p className="section-subtitle">
              Proven track record of student success and academic excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { number: '500+', label: 'Students Taught', icon: '👥', desc: 'Across all classes and subjects' },
              { number: '95%', label: 'Pass Rate', icon: '✓', desc: 'Consistently high success rate' },
              { number: '4.9/5', label: 'Average Rating', icon: '⭐', desc: 'From students and parents' },
              { number: '10+', label: 'Years Experience', icon: '📅', desc: 'Dedicated to education' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="card-base text-center animate-fade-in-up hover:shadow-lg transition-all hover:-translate-y-1"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <p className="text-gray-900 font-bold text-lg mb-2">{stat.label}</p>
                <p className="text-gray-600 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-12 shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Student Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Aarav Kumar',
                  class: 'Class 12',
                  improvement: '20% Grade Improvement',
                  achievement: 'Scored 95% in English'
                },
                {
                  name: 'Priya Sharma',
                  class: 'Class 10',
                  improvement: '25% Grade Improvement',
                  achievement: 'Topped in Social Science'
                },
                {
                  name: 'Rohan Patel',
                  class: 'Class 11',
                  improvement: '18% Grade Improvement',
                  achievement: 'Consistent A+ grades'
                },
              ].map((story, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-1">{story.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{story.class}</p>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-semibold text-gray-900">Improvement:</span> {story.improvement}</p>
                    <p className="text-sm"><span className="font-semibold text-gray-900">Achievement:</span> {story.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your Academic Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Join hundreds of successful students who have achieved their academic goals
          </p>
          <p className="text-lg text-gray-400 mb-12">
            Limited seats available for this academic year. Enroll now and get personalized guidance from an experienced educator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-gray-900 hover:bg-gray-100 inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
              Enroll Now <ArrowRight size={24} />
            </Link>
            <a
              href="https://wa.me/919101234567?text=Hello! I am interested in joining Gupta's Classes."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg"
            >
              Chat on WhatsApp <ArrowRight size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-8">
            📞 Call us: +91 XXXXXXXXXX | 📧 Email: info@guptasclasses.com
          </p>
        </div>
      </section>
    </div>
  );
}
