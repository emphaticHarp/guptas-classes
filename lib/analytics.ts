// Analytics utility for tracking events
export interface AnalyticsEvent {
  name: string;
  category: string;
  label?: string;
  value?: number;
  timestamp: number;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private isEnabled: boolean = true;

  constructor() {
    // Initialize Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      this.isEnabled = true;
    }
  }

  /**
   * Track a custom event
   */
  trackEvent(
    name: string,
    category: string,
    label?: string,
    value?: number
  ): void {
    if (!this.isEnabled) return;

    const event: AnalyticsEvent = {
      name,
      category,
      label,
      value,
      timestamp: Date.now(),
    };

    this.events.push(event);

    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }

    console.log('[Analytics]', event);
  }

  /**
   * Track page view
   */
  trackPageView(pagePath: string, pageTitle?: string): void {
    if (!this.isEnabled) return;

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pagePath,
        page_title: pageTitle,
      });
    }

    this.trackEvent('page_view', 'engagement', pagePath);
  }

  /**
   * Track form submission
   */
  trackFormSubmission(formName: string, success: boolean): void {
    this.trackEvent(
      'form_submit',
      'conversion',
      formName,
      success ? 1 : 0
    );
  }

  /**
   * Track button click
   */
  trackButtonClick(buttonName: string, category: string = 'engagement'): void {
    this.trackEvent('button_click', category, buttonName);
  }

  /**
   * Track modal open
   */
  trackModalOpen(modalName: string): void {
    this.trackEvent('modal_open', 'engagement', modalName);
  }

  /**
   * Track modal close
   */
  trackModalClose(modalName: string): void {
    this.trackEvent('modal_close', 'engagement', modalName);
  }

  /**
   * Track enrollment
   */
  trackEnrollment(courseId: string, courseName: string): void {
    this.trackEvent('enrollment', 'conversion', courseName, 1);
  }

  /**
   * Track WhatsApp click
   */
  trackWhatsAppClick(source: string): void {
    this.trackEvent('whatsapp_click', 'engagement', source);
  }

  /**
   * Track scroll depth
   */
  trackScrollDepth(percentage: number): void {
    this.trackEvent('scroll_depth', 'engagement', `${percentage}%`, percentage);
  }

  /**
   * Get all tracked events
   */
  getEvents(): AnalyticsEvent[] {
    return this.events;
  }

  /**
   * Clear events
   */
  clearEvents(): void {
    this.events = [];
  }

  /**
   * Disable analytics
   */
  disable(): void {
    this.isEnabled = false;
  }

  /**
   * Enable analytics
   */
  enable(): void {
    this.isEnabled = true;
  }
}

export const analytics = new Analytics();
