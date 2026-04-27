import React from 'react';
import Reveal from '../components/common/Reveal';

const HeroSection = ({ heroImages, heroIndex }) => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gray-900">
      {heroImages.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${idx === heroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={img}
            alt={`Hero ${idx}`}
            className={`w-full h-full object-cover transform transition-transform duration-[10000ms] ${idx === heroIndex ? 'scale-110' : 'scale-100'}`}
          />
        </div>
      ))}

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
        <Reveal delay={200}>
          <p className="text-gold tracking-[0.4em] uppercase text-xs md:text-sm mb-6">Ultra Premium Wedding Studio</p>
        </Reveal>
        <Reveal delay={400}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-tight mb-8 drop-shadow-lg">
            Where Beautiful Weddings Become <i className="font-light text-gold">Timeless Memories</i>
          </h1>
        </Reveal>
        <Reveal delay={600} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <a href="#gallery" className="px-8 py-4 bg-white text-gray-900 text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-colors duration-300">
            View Gallery
          </a>
          <a href="#contact" className="px-8 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-colors duration-300">
            Book Consultation
          </a>
        </Reveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
        <p className="text-white/60 text-[10px] tracking-widest uppercase mb-2">Scroll</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
