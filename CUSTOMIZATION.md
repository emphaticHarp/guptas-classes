# Customization Guide - Gupta's Classes Website

This guide helps you customize the website with your specific information.

## 1. Contact Information

### WhatsApp Number
**File**: `components/WhatsAppButton.tsx` (Line 6)
```typescript
const phoneNumber = '919101234567'; // Change to your WhatsApp number
```

**File**: `app/contact/page.tsx` (Multiple locations)
- Line 95: WhatsApp link in form section
- Line 180: WhatsApp link in CTA section

### Phone Number
**File**: `components/Footer.tsx` (Line 30)
```typescript
<span>+91 XXXXXXXXXX</span>
```

**File**: `app/contact/page.tsx` (Line 180)
```typescript
href="tel:+919101234567"
```

### Email Address
**File**: `components/Footer.tsx` (Line 35)
```typescript
<span>info@guptasclasses.com</span>
```

### Physical Address
**File**: `components/Footer.tsx` (Line 25)
```typescript
<span>Agartala, Tripura, India</span>
```

**File**: `app/contact/page.tsx` (Line 50)
```typescript
<p className="text-gray-700">Agartala, Tripura, India</p>
```

## 2. Course Information

**File**: `app/courses/page.tsx` (Lines 10-40)

Update the `courses` array with your actual course details:

```typescript
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
  // ... more courses
];
```

## 3. Teacher Information

### Teacher Name
**File**: `app/layout.tsx` (Line 13)
```typescript
description: "Gupta's Classes offers quality education..."
```

**File**: `app/page.tsx` (Line 20)
```typescript
<h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
  Gupta's Classes
</h1>
```

**File**: `app/about/page.tsx` (Line 30)
```typescript
<p className="text-white text-2xl font-bold">Diptanu Gupta</p>
```

### Teacher Bio
**File**: `app/about/page.tsx` (Lines 50-60)
```typescript
<p className="text-gray-700 leading-relaxed mb-4">
  Diptanu Gupta is a passionate educator with over 10 years of experience...
</p>
```

### Teacher Experience
**File**: `app/about/page.tsx` (Lines 120-130)
Update the experience list:
```typescript
{[
  '10+ years of teaching experience',
  'Taught 500+ students successfully',
  // ... more items
]}
```

## 4. Testimonials

**File**: `app/page.tsx` (Lines 180-210)

Update the testimonials array:
```typescript
{[
  {
    name: 'Aarav Kumar',
    class: 'Class 10',
    text: 'Sir\'s teaching method is amazing!...',
    rating: 5,
  },
  // ... more testimonials
]}
```

## 5. Statistics/Results

**File**: `app/page.tsx` (Lines 230-250)

Update the stats array:
```typescript
{[
  { number: '500+', label: 'Students Taught' },
  { number: '95%', label: 'Pass Rate' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '10+', label: 'Years Experience' },
]}
```

## 6. Colors & Branding

**File**: `app/globals.css` (Lines 8-20)

```css
--color-primary: #2563eb;        /* Main blue */
--color-primary-light: #3b82f6;  /* Light blue */
--color-primary-dark: #1e40af;   /* Dark blue */
--color-secondary: #1e293b;      /* Dark gray */
--color-accent: #0ea5e9;         /* Cyan */
```

### Change Logo
**File**: `components/Navbar.tsx` (Lines 20-25)
```typescript
<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-lg">GC</span>
</div>
```

Replace "GC" with your initials or add an image:
```typescript
<Image src="/logo.png" alt="Logo" width={40} height={40} />
```

## 7. Social Media Links

**File**: `components/Footer.tsx` (Lines 60-80)

Update social media links:
```typescript
<a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
  <Facebook size={18} />
</a>
```

## 8. Google Map

**File**: `app/contact/page.tsx` (Lines 60-75)

Replace the placeholder with an embedded Google Map:
```typescript
<iframe
  width="100%"
  height="400"
  style={{ borderRadius: '0.5rem' }}
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
```

To get the embed code:
1. Go to Google Maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code

## 9. Meta Tags & SEO

**File**: `app/layout.tsx` (Lines 13-15)

```typescript
export const metadata: Metadata = {
  title: "Gupta's Classes - Building Strong Foundations for Academic Success",
  description: "Gupta's Classes offers quality education in English, Bengali, and Social Science for CBSE and TBSE boards.",
};
```

## 10. FAQ Section

**File**: `app/contact/page.tsx` (Lines 160-180)

Update the FAQ items:
```typescript
{[
  {
    q: 'What are the batch timings?',
    a: 'Batches run Mon-Fri (4-7:15 PM) and Sat-Sun (10 AM-12 PM).',
  },
  // ... more FAQs
]}
```

## 11. Navigation Links

**File**: `components/Navbar.tsx` (Lines 10-16)

The navigation links are automatically generated from this array:
```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/contact', label: 'Contact' },
];
```

## 12. Footer Content

**File**: `components/Footer.tsx`

Update:
- About text (Line 15)
- Quick links (Lines 22-35)
- Contact info (Lines 42-55)
- Social links (Lines 62-80)
- Copyright text (Line 95)

## Quick Checklist

- [ ] Update WhatsApp number
- [ ] Update phone number
- [ ] Update email address
- [ ] Update physical address
- [ ] Update teacher name and bio
- [ ] Update course details and pricing
- [ ] Update testimonials
- [ ] Update statistics
- [ ] Add Google Map
- [ ] Update social media links
- [ ] Update meta tags
- [ ] Update FAQ
- [ ] Change colors if needed
- [ ] Add logo/image
- [ ] Test all links
- [ ] Deploy to production

## Testing After Customization

1. **Local Testing**
   ```bash
   npm run dev
   ```
   - Check all pages load correctly
   - Test responsive design (mobile, tablet, desktop)
   - Click all links and buttons
   - Test contact form
   - Test WhatsApp links

2. **Build Testing**
   ```bash
   npm run build
   npm start
   ```

3. **Deployment**
   - Deploy to Vercel or your hosting platform
   - Test all functionality on live site
   - Check mobile responsiveness
   - Verify all links work

## Need Help?

If you need to add new sections or make major changes:
1. Refer to existing components for structure
2. Follow the same styling patterns
3. Use Tailwind CSS classes for consistency
4. Test thoroughly before deploying

---

**Happy customizing! 🎉**
