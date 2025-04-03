import { siteConfig } from "@/config/site";
import { Event, Offer, PerformingGroup, Place, WithContext } from 'schema-dts';

const ticketOffers: Offer[] = siteConfig.show.event.ticketGroups.map(ticketGroup => {
    var newOffer: Offer = {
        '@type': 'Offer',
        name: ticketGroup.description,
        price: ticketGroup.price,
        priceCurrency: 'AUD',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        validFrom: ticketGroup.validFrom.toISOString(),
        url: `https://www.trybooking.com/events/${siteConfig.show.event.id}/sessions`,
    };

    return newOffer;
});

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
    name: siteConfig.venue.name,
    address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.venue.address.streetAddress,
        addressLocality: siteConfig.venue.address.addressLocality,
        postalCode: siteConfig.venue.address.postalCode,
        addressRegion: siteConfig.venue.address.addressRegion,
        addressCountry: siteConfig.venue.address.addressCountry,
    },
};

export const jsonLdItems: WithContext<Event>[] = siteConfig.show.event.sessions.map(session => {
  const startDateTime = new Date(session.date);
  startDateTime.setHours(session.date.getHours(), session.date.getMinutes());
  
  const endDateTime = new Date(startDateTime);
  const durationStr = String(session.duration);
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
    url: `https://www.trybooking.com/events/${siteConfig.show.event.id}/sessions/${session.id}`,
    offers: ticketOffers,
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