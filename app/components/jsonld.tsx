import { cast } from "@/config/cast";
import { shows } from "@/config/events";
import { siteConfig } from "@/config/site";
import { tickets } from "@/config/tickets";
import { Event, WithContext } from 'schema-dts';

export const jsonLdItems: WithContext<Event>[] = shows.map(show => {
  const startDateTime = new Date(show.date);
  startDateTime.setHours(show.slot.time.getHours(), show.slot.time.getMinutes());
  
  const endDateTime = new Date(startDateTime);
  const durationStr = String(show.duration);
  const durationMatch = durationStr.match(/P(\d+)M/);
  const durationMinutes = durationMatch ? parseInt(durationMatch[1]) : 50;
  endDateTime.setMinutes(endDateTime.getMinutes() + durationMinutes);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: siteConfig.show.name,
    description: siteConfig.show.description,
    startDate: startDateTime.toISOString(),
    endDate: endDateTime.toISOString(),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
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
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'AUD',
      lowPrice: Math.min(...tickets.map(ticket => ticket.price)),
      highPrice: Math.max(...tickets.map(ticket => ticket.price)),
      availability: 'https://schema.org/InStock',
      url: siteConfig.show.bookingUrl,
      offers: tickets.map(ticket => ({
        '@type': 'Offer',
        name: ticket.type,
        price: ticket.price,
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
        url: siteConfig.show.bookingUrl,
        validFrom: new Date('2022-01-01').toISOString(),
      })),
    },
    image: [`${siteConfig.site.url}/og-charlie-image.png`],
    performer: {
      '@type': 'PerformingGroup',
      name: 'Charlie Brown The Musical Cast',
      members: cast.map(member => ({
        '@type': 'Person',
        name: member.name,
        roleName: member.character
      }))
    },
    organizer: {
      '@type': 'Organization',
      name: 'StageBugs Productions',
      url: siteConfig.producer.website,
    },
  };
});

export const jsonLd = jsonLdItems;