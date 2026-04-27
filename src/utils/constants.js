import React from 'react';
import { Camera, Heart, Music, Video } from 'lucide-react';

export const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=2000',
];

export const SERVICES = [
  {
    icon: <Heart className="w-6 h-6 text-gold" />,
    title: 'Wedding Decor',
    desc: 'Luxury stage setups and floral arrangements.',
    img: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&q=80&w=600',
  },
  {
    icon: <Camera className="w-6 h-6 text-gold" />,
    title: 'Photography',
    desc: 'Candid moments and timeless portraits.',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600',
  },
  {
    icon: <Video className="w-6 h-6 text-gold" />,
    title: 'Cinematography',
    desc: 'Story-driven wedding films and drone shoots.',
    img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=600',
  },
  {
    icon: <Music className="w-6 h-6 text-gold" />,
    title: 'Event Planning',
    desc: 'Flawless execution from Mehendi to Reception.',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600',
  },
];

export const GALLERY = [
  { id: 1, category: 'Decor', title: 'Royal Mandap', height: 'h-[400px]', img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Couple', title: 'Candid Joy', height: 'h-[300px]', img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Haldi', title: 'Vibrant Haldi', height: 'h-[500px]', img: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf4?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'Reception', title: 'Evening Glow', height: 'h-[350px]', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'Bridal', title: 'Bridal Elegance', height: 'h-[450px]', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'Couple', title: 'The First Look', height: 'h-[300px]', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800' },
];

export const STORIES = [
  {
    id: 's1',
    couple: 'Rohan & Anjali',
    title: 'A Royal Rajasthani Affair',
    date: 'November 12, 2024',
    venue: 'Umaid Bhawan Palace',
    cover: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200',
    quote: "Aura & Ivory didn't just plan our wedding; they breathed life into our wildest dreams.",
    content:
      'The vision for Rohan and Anjali was clear: unadulterated regal elegance infused with warm, intimate family moments. Set against the breathtaking backdrop of Umaid Bhawan Palace, the design featured cascading marigolds, deep velvet drapes, and thousands of floating candles. \n\nOur photography team focused heavily on candid storytelling, capturing the subtle glances between the couple during the pheras, while the drone team captured the majestic scale of the baraat. The reception transformed into a modern glasshouse concept, with crystal chandeliers reflecting the starry night sky.',
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 's2',
    couple: 'Vikram & Neha',
    title: 'Minimalist Coastal Magic',
    date: 'February 04, 2025',
    venue: 'Taj Exotica, Goa',
    cover: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200',
    quote: 'The sea breeze, the soft pastels, and the flawless execution made it heaven on earth.',
    content:
      "Moving away from traditional deep reds, Vikram and Neha opted for a serene, pastel-heavy aesthetic that complemented the Goan coastline. We conceptualized an 'open-air' mandap draped purely in sheer ivory fabrics and delicate baby's breath. \n\nThe Haldi was a riot of yellows and coastal blues, featuring custom coconut-shell decor. Our cinematic team created a documentary-style wedding film, highlighting the emotional vows exchanged against the sound of crashing waves at sunset.",
    images: [
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
    ],
  },
];

export const PACKAGES = [
  {
    title: 'Silver Canvas',
    price: 'Starting at $5,000',
    desc: 'Perfect for intimate gatherings.',
    features: ['Candid Photography', 'Cinematic Highlights (3 mins)', 'Standard Decor Setup', '1 Event Coordinator'],
  },
  {
    title: 'Gold Aura',
    price: 'Starting at $12,000',
    desc: 'Our most sought-after signature experience.',
    recommended: true,
    features: ['Pre-Wedding Shoot', 'Full Cinematography (15 mins)', 'Premium Stage & Floral Decor', 'Dedicated Planning Team', 'Drone Coverage'],
  },
  {
    title: 'Platinum Ivory',
    price: 'Custom Quote',
    desc: 'The ultimate luxury destination wedding.',
    features: ['Multi-day Coverage', 'Same Day Edit Film', 'Bespoke Royal Decor', 'Celebrity Artist Management', 'Complete Event Directing'],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Priya & Arjun',
    text: 'Every detail was meticulously planned. The photos look like they belong in Vogue Weddings. Pure magic.',
    rating: 5,
  },
  {
    name: 'Sneha & Kabir',
    text: 'They took all the stress away. We just showed up and lived our dream. The decor was breathtaking.',
    rating: 5,
  },
  {
    name: 'Meera & Dev',
    text: 'The cinematic video made our entire family cry happy tears. True artists and incredible professionals.',
    rating: 5,
  },
];
