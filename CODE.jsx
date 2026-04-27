import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronRight, ChevronLeft, Play, Star, MapPin, 
  Calendar, Camera, Video, Heart, Music, Image as ImageIcon, 
  Award, Clock, ShieldCheck, Mail, Phone, Instagram, ArrowRight
} from 'lucide-react';

// --- GLOBAL STYLES & FONTS ---
const injectStyles = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600&display=swap');
    
    html { scroll-behavior: smooth; }
    body { font-family: 'Poppins', sans-serif; background-color: #FAFAF8; color: #1A1A1A; overflow-x: hidden; }
    h1, h2, h3, h4, h5, h6, .font-serif { font-family: 'Playfair Display', serif; }
    
    .text-gold { color: #C5A880; }
    .bg-gold { background-color: #C5A880; }
    .border-gold { border-color: #C5A880; }
    
    .glass { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
    .glass-dark { background: rgba(26, 26, 26, 0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
    
    .hover-lift { transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease; }
    .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
    
    .loader-pulse { animation: pulseAura 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    @keyframes pulseAura { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .7; transform: scale(0.95); } }
    
    .image-zoom-hover img { transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
    .image-zoom-hover:hover img { transform: scale(1.05); }

    .masonry-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; grid-auto-rows: 10px; }
    
    /* Scrollbar */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #FAFAF8; }
    ::-webkit-scrollbar-thumb { background: #E0D5C1; border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: #C5A880; }
  `;
  document.head.appendChild(style);
};

// --- DATA ---
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=2000"
];

const SERVICES = [
  { icon: <Heart className="w-6 h-6 text-gold" />, title: "Wedding Decor", desc: "Luxury stage setups and floral arrangements.", img: "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&q=80&w=600" },
  { icon: <Camera className="w-6 h-6 text-gold" />, title: "Photography", desc: "Candid moments and timeless portraits.", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600" },
  { icon: <Video className="w-6 h-6 text-gold" />, title: "Cinematography", desc: "Story-driven wedding films and drone shoots.", img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=600" },
  { icon: <Music className="w-6 h-6 text-gold" />, title: "Event Planning", desc: "Flawless execution from Mehendi to Reception.", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600" },
];

const GALLERY = [
  { id: 1, category: "Decor", title: "Royal Mandap", height: "h-[400px]", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" },
  { id: 2, category: "Couple", title: "Candid Joy", height: "h-[300px]", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800" },
  { id: 3, category: "Haldi", title: "Vibrant Haldi", height: "h-[500px]", img: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf4?auto=format&fit=crop&q=80&w=800" },
  { id: 4, category: "Reception", title: "Evening Glow", height: "h-[350px]", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800" },
  { id: 5, category: "Bridal", title: "Bridal Elegance", height: "h-[450px]", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800" },
  { id: 6, category: "Couple", title: "The First Look", height: "h-[300px]", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" },
];

const STORIES = [
  {
    id: "s1",
    couple: "Rohan & Anjali",
    title: "A Royal Rajasthani Affair",
    date: "November 12, 2024",
    venue: "Umaid Bhawan Palace",
    cover: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
    quote: "Aura & Ivory didn't just plan our wedding; they breathed life into our wildest dreams.",
    content: "The vision for Rohan and Anjali was clear: unadulterated regal elegance infused with warm, intimate family moments. Set against the breathtaking backdrop of Umaid Bhawan Palace, the design featured cascading marigolds, deep velvet drapes, and thousands of floating candles. \n\nOur photography team focused heavily on candid storytelling, capturing the subtle glances between the couple during the pheras, while the drone team captured the majestic scale of the baraat. The reception transformed into a modern glasshouse concept, with crystal chandeliers reflecting the starry night sky.",
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "s2",
    couple: "Vikram & Neha",
    title: "Minimalist Coastal Magic",
    date: "February 04, 2025",
    venue: "Taj Exotica, Goa",
    cover: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200",
    quote: "The sea breeze, the soft pastels, and the flawless execution made it heaven on earth.",
    content: "Moving away from traditional deep reds, Vikram and Neha opted for a serene, pastel-heavy aesthetic that complemented the Goan coastline. We conceptualized an 'open-air' mandap draped purely in sheer ivory fabrics and delicate baby's breath. \n\nThe Haldi was a riot of yellows and coastal blues, featuring custom coconut-shell decor. Our cinematic team created a documentary-style wedding film, highlighting the emotional vows exchanged against the sound of crashing waves at sunset.",
    images: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

const PACKAGES = [
  { title: "Silver Canvas", price: "Starting at $5,000", desc: "Perfect for intimate gatherings.", features: ["Candid Photography", "Cinematic Highlights (3 mins)", "Standard Decor Setup", "1 Event Coordinator"] },
  { title: "Gold Aura", price: "Starting at $12,000", desc: "Our most sought-after signature experience.", recommended: true, features: ["Pre-Wedding Shoot", "Full Cinematography (15 mins)", "Premium Stage & Floral Decor", "Dedicated Planning Team", "Drone Coverage"] },
  { title: "Platinum Ivory", price: "Custom Quote", desc: "The ultimate luxury destination wedding.", features: ["Multi-day Coverage", "Same Day Edit Film", "Bespoke Royal Decor", "Celebrity Artist Management", "Complete Event Directing"] }
];

const TESTIMONIALS = [
  { name: "Priya & Arjun", text: "Every detail was meticulously planned. The photos look like they belong in Vogue Weddings. Pure magic.", rating: 5 },
  { name: "Sneha & Kabir", text: "They took all the stress away. We just showed up and lived our dream. The decor was breathtaking.", rating: 5 },
  { name: "Meera & Dev", text: "The cinematic video made our entire family cry happy tears. True artists and incredible professionals.", rating: 5 }
];


// --- UTILITY COMPONENTS ---

// Intersection Observer Reveal Component
const Reveal = ({ children, className = "", delay = 0, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate-y-0 translate-x-0';
    switch(direction) {
      case 'up': return 'translate-y-12';
      case 'down': return '-translate-y-12';
      case 'left': return 'translate-x-12';
      case 'right': return '-translate-x-12';
      default: return 'translate-y-12';
    }
  };

  return (
    <div 
      ref={ref} 
      style={{ transitionDelay: `${delay}ms` }} 
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
};

// Premium Image Component with Skeleton Loader
const PremiumImage = ({ src, alt, className, imgClass = "object-cover", onClick }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`} onClick={onClick}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 opacity-50 animate-[shimmer_1.5s_infinite]"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full ${imgClass} transition-all duration-1000 ease-out ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
      />
    </div>
  );
};


// --- MAIN APP COMPONENT ---
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStory, setActiveStory] = useState(null);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("All");
  const [lightboxImg, setLightboxImg] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);

  // Init
  useEffect(() => {
    injectStyles();
    // Simulate loading assets
    setTimeout(() => setIsLoading(false), 2800);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Hero Slider Interval
    const heroTimer = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(heroTimer);
    };
  }, []);

  // Preloader
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#FAFAF8] z-[100] flex flex-col items-center justify-center transition-opacity duration-1000">
        <div className="relative w-24 h-24 flex items-center justify-center mb-6 loader-pulse">
          <div className="absolute inset-0 border-[1px] border-gold rounded-full opacity-50 animate-[spin_4s_linear_infinite]"></div>
          <h1 className="font-serif text-4xl text-gray-900 tracking-tighter">A<span className="text-gold">&</span>I</h1>
        </div>
        <p className="tracking-[0.3em] text-xs text-gray-500 uppercase font-light">Loading Experience</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative selection:bg-gold selection:text-white">
      
      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className={`font-serif text-2xl md:text-3xl font-medium tracking-wide transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            AURA <span className="text-gold">&</span> IVORY
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Gallery', 'Stories', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm tracking-wider uppercase font-medium hover:text-gold transition-colors ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
                {item}
              </a>
            ))}
            <a href="#contact" className="px-6 py-2.5 bg-gold text-white text-sm tracking-wider uppercase font-medium hover:bg-gray-900 transition-colors duration-300">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-[60] bg-gray-900 text-white transition-transform duration-700 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-end">
          <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:text-gold transition-colors">
            <X className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full pb-20 space-y-8">
          <h2 className="font-serif text-3xl mb-8 text-gold">A & I</h2>
          {['Home', 'About', 'Services', 'Gallery', 'Stories', 'Packages', 'Contact'].map((item, i) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif tracking-widest hover:text-gold transition-colors"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen w-full overflow-hidden bg-gray-900">
        {HERO_IMAGES.map((img, idx) => (
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
          <p className="text-white/60 text-[10px] tracking-widest uppercase mb-2">Scroll</p>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left" className="relative">
              <div className="aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 relative">
                <PremiumImage 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" 
                  alt="About Us"
                  className="w-full h-full object-cover rounded-t-full"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 border-l border-t border-gold rounded-tl-[40px] hidden md:block"></div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <p className="text-gold tracking-widest uppercase text-xs font-semibold mb-4">Our Heritage</p>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 leading-tight">
                Crafting Luxury <br/>Weddings With <i className="text-gold">Heart</i>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 font-light">
                At Aura & Ivory, we believe that a wedding is more than an event; it's a profound emotional journey. For over a decade, our visionary team of designers, planners, and cinematographers have dedicated themselves to translating love stories into breathtaking visual masterpieces.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10 font-light">
                From the royal palaces of Rajasthan to serene coastal shores, we merge traditional grandeur with modern minimalist aesthetics, ensuring your day is flawlessly executed and authentically yours.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                <div>
                  <h4 className="font-serif text-3xl text-gray-900 mb-1">100+</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Weddings</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl text-gray-900 mb-1">10<span className="text-gold">+</span></h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Years Exp.</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl text-gray-900 mb-1">5k<span className="text-gold">+</span></h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Memories</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold tracking-widest uppercase text-xs font-semibold mb-4">What We Do</p>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Bespoke Services</h2>
            <p className="text-gray-600 font-light">Comprehensive, luxury solutions tailored to make your celebration extraordinary, stress-free, and visually stunning.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((srv, idx) => (
              <Reveal key={idx} delay={idx * 150} className="group hover-lift bg-white p-8 rounded-sm relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-0">
                  <img src={srv.img} alt="bg" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#FAFAF8] rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                    {srv.icon}
                  </div>
                  <h3 className="font-serif text-xl text-gray-900 mb-3">{srv.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">{srv.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-gold w-0 group-hover:w-full transition-all duration-500"></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED GALLERY */}
      <section id="gallery" className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Curated Portfolio</h2>
            </Reveal>
            
            <Reveal delay={200} className="mt-6 md:mt-0 flex flex-wrap gap-4">
              {['All', 'Decor', 'Couple', 'Bridal', 'Reception'].map(filter => (
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
            {GALLERY.filter(img => activeGalleryFilter === 'All' || img.category === activeGalleryFilter).map((item, idx) => (
              <Reveal key={item.id} delay={idx * 100} className="break-inside-avoid">
                <div 
                  className={`relative group cursor-pointer overflow-hidden image-zoom-hover`}
                  onClick={() => setLightboxImg(item.img)}
                >
                  <PremiumImage 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full rounded-sm"
                  />
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

      {/* LIGHTBOX */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxImg(null)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white" onClick={() => setLightboxImg(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={lightboxImg} alt="Enlarged" className="max-w-full max-h-[90vh] object-contain animate-[fadeIn_0.3s_ease-out]" />
        </div>
      )}

      {/* EDITORIAL STORIES */}
      <section id="stories" className="py-24 md:py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Love Stories</h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">Real weddings, detailed concepts, and the emotional journeys we've had the honor to capture.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {STORIES.map((story, idx) => (
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

      {/* STORY MODAL (IMMERSIVE EXPERIENCE) */}
      <div className={`fixed inset-0 z-[100] bg-white overflow-y-auto transition-transform duration-700 ease-in-out ${activeStory ? 'translate-y-0' : 'translate-y-full'}`}>
        {activeStory && (
          <div className="min-h-screen bg-[#FAFAF8] pb-24">
            {/* Modal Header */}
            <button 
              onClick={() => setActiveStory(null)}
              className="fixed top-6 right-6 z-50 bg-white/50 backdrop-blur p-3 rounded-full hover:bg-white transition-colors"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>

            {/* Story Hero */}
            <div className="relative h-[60vh] md:h-[80vh] w-full">
              <img src={activeStory.cover} alt="Cover" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4 bg-black/40 px-4 py-1 rounded backdrop-blur-sm">{activeStory.couple}</p>
                <h1 className="font-serif text-5xl md:text-7xl text-white max-w-4xl drop-shadow-lg">{activeStory.title}</h1>
              </div>
            </div>

            {/* Story Content */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
              <div className="flex flex-wrap justify-between border-b border-gray-200 pb-8 mb-12 text-sm uppercase tracking-widest text-gray-500">
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-gold"/> {activeStory.date}</span>
                <span className="flex items-center mt-4 sm:mt-0"><MapPin className="w-4 h-4 mr-2 text-gold"/> {activeStory.venue}</span>
              </div>

              <div className="prose prose-lg max-w-none font-light text-gray-600 leading-relaxed mb-16 whitespace-pre-line">
                {/* Drop cap effect for first letter */}
                <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-gold first-letter:mr-3 first-letter:float-left">
                  {activeStory.content}
                </p>
              </div>

              <div className="my-16 py-12 border-y border-gold/30 bg-white text-center px-8 relative">
                <Quote className="w-12 h-12 text-gold/20 absolute top-4 left-1/2 -translate-x-1/2" />
                <p className="font-serif text-2xl md:text-3xl text-gray-900 leading-snug relative z-10 italic">
                  "{activeStory.quote}"
                </p>
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

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl text-gray-900 mb-16">The Aura & Ivory Standard</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: <Award className="w-8 h-8"/>, title: "Premium Quality" },
              { icon: <Clock className="w-8 h-8"/>, title: "On-Time Execution" },
              { icon: <ShieldCheck className="w-8 h-8"/>, title: "Stress-Free Planning" },
              { icon: <Heart className="w-8 h-8"/>, title: "Emotional Storytelling" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#F8F7F4] text-gold flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-serif text-lg text-gray-900">{item.title}</h4>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-24 md:py-32 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Investment</h2>
            <p className="text-gray-500 font-light">Transparent pricing for unparalleled luxury.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {PACKAGES.map((pkg, idx) => (
              <Reveal key={idx} delay={idx * 150} className={`bg-white p-8 md:p-10 border ${pkg.recommended ? 'border-gold shadow-2xl scale-105 relative z-10' : 'border-gray-100'} hover-lift`}>
                {pkg.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white px-4 py-1 text-xs uppercase tracking-widest font-semibold">
                    Signature
                  </div>
                )}
                <h3 className="font-serif text-2xl text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-sm text-gray-500 font-light mb-6">{pkg.desc}</p>
                <div className="text-3xl font-serif text-gold mb-8 pb-8 border-b border-gray-100">{pkg.price}</div>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600 font-light text-sm">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 text-sm tracking-widest uppercase transition-colors duration-300 ${pkg.recommended ? 'bg-gold text-white hover:bg-gray-900' : 'bg-[#F8F7F4] text-gray-900 hover:bg-gold hover:text-white'}`}>
                  Inquire Now
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / BANNER */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover blur-[2px]" alt="Background"/>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 leading-tight">
              Let's Design Your <br/><i className="text-gold">Dream Celebration</i>
            </h2>
            <p className="text-white/80 font-light mb-10 max-w-2xl mx-auto text-lg">
              Our calendar is selective to ensure every couple receives our undivided attention and artistry. Connect with us to begin your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-10 py-4 bg-gold text-white tracking-widest uppercase text-sm hover:bg-white hover:text-gray-900 transition-colors duration-300">
                Book Consultation
              </a>
              <a href="#" className="px-10 py-4 border border-white text-white tracking-widest uppercase text-sm hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" /> WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal direction="left">
            <h2 className="font-serif text-4xl text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-600 font-light mb-12">We would be honored to be part of your story. Please fill out the form below, and our creative director will be in touch within 24 hours.</p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gold mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Studio Location</h4>
                  <p className="text-gray-500 font-light text-sm">The Ivory Suite, 404 Royal Avenue, Mumbai, IN 400001</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-gold mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Email Us</h4>
                  <p className="text-gray-500 font-light text-sm">hello@auraandivory.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-gold mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Call Us</h4>
                  <p className="text-gray-500 font-light text-sm">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="bg-[#FAFAF8] p-8 md:p-10 rounded-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Names</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors text-gray-900" placeholder="Bride & Groom" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                  <input type="tel" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors text-gray-900" placeholder="Your Number" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Event Date</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors text-gray-900" placeholder="DD/MM/YYYY" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Est. Budget</label>
                  <select className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors text-gray-900 cursor-pointer">
                    <option>Select Range</option>
                    <option>$5k - $10k</option>
                    <option>$10k - $25k</option>
                    <option>$25k+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Tell us about your vision</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors text-gray-900 resize-none" placeholder="Locations, ideas, dreams..."></textarea>
              </div>
              <button className="w-full py-4 bg-gray-900 text-white tracking-widest uppercase text-sm hover:bg-gold transition-colors duration-300 mt-4">
                Send Inquiry
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111] text-white pt-24 pb-12 border-t-4 border-gold">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <h3 className="font-serif text-2xl tracking-wide mb-6">AURA <span className="text-gold">&</span> IVORY</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                Curating ultra-premium wedding experiences worldwide. Turning fleeting moments into timeless art.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Portfolio', 'Cinematography', 'Investment', 'Contact'].map(link => (
                  <li key={link}><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-gold mb-6">Services</h4>
              <ul className="space-y-3">
                {['Luxury Decor', 'Destination Weddings', 'Candid Photography', 'Drone Films'].map(link => (
                  <li key={link}><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-gold mb-6">Newsletter</h4>
              <p className="text-gray-400 font-light text-sm mb-4">Subscribe for wedding inspirations & exclusive offers.</p>
              <div className="flex">
                <input type="email" placeholder="Email Address" className="bg-transparent border-b border-gray-800 py-2 px-0 w-full focus:outline-none focus:border-gold text-sm text-white transition-colors" />
                <button className="text-gold uppercase tracking-widest text-xs font-semibold ml-4 hover:text-white transition-colors">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 tracking-wider">
            <p>&copy; {new Date().getFullYear()} Aura & Ivory. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Icon fallbacks inside file for missing specific icons
function Quote(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
    </svg>
  );
}