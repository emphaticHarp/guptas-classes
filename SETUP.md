# Gupta's Classes Website - Setup Guide

## Project Overview

A modern, fully responsive educational website for Gupta's Classes coaching institute in Agartala, Tripura. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Features

✅ **Fully Responsive Design** - Mobile, tablet, and desktop optimized
✅ **4 Main Pages** - Home, About, Courses, Contact
✅ **Modern UI** - Clean, professional design with smooth animations
✅ **WhatsApp Integration** - Floating button and direct chat links
✅ **Contact Form** - Functional form with validation
✅ **Sticky Navigation** - Easy access to all pages
✅ **Testimonials** - Student reviews and ratings
✅ **Course Details** - Complete course information with pricing
✅ **SEO Optimized** - Meta tags and structured content

## Tech Stack

- **Framework**: Next.js 16.2.1
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Geist (Google Fonts)
- **Language**: TypeScript

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Update Contact Information

Edit the following files to add real contact details:

**components/WhatsAppButton.tsx**
```typescript
const phoneNumber = '919101234567'; // Replace with actual WhatsApp number
```

**components/Footer.tsx**
```typescript
<span>+91 XXXXXXXXXX</span> // Replace with phone
<span>info@guptasclasses.com</span> // Replace with email
```

**app/contact/page.tsx**
```typescript
href="https://wa.me/919101234567?text=..." // Replace phone number
href="tel:+919101234567" // Replace phone number
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout with navbar & footer
│   ├── globals.css           # Global styles & animations
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── courses/
│   │   └── page.tsx          # Courses page
│   └── contact/
│       └── page.tsx          # Contact page
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Footer.tsx            # Footer
│   └── WhatsAppButton.tsx    # WhatsApp floating button
└── public/                   # Static assets
```

## Pages Overview

### 1. Home Page (`/`)
- Hero section with CTA buttons
- Teacher highlight section
- Why Choose Us cards
- Student testimonials
- Results statistics
- Call-to-action sections

### 2. About Page (`/about`)
- Detailed teacher biography
- Teaching philosophy
- Experience & achievements
- Subjects & boards covered
- Why students choose us

### 3. Courses Page (`/courses`)
- Course cards for Class 6-8, 9-10, 11-12
- Course details (timing, batch size, fee)
- Course features
- Flexible learning options

### 4. Contact Page (`/contact`)
- Contact information cards
- Google Map placeholder
- Contact form with validation
- WhatsApp quick contact
- FAQ section

## Customization Guide

### Update Colors
Edit `app/globals.css` to change the color scheme:
```css
--primary: #2563eb;        /* Main blue */
--primary-light: #3b82f6;  /* Light blue */
--primary-dark: #1e40af;   /* Dark blue */
```

### Update Course Information
Edit `app/courses/page.tsx` - modify the `courses` array with actual details.

### Update Testimonials
Edit `app/page.tsx` - modify the testimonials array in the Testimonials section.

### Add Google Map
Replace the map placeholder in `app/contact/page.tsx` with an embedded Google Map iframe.

### Update Social Links
Edit `components/Footer.tsx` to add actual social media links.

## Features Explained

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hamburger menu on mobile

### Animations
- Fade-in-up animations on scroll
- Slide-in animations for hero content
- Smooth transitions on hover
- Bounce animation on WhatsApp button

### WhatsApp Integration
- Floating button in bottom-right corner
- Pre-filled message template
- Direct chat links throughout the site

### Contact Form
- Client-side validation
- Success message display
- Form reset after submission
- No backend required (UI only)

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Similar to Netlify
- **Self-hosted**: Use `npm run build` and `npm start`

## Performance Optimization

- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind (no runtime overhead)
- Lazy loading for components
- Optimized fonts with next/font

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Backend integration for contact form
- [ ] Student portal/login
- [ ] Online class scheduling
- [ ] Payment gateway integration
- [ ] Blog section
- [ ] Student results dashboard
- [ ] Live chat support
- [ ] Mobile app

## Support & Maintenance

For updates or modifications:
1. Edit relevant files
2. Test locally with `npm run dev`
3. Build with `npm run build`
4. Deploy to production

## License

This website is created for Gupta's Classes. All rights reserved.

---

**Created with ❤️ for education**
