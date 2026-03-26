# Analytics Setup Guide

## Google Analytics 4 Setup

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Enter your account name (e.g., "Gupta's Classes")
4. Configure your property:
   - Property name: "Gupta's Classes Website"
   - Reporting timezone: Asia/Kolkata
   - Currency: INR
5. Select "Web" as your platform
6. Enter your website details:
   - Website URL: `https://yourdomain.com`
   - Stream name: "Website"
7. Copy your **Measurement ID** (format: G-XXXXXXXXXX)

### Step 2: Update Your Code

Replace `G-XXXXXXXXXX` in `app/layout.tsx` with your actual Measurement ID:

```typescript
src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID"
```

And in the script:

```typescript
gtag('config', 'G-YOUR_MEASUREMENT_ID', {
  page_path: window.location.pathname,
});
```

### Step 3: Verify Installation

1. Deploy your website
2. Go to Google Analytics dashboard
3. Click "Real-time" in the left sidebar
4. Visit your website - you should see activity in real-time

---

## Custom Events Tracking

The website includes custom event tracking for:

### Form Submissions
```typescript
analytics.trackFormSubmission('contact-form', true);
```

### Button Clicks
```typescript
analytics.trackButtonClick('enroll-button', 'conversion');
```

### Modal Opens/Closes
```typescript
analytics.trackModalOpen('auth-modal');
analytics.trackModalClose('auth-modal');
```

### Enrollments
```typescript
analytics.trackEnrollment('course-1', 'Class 6-8');
```

### WhatsApp Clicks
```typescript
analytics.trackWhatsAppClick('navbar');
```

### Scroll Depth
```typescript
analytics.trackScrollDepth(50); // 50% scroll depth
```

---

## Important Events to Track

### Conversion Events (High Priority)

1. **Enrollment Clicks**
   - Track when users click "Enroll Now"
   - Location: Navbar, Hero, Testimonials, Courses page

2. **Form Submissions**
   - Track contact form submissions
   - Track successful vs failed submissions

3. **WhatsApp Interactions**
   - Track WhatsApp button clicks
   - Track WhatsApp links from different pages

4. **Course Views**
   - Track which courses are viewed most
   - Track course detail page visits

### Engagement Events

1. **Page Views**
   - Automatically tracked by GA4
   - Monitor bounce rate and session duration

2. **Scroll Depth**
   - Track how far users scroll on each page
   - Identify engaging content

3. **Modal Interactions**
   - Track auth modal opens/closes
   - Track forgot password flow

4. **Navigation**
   - Track menu clicks
   - Track internal link clicks

---

## Google Analytics Dashboard Setup

### Recommended Reports

1. **Acquisition Report**
   - See where your traffic comes from
   - Track organic, direct, and referral traffic

2. **Engagement Report**
   - Monitor page views and session duration
   - Track scroll depth and time on page

3. **Conversion Report**
   - Track enrollment clicks
   - Monitor form submissions
   - Track WhatsApp interactions

4. **User Report**
   - Understand your audience demographics
   - Track returning vs new users
   - Monitor user behavior patterns

### Create Custom Dashboards

1. Go to "Dashboards" in GA4
2. Click "Create new dashboard"
3. Add cards for:
   - Total users
   - Enrollment clicks
   - Form submissions
   - WhatsApp clicks
   - Top pages
   - Bounce rate

---

## Goals & Conversions

### Set Up Conversion Goals

1. Go to "Admin" → "Conversions"
2. Click "Create conversion event"
3. Create these events:
   - `enrollment` - When user clicks enroll
   - `form_submit` - When contact form is submitted
   - `whatsapp_click` - When WhatsApp is clicked
   - `course_view` - When course page is viewed

### Track Conversion Value

```typescript
analytics.trackEvent('enrollment', 'conversion', 'Class 6-8', 5000);
// Value = 5000 (course fee in INR)
```

---

## Privacy & Compliance

### GDPR Compliance

1. Add cookie consent banner (recommended)
2. Allow users to opt-out of analytics
3. Update privacy policy

### India-Specific Compliance

1. Mention data collection in privacy policy
2. Provide opt-out option
3. Store data securely

---

## Troubleshooting

### Analytics Not Showing Data

1. **Check Measurement ID**: Verify it's correct in layout.tsx
2. **Check Domain**: Ensure domain is added to GA4 property
3. **Wait 24 hours**: GA4 can take up to 24 hours to show data
4. **Check Real-time**: Go to Real-time report to verify tracking

### Events Not Tracking

1. **Check Console**: Look for JavaScript errors
2. **Verify Event Names**: Ensure event names match GA4 setup
3. **Check Network**: Verify requests to Google Analytics in Network tab
4. **Test Locally**: Use `gtag('event', 'test_event')` to verify

---

## Advanced Setup

### UTM Parameters

Add UTM parameters to your links for better tracking:

```
https://yourdomain.com?utm_source=facebook&utm_medium=social&utm_campaign=enrollment
```

### Event Tracking in Components

```typescript
import { analytics } from '@/lib/analytics';

export function EnrollButton() {
  const handleClick = () => {
    analytics.trackButtonClick('enroll-button', 'conversion');
    // Handle enrollment
  };

  return <button onClick={handleClick}>Enroll Now</button>;
}
```

### Track Page Views

```typescript
'use client';

import { useEffect } from 'react';
import { analytics } from '@/lib/analytics';

export default function CoursesPage() {
  useEffect(() => {
    analytics.trackPageView('/courses', 'Courses');
  }, []);

  return <div>Courses Page</div>;
}
```

---

## Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Event Tracking Guide](https://support.google.com/analytics/answer/9322688)
- [GA4 Conversion Setup](https://support.google.com/analytics/answer/9267568)

---

## Support

For issues or questions:
1. Check Google Analytics Help Center
2. Review GA4 documentation
3. Test in Google Analytics Debugger
4. Check browser console for errors
