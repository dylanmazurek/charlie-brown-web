"use client";

import { siteConfig } from "@/config/site";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--charlie-green)]">About the Show</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto bg-white p-8 rounded-xl shadow-md">
            <p className="lead text-xl text-gray-700 mb-8">
              Celebrate the worldwide 75th anniversary of Peanuts, with You're a Good Man, Charlie Brown! This Tony Award-winning musical returns to Melbourne for a strictly limited season at The MC Showroom.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[var(--charlie-green)]">The Show</h3>
                <p className="text-gray-700">
                  Join Charlie Brown, Snoopy and the Peanuts gang on a heartwarming, hilarious journey full of unforgettable songs, charming moments and timeless laughs.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-[var(--charlie-blue)]">For Everyone</h3>
                <p className="text-gray-700">
                  Perfect for fans of all ages, this feel-good show brings Charles M. Schulz's classic characters to life, capturing the magic of friendship, fun and life's simple joys.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-12">
              <h3 className="text-xl font-bold mb-4 text-center text-[var(--charlie-green)]">Reviews</h3>
              <p className="italic text-gray-700 mb-3">
                'A bright, bubbly and utterly charming musical.' — Weekend Notes
              </p>
              <p className="italic text-gray-700">
                'Delightful in every way!' — Lilithia Reviews
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-[var(--charlie-blue)]">Don't Miss Out!</h3>
              <p className="text-gray-700">
                Whether you're reliving childhood memories, or discovering Peanuts for the first time, this musical is a celebration of everything we love about Charlie Brown and friends. Don't miss your chance – grab tickets today and join us for this special anniversary season honouring one of the world's most beloved comic strips!
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Based on The Comic Strip Peanuts by Charles M. Schulz.
                Book, Music and Lyrics by Clark Gesner. Additional Dialogue by Michael Mayer.
                Additional Music and Lyrics by Andrew Lippa.
              </p>
              <div className="mt-8 text-center">
                <button className="btn-charlie text-white py-3 px-8 text-lg" onClick={() => window.open(siteConfig.show.bookingUrl, "_self")}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
