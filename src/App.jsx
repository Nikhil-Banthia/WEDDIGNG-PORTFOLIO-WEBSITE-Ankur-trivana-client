import React, { useEffect, useState } from 'react';
import FloatingWhatsAppButton from './components/common/FloatingWhatsAppButton';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import { GALLERY, HERO_IMAGES, PACKAGES, SERVICES, STORIES } from './utils/constants';
import injectStyles from './utils/injectStyles';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStory, setActiveStory] = useState(null);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    injectStyles();
    setTimeout(() => setIsLoading(false), 2800);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const heroTimer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(heroTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#FAFAF8] z-[100] flex flex-col items-center justify-center transition-opacity duration-1000">
        <div className="relative w-24 h-24 flex items-center justify-center mb-6 loader-pulse">
          <div className="absolute inset-0 border-[1px] border-gold rounded-full opacity-50 animate-[spin_4s_linear_infinite]"></div>
          <h1 className="font-serif text-4xl text-gray-900 tracking-tighter">
            A<span className="text-gold">&</span>I
          </h1>
        </div>
        <p className="tracking-[0.3em] text-xs text-gray-500 uppercase font-light">Loading Experience</p>
      </div>
    );
  }

  return (
    <MainLayout>
      <HomePage
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        heroImages={HERO_IMAGES}
        heroIndex={heroIndex}
        services={SERVICES}
        activeGalleryFilter={activeGalleryFilter}
        setActiveGalleryFilter={setActiveGalleryFilter}
        gallery={GALLERY}
        lightboxImg={lightboxImg}
        setLightboxImg={setLightboxImg}
        stories={STORIES}
        activeStory={activeStory}
        setActiveStory={setActiveStory}
        packagesData={PACKAGES}
      />
      <FloatingWhatsAppButton />
    </MainLayout>
  );
}
