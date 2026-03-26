'use client';

import { useEffect, useRef } from 'react';
import './expanding-gallery.css';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: '/banners/banner3.jpg',
    title: 'Interactive Classrooms',
    subtitle: 'State-of-the-art learning environment with modern teaching aids',
  },
  {
    id: 2,
    image: '/banners/banner4.jpg',
    title: 'Student Success Stories',
    subtitle: 'Celebrating achievements of our brilliant students',
  },
  {
    id: 3,
    image: '/banners/banner5.jpg',
    title: 'Collaborative Learning',
    subtitle: 'Students engaging in group discussions and peer learning',
  },
  {
    id: 4,
    image: '/banners/banner1.jpg',
    title: 'Expert Mentorship',
    subtitle: 'One-on-one guidance from experienced educators',
  },
  {
    id: 5,
    image: '/banners/banner2.jpg',
    title: 'Campus Facilities',
    subtitle: 'Well-equipped study spaces and learning resources',
  },
];

export default function ExpandingGallery() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const columns = wrapper.querySelectorAll('.gallery-column');

    columns.forEach((column) => {
      column.addEventListener('click', function (this: Element, e: Event) {
        const isExpanded = (this as HTMLElement).classList.contains('expanded');

        // Remove expanded from all columns
        columns.forEach((c) => c.classList.remove('expanded'));
        wrapper.classList.remove('has-expanded');

        // If this wasn't expanded, expand it (lock it open)
        if (!isExpanded) {
          (this as HTMLElement).classList.add('expanded');
          wrapper.classList.add('has-expanded');

          // Prevent link navigation on first click
          const link = (this as HTMLElement).querySelector('a');
          if (link) e.preventDefault();
        }
      });
    });
  }, []);

  return (
    <div className="expanding-gallery-container">
      <div className="gallery-wrapper" ref={wrapperRef}>
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-column">
            <a href="#" className="gallery-link">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
