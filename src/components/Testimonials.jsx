import { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { supabase } from "../lib/supabaseClient";

const editions = ["All Editions", "UTS 2021", "UTS 2022", "UTS 2023", "UTS 2024"];

const Testimonials = () => {
  const [selectedEdition, setSelectedEdition] = useState("All Editions");
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonialsFromSupabase();
  }, []);

  const fetchTestimonialsFromSupabase = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_approved", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (err) {
      console.error("Error fetching testimonials from Supabase:", err.message);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredTestimonials =
    selectedEdition === "All Editions"
      ? testimonials
      : testimonials.filter((t) => t.edition_attended === selectedEdition);

  return (
    <section
      id="testimonials"
      className="w-full bg-[#FAF6EE] py-16 px-4 sm:px-6 lg:px-12 font-brico border-b-2 border-black"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-block bg-[#FF0056] text-white border-2 border-black px-4 py-1 text-xs font-extrabold uppercase tracking-widest mb-3">
          5 Years of Impact
        </div>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black uppercase tracking-tight"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Stories from Past Attendees
        </h2>
        <p className="text-black/80 font-medium text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Discover how Unilorin Tech Summit has launched careers, awarded grants, and inspired thousands of student developers.
        </p>

        {/* Edition Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
          {editions.map((ed) => (
            <button
              key={ed}
              onClick={() => setSelectedEdition(ed)}
              className={`px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black transition-all duration-200 ${
                selectedEdition === ed
                  ? "bg-black text-white shadow-[3px_3px_0px_#000]"
                  : "bg-white text-black hover:bg-[#FF0056] hover:text-white shadow-[2px_2px_0px_#000]"
              }`}
            >
              {ed}
            </button>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center py-16">
          <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm font-extrabold uppercase text-black">Loading stories from Supabase...</p>
        </div>
      ) : filteredTestimonials.length === 0 ? (
        <div className="text-center py-12 bg-white border-2 border-black max-w-md mx-auto p-8 shadow-[4px_4px_0px_#000]">
          <p className="text-base font-extrabold text-black uppercase">No testimonial stories listed for this edition yet.</p>
          <p className="text-xs font-bold text-black/70 mt-1">Check back soon for community updates!</p>
        </div>
      ) : (
        /* Testimonials Cards Grid */
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-black p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200 shadow-[4px_4px_0px_#000]"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 border border-black bg-[#FF0056] text-white">
                    {item.edition_attended}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-black text-white px-2.5 py-1 border border-black">
                    {item.outcome_badge}
                  </span>
                </div>

                <div className="flex gap-1 text-[#FFD100] mb-3">
                  {[...Array(item.star_rating || 5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <FaQuoteLeft className="text-black/15 text-3xl absolute -top-2 -left-1 pointer-events-none" />
                  <p className="text-sm font-medium text-black leading-relaxed relative z-10 pl-2">
                    "{item.quote_text}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-black flex items-center gap-3">
                <div className="w-12 h-12 border-2 border-black overflow-hidden flex-shrink-0 bg-gray-100">
                  <img
                    src={item.avatar_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                    alt={item.attendee_name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4
                    className="text-base font-extrabold text-black leading-snug"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {item.attendee_name}
                  </h4>
                  <p className="text-xs font-bold text-black/70">
                    {item.job_role} @ <span className="text-black">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;
