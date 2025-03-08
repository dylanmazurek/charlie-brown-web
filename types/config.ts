import { Icons } from "next/dist/lib/metadata/types/metadata-types";

export interface SiteConfig {
    site: {
        url: URL;
        keywords: string[];
        verification: {
            facebookDomainVerification: string;
        };
    };
    show: {
        name: string;
        description: string;
        duration: string;
        ageRecommendation: string;
        showEventId: number;
    };
    producer: {
        name: string;
        website: string;
    };
    venue: {
        name: string;
        address: {
            streetAddress: string;
            addressLocality: string;
            postalCode: string;
            addressRegion: string;
            addressCountry: string;
        };
        accessibility: string[];
        showDuration: string;
        ageRecommendation: string;
    };
    icons: Icons;
}
