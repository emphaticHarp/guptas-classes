import { Award, BookOpen, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-6">
            <img src="/logo.jpg" alt="Gupta's Classes Logo" className="h-16 w-auto rounded-lg shadow-md" />
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">About Gupta's Classes</h1>
              <p className="text-lg text-gray-600 font-light mt-2">Excellence in Education Since 2014</p>
            </div>
          </div>
          <p className="text-2xl text-gray-700 font-light leading-relaxed max-w-3xl">
            Dedicated to building strong academic foundations and transforming student lives through personalized, concept-based education
          </p>
        </div>
      </section>

      {/* About Diptanu Gupta */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded-2xl h-96 flex items-center justify-center shadow-lg border border-gray-300">
              <div className="text-center">
                <div className="text-9xl mb-6">👨‍🏫</div>
                <p className="text-gray-900 text-3xl font-bold">Diptanu Gupta</p>
                <p className="text-gray-700 text-lg mt-2">Founder & Lead Educator</p>
                <p className="text-gray-600 text-sm mt-4">M.A. in Education | 10+ Years Experience</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Meet Diptanu Gupta
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-base">
                Diptanu Gupta is an accomplished educator with over 10 years of dedicated experience in teaching. His passion for education and commitment to student success has made him a trusted mentor for hundreds of students across Agartala.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-base">
                With a deep understanding of different learning styles and educational psychology, Diptanu has developed a unique teaching methodology that combines concept-based learning with practical application, ensuring students not only score well but also develop a genuine love for learning.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 text-base">
                His classes are known for their personalized attention, interactive sessions, and a supportive learning environment where every student feels valued and motivated to excel.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-bold text-gray-900">10+</p>
                  <p className="text-sm text-gray-600 mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600 mt-1">Students Taught</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">95%</p>
                  <p className="text-sm text-gray-600 mt-1">Pass Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Teaching Philosophy</h2>
            <p className="section-subtitle">
              Our comprehensive approach to education and student development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: '💡',
                title: 'Concept-Based Learning',
                desc: 'We focus on building deep understanding of concepts rather than rote memorization. Students learn the "why" behind every topic, enabling them to apply knowledge in different contexts.',
              },
              {
                icon: '👥',
                title: 'Personalized Attention',
                desc: 'Small batch sizes ensure that each student receives individual attention. We identify learning gaps and tailor our teaching to meet individual needs.',
              },
              {
                icon: '🎯',
                title: 'Goal-Oriented Approach',
                desc: 'We set clear academic goals and work systematically to achieve them. Regular assessments and feedback help students track their progress.',
              },
              {
                icon: '🌟',
                title: 'Holistic Development',
                desc: 'Beyond academics, we focus on developing critical thinking, communication skills, and confidence in our students.',
              },
            ].map((item, idx) => (
              <div key={idx} className="card-base hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Achievements */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Experience & Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Award className="text-gray-700" size={28} />
                Experience
              </h3>
              <ul className="space-y-4">
                {[
                  '10+ years of teaching experience',
                  'Taught 500+ students successfully',
                  '95% pass rate consistently',
                  'Expert in CBSE and TBSE curricula',
                  'Specialized in English, Bengali, and Social Science',
                  'Mentored students to top ranks',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-gray-700 font-bold mt-1">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Target className="text-gray-700" size={28} />
                Achievements
              </h3>
              <ul className="space-y-4">
                {[
                  'Recognized as Best Educator in Agartala',
                  '4.9/5 average rating from students',
                  'Helped students improve grades by 20-30%',
                  'Developed innovative teaching materials',
                  'Regular workshops for parents and students',
                  'Active in educational community development',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-gray-700 font-bold mt-1">⭐</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects & Boards */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Subjects & Boards</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Subjects */}
            <div className="card-base">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <BookOpen className="text-gray-700" size={28} />
                Subjects Taught
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'English', desc: 'Grammar, Literature, Communication' },
                  { name: 'Bengali', desc: 'Language, Literature, Writing Skills' },
                  { name: 'Social Science', desc: 'History, Geography, Civics, Economics' },
                ].map((subject, idx) => (
                  <li key={idx} className="pb-3 border-b last:border-b-0">
                    <p className="font-semibold text-gray-900 text-sm">{subject.name}</p>
                    <p className="text-xs text-gray-600">{subject.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Boards */}
            <div className="card-base">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Users className="text-gray-700" size={28} />
                Boards Covered
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'CBSE', desc: 'Central Board of Secondary Education' },
                  { name: 'TBSE', desc: 'Tripura Board of Secondary Education' },
                  { name: 'All Classes', desc: 'Class 6 to Class 12' },
                ].map((board, idx) => (
                  <li key={idx} className="pb-3 border-b last:border-b-0">
                    <p className="font-semibold text-gray-900 text-sm">{board.name}</p>
                    <p className="text-xs text-gray-600">{board.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Students Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Why Students Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Expert Guidance',
                desc: 'Learn from an educator with 10+ years of proven experience and a track record of student success.',
              },
              {
                number: '02',
                title: 'Personalized Learning',
                desc: 'Small batches and individual attention ensure your learning pace and style are respected.',
              },
              {
                number: '03',
                title: 'Proven Results',
                desc: 'Our students consistently achieve top grades and develop a genuine love for learning.',
              },
            ].map((item, idx) => (
              <div key={idx} className="card-base text-center">
                <div className="text-5xl font-bold text-gray-900 mb-4">{item.number}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
