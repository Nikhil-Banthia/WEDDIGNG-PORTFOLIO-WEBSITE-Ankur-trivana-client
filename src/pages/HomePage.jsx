import React from 'react';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';
import CtaBannerSection from '../sections/CtaBannerSection';
import FooterSection from '../sections/FooterSection';
import GallerySection from '../sections/GallerySection';
import HeroSection from '../sections/HeroSection';
import Navigation from '../sections/Navigation';
import PackagesSection from '../sections/PackagesSection';
import ServicesSection from '../sections/ServicesSection';
import StoriesSection from '../sections/StoriesSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';

const HomePage = ({
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  heroImages,
  heroIndex,
  services,
  activeGalleryFilter,
  setActiveGalleryFilter,
  gallery,
  lightboxImg,
  setLightboxImg,
  stories,
  activeStory,
  setActiveStory,
  packagesData,
}) => {
  return (
    <>
      <Navigation scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection heroImages={heroImages} heroIndex={heroIndex} />
      <AboutSection />
      <ServicesSection services={services} />
      <GallerySection
        activeGalleryFilter={activeGalleryFilter}
        setActiveGalleryFilter={setActiveGalleryFilter}
        gallery={gallery}
        lightboxImg={lightboxImg}
        setLightboxImg={setLightboxImg}
      />
      <StoriesSection stories={stories} activeStory={activeStory} setActiveStory={setActiveStory} />
      <WhyChooseUsSection />
      <PackagesSection packagesData={packagesData} />
      <CtaBannerSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
