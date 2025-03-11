/**
 * Utility functions for Google Analytics event tracking
 */

// Track a specific GA event
export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore - gtag is added via script but not typed
    window.gtag('event', eventName, eventParams);
    console.log(`GA Event tracked: ${eventName}`, eventParams);
  }
};

// Common events
export const analytics = {
  // Page view tracking (manual, if needed beyond automatic tracking)
  trackPageView: (pageTitle: string, pagePath: string) => {
    trackEvent('page_view', {
      page_title: pageTitle,
      page_path: pagePath,
    });
  },

  // Interactive elements
  trackButtonClick: (buttonName: string, buttonLocation: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      button_location: buttonLocation,
    });
  },

  // Track specific content engagement
  trackContentView: (contentType: string, contentName: string) => {
    trackEvent('content_view', {
      content_type: contentType,
      content_name: contentName,
    });
  },

  // Track form submissions
  trackFormSubmission: (formName: string, formSuccess: boolean = true) => {
    trackEvent('form_submit', {
      form_name: formName,
      form_success: formSuccess,
    });
  },

  // Track Charlie Brown specific events
  trackCharacterInteraction: (characterName: string, interactionType: string) => {
    trackEvent('character_interaction', {
      character_name: characterName,
      interaction_type: interactionType,
    });
  },

  // Track video/audio engagement
  trackMediaEngagement: (mediaType: string, mediaName: string, action: 'play'|'pause'|'complete') => {
    trackEvent('media_engagement', {
      media_type: mediaType,
      media_name: mediaName,
      action: action,
    });
  },

  // Track social sharing
  trackSocialShare: (platform: string, contentShared: string) => {
    trackEvent('social_share', {
      platform: platform,
      content_shared: contentShared,
    });
  }
};
