import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="w-full bg-white px-3 md:px-6 lg:px-8 py-4 font-brico">
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
              <div className="flex flex-col leading-[0.82] font-extrabold text-black text-6xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[112px] tracking-tight pr-20 sm:pr-24 md:pr-28">
                <span>THE HALF</span>
                <span>DECADE</span>
                <span className="text-black">SUMMIT.</span>
              </div>

              {/* Pink Starburst Badge Overlay ("5.0 / 5TH") - Better responsive positioning */}
              <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0 md:top-4 md:right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#FF0056] text-white flex items-center justify-center font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl rounded-full border-4 border-white shadow-2xl animate-pop-bounce cursor-pointer">
                <div className="relative z-10 flex flex-col items-center leading-none">
                  <span>5.0</span>
                  <span className="text-[8px] sm:text-[10px] md:text-xs font-bold tracking-widest uppercase mt-0.5 opacity-90">YEARS</span>
                </div>
                {/* Decorative Starburst Rings */}
                <div className="absolute inset-0 bg-[#00ADFF] rounded-full transform rotate-45 -z-0"></div>
                <div className="absolute inset-0 bg-[#00ADFF] rounded-full transform rotate-12 -z-0"></div>
              </div>

            </div>
          </div>

          {/* Right Column: UTS 2027 Half-Decade Story */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-[#14382C] text-base md:text-lg leading-relaxed font-normal" data-aos="fade-left" data-aos-delay="250">
            
            <p className="text-xl md:text-2xl font-bold text-[#14382C] leading-snug">
              Five years of building. One community. A new chapter.
            </p>

            <p>
              For five years, Unilorin Tech Summit has brought <strong className="font-bold text-[#14382C]">students, builders, creators, founders, innovators and technology enthusiasts</strong> together to learn, connect and explore what is possible.
            </p>

            <p>
              <strong className="font-bold text-[#14382C]">Now, we are marking five years.</strong>
            </p>

            <p>
              Not just with another summit, but with a <strong className="font-bold text-[#14382C]">celebration of the people, ideas and community</strong> that have shaped UTS and the future we are building together.
            </p>

            {/* Read More Collapsible Section */}
            {isExpanded && (
              <div className="pt-2 flex flex-col gap-4 text-[#14382C]/90 text-base border-t border-black/10 mt-2 animate-in fade-in duration-300">
                <p>
                  What started as a student-driven initiative has grown into a community that continues to bring technology closer to students across the University of Ilorin — home to over 40,000+ students.
                </p>
                <p>
                  <strong className="font-bold text-[#14382C]">The Half-Decade Summit</strong> is a moment to look back at what we have built, celebrate the people who have been part of the journey, and look forward to what comes next.
                </p>
                <p className="text-sm italic">
                  2023 → 2024 → 2025 → 2026 → 2027
                </p>
                <p className="font-medium">
                  Five years of ideas. Five years of people. Five years of building.
                  <br />
                  <strong className="text-[#FF0056]">And this is only the beginning.</strong>
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
                <span>{isExpanded ? 'Read Less' : 'Read More About The Half-Decade Summit'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;