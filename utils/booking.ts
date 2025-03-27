import { siteConfig } from "@/config/site";
import { analytics } from "@/utils/analytics";

export const handleBookClick = (buttonLocation: string, sessionId?: string) => {
  analytics.trackButtonClick('Purchase Tickets', buttonLocation);

  if (sessionId) {
    window.open(`https://www.trybooking.com/events/${siteConfig.show.event.id}/sessions/${sessionId}`, "_self");
  } else {
    window.open(`https://www.trybooking.com/events/${siteConfig.show.event.id}/sessions`, "_self");
  }
};