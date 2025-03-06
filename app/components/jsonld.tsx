import { siteConfig } from "@/config/site";
import { Event, WithContext } from 'schema-dts';

export const jsonLd: WithContext<Event> = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: siteConfig.name,
    description: siteConfig.description,
    startDate: '2025-04-08T10:00:00+11:00',
    endDate: '2025-04-13T14:00:00+11:00',
    eventStatus: 'https://schema.org/EventScheduled',
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
}