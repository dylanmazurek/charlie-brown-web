import { Icons } from "next/dist/lib/metadata/types/metadata-types";
import { CastMember } from "./cast";
import { ShowEvent } from "./events";

export interface SiteConfig {
    site: {
        url: URL;
        keywords: string[];
        verification: {
            googleTagManager: string;
            facebookDomainVerification: string;
        };
    };
    show: {
        name: string;
        description: string;
        duration: string;
        ageRecommendation: string;
        event: ShowEvent;
        cast: CastMember[];
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
    };
    icons: Icons;
}
