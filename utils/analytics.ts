'use client';

import { sendGAEvent } from '@next/third-parties/google';


// Common events
export const analytics = {
  trackSectionView: (sectionName: string) => {
    sendGAEvent('section_view', {
      section_name: sectionName,
    });
  },

  // Interactive elements
  trackButtonClick: (buttonName: string, buttonLocation: string) => {
    sendGAEvent('button_click', {
      button_name: buttonName,
      button_location: buttonLocation,
    });
  },

  // Track specific content engagement
  trackContentView: (contentType: string, contentName: string) => {
    sendGAEvent('content_engagement', {
      content_type: contentType,
      content_name: contentName,
    });
  },

  // Track video/audio engagement
  trackMediaEngagement: (mediaType: string, mediaName: string, action: 'play'|'pause'|'complete') => {
    sendGAEvent('media_engagement', {
      media_type: mediaType,
      media_name: mediaName,
      action,
    });
  },
};
