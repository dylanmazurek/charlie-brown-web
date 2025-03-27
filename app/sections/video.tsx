"use client";

import { YouTubeEmbed } from '@next/third-parties/google';

export default function VideoSection() { 
  return (
    <section id="video" className="pb-4 bg-grass">
      <div className="container mx-auto px-2">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold">Watch the Trailer</h2>
        </div>
        <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
          <div className="relative pb-[56.25%] h-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <YouTubeEmbed 
                videoid="4iWo8jFyFwY"
                params="controls=0&rel=0&loop=1"
                style="max-width:100%;"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="max-w-2xl mx-auto">
            Get a sneak peek of our production of "You're a Good Man, Charlie Brown"
            before joining us for the full experience!
          </p>
        </div>
      </div>
    </section>
  );
}