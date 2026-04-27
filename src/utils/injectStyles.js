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
    
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #FAFAF8; }
    ::-webkit-scrollbar-thumb { background: #E0D5C1; border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: #C5A880; }
  `;
  document.head.appendChild(style);
};

export default injectStyles;
