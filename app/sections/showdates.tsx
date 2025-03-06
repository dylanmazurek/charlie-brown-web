"use client";

import { siteConfig } from "@/config/site";

export default function ShowDatesSection() {
  // Show dates from the show details
  const shows = [
    { date: "Apr 8, 2025", time: "10:00 AM", day: "Tuesday" },
    { date: "Apr 8, 2025", time: "12:00 PM", day: "Tuesday" },
    { date: "Apr 9, 2025", time: "10:00 AM", day: "Wednesday" },
    { date: "Apr 9, 2025", time: "12:00 PM", day: "Wednesday" },
    { date: "Apr 10, 2025", time: "10:00 AM", day: "Thursday" },
    { date: "Apr 10, 2025", time: "12:00 PM", day: "Thursday" },
    { date: "Apr 11, 2025", time: "10:00 AM", day: "Friday" },
    { date: "Apr 11, 2025", time: "12:00 PM", day: "Friday" },
    { date: "Apr 11, 2025", time: "7:30 PM", day: "Friday (Evening)" },
    { date: "Apr 12, 2025", time: "2:00 PM", day: "Saturday (Matinee)" },
    { date: "Apr 12, 2025", time: "7:30 PM", day: "Saturday (Evening)" },
    { date: "Apr 13, 2025", time: "2:00 PM", day: "Sunday (Final Show)" },
  ];

  // Ticket pricing
  const tickets = [
    { type: "Adult", price: "$29.50" },
    { type: "Concession", price: "$25.50" },
    { type: "Group (6+)", price: "$25.50" },
  ];

  // Function to format the date without the year
  const formatDate = (dateStr: string) => {
    const [month, day] = dateStr.split(" ");
    return (
      <span>
        {month} {day.replace(",", "")}
      </span>
    );
  };

  return (
    <section id="shows" className="py-20 bg-white">
      {/* Comic strip style grass lines */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--charlie-blue)] mb-2">Show Dates</h2>
          <p className="text-xl text-gray-600">
            Playing at The MC Showroom, Prahran
          </p>
          <p className="text-gray-600 mt-2">
            Duration: 60 minutes | Suitable for audiences 5+
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
          {shows.map((show, index) => (
            <div
              key={index}
              className="p-3 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <p className="text-sm font-semibold text-[var(--charlie-blue)] mb-0.5">
                  {formatDate(show.date)}
                </p>
                <h3 className="text-xs text-gray-600 mb-1">{show.day}</h3>
                <p className="text-sm text-gray-800 font-semibold">{show.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ticket Pricing Section */}
        <div className="max-w-2xl mx-auto mt-16 bg-gray-50 rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-center mb-6 text-[var(--charlie-green)]">Ticket Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tickets.map((ticket, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h4 className="text-lg font-bold mb-2">{ticket.type}</h4>
                <p className="text-2xl font-bold text-[var(--charlie-blue)]">{ticket.price}</p>
                <p className="text-sm text-gray-500 mt-1">All shows</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="btn-charlie text-white py-3 px-8 text-lg" onClick={() => window.open(siteConfig.bookingUrl, "_self")}>
              Purchase Tickets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}