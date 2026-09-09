import { useState, useEffect } from 'react';
import { HiArrowDown } from 'react-icons/hi';
import att1 from '../assets/images/att1.webp';
import anu from '../assets/images/anu.webp';
import Navbar from './Navbar';
import { supabase } from '../lib/supabaseClient';
import Toast from './Toast';

const fallbackImages = [att1, anu];

const Hero = () => {
  const [topRightIndex, setTopRightIndex] = useState(0);
  const [bottomLeftIndex, setBottomLeftIndex] = useState(1);
  const [galleryPhotos, setGalleryPhotos] = useState(fallbackImages);
  const [showToast, setShowToast] = useState(false);

  const handleTicketClick = (e) => {
    e.preventDefault();
    setShowToast(true);
  };

  useEffect(() => {
    fetchGalleryFromSupabase();
  }, []);

  const fetchGalleryFromSupabase = async () => {
    try {
      const { data, error } = await supabase
        .from('highlights_gallery')
        .select('image_url')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        const urls = data.map((item) => item.image_url);
        setGalleryPhotos(urls);
      }
    } catch (err) {
      console.log('Using default hero images:', err.message);
    }
  };

  // Cycle images every 4 seconds
  useEffect(() => {
    if (galleryPhotos.length <= 1) return;

    const interval = setInterval(() => {
      setTopRightIndex((prev) => (prev + 1) % galleryPhotos.length);
      setBottomLeftIndex((prev) => (prev + 2) % galleryPhotos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryPhotos]);

  const currentTopRightImage = galleryPhotos[topRightIndex] || att1;
  const currentBottomLeftImage = galleryPhotos[bottomLeftIndex] || anu;

  return (
    <section id="hero" className="w-full bg-white min-h-screen p-3 md:p-6 lg:p-8 font-brico">
      {/* Outer Soft Cream Rounded Container */}
      <div className="w-full bg-[#FAF6EE] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] min-h-[92vh] relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 md:p-10 lg:p-12 border border-black/5 shadow-2xl">
        
        {/* Top Floating Navbar inside the container */}
        <Navbar />

        {/* Ambient Blurred Background Soft Orbs */}
        <div className="absolute top-1/4 right-10 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-tr from-[#BFD9FB]/80 via-[#DCEBFF]/60 to-transparent rounded-full blur-3xl pointer-events-none -z-0 transform translate-x-1/4"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-br from-[#BFD9FB]/70 via-[#E4EFFF]/50 to-transparent rounded-full blur-3xl pointer-events-none -z-0"></div>

        {/* Main Content Area */}
        <div className="relative z-10 my-auto py-8 md:py-12 flex flex-col justify-center">
          
          {/* Staggered Giant Headline */}
          <div className="w-full flex flex-col relative select-none">
            
            {/* Top Line: "Unilorin" + Floating Image Card on Desktop */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h1 className="text-black font-extrabold text-5xl sm:text-7xl md:text-[110px] lg:text-[145px] xl:text-[170px] leading-[0.88] tracking-tight transition-all duration-500 cursor-pointer">
                Unilorin
              </h1>

              {/* Dynamic Floating Image Card - Clean side-by-side positioning on desktop */}
              <div className="w-full sm:w-44 sm:h-52 md:w-56 md:h-64 lg:w-64 lg:h-72 h-44 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 sm:rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 bg-gray-200 shrink-0 mt-2 sm:mt-0">
                <img
                  key={currentTopRightImage}
                  src={currentTopRightImage}
                  alt="Unilorin Tech Summit visual"
                  className="w-full h-full object-cover transition-opacity duration-700"
                />
              </div>
            </div>

            {/* Bottom Line: "Tech Summit" */}
            <div className="flex items-center justify-start sm:justify-end md:justify-center md:pl-[6%] relative mt-2 sm:mt-1">
              <h1 className="text-black font-extrabold text-5xl sm:text-7xl md:text-[110px] lg:text-[145px] xl:text-[170px] leading-[0.88] tracking-tight transition-all duration-500 cursor-pointer">
                Tech Summit
              </h1>
            </div>

            {/* CTAs - Right under "Tech Summit" */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-6 md:mt-8">
              {/* Primary CTA: Get Your Ticket */}
              <a
                href="#"
                onClick={handleTicketClick}
                className="w-full sm:w-auto px-8 py-4 bg-black text-white font-bold text-sm md:text-base uppercase tracking-wider border-2 border-black hover:bg-[#00ADFF] hover:border-[#00ADFF] transition-all duration-300 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#00ADFF] hover:translate-x-[-2px] hover:translate-y-[-2px] text-center cursor-pointer"
              >
                Get Your Ticket →
              </a>

              {/* Secondary CTA: Become a Sponsor */}
              <a
                href="#partners"
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-sm md:text-base uppercase tracking-wider border-2 border-black hover:bg-black hover:text-white transition-all duration-300 text-center"
              >
                Become a Sponsor
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Section: Floating Card Left, Spinning Badge Center, Tagline Right */}
        <div className="relative z-10 w-full pt-6 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Dynamic Bottom Left Floating Image Card */}
          <div className="w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-44 lg:w-72 lg:h-48 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-4 border-white transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 shrink-0 bg-gray-200">
            <img
              key={currentBottomLeftImage}
              src={currentBottomLeftImage}
              alt="Community attendee"
              className="w-full h-full object-cover transition-opacity duration-700"
            />
          </div>

          {/* Center Spinning Circular Badge */}
          <div className="flex flex-col items-center justify-center relative my-4 md:my-0 group cursor-pointer">
            <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
              
              {/* Rotating Circular Text */}
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[8.5px] font-bold tracking-[1.8px] uppercase fill-[#000000]">
                  <textPath href="#circlePath">
                    UNILORIN TECH SUMMIT • UNILORIN TECH SUMMIT •
                  </textPath>
                </text>
              </svg>

              {/* Inner Dark Circle with Down Arrow */}
              <a
                href="#about"
                className="absolute inset-0 m-auto w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300"
                aria-label="Scroll to About"
              >
                <HiArrowDown className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Bottom Right Slogan / Tagline Text */}
          <div className="max-w-xs md:max-w-sm text-center md:text-left">
            {/* NEW: Community Message Lead-in */}
            <p className="text-black  font-bold text-[11px] md:text-xs uppercase tracking-wider mb-2">
              More Than an Event
            </p>
            
            {/* Main Tagline */}
            <h2 className="text-black font-extrabold text-lg md:text-xl lg:text-2xl leading-snug mb-3">
              A community of builders and enthusiasts from all fields, driven by technology.
            </h2>
            
            {/* Supporting Description */}
            <p className="text-black/75 text-xs md:text-sm font-medium leading-relaxed">
              Meet, connect and get inspired at Nigeria's premier student tech event—equipping 40,000+ students for the global tech ecosystem.
            </p>
          </div>

        </div>

      </div>

      {/* Toast Notification */}
      {showToast && (
        <Toast 
          message="🎟️ Tickets coming soon! Stay tuned for updates." 
          onClose={() => setShowToast(false)}
        />
      )}
    </section>
  );
};

export default Hero;