import image0 from "../assets/images/anu.webp";
import image1 from "../assets/images/att1.webp";
import image2 from "../assets/images/iss.webp";
import image3 from "../assets/images/att4.webp";
import image4 from "../assets/images/leye.jpg";
import image5 from "../assets/images/coop.jpg";
import image6 from "../assets/images/atted.jpg";
import { useRef } from "react";

const photos = [
  { src: image0, caption: "UTS 2023" },
  { src: image6, caption: "Attendance" },
  { src: image1, caption: "Highlights" },
  { src: image2, caption: "Sessions" },
  { src: image4, caption: "Keynote" },
  { src: image5, caption: "Workshop" },
  { src: image3, caption: "Community" },
];

/* slight random tilts for a natural hanging look */
const tilts = [-2.5, 1.8, -1.2, 2.8, -2, 1.4, -3];

/* accent colours cycling for the pin squares */
const accentColors = [
  "#C850FF",
  "#FFD600",
  "#FF6B00",
  "#FF3366",
  "#00C6FF",
  "#14D990",
  "#FF9500",
];

const PhotoCard = ({ photo, index }) => {
  const tilt = tilts[index % tilts.length];
  const accent = accentColors[index % accentColors.length];

  return (
    <div
      className="relative flex-shrink-0 flex flex-col items-center"
      style={{ width: "clamp(200px, 22vw, 280px)" }}
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      {/* String from rod to card */}
      <div
        className="w-[2px] bg-gray-700"
        style={{ height: "32px", flexShrink: 0 }}
      />

      {/* Rivet / pin */}
      <div
        className="w-7 h-7 rounded-full border-[3px] border-gray-800 flex items-center justify-center shadow-md z-10"
        style={{ backgroundColor: "#d0cfc8", marginBottom: "-4px" }}
      >
        <div className="w-2 h-2 rounded-full bg-gray-500" />
      </div>

      {/* Card — tilted naturally */}
      <div
        className="overflow-hidden shadow-2xl"
        style={{
          transform: `rotate(${tilt}deg)`,
          transformOrigin: "top center",
          borderRadius: "16px",
          border: "4px solid #1a1a1a",
          transition: "transform 0.35s ease, box-shadow 0.35s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "rotate(0deg) scale(1.04)";
          e.currentTarget.style.boxShadow = `0 24px 60px ${accent}55`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = `rotate(${tilt}deg)`;
          e.currentTarget.style.boxShadow = "";
        }}
      >
        {/* Dark header strip */}
        <div
          className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between"
        >
          {/* Coloured accent square */}
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: accent }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="12" height="12" rx="3" fill="white" fillOpacity="0.85" />
            </svg>
          </div>
          {/* Caption label */}
          <span
            className="text-white font-extrabold text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Bricolage Grotesque', 'Plus Jakarta Sans', sans-serif" }}
          >
            {photo.caption}
          </span>
          {/* Three dots */}
          <div className="flex gap-[4px]">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-[5px] h-[5px] rounded-full bg-gray-500" />
            ))}
          </div>
        </div>

        {/* Photo */}
        <div
          className="overflow-hidden"
          style={{ height: "clamp(220px, 30vw, 340px)" }}
        >
          <img
            src={photo.src}
            alt={photo.caption}
            className="w-full h-full object-cover"
            style={{ display: "block" }}
          />
        </div>

        {/* Bottom strip */}
        <div className="bg-white px-4 py-2 flex items-center justify-between border-t border-gray-200">
          <span
            className="font-extrabold text-xs uppercase tracking-wider"
            style={{ color: "#1a1a1a", fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            UTS 5.0
          </span>
          <span className="text-black text-[10px] font-mono font-bold">#{String(index + 1).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
};

const Highlight = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  return (
    <section
      id="highlight"
      className="w-full py-0 overflow-hidden"
      style={{ backgroundColor: "#FAF4EC", paddingBottom: "60px" }}
    >
      {/* Section header */}
      <div className="text-center pt-14 pb-4 px-6">
        <p
          className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
          style={{ color: "#888" }}
        >
          Captured Moments
        </p>
        <h2
          className="font-extrabold uppercase leading-none"
          style={{
            fontFamily: "'Bricolage Grotesque', 'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(30px, 6vw, 64px)",
            color: "#1a1a1a",
            letterSpacing: "-1px",
          }}
        >
          Highlights for
          <span style={{ color: "#1a1a1a" }}> UTS 2023</span>
        </h2>
        <p className="text-gray-500 mt-3 text-sm md:text-base max-w-lg mx-auto">
          A look back at the energy, learning, and community that made it unforgettable.
        </p>
      </div>

      {/* Gallery wrapper */}
      <div className="relative mt-4">
        {/* Horizontal rail / rod */}
        <div
          className="absolute left-0 right-0 z-10"
          style={{ top: "32px", height: "7px", backgroundColor: "#1a1a1a", borderRadius: "4px" }}
        />

        {/* Nav buttons */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-3 z-20 w-10 h-10 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-gray-700 transition-colors"
          style={{ top: "26px" }}
          aria-label="Scroll left"
        >
          ‹
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute right-3 z-20 w-10 h-10 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-gray-700 transition-colors"
          style={{ top: "26px" }}
          aria-label="Scroll right"
        >
          ›
        </button>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth pb-10"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingTop: "0px",
            alignItems: "flex-start",
            paddingLeft: "48px",
            paddingRight: "48px",
          }}
        >
          {photos.map((photo, index) => (
            <PhotoCard key={index} photo={photo} index={index} />
          ))}
        </div>

        {/* Fade edges */}
        <div
          className="absolute top-0 left-0 bottom-0 w-16 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #FAF4EC, transparent)",
            zIndex: 5,
          }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-16 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #FAF4EC, transparent)",
            zIndex: 5,
          }}
        />
      </div>

      {/* Hide scrollbar webkit */}
      <style>{`
        #highlight div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default Highlight;