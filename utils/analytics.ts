'use client';

import { sendGTMEvent } from '@next/third-parties/google';

// Common events
export const analytics = {
  trackSectionView: (sectionName: string) => {
    sendGTMEvent({
      event: 'section_view',
      section_name: sectionName,
    });
  },

  // Interactive elements
  trackButtonClick: (buttonName: string, buttonLocation: string) => {
    sendGTMEvent({
      event: 'button_click',
      button_name: buttonName,
      button_location: buttonLocation,
    });
  },

  // Track specific content engagement
  trackContentView: (contentType: string, contentName: string) => {
    sendGTMEvent({
      event: 'content_view',
      content_type: contentType,
      content_name: contentName,
    });
  },
};
