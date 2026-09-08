import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { HiArrowRight } from "react-icons/hi";

// FALLBACK DATA COMMENTED OUT - Fetching from database only
// const fallbackSpeakers = [
//   {
//     id: 1,
//     name: "Olumide Soyombo",
//     title: "Co-Founder & Partner",
//     company: "Voltron Capital",
//     photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
//     profile_url: "https://linkedin.com",
//     year: 2024
//   },
//   {
//     id: 2,
//     name: "Iyinoluwa Aboyeji",
//     title: "Co-Founder",
//     company: "Flutterwave & Andela",
//     photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
//     profile_url: "https://linkedin.com",
//     year: 2024
//   },
//   {
//     id: 3,
//     name: "Shola Akinlade",
//     title: "CEO & Co-Founder",
//     company: "Paystack",
//     photo_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
//     profile_url: "https://linkedin.com",
//     year: 2024
//   },
//   {
//     id: 4,
//     name: "Kola Aina",
//     title: "Founder & CEO",
//     company: "Ventures Platform",
//     photo_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
//     profile_url: "https://linkedin.com",
//     year: 2023
//   },
//   {
//     id: 5,
//     name: "Odunayo Eweniyi",
//     title: "Co-Founder & COO",
//     company: "PiggyVest",
//     photo_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
//     profile_url: "https://linkedin.com",
//     year: 2023
//   },
//   {
//     id: 6,
//     name: "Prosper Otemuyiwa",
//     title: "Co-Founder & CTO",
//     company: "Eden Life",
//     photo_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
//     profile_url: "https://linkedin.com",
//     year: 2023
//   },
//   {
//     id: 7,
//     name: "Oyin Solebo",
//     title: "Managing Director",
//     company: "Google West Africa",
//     photo_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
//     profile_url: "https://linkedin.com",
//     year: 2024
//   },
//   {
//     id: 8,
//     name: "Adia Sowho",
//     title: "Chief Marketing Officer",
//     company: "MTN Nigeria",
//     photo_url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
//     profile_url: "https://linkedin.com",
//     year: 2024
//   }
// ];

const PreviousSpeakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPreviousSpeakers();
  }, []);

  const fetchPreviousSpeakers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("previous_speakers")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) {
        console.error("Error fetching previous speakers:", error.message);
        setSpeakers([]);
      } else {
        setSpeakers(data || []);
      }
    } catch (err) {
      console.error("Error fetching previous speakers:", err.message);
      setSpeakers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="previous-speakers"
      className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20 font-brico"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4">
            Previous Speakers
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto">
            A selection of speakers from our cohorts
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-16">
            <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm font-bold text-black">Loading speakers...</p>
          </div>
        ) : (
          /* Speakers Grid - Clean, No Borders, No Radius */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.id}
                className="flex flex-col items-center text-center group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Speaker Photo - No border, no radius, clean */}
                <div className="w-full aspect-square overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={speaker.photo_url}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Speaker Name */}
                <h3 className="text-lg md:text-xl font-bold text-black mb-1 leading-tight">
                  {speaker.name}
                </h3>

                {/* Speaker Title/Company */}
                <p className="text-sm md:text-base text-black/70 font-medium mb-3">
                  {speaker.title}
                  {speaker.company && (
                    <>
                      , <span className="font-semibold">{speaker.company}</span>
                    </>
                  )}
                </p>

                {/* View Profile Link */}
                {speaker.profile_url && (
                  <a
                    href={speaker.profile_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00ADFF] hover:text-[#0090D6] transition-colors group/link"
                  >
                    <span>view profile</span>
                    <HiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PreviousSpeakers;
