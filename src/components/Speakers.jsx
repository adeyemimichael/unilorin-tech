import { useState, useEffect } from "react";
import { FaLinkedinIn, FaTwitter, FaTimes } from "react-icons/fa";
import { supabase } from "../lib/supabaseClient";

const categories = ["All", "Keynotes", "Panelists", "Workshop Leads"];

const Speakers = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [speakers, setSpeakers] = useState([]);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSpeakersFromSupabase();
  }, []);

  const fetchSpeakersFromSupabase = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("speakers")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) throw error;
      setSpeakers(data || []);
    } catch (err) {
      console.error("Error fetching speakers from Supabase:", err.message);
      setSpeakers([]);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryBadge = (cat) => {
    switch (cat) {
      case "Keynotes":
        return "bg-[#FF0056] text-white";
      case "Panelists":
        return "bg-[#00ADFF] text-black";
      default:
        return "bg-[#973AE0] text-white";
    }
  };

  const filteredSpeakers =
    activeCategory === "All"
      ? speakers
      : speakers.filter((s) => s.category === activeCategory);

  return (
    <section
      id="speakers"
      className="w-full bg-[#FAF6EE] py-16 px-4 sm:px-6 lg:px-12 font-brico border-b-2 border-black"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-block bg-[#FFD100] text-black border-2 border-black px-4 py-1 text-xs font-extrabold uppercase tracking-widest mb-3">
          UTS 5.0 Speaker Lineup
        </div>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black uppercase tracking-tight"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Featured Speakers &amp; Panelists
        </h2>
        <p className="text-black/80 font-medium text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Learn directly from industry leaders, visionary founders, and top engineering talent at UTS 5.0.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-black text-white shadow-[3px_3px_0px_#000]"
                  : "bg-white text-black hover:bg-[#FFD100] shadow-[2px_2px_0px_#000]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center py-16">
          <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm font-extrabold uppercase text-black">Loading speakers...</p>
        </div>
      ) : filteredSpeakers.length === 0 ? (
        <div className="text-center py-12 bg-white border-2 border-black max-w-md mx-auto p-8 shadow-[4px_4px_0px_#000]">
          <p className="text-base font-extrabold text-black uppercase">No speakers listed for this category yet.</p>
          <p className="text-xs font-bold text-black/70 mt-1">Check back soon for speaker lineup updates!</p>
        </div>
      ) : (
        /* Speaker Cards Grid */
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              onClick={() => setSelectedSpeaker(speaker)}
              className="bg-white border-2 border-black p-5 flex flex-col justify-between cursor-pointer hover:-translate-y-1 transition-transform duration-200 shadow-[4px_4px_0px_#000]"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 border border-black ${getCategoryBadge(
                      speaker.category
                    )}`}
                  >
                    {speaker.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {speaker.twitter_url && (
                      <a
                        href={speaker.twitter_url}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 bg-white border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                        aria-label="Twitter"
                      >
                        <FaTwitter className="text-xs" />
                      </a>
                    )}
                    {speaker.linkedin_url && (
                      <a
                        href={speaker.linkedin_url}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 bg-white border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="w-full h-64 border-2 border-black overflow-hidden mb-4 bg-gray-100 relative">
                  <img
                    src={speaker.photo_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <h3
                  className="text-2xl font-extrabold text-black leading-tight"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {speaker.name}
                </h3>
                <p className="text-xs font-bold text-black/70 mt-1 uppercase tracking-wide">
                  {speaker.speaker_role || speaker.role} •{" "}
                  <span className="text-black">{speaker.company}</span>
                </p>

                <div className="mt-4 p-3 bg-[#FAF6EE] border border-black">
                  <span className="text-[10px] font-bold text-black/60 uppercase tracking-widest block mb-1">
                    Session Topic
                  </span>
                  <p className="text-xs font-bold text-black leading-snug">
                    "{speaker.topic || "Building High Impact Tech Systems"}"
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-black/20 flex justify-between items-center text-xs font-extrabold uppercase tracking-wider text-black">
                <span>Click for full bio</span>
                <span>➔</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for Speaker Bio */}
      {selectedSpeaker && (
        <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white border-4 border-black p-6 sm:p-8 max-w-xl w-full relative shadow-[8px_8px_0px_#000]">
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-4 right-4 w-9 h-9 bg-black text-white border-2 border-black flex items-center justify-center hover:bg-[#FF0056] transition-colors"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
              <div className="w-28 h-28 border-2 border-black overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  src={selectedSpeaker.photo_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"}
                  alt={selectedSpeaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 border border-black inline-block mb-2 ${getCategoryBadge(
                    selectedSpeaker.category
                  )}`}
                >
                  {selectedSpeaker.category}
                </span>
                <h3
                  className="text-3xl font-extrabold text-black leading-tight"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {selectedSpeaker.name}
                </h3>
                <p className="text-sm font-bold text-black/70">
                  {selectedSpeaker.speaker_role || selectedSpeaker.role} @ {selectedSpeaker.company}
                </p>
              </div>
            </div>

            <div className="border-t-2 border-black pt-4 mb-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-black/60 block mb-1">
                Presentation Topic
              </span>
              <p className="text-base font-extrabold text-black">
                "{selectedSpeaker.topic || "Building High Impact Tech Systems"}"
              </p>
            </div>

            <div className="mb-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-black/60 block mb-1">
                Biography
              </span>
              <p className="text-sm font-medium text-black/85 leading-relaxed">
                {selectedSpeaker.bio}
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-black/20">
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="px-6 py-2 bg-black text-white font-bold text-xs uppercase border-2 border-black hover:bg-[#FFD100] hover:text-black transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Speakers;
