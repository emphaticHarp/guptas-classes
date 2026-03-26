'use client';

import './testimonial-wall.css';
import { AuthModal } from './application/modals/auth-modal';

interface Testimonial {
  name: string;
  handle: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Aarav Kumar',
    handle: '@aaravkumar',
    text: "Sir's teaching method is amazing! I went from struggling to scoring 95% in English. Highly recommended!",
    avatar: 'https://i.pravatar.cc/150?u=aarav',
  },
  {
    name: 'Priya Sharma',
    handle: '@priyasharma',
    text: 'The personalized attention and concept-based approach really helped me understand Social Science better.',
    avatar: 'https://i.pravatar.cc/150?u=priya',
  },
  {
    name: 'Rohan Patel',
    handle: '@rohanpatel',
    text: 'Best coaching classes in Agartala! Sir explains everything so clearly. My grades have improved significantly.',
    avatar: 'https://i.pravatar.cc/150?u=rohan',
  },
  {
    name: 'Neha Gupta',
    handle: '@nehagupta',
    text: 'The doubt clearing sessions are incredibly helpful. I feel confident before every exam now.',
    avatar: 'https://i.pravatar.cc/150?u=neha',
  },
  {
    name: 'Vikram Singh',
    handle: '@vikramsingh',
    text: 'Excellent teaching quality and very supportive environment. Definitely worth every penny!',
    avatar: 'https://i.pravatar.cc/150?u=vikram',
  },
  {
    name: 'Anjali Dey',
    handle: '@anjalidey',
    text: 'Sir makes complex topics so easy to understand. My confidence in studies has increased tremendously.',
    avatar: 'https://i.pravatar.cc/150?u=anjali',
  },
];

export default function TestimonialWall() {
  return (
    <div className="testimonial-wall-container">
      <div className="testimonial-wall-testimonials-r5wmutyrw">
      {/* First row - scrolling left */}
      <div className="scroll-row-testimonials-r5wmutyrw scroll-left-testimonials-r5wmutyrw" style={{ animationDuration: '80s' }}>
        <div className="scroll-content-testimonials-r5wmutyrw">
          {testimonials.map((testimonial, idx) => (
            <div key={`left-${idx}`} className="testimonial-card-testimonials-r5wmutyrw">
              <div className="testimonial-header-testimonials-r5wmutyrw">
                <img src={testimonial.avatar} alt={testimonial.name} className="avatar-testimonials-r5wmutyrw" />
                <div className="author-meta-testimonials-r5wmutyrw">
                  <p className="author-name-testimonials-r5wmutyrw">{testimonial.name}</p>
                  <p className="author-handle-testimonials-r5wmutyrw">{testimonial.handle}</p>
                </div>
              </div>
              <p className="testimonial-text-testimonials-r5wmutyrw">{testimonial.text}</p>
            </div>
          ))}
        </div>
        <div className="scroll-content-testimonials-r5wmutyrw">
          {testimonials.map((testimonial, idx) => (
            <div key={`left-repeat-${idx}`} className="testimonial-card-testimonials-r5wmutyrw">
              <div className="testimonial-header-testimonials-r5wmutyrw">
                <img src={testimonial.avatar} alt={testimonial.name} className="avatar-testimonials-r5wmutyrw" />
                <div className="author-meta-testimonials-r5wmutyrw">
                  <p className="author-name-testimonials-r5wmutyrw">{testimonial.name}</p>
                  <p className="author-handle-testimonials-r5wmutyrw">{testimonial.handle}</p>
                </div>
              </div>
              <p className="testimonial-text-testimonials-r5wmutyrw">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - scrolling right */}
      <div className="scroll-row-testimonials-r5wmutyrw scroll-right-testimonials-r5wmutyrw" style={{ animationDuration: '80s' }}>
        <div className="scroll-content-testimonials-r5wmutyrw">
          {testimonials.map((testimonial, idx) => (
            <div key={`right-${idx}`} className="testimonial-card-testimonials-r5wmutyrw">
              <div className="testimonial-header-testimonials-r5wmutyrw">
                <img src={testimonial.avatar} alt={testimonial.name} className="avatar-testimonials-r5wmutyrw" />
                <div className="author-meta-testimonials-r5wmutyrw">
                  <p className="author-name-testimonials-r5wmutyrw">{testimonial.name}</p>
                  <p className="author-handle-testimonials-r5wmutyrw">{testimonial.handle}</p>
                </div>
              </div>
              <p className="testimonial-text-testimonials-r5wmutyrw">{testimonial.text}</p>
            </div>
          ))}
        </div>
        <div className="scroll-content-testimonials-r5wmutyrw">
          {testimonials.map((testimonial, idx) => (
            <div key={`right-repeat-${idx}`} className="testimonial-card-testimonials-r5wmutyrw">
              <div className="testimonial-header-testimonials-r5wmutyrw">
                <img src={testimonial.avatar} alt={testimonial.name} className="avatar-testimonials-r5wmutyrw" />
                <div className="author-meta-testimonials-r5wmutyrw">
                  <p className="author-name-testimonials-r5wmutyrw">{testimonial.name}</p>
                  <p className="author-handle-testimonials-r5wmutyrw">{testimonial.handle}</p>
                </div>
              </div>
              <p className="testimonial-text-testimonials-r5wmutyrw">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Enroll Now Button */}
      <div className="testimonial-wall-enroll-section">
        <AuthModal 
          buttonText="Enroll Now"
          buttonClassName="testimonial-wall-enroll-button"
        />
      </div>
      </div>
    </div>
  );
}
