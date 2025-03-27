"use client";

import { getSeasonPeriod } from '@/config/shows';
import { siteConfig } from '@/config/site';
import { handleBookClick } from '@/utils/booking';
import { GoogleMapsEmbed } from '@next/third-parties/google';

export default function VenueSection() {  
  return (
    <section id="venue" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--charlie-blue)] mb-2">Venue Information</h2>
          <p className="text-xl text-gray-600">
            { siteConfig.venue.name }, { siteConfig.venue.address.addressLocality }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[var(--charlie-green)]">{ siteConfig.venue.name }</h3>
            <p className="text-gray-700 mb-4">
              { siteConfig.venue.address.streetAddress } { siteConfig.venue.address.addressLocality } { siteConfig.venue.address.postalCode }
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-[var(--charlie-blue)] mb-2">Performance Dates</h4>
              <p className="text-gray-700">{getSeasonPeriod()}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-[var(--charlie-blue)] mb-2">Accessibility Information</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• There are 25 steps (including two landings) and handrails on both sides from the street to the foyer, with no lift access.</li>
                <li>• There is unfixed raked seating with a floor level stage.</li>
                <li>• The closest accessible parking bays are in Care Park on King Street which is a two minutes walk from the theatre.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[var(--charlie-blue)] mb-2">Additional Information</h4>
              <p className="text-gray-700">
                Duration: { siteConfig.show.duration }<br />
                Suitable for audiences { siteConfig.show.ageRecommendation }
              </p>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="bg-gray-100 h-64 mb-6 rounded-lg overflow-hidden shadow-md">
              <div className="flex w-full h-full items-center justify-center">
              <GoogleMapsEmbed
                apiKey="AIzaSyBppKMx5S9-bONjlIXzt1-ffgYbDYX1KPw"
                mode="place"
                style="width:100%;height:100%;"
                height={256}
                width={600}
                q="The+MC+Showroom,+Prahran"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex-grow">
              <h3 className="text-xl font-bold mb-4 text-[var(--charlie-blue)]">Ticket Information</h3>
              
              <div className="space-y-4">
                {siteConfig.show.event.ticketGroups.map((ticketGroup, index) => (
                  <div key={index} className="flex justify-between">
                    <p className="text-gray-700">{ticketGroup.description}</p>
                    <p className="text-gray-700">${ticketGroup.price}</p>
                  </div>
                ))}
              </div>
              
              <button className="w-full btn-charlie mt-6 text-white" onClick={() => handleBookClick('Venue')}>
                Book Now
              </button>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                All performances are general admission seating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}