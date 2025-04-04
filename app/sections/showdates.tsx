"use client";

import { getPeriod } from "@/config/shows";
import { siteConfig } from "@/config/site";
import { handleBookClick } from "@/utils/booking";

export default function ShowDatesSection() {
  return (
    <section id="shows" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--charlie-blue)] mb-2">Show Dates</h2>
          <p className="text-xl text-gray-600">
            Playing at {siteConfig.venue.name}, {siteConfig.venue.address.addressLocality}
          </p>
          <p className="text-gray-600 mt-2">
            Duration: {siteConfig.show.duration} | Suitable for audiences {siteConfig.show.ageRecommendation}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12 cursor-pointer">
          {siteConfig.show.event.sessions.map((session, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300"
              onClick={() => handleBookClick('Show Dates', session.id)}
            >
              <div className="flex flex-col items-center text-center">
                <p className="text-lg font-bold text-[var(--charlie-blue)]">
                  {session.date.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" })}
                </p>
                <p className="mt-1 text-md font-semibold text-[var(--charlie-green)]">
                  {session.date.toLocaleTimeString("en-AU", { hour: "numeric", minute: "2-digit" })}
                </p>
                <p className="text-xs text-gray-700">{getPeriod(session.date)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-16 bg-gray-50 rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-center mb-6 text-[var(--charlie-green)]">Ticket Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.show.event.ticketGroups.map((ticket, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h4 className="text-lg font-bold mb-2">{ticket.description}</h4>
                <p className="text-2xl font-bold text-[var(--charlie-blue)]">${ticket.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="btn-charlie text-white py-3 px-8 text-lg" onClick={() => handleBookClick('Show Dates')}>
              Purchase Tickets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}