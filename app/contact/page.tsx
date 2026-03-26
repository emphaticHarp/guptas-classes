'use client';

import ContactForm from '@/components/ContactForm';
import { analytics } from '@/lib/analytics';

export default function Contact() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <img src="/logo.jpg" alt="Gupta's Classes Logo" className="h-12 md:h-14 w-auto rounded-md" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Get In Touch</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 font-light">
            Have questions? We'd love to hear from you. Contact us today!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Address */}
            <div className="card-base text-center">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">📍</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700 text-xs md:text-sm">
                Agartala, Tripura, India
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Conveniently located in the heart of Agartala
              </p>
            </div>

            {/* Phone */}
            <div className="card-base text-center">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">📞</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-700 text-xs md:text-sm">
                +91 7005288084
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Available Mon-Sat, 10 AM - 8 PM
              </p>
            </div>

            {/* Email */}
            <div className="card-base text-center">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">✉️</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-700 text-xs md:text-sm">
                info@guptasclasses.com
              </p>
              <p className="text-xs text-gray-600 mt-2">
                We'll respond within 24 hours
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 mb-12 md:mb-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.9767416324744!2d91.29222393035889!3d23.8549596366773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f15eab88edd5%3A0x6c8941b0b06bfe3c!2sGupta&#39;s%20Classes!5e0!3m2!1sen!2sin!4v1774446612209!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Logo & Institution Info */}
          <div className="bg-gray-50 rounded-md p-6 md:p-8 border border-gray-200 mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Gupta's Classes</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-2">
                  <strong>Established:</strong> 2014
                </p>
                <p className="text-gray-700 text-xs md:text-sm mb-2">
                  <strong>Students Taught:</strong> 500+
                </p>
                <p className="text-gray-700 text-xs md:text-sm">
                  <strong>Pass Rate:</strong> 95%
                </p>
              </div>
              <div className="flex-1 flex justify-center md:justify-end">
                <img src="/logo.jpg" alt="Gupta's Classes Official Logo" className="h-24 md:h-28 w-auto rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & WhatsApp */}
      <section className="py-12 md:py-16 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* WhatsApp & Quick Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Quick Contact</h2>

              {/* WhatsApp CTA */}
              <a
                href="https://api.whatsapp.com/send?phone=917005288084&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3NzQ2MTMwNTYsInBob25lIjoiOTE3MDA1Mjg4MDg0IiwidGV4dCI6IiIsImNvbnRleHQiOiJBZmpBOFZNQ2NDWG84bUFObmtmcktnZ2dJWFlheC1IZWZ5ZllYNjJIQ0hRdEFqRW42Ull1bUZ0ckpqT1pUWXVpSGlkWXM4MVprSXZmam1MTlhZbVk3dElncGFXdEF3NmF4M2Y5YnNYMnp6ZTdfZEFpU1o3cjV5YzVUQWw0UjVEbG1PWmRLMkNncE15UUlaTkRYdyIsInNvdXJjZSI6IiIsImFwcCI6ImZhY2Vib29rIn0.6ISvQtHT90ALt_-_Wtwy64LnAtGZzJkJtrifvF5hKXh_jLj8oxwhp0MAmPFlHXgzlmkMwP1-ANglyOD9OPU3vQ"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-600 hover:bg-green-700 text-white rounded-md p-6 md:p-8 text-center mb-6 md:mb-8 transition-colors"
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">💬</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Chat on WhatsApp</h3>
                <p className="text-green-100 mb-3 md:mb-4 text-xs md:text-sm">
                  Get instant responses to your queries
                </p>
                <span className="inline-block bg-white text-green-600 px-4 md:px-6 py-2 rounded-md font-semibold text-xs md:text-sm">
                  Start Chat
                </span>
              </a>

              {/* FAQ */}
              <div className="card-base">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    {
                      q: 'What are the batch timings?',
                      a: 'Batches run Mon-Fri (4-7:15 PM) and Sat-Sun (10 AM-12 PM). Check courses page for details.',
                    },
                    {
                      q: 'What is the fee structure?',
                      a: 'Fees range from ₹3,000-₹5,000/month depending on class. See courses page for details.',
                    },
                    {
                      q: 'Do you offer trial classes?',
                      a: 'Yes! Contact us to schedule a free trial class.',
                    },
                    {
                      q: 'What boards do you cover?',
                      a: 'We cover both CBSE and TBSE curricula for Classes 6-12.',
                    },
                  ].map((faq, idx) => (
                    <div key={idx} className="pb-3 md:pb-4 border-b last:border-b-0">
                      <p className="font-semibold text-gray-900 mb-1 md:mb-2 text-xs md:text-sm">{faq.q}</p>
                      <p className="text-gray-700 text-xs">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Still Have Questions?
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
            Our team is here to help. Reach out through any of the channels above.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=917005288084&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3NzQ2MTMwNTYsInBob25lIjoiOTE3MDA1Mjg4MDg0IiwidGV4dCI6IiIsImNvbnRleHQiOiJBZmpBOFZNQ2NDWG84bUFObmtmcktnZ2dJWFlheC1IZWZ5ZllYNjJIQ0hRdEFqRW42Ull1bUZ0ckpqT1pUWXVpSGlkWXM4MVprSXZmam1MTlhZbVk3dElncGFXdEF3NmF4M2Y5YnNYMnp6ZTdfZEFpU1o3cjV5YzVUQWw0UjVEbG1PWmRLMkNncE15UUlaTkRYdyIsInNvdXJjZSI6IiIsImFwcCI6ImZhY2Vib29rIn0.6ISvQtHT90ALt_-_Wtwy64LnAtGZzJkJtrifvF5hKXh_jLj8oxwhp0MAmPFlHXgzlmkMwP1-ANglyOD9OPU3vQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 md:px-6 py-2 md:py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm md:text-base"
            >
              Chat on WhatsApp
            </a>
            <a
              href="tel:+917005288084"
              className="px-4 md:px-6 py-2 md:py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm md:text-base"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
