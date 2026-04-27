import React from 'react';
import { X } from 'lucide-react';
import PremiumImage from '../components/common/PremiumImage';
import Reveal from '../components/common/Reveal';

const GallerySection = ({ activeGalleryFilter, setActiveGalleryFilter, gallery, lightboxImg, setLightboxImg }) => {
  return (
    <>
      <section id="gallery" className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Curated Portfolio</h2>
            </Reveal>

            <Reveal delay={200} className="mt-6 md:mt-0 flex flex-wrap gap-4">
              {['All', 'Decor', 'Couple', 'Bridal', 'Reception'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveGalleryFilter(filter)}
                  className={`text-sm tracking-wider uppercase pb-1 border-b-2 transition-colors ${activeGalleryFilter === filter ? 'border-gold text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-900'}`}
                >
                  {filter}
                </button>
              ))}
            </Reveal>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery
              .filter((img) => activeGalleryFilter === 'All' || img.category === activeGalleryFilter)
              .map((item, idx) => (
                <Reveal key={item.id} delay={idx * 100} className="break-inside-avoid">
                  <div className="relative group cursor-pointer overflow-hidden image-zoom-hover" onClick={() => setLightboxImg(item.img)}>
                    <PremiumImage src={item.img} alt={item.title} className="w-full rounded-sm" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <p className="text-gold text-xs tracking-widest uppercase mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</p>
                      <h4 className="text-white font-serif text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h4>
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {lightboxImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxImg(null)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white" onClick={() => setLightboxImg(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={lightboxImg} alt="Enlarged" className="max-w-full max-h-[90vh] object-contain animate-[fadeIn_0.3s_ease-out]" />
        </div>
      )}
    </>
  );
};

export default GallerySection;
