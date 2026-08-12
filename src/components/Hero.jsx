import { HiArrowDown } from 'react-icons/hi';
import att1 from '../assets/images/att1.webp';
import anu from '../assets/images/anu.webp';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section id="hero" className="w-full bg-white min-h-screen p-3 md:p-6 lg:p-8 font-jakarta">
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
            
            {/* Top Line: "Unilorin" */}
            <div className="flex items-center">
              <h1 className="text-black font-extrabold text-5xl sm:text-7xl md:text-[130px] lg:text-[160px] xl:text-[185px] leading-[0.88] tracking-tight">
                Unilorin
              </h1>
            </div>

            {/* Bottom Line: "Tech Summit" (staggered to the right) */}
            <div className="flex items-center justify-end md:justify-center md:pl-[10%] relative">
              <h1 className="text-black font-extrabold text-5xl sm:text-7xl md:text-[130px] lg:text-[160px] xl:text-[185px] leading-[0.88] tracking-tight">
                Tech Summit
              </h1>

              {/* Floating Top-Right Image Card */}
              <div className="absolute -top-12 sm:-top-20 md:-top-28 right-0 sm:right-6 md:right-12 lg:right-24 w-28 h-36 sm:w-40 sm:h-52 md:w-52 md:h-64 lg:w-60 lg:h-72 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20">
                <img
                  src={att1}
                  alt="Unilorin Tech Summit visual"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Section: Floating Card Left, Spinning Badge Center, Tagline Right */}
        <div className="relative z-10 w-full pt-6 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Bottom Left Floating Image Card */}
          <div className="w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-44 lg:w-72 lg:h-48 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-4 border-white transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 shrink-0">
            <img
              src={anu}
              alt="Community attendee"
              className="w-full h-full object-cover"
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
                <text className="text-[8.5px] font-bold tracking-[1.8px] uppercase fill-[#14382C]">
                  <textPath href="#circlePath">
                    UNILORIN TECH SUMMIT • UNILORIN TECH SUMMIT •
                  </textPath>
                </text>
              </svg>

              {/* Inner Dark Green Circle with Down Arrow */}
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
            <h2 className="text-black font-extrabold text-lg md:text-xl lg:text-2xl leading-snug">
              Meet, connect and get inspired in one location.
            </h2>
            <p className="text-black/75 text-xs md:text-sm mt-2 font-medium leading-relaxed">
              The premier student tech extravaganza at the University of Ilorin equipping 40,000+ students for the global tech ecosystem.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;