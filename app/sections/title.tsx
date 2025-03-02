import Image from "next/image";

export default function TitleSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-screen relative overflow-hidden">
      {/* Sky background with clouds */}
      <div className="absolute top-0 left-0 w-full h-[calc(100%-6rem)] bg-sky z-0 overflow-hidden">
        {/* Cloud Animation */}
        <div className="absolute inset-0 pointer-events-none opacity-90">
          <div style={{ position: 'absolute', left: '-10%', top: '10%', animation: 'animateCloud 35s linear infinite', animationDelay: '-5s' }}>
              <div className="cloud"></div>
          </div>
          <div style={{ position: 'absolute', left: '20%', top: '30%', animation: 'animateCloud 45s linear infinite', animationDelay: '-25s' }}>
              <div className="cloud"></div>
          </div>
          <div style={{ position: 'absolute', left: '40%', top: '15%', animation: 'animateCloud 40s linear infinite', animationDelay: '-15s' }}>
              <div className="cloud"></div>
          </div>
          <div style={{ position: 'absolute', left: '0%', top: '60%', animation: 'animateCloud 50s linear infinite', animationDelay: '-30s' }}>
              <div className="cloud"></div>
          </div>
          <div style={{ position: 'absolute', left: '30%', top: '45%', animation: 'animateCloud 38s linear infinite', animationDelay: '-12s' }}>
              <div className="cloud"></div>
          </div>
        </div>
      </div>
      
      {/* Logo and content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
        <div className="mb-8 px-16">
          <Image 
            src="/logo.svg" 
            alt="Charlie Brown Logo" 
            width={340}
            height={227}
            priority={true}
            className="w-[400px] h-auto drop-shadow-xl"
          />
        </div>
        
        <div>
          <p className="text-2xl font-bold text-white drop-shadow-lg">
            April 8 - 13, 2025
          </p>
          <p className="mt-2 text-xl font-medium text-white drop-shadow-lg mb-8">
            The MC Showroom, Melbourne
          </p>
          
          <button className="btn-charlie text-white py-3 px-10 text-lg">
            Get Tickets
          </button>
        </div>
      </div>
      
      {/* Grass background */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-grass z-20" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
