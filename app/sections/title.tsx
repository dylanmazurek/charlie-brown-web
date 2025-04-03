"use client";

import { getSeasonPeriod } from "@/config/shows";
import { siteConfig } from "@/config/site";
import { handleBookClick } from "@/utils/booking";
import Image from "next/image";
import Clouds from "../components/clouds";

export default function TitleSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-screen relative overflow-hidden">
        <Clouds />
        <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
            <div className="mb-8 px-16">
            <Image 
                src="images/logo.svg" 
                alt="Charlie Brown Logo" 
                width={340}
                height={227}
                priority={true}
                unoptimized={true}
                className="w-[400px] h-auto drop-shadow-xl"
            />
            </div>
            
            <div>
            <p className="text-2xl font-bold text-white drop-shadow-lg">
                {getSeasonPeriod()}
            </p>
            <p className="mt-2 text-xl font-medium text-white drop-shadow-lg mb-8">
                {siteConfig.venue.name}, {siteConfig.venue.address.addressLocality}
            </p>
            
            <button className="btn-charlie text-white py-3 px-10 text-lg" onClick={() => handleBookClick('Title')}>
                Get Tickets
            </button>
            </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-grass z-20" />
        
        <div className="absolute bottom-[90px] left-0 w-full z-30">
            <div className="w-full" style={{ 
            height: "20px",
            backgroundImage: "url('images/grass.svg')", 
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom"
            }} />
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
        </section>
  );
}
