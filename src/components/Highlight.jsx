import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

const tilts = [-2.5, 1.8, -1.2, 2.8, -2, 1.4, -3];
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
      className="relative flex-shrink-0 flex flex-col items-center w-[250px] sm:w-[270px] md:w-[290px] snap-center"
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      {/* String from rod to card */}
      <div
        className="w-[2px] bg-gray-700"
        style={{ height: "28px", flexShrink: 0 }}
      />

      {/* Rivet / pin */}
      <div
        className="w-7 h-7 rounded-full border-[3px] border-gray-800 flex items-center justify-center shadow-md z-10"
        style={{ backgroundColor: "#d0cfc8", marginBottom: "-4px" }}
      >
        <div className="w-2 h-2 rounded-full bg-gray-500" />
      </div>

      {/* Card */}
      <div
        className="overflow-hidden shadow-2xl w-full"
        style={{
          transform: `rotate(${tilt}deg)`,
          transformOrigin: "top center",
          borderRadius: "16px",
          border: "4px solid #1a1a1a",
          transition: "transform 0.35s ease, box-shadow 0.35s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "rotate(0deg) scale(1.03)";
          e.currentTarget.style.boxShadow = `0 24px 60px ${accent}55`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = `rotate(${tilt}deg)`;
          e.currentTarget.style.boxShadow = "";
        }}
      >
        {/* Header strip */}
        <div className="bg-[#1a1a1a] px-3 sm:px-4 py-2.5 flex items-center justify-between gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: accent }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="12" height="12" rx="3" fill="white" fillOpacity="0.85" />
            </svg>
          </div>
          <span
            className="text-white font-extrabold text-[11px] sm:text-xs tracking-wider uppercase truncate"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {photo.caption}
          </span>
          <div className="flex gap-[3px] flex-shrink-0">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-[4px] h-[4px] rounded-full bg-gray-500" />
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="overflow-hidden bg-gray-100 h-[220px] sm:h-[260px] md:h-[290px]">
          <img
            src={photo.image_url}
            alt={photo.caption}
            className="w-full h-full object-cover"
            style={{ display: "block" }}
          />
        </div>

        {/* Bottom strip */}
        <div className="bg-white px-3 sm:px-4 py-2 flex items-center justify-between border-t border-gray-200">
          <span
            className="font-extrabold text-[11px] sm:text-xs uppercase tracking-wider text-black"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            UTS {photo.edition_year || "2024"}
          </span>
          <span className="text-black text-[10px] font-mono font-bold bg-gray-100 px-2 py-0.5 border border-gray-300">
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

const Highlight = () => {
  const scrollRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHighlightsFromSupabase();
  }, []);

  const fetchHighlightsFromSupabase = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("highlights_gallery")
        .select("*")
        .eq("is_featured", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPhotos(data || []);
    } catch (err) {
      console.error("Error fetching highlights from Supabase:", err.message);
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  };

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
    }
  };

  return (
    <section
      id="highlight"
      className="w-full py-0 overflow-hidden relative"
      style={{ backgroundColor: "#FAF4EC", paddingBottom: "60px" }}
    >
      {/* Header */}
      <div className="text-center pt-12 sm:pt-16 pb-4 px-4 sm:px-6">
        <p
          className="text-xs font-bold tracking-[0.25em] uppercase mb-2 sm:mb-3"
          style={{ color: "#888" }}
        >
          Captured Moments
        </p>
        <h2
          className="font-extrabold uppercase leading-none"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(28px, 6vw, 64px)",
            color: "#1a1a1a",
            letterSpacing: "-1px",
          }}
        >
          Highlights for
          <span style={{ color: "#1a1a1a" }}> UTS 2024</span>
        </h2>
        <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base max-w-lg mx-auto font-medium">
          A look back at the energy, learning, keynotes, and community that made it unforgettable.
        </p>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center py-16">
          <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm font-extrabold uppercase text-black">Loading gallery photos from Supabase...</p>
        </div>
      ) : photos.length === 0 ? (
        <div className="text-center py-12 bg-white border-2 border-black max-w-md mx-4 sm:mx-auto p-6 sm:p-8 shadow-[4px_4px_0px_#000]">
          <p className="text-base font-extrabold text-black uppercase">No photos found in gallery yet.</p>
          <p className="text-xs font-bold text-black/70 mt-1">Check back soon for post-event photo uploads!</p>
        </div>
      ) : (
        /* Gallery wrapper */
        <div className="relative mt-2 sm:mt-4">
          <div
            className="absolute left-0 right-0 z-10"
            style={{ top: "28px", height: "6px", backgroundColor: "#1a1a1a", borderRadius: "4px" }}
          />

          {/* Nav buttons */}
          <button
            onClick={() => scroll(-1)}
            className="absolute left-1 sm:left-4 z-20 w-9 h-9 sm:w-10 sm:h-10 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-gray-700 transition-colors"
            style={{ top: "22px" }}
            aria-label="Scroll left"
          >
            ‹
          </button>
          <button
            onClick={() => scroll(1)}
            className="absolute right-1 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-gray-700 transition-colors"
            style={{ top: "22px" }}
            aria-label="Scroll right"
          >
            ›
          </button>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-8 overflow-x-auto scroll-smooth pb-8 px-8 sm:px-16 touch-pan-x snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              alignItems: "flex-start",
            }}
          >
            {photos.map((photo, index) => (
              <PhotoCard key={photo.id || index} photo={photo} index={index} />
            ))}
          </div>

          {/* Fade edges on desktop */}
          <div
            className="hidden sm:block absolute top-0 left-0 bottom-0 w-12 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #FAF4EC, transparent)",
              zIndex: 5,
            }}
          />
          <div
            className="hidden sm:block absolute top-0 right-0 bottom-0 w-12 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #FAF4EC, transparent)",
              zIndex: 5,
            }}
          />
        </div>
      )}

      {/* View All / More Gallery Button */}
      <div className="text-center mt-6">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#FF0056] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider border-2 border-black hover:bg-[#FFD100] hover:text-black transition-all shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000]"
        >
          <span>View All Highlight Photos &amp; Editions</span>
          <span className="text-base">➔</span>
        </Link>
      </div>

      <style>{`
        #highlight div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default Highlight;