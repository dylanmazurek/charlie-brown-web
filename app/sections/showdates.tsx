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

  return (
    <section id="shows" className="py-20 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {shows.map((show, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-50 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-[var(--charlie-blue)] rounded-full w-16 h-16 flex items-center justify-center mb-3">
                  <span className="text-white text-xl font-bold">
                    {show.date.split(",")[0].split(" ")[1]}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">{show.day}</h3>
                <p className="text-gray-600 mb-1">{show.date}</p>
                <p className="text-gray-800 font-semibold">{show.time}</p>
                <button className="mt-4 btn-charlie text-white py-2 px-5 rounded-md text-sm">
                  Book Now
                </button>
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
            <button className="btn-charlie text-white py-3 px-8 text-lg">
              Purchase Tickets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}