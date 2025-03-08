"use client";

import { cast } from "@/config/cast";
import Image from "next/image";

export default function CastSection() {
  return (
    <section id="cast" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--charlie-green)] mb-2">Meet the Cast</h2>
          <p className="text-xl text-gray-700">
            Featuring talented performers bringing the beloved Peanuts characters to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cast.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-60 overflow-hidden">
                <Image
                  src={`/${member.image}`}
                  width={600}
                  height={400}
                  alt={member.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 cursor-pointer" onClick={() => window.open(member.socialLink, "_blank")}>{member.name}</h3>
                <p className="text-[var(--charlie-blue)] font-semibold mb-3">
                  as {member.character}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}