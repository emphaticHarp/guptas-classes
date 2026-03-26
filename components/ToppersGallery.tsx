'use client';

import './toppers-gallery.css';

interface Topper {
  id: number;
  name: string;
  class: string;
  score: string;
  subject: string;
  image: string;
}

const toppers: Topper[] = [
  {
    id: 1,
    name: 'Aarav Kumar',
    class: 'Class 12',
    score: '95%',
    subject: 'English',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    class: 'Class 10',
    score: '98%',
    subject: 'Social Science',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    name: 'Rohan Patel',
    class: 'Class 11',
    score: '96%',
    subject: 'Bengali',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    name: 'Neha Gupta',
    class: 'Class 9',
    score: '97%',
    subject: 'English',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    class: 'Class 12',
    score: '94%',
    subject: 'Social Science',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60',
  },
  {
    id: 6,
    name: 'Anjali Dey',
    class: 'Class 10',
    score: '99%',
    subject: 'Bengali',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
  },
];

export default function ToppersGallery() {
  return (
    <div className="masonry-wrapper">
      <div className="masonry-grid">
        {/* Column 1 - Normal scroll */}
        <div className="scroll-column">
          <div className="scroll-track" style={{ animationDirection: 'normal' }}>
            {toppers.slice(0, 2).map((topper) => (
              <div key={topper.id} className="topper-card">
                <div className="topper-image-wrapper">
                  <img src={topper.image} alt={topper.name} className="topper-image" />
                  <div className="overlay-bg">
                    <div className="overlay-content">
                      <h3 className="topper-name">{topper.name}</h3>
                      <p className="topper-class">{topper.class}</p>
                      <div className="topper-score-badge">{topper.score}</div>
                      <p className="topper-subject">{topper.subject}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {toppers.slice(0, 2).map((topper) => (
              <div key={`repeat-${topper.id}`} className="topper-card">
                <div className="topper-image-wrapper">
                  <img src={topper.image} alt={topper.name} className="topper-image" />
                  <div className="overlay-bg">
                    <div className="overlay-content">
                      <h3 className="topper-name">{topper.name}</h3>
                      <p className="topper-class">{topper.class}</p>
                      <div className="topper-score-badge">{topper.score}</div>
                      <p className="topper-subject">{topper.subject}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 - Reverse scroll */}
        <div className="scroll-column">
          <div className="scroll-track" style={{ animationDirection: 'reverse' }}>
            {toppers.slice(2, 4).map((topper) => (
              <div key={topper.id} className="topper-card">
                <div className="topper-image-wrapper">
                  <img src={topper.image} alt={topper.name} className="topper-image" />
                  <div className="overlay-bg">
                    <div className="overlay-content">
                      <h3 className="topper-name">{topper.name}</h3>
                      <p className="topper-class">{topper.class}</p>
                      <div className="topper-score-badge">{topper.score}</div>
                      <p className="topper-subject">{topper.subject}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {toppers.slice(2, 4).map((topper) => (
              <div key={`repeat-${topper.id}`} className="topper-card">
                <div className="topper-image-wrapper">
                  <img src={topper.image} alt={topper.name} className="topper-image" />
                  <div className="overlay-bg">
                    <div className="overlay-content">
                      <h3 className="topper-name">{topper.name}</h3>
                      <p className="topper-class">{topper.class}</p>
                      <div className="topper-score-badge">{topper.score}</div>
                      <p className="topper-subject">{topper.subject}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 - Normal scroll */}
        <div className="scroll-column">
          <div className="scroll-track" style={{ animationDirection: 'normal' }}>
            {toppers.slice(4, 6).map((topper) => (
              <div key={topper.id} className="topper-card">
                <div className="topper-image-wrapper">
                  <img src={topper.image} alt={topper.name} className="topper-image" />
                  <div className="overlay-bg">
                    <div className="overlay-content">
                      <h3 className="topper-name">{topper.name}</h3>
                      <p className="topper-class">{topper.class}</p>
                      <div className="topper-score-badge">{topper.score}</div>
                      <p className="topper-subject">{topper.subject}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {toppers.slice(4, 6).map((topper) => (
              <div key={`repeat-${topper.id}`} className="topper-card">
                <div className="topper-image-wrapper">
                  <img src={topper.image} alt={topper.name} className="topper-image" />
                  <div className="overlay-bg">
                    <div className="overlay-content">
                      <h3 className="topper-name">{topper.name}</h3>
                      <p className="topper-class">{topper.class}</p>
                      <div className="topper-score-badge">{topper.score}</div>
                      <p className="topper-subject">{topper.subject}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
