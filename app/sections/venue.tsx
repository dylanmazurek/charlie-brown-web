"use client";

export default function VenueSection() {
  return (
    <section id="venue" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--charlie-blue)] mb-2">Venue Information</h2>
          <p className="text-xl text-gray-600">
            The MC Showroom, Prahran
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Venue Information */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[var(--charlie-green)]">The MC Showroom</h3>
            <p className="text-gray-700 mb-4">
              The Showroom, Level 1, 50 Clifton Street, Prahran
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-[var(--charlie-blue)] mb-2">Performance Dates</h4>
              <p className="text-gray-700">April 8-13, 2025</p>
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
                Duration: 60 minutes<br />
                Suitable for audiences 5+
              </p>
            </div>
          </div>

          {/* Map & Ticket Info */}
          <div className="flex flex-col h-full">
            {/* Embedded map - placeholder */}
            <div className="bg-gray-100 h-64 mb-6 rounded-lg overflow-hidden shadow-md">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500 font-medium">Map of Prahran - The MC Showroom</p>
              </div>
            </div>
            
            {/* Ticket information */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex-grow">
              <h3 className="text-xl font-bold mb-4 text-[var(--charlie-blue)]">Ticket Information</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Adult</span>
                  <span className="font-bold">$29.50</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Concession</span>
                  <span className="font-bold">$25.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Group (6+)</span>
                  <span className="font-bold">$25.50</span>
                </div>
              </div>
              
              <button className="w-full btn-charlie mt-6 text-white">
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