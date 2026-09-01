import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaExpand, FaArrowLeft } from "react-icons/fa";
import { supabase } from "../lib/supabaseClient";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    fetchAllHighlights();
  }, []);

  const fetchAllHighlights = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("highlights_gallery")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPhotos(data || []);
    } catch (err) {
      console.error("Error fetching all highlights:", err.message);
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  };

  // Unique years & categories for filters
  const years = ["All", ...new Set(photos.map((p) => p.edition_year || "2024").filter(Boolean))];
  const categories = ["All", "Keynote", "Audience", "Workshop", "Hackathon"];

  const filteredPhotos = photos.filter((photo) => {
    const matchesCategory = selectedCategory === "All" || photo.category === selectedCategory;
    const matchesYear = selectedYear === "All" || (photo.edition_year || "2024") === selectedYear;
    return matchesCategory && matchesYear;
  });

  return (
    <div className="min-h-screen bg-[#FAF6EE] font-brico flex flex-col justify-between">
      <div>
        {/* Top Header Wrapper */}
        <div className="p-3 md:p-6 lg:p-8 bg-[#14382C]">
          <div className="bg-[#FAF6EE] rounded-[28px] sm:rounded-[36px] p-4 sm:p-6 border border-black/5 shadow-xl">
            <Navbar />
          </div>
        </div>

        {/* Page Hero */}
        <div className="max-w-7xl mx-auto pt-10 pb-8 px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 text-xs font-extrabold uppercase tracking-widest border-2 border-black hover:bg-[#FF0056] transition-colors shadow-[3px_3px_0px_#000] mb-6"
          >
            <FaArrowLeft /> Back to Home
          </Link>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-black uppercase tracking-tight leading-none mb-4">
            UTS Highlights Gallery
          </h1>
          <p className="text-black/75 text-sm md:text-base max-w-2xl mx-auto font-medium">
            Relive the memorable moments, keynotes, hackathons, and vibrant tech community atmosphere across all editions of Unilorin Tech Summit.
          </p>

          {/* Category & Year Filter Tabs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            {/* Category Filter */}
            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              <span className="text-xs font-extrabold uppercase tracking-wider text-black mr-1">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-extrabold uppercase border-2 border-black transition-all ${
                    selectedCategory === cat
                      ? "bg-[#FF0056] text-white shadow-[3px_3px_0px_#000]"
                      : "bg-white text-black hover:bg-[#FFD100] shadow-[2px_2px_0px_#000]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Year Filter */}
            {years.length > 1 && (
              <div className="flex items-center gap-1.5 flex-wrap justify-center border-t sm:border-t-0 sm:border-l-2 border-black pt-3 sm:pt-0 sm:pl-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-black mr-1">Edition:</span>
                {years.map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3 py-1.5 text-xs font-extrabold uppercase border-2 border-black transition-all ${
                      selectedYear === yr
                        ? "bg-[#00ADFF] text-white shadow-[3px_3px_0px_#000]"
                        : "bg-white text-black hover:bg-[#00B66C] hover:text-white shadow-[2px_2px_0px_#000]"
                    }`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Gallery Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {loading ? (
            <div className="text-center py-20">
              <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-sm font-extrabold uppercase text-black">Fetching gallery photos...</p>
            </div>
          ) : filteredPhotos.length === 0 ? (
            <div className="text-center py-16 bg-white border-4 border-black max-w-lg mx-auto p-8 shadow-[8px_8px_0px_#000]">
              <p className="text-lg font-extrabold text-black uppercase">No photos match your filter.</p>
              <p className="text-xs font-bold text-black/70 mt-2">Try selecting another category or edition year!</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedYear("All");
                }}
                className="mt-4 px-4 py-2 bg-black text-white text-xs font-extrabold uppercase border-2 border-black shadow-[3px_3px_0px_#000]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id || index}
                  onClick={() => setActivePhoto(photo)}
                  className="group bg-white border-4 border-black shadow-[6px_6px_0px_#000] hover:shadow-[10px_10px_0px_#FF0056] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden border-b-4 border-black">
                    <img
                      src={photo.image_url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-black p-3 rounded-full border-2 border-black shadow-[2px_2px_0px_#000]">
                        <FaExpand className="text-sm" />
                      </span>
                    </div>
                    {photo.category && (
                      <span className="absolute top-3 left-3 bg-[#FFD100] text-black border-2 border-black text-[10px] font-extrabold uppercase px-2.5 py-0.5 shadow-[2px_2px_0px_#000]">
                        {photo.category}
                      </span>
                    )}
                  </div>

                  {/* Details Card Footer */}
                  <div className="p-4 bg-white flex flex-col justify-between flex-grow">
                    <h3 className="font-extrabold text-sm text-black uppercase leading-tight line-clamp-2">
                      {photo.caption}
                    </h3>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t-2 border-black/10">
                      <span className="text-xs font-extrabold text-black/60 uppercase">
                        UTS {photo.edition_year || "2024"}
                      </span>
                      <span className="text-[10px] font-mono font-bold bg-black text-white px-2 py-0.5 border border-black">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Photo Preview Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="bg-white border-4 border-black p-4 sm:p-6 max-w-3xl w-full shadow-[12px_12px_0px_#000] relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-[#FF0056] text-white border-2 border-black flex items-center justify-center text-lg font-bold shadow-[3px_3px_0px_#000] hover:scale-110 transition-transform"
            >
              <FaTimes />
            </button>

            <div className="max-h-[70vh] bg-black overflow-hidden border-2 border-black mb-4 flex items-center justify-center">
              <img
                src={activePhoto.image_url}
                alt={activePhoto.caption}
                className="max-h-[70vh] max-w-full object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t-2 border-black pt-4">
              <div>
                <h3 className="text-lg font-extrabold text-black uppercase leading-snug">
                  {activePhoto.caption}
                </h3>
                <p className="text-xs font-bold text-black/60 uppercase mt-0.5">
                  Edition: UTS {activePhoto.edition_year || "2024"} • Category: {activePhoto.category || "General"}
                </p>
              </div>
              <a
                href={activePhoto.image_url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#00ADFF] text-white text-xs font-extrabold uppercase border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-[#00B66C] transition-colors"
              >
                Open Original File ↗
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
