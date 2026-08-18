import { useRef } from "react";

const tracks = [
  {
    id: 1,
    title: "CONTENT\nCREATION",
    color: "#C850FF",       // purple
    iconBg: "#A020F0",
  
    details: "Written, visual, or video content. If you know how to create content that informs, entertains, or builds community, this is your track.",
    tools: ["Content creation", "Adobe Premiere", "Medium", "Canva", "CapCut", "YouTube Studio", "Grammarly"],
  },
  {
    id: 2,
    title: "PRODUCT\nDESIGN",
    color: "#C850FF",       // yellow
    iconBg: "#E6C000",
   
    details: "Graphics, motion, or UI/UX. If you turn ideas into visuals and experiences people can use, this track is for you.",
    tools: ["Figma", "Adobe Illustrator", "Figam", "Canva", "Adobe Photoshop", "Agentic"],
  },
  {
    id: 3,
    title: "SOFTWARE\nENGINEERING",
    color: "#C850FF",      // orange
    iconBg: "#E55A00",
   
    details: "Frontend, backend, or mobile development. If you build with code, this is your lane.",
    tools: ["Visual Studio Code", "Replit", "Postman", "GitHub", "GIT"],
  },
  {
    id: 4,
    title: "DATA &\nAI",
    color: "#C850FF",       // pink-red
    iconBg: "#CC0040",

    details: "You work with numbers to find patterns, build models, and drive decisions using data and AI.",
    tools: ["Python", "Jupyter", "TensorFlow", "Pandas", "NumPy", "Kaggle"],
  },
  {
    id: 5,
    title: "CYBER\nSECURITY",
    color: "#C850FF",      // sky blue
    iconBg: "#0099CC",
    
    details: "Protect systems, networks, and data. If you love finding vulnerabilities before bad actors do, this track is yours.",
    tools: ["Kali Linux", "Wireshark", "Burp Suite", "Metasploit", "Nmap"],
  },
];

// Wavy SVG bottom shape
const WaveBottom = ({ color }) => (
  <svg viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ display: "block" }}>
    <path
      d="M0,20 C60,50 120,0 180,25 C240,50 300,10 360,30 C380,38 390,45 400,40 L400,60 L0,60 Z"
      fill={color}
    />
  </svg>
);

// Tool timeline row
const ToolTimeline = ({ tools }) => (
  <div className="relative mt-4 mb-2 px-2">
    {/* Horizontal line */}
    <div className="absolute top-[10px] left-4 right-4 h-[1.5px] bg-gray-800/40" />
    {/* Two rows of tools */}
    <div className="flex justify-between relative z-10">
      {tools.slice(0, Math.ceil(tools.length / 2)).map((tool, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <span className="text-[8px] font-semibold text-gray-800 whitespace-nowrap font-jakarta">{tool}</span>
          {/* Triangle marker */}
          <svg width="10" height="8" viewBox="0 0 10 8">
            <polygon points="5,8 0,0 10,0" fill="#1a1a1a" />
          </svg>
        </div>
      ))}
    </div>
    <div className="flex justify-around relative z-10 mt-3">
      {tools.slice(Math.ceil(tools.length / 2)).map((tool, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <svg width="10" height="8" viewBox="0 0 10 8" className="rotate-180">
            <polygon points="5,8 0,0 10,0" fill="#1a1a1a" />
          </svg>
          <span className="text-[8px] font-semibold text-gray-800 whitespace-nowrap font-jakarta">{tool}</span>
        </div>
      ))}
    </div>
  </div>
);

const TrackCard = ({ track, index }) => {
  return (
    <div
      className="relative flex-shrink-0 flex flex-col"
      style={{ width: "clamp(220px, 28vw, 320px)" }}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Pin / rivet circle */}
      <div className="flex justify-center" style={{ marginBottom: "-1px", zIndex: 10, position: "relative" }}>
        <div
          className="w-8 h-8 rounded-full border-4 border-gray-900 bg-gray-300 flex items-center justify-center shadow-md"
          style={{ marginTop: "0px" }}
        >
          <div className="w-2 h-2 rounded-full bg-gray-600" />
        </div>
      </div>

      {/* Card body */}
      <div className="rounded-[28px] overflow-hidden shadow-2xl flex flex-col" style={{ borderRadius: "28px" }}>
        {/* Dark upper section */}
        <div className="px-6 pt-6 pb-8 flex flex-col items-center gap-4" style={{ backgroundColor: track.cardBg }}>
          {/* Colored icon square */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: track.iconBg }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="4" y="4" width="20" height="20" rx="4" fill="white" fillOpacity="0.85" />
            </svg>
          </div>
          {/* Title */}
          <h2
            className="text-center font-extrabold leading-tight uppercase"
            style={{
              color: "#1a1a1a",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontFamily: "'Bricolage Grotesque', 'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.5px",
              whiteSpace: "pre-line",
            }}
          >
            {track.title}
          </h2>
        </div>

        {/* Light lower section */}
        <div
          className="flex flex-col px-5 pt-5 pb-0"
          style={{ backgroundColor: track.cardBg }}
        >
          <p className="text-[10px] font-bold tracking-widest text-gray-800 mb-1 font-jakarta uppercase">Details</p>
          <p className="text-[12px] text-gray-900 leading-[1.5] font-jakarta mb-2">{track.details}</p>

          {/* Tool timeline */}
          <ToolTimeline tools={track.tools} />

          {/* ZERO → PRO */}
          <div
            className="mt-4 text-center font-extrabold leading-none"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "#1a1a1a",
              fontFamily: "'Bricolage Grotesque', 'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-1px",
              opacity: 0.85,
            }}
          >
            ZERO→PRO
          </div>

          {/* Wave bottom */}
          <div className="mt-2 -mx-5">
            <WaveBottom color={track.cardBg} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Tracks = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  };

  return (
    <section
      id="tracks"
      className="w-full bg-[#FAF4EC] py-12 font-jakarta overflow-hidden"
      style={{ backgroundColor: "#FAF4EC" }}
    >
      {/* Section header */}
      <div className="text-center mb-8 px-6">
        <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">UTS 5.0 — The Half Decade Event</p>
        <h2
          className="font-extrabold uppercase"
          style={{
            fontFamily: "'Bricolage Grotesque', 'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(28px, 5vw, 56px)",
            color: "#1a1a1a",
            letterSpacing: "-1px",
          }}
        >
          Choose Your Track
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base max-w-xl mx-auto">
          Every track takes you from Zero to Pro. Pick your lane and start your journey.
        </p>
      </div>

      {/* Rail / rod */}
      <div className="relative px-6 md:px-12">
        <div
          className="absolute left-0 right-0 top-[28px] h-[6px] bg-gray-900 shadow-md z-10"
          style={{ borderRadius: "3px" }}
        />

        {/* Scroll nav buttons */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-2 top-[18px] z-20 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors"
          aria-label="Scroll left"
        >
          ‹
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute right-2 top-[18px] z-20 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors"
          aria-label="Scroll right"
        >
          ›
        </button>

        {/* Cards row — scrollable */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-0 scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingTop: "0px",
            alignItems: "flex-start",
          }}
        >
          {/* Left spacer so first pin aligns to rod */}
          <div className="flex-shrink-0 w-8" />
          {tracks.map((track, index) => (
            <TrackCard key={track.id} track={track} index={index} />
          ))}
          <div className="flex-shrink-0 w-8" />
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        #tracks div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default Tracks;
