import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="w-full bg-white px-3 md:px-6 lg:px-8 py-4 font-jakarta">
      {/* Main Soft Cream Container Card */}
      <div
        className="w-full bg-[#FAF6EE] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] py-16 px-6 sm:px-10 md:px-16 lg:px-20 border border-black/5 shadow-2xl relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        
        {/* Top Centered Header & Vertical Divider */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-12 sm:mb-16" data-aos="fade-up" data-aos-delay="150">
          <p className="text-base md:text-lg text-black/80 font-medium leading-relaxed max-w-2xl">
            Unilorin Tech Summit empowers students and tech talents with opportunities they might not otherwise have. Through UTS, we provide mentorship, resources, and fully funded tech opportunities to help them learn new skills, accelerate their careers, and reach their full potential.
          </p>
          
          {/* Vertical Pink Line Divider */}
          <div className="w-[3px] h-14 bg-[#00ADFF] my-8 rounded-full animate-pulse"></div>
        </div>

        {/* 2-Column Main Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Extra Large Display Graphic & 5.0 Badge */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start" data-aos="fade-right" data-aos-delay="200">
            <div className="relative inline-block select-none py-4">
              
              {/* Massive Oversized Display Heading */}
              <div className="flex flex-col leading-[0.82] font-extrabold text-black text-6xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[112px] tracking-tight">
                <span>THE HALF</span>
                <span>DECADE</span>
                <span className="text-black">EVENT.</span>
              </div>

              {/* Pink Starburst Badge Overlay ("5.0 / 5TH") */}
              <div className="absolute -top-6 right-[-20px] sm:right-[-35px] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#FF0056] text-white flex items-center justify-center font-extrabold text-2xl sm:text-3xl md:text-4xl rounded-full border-4 border-white shadow-2xl animate-pop-bounce cursor-pointer">
                <div className="relative z-10 flex flex-col items-center leading-none">
                  <span>5.0</span>
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-0.5 opacity-90">YEARS</span>
                </div>
                {/* Decorative Starburst Rings */}
                <div className="absolute inset-0 bg-[#00ADFF] rounded-full transform rotate-45 -z-0"></div>
                <div className="absolute inset-0 bg-[#00ADFF] rounded-full transform rotate-12 -z-0"></div>
              </div>

            </div>
          </div>

          {/* Right Column: Articulated Copywriting emphasizing 5-Year Milestone */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-[#14382C] text-base md:text-lg leading-relaxed font-normal" data-aos="fade-left" data-aos-delay="250">
            
            <p>
              <strong className="font-bold text-[#14382C]">Celebrating 5 years of impact: UTS 5.0 (The Half Decade Event).</strong> This landmark edition marks five incredible years of empowering student innovators. This year, <strong className="font-bold text-[#14382C]">laptops and tech grants</strong> will be awarded to selected top-performing tech talents across different categories.
            </p>

            <p>
              We are also introducing the <strong className="font-bold text-[#14382C]">5th Anniversary Mentorship & Skill Cohort</strong>. Through this fund, <strong className="font-bold text-[#14382C]">promising beginners</strong> will receive fully funded tech training, mentorship from industry executives, <strong className="font-bold text-[#14382C]">plus cash support</strong> to launch their tech careers.
            </p>

            <p>
              <strong className="font-bold text-[#14382C]">To mark our half-decade milestone, UTS 5.0 features two structured tracks:</strong> the <strong className="font-bold text-[#14382C]">Student Developer Track</strong> and the <strong className="font-bold text-[#14382C]">Innovation & Business Track</strong>.
            </p>

            {/* Read More Collapsible Section */}
            {isExpanded && (
              <div className="pt-2 flex flex-col gap-4 text-[#14382C]/90 text-base border-t border-black/10 mt-2 animate-in fade-in duration-300">
                <p>
                  Hosted right within the vibrant heart of University of Ilorin — home to over 40,000+ students — Unilorin Tech Summit converges Founders, Business Leaders, Engineers, and Enthusiasts for Nigeria's premier campus tech fiesta.
                </p>
                <p>
                  Our half-decade mission remains steadfast: to equip young talents with the skills, network, and confidence to build solutions that scale globally.
                </p>
              </div>
            )}

            {/* Toggle Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 bg-[#14382C] text-white hover:bg-[#1c4d3d] font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-md"
              >
                <span>{isExpanded ? 'Read Less' : 'Read More About The 5th Edition'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;