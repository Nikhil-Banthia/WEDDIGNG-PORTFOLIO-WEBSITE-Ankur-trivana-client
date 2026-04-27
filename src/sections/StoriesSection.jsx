import React from 'react';
import { ArrowRight, Calendar, MapPin, X } from 'lucide-react';
import PremiumImage from '../components/common/PremiumImage';
import QuoteIcon from '../components/common/QuoteIcon';
import Reveal from '../components/common/Reveal';

const StoriesSection = ({ stories, activeStory, setActiveStory }) => {
  return (
    <>
      <section id="stories" className="py-24 md:py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Love Stories</h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">Real weddings, detailed concepts, and the emotional journeys we've had the honor to capture.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {stories.map((story, idx) => (
              <Reveal key={story.id} delay={idx * 200} className="group cursor-pointer" onClick={() => setActiveStory(story)}>
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <PremiumImage src={story.cover} alt={story.title} className="w-full h-full transform group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-gold text-xs tracking-widest uppercase mb-2">{story.date}</p>
                    <h3 className="font-serif text-2xl text-white">{story.title}</h3>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-4 group-hover:border-gold transition-colors">
                  <span className="text-gray-400 font-light">{story.couple}</span>
                  <span className="flex items-center text-sm text-gold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                    Read Story <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className={`fixed inset-0 z-[100] bg-white overflow-y-auto transition-transform duration-700 ease-in-out ${activeStory ? 'translate-y-0' : 'translate-y-full'}`}>
        {activeStory && (
          <div className="min-h-screen bg-[#FAFAF8] pb-24">
            <button
              onClick={() => setActiveStory(null)}
              className="fixed top-6 right-6 z-50 bg-white/50 backdrop-blur p-3 rounded-full hover:bg-white transition-colors"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>

            <div className="relative h-[60vh] md:h-[80vh] w-full">
              <img src={activeStory.cover} alt="Cover" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4 bg-black/40 px-4 py-1 rounded backdrop-blur-sm">{activeStory.couple}</p>
                <h1 className="font-serif text-5xl md:text-7xl text-white max-w-4xl drop-shadow-lg">{activeStory.title}</h1>
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
              <div className="flex flex-wrap justify-between border-b border-gray-200 pb-8 mb-12 text-sm uppercase tracking-widest text-gray-500">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gold" /> {activeStory.date}
                </span>
                <span className="flex items-center mt-4 sm:mt-0">
                  <MapPin className="w-4 h-4 mr-2 text-gold" /> {activeStory.venue}
                </span>
              </div>

              <div className="prose prose-lg max-w-none font-light text-gray-600 leading-relaxed mb-16 whitespace-pre-line">
                <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-gold first-letter:mr-3 first-letter:float-left">{activeStory.content}</p>
              </div>

              <div className="my-16 py-12 border-y border-gold/30 bg-white text-center px-8 relative">
                <QuoteIcon className="w-12 h-12 text-gold/20 absolute top-4 left-1/2 -translate-x-1/2" />
                <p className="font-serif text-2xl md:text-3xl text-gray-900 leading-snug relative z-10 italic">"{activeStory.quote}"</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                {activeStory.images.map((img, i) => (
                  <PremiumImage key={i} src={img} alt="Detail" className="aspect-[3/4] rounded-sm" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StoriesSection;
