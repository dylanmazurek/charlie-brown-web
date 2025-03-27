import { siteConfig } from "@/config/site";
import { Event, PerformingGroup, Place, WithContext } from 'schema-dts';

const performerList: PerformingGroup = {
    '@type': 'PerformingGroup',
    name: 'Charlie Brown The Musical Cast',
    members: siteConfig.show.cast.map(member => (
        {
            '@type': 'Person',
            name: member.name,
            roleName: member.character
        }
    ))
};

const location: Place = {
    '@type': 'Place',
    name: 'The MC Showroom',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'The Showroom, Level 1, 50 Clifton Street',
        addressLocality: 'Prahran',
        postalCode: '3181',
        addressRegion: 'VIC',
        addressCountry: 'AU',
    },
};

export const jsonLdItems: WithContext<Event>[] = siteConfig.show.event.sessions.map(show => {
  const startDateTime = new Date(show.date);
  startDateTime.setHours(show.date.getHours(), show.date.getMinutes());
  
  const endDateTime = new Date(startDateTime);
  const durationStr = String(show.duration);
  const durationMatch = durationStr.match(/P(\d+)M/);
  const durationMinutes = durationMatch ? parseInt(durationMatch[1]) : 50;
  endDateTime.setMinutes(endDateTime.getMinutes() + durationMinutes);
  
  var newEvent: WithContext<Event> = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: siteConfig.show.name,
    description: siteConfig.show.description,
    startDate: startDateTime.toISOString(),
    endDate: endDateTime.toISOString(),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: location,
    image: [`${siteConfig.site.url}/og-charlie-image.png`],
    performer: performerList,
    organizer: {
      '@type': 'Organization',
      name: siteConfig.producer.name,
      url: siteConfig.producer.website,
    },
  };

  return newEvent;
});

export const jsonLd = jsonLdItems;