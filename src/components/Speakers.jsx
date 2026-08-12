import { useState } from "react";
import { FaLinkedinIn, FaTwitter, FaTimes } from "react-icons/fa";
import att1 from "../assets/images/att1.webp";
import anu from "../assets/images/anu.webp";
import leye from "../assets/images/leye.jpg";
import coop from "../assets/images/coop.jpg";
import atted from "../assets/images/atted.jpg";
import iss from "../assets/images/iss.webp";

const speakerData = [
  {
    id: 1,
    name: "Dr. Leye Ogundele",
    role: "VP of Engineering & AI Lead",
    company: "Tech Global Solutions",
    category: "Keynotes",
    categoryBadge: "bg-[#FF0056] text-white",
    image: leye,
    topic: "Building Resilient AI Systems at Scale",
    bio: "Pioneer in artificial intelligence and distributed systems with over 12 years of experience leading engineering teams across Africa and Europe.",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Anuoluwapo Bakare",
    role: "Head of Product Design",
    company: "Paystack / Stripe",
    category: "Keynotes",
    categoryBadge: "bg-[#FF0056] text-white",
    image: anu,
    topic: "Crafting Interfaces That Scale to Millions",
    bio: "Design lead specializing in design systems, human-computer interaction, and user-centric fintech products.",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Coop Oladele",
    role: "Senior Cloud Architect",
    company: "AWS Community Hero",
    category: "Panelists",
    categoryBadge: "bg-[#00ADFF] text-black",
    image: coop,
    topic: "Serverless & Cloud Native Infrastructure",
    bio: "Cloud infrastructure strategist focused on high-availability web architectures and devops automation.",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Ismail Olatunji",
    role: "Founder & CEO",
    company: "DevCraft Labs",
    category: "Panelists",
    categoryBadge: "bg-[#00ADFF] text-black",
    image: iss,
    topic: "From Student Developer to Tech Founder",
    bio: "Unilorin alumnus who built DevCraft Labs into a leading software agency empowering over 50+ tech startups.",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Attahir Edward",
    role: "Lead Frontend Engineer",
    company: "Vercel Ecosystem",
    category: "Workshop Leads",
    categoryBadge: "bg-[#973AE0] text-white",
    image: atted,
    topic: "Next-Gen Web Performance & React Server Components",
    bio: "Frontend architect passionate about web performance, micro-frontend architecture, and modern JavaScript engines.",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 6,
    name: "Kemi Adeleke",
    role: "Cybersecurity Analyst",
    company: "SecureNet Africa",
    category: "Workshop Leads",
    categoryBadge: "bg-[#973AE0] text-white",
    image: att1,
    topic: "Zero-Trust Security for Modern Web Applications",
    bio: "Ethical hacker and security researcher advocating for secure coding standards and proactive vulnerability auditing.",
    twitter: "#",
    linkedin: "#",
  },
];

const categories = ["All", "Keynotes", "Panelists", "Workshop Leads"];

const Speakers = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const filteredSpeakers =
    activeCategory === "All"
      ? speakerData
      : speakerData.filter((s) => s.category === activeCategory);

  return (
    <section id="speakers" className="w-full bg-[#FAF6EE] py-16 px-4 sm:px-6 lg:px-12 font-jakarta border-b-2 border-black">
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
              className={`px-5 py-2 text.xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black transition-all duration-200 ${
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

      {/* Speaker Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredSpeakers.map((speaker) => (
          <div
            key={speaker.id}
            onClick={() => setSelectedSpeaker(speaker)}
            className="bg-white border-2 border-black p-5 flex flex-col justify-between cursor-pointer hover:-translate-y-1 transition-transform duration-200 shadow-[4px_4px_0px_#000]"
          >
            {/* Top Bar: Badge & Socials */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 border border-black ${speaker.categoryBadge}`}
                >
                  {speaker.category}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={speaker.twitter}
                    onClick={(e) => e.stopPropagation()}
                    className="w-7 h-7 bg-white border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-xs" />
                  </a>
                  <a
                    href={speaker.linkedin}
                    onClick={(e) => e.stopPropagation()}
                    className="w-7 h-7 bg-white border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-xs" />
                  </a>
                </div>
              </div>

              {/* Portrait Image */}
              <div className="w-full h-64 border-2 border-black overflow-hidden mb-4 bg-gray-100 relative">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Info */}
              <h3
                className="text-2xl font-extrabold text-black leading-tight"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {speaker.name}
              </h3>
              <p className="text-xs font-bold text-black/70 mt-1 uppercase tracking-wide">
                {speaker.role} • <span className="text-black">{speaker.company}</span>
              </p>

              {/* Topic Pill */}
              <div className="mt-4 p-3 bg-[#FAF6EE] border border-black">
                <span className="text-[10px] font-bold text-black/60 uppercase tracking-widest block mb-1">
                  Session Topic
                </span>
                <p className="text-xs font-bold text-black leading-snug">
                  "{speaker.topic}"
                </p>
              </div>
            </div>

            {/* View Bio Trigger */}
            <div className="mt-5 pt-3 border-t border-black/20 flex justify-between items-center text-xs font-extrabold uppercase tracking-wider text-black">
              <span>Click for full bio</span>
              <span>➔</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Speaker Bio */}
      {selectedSpeaker && (
        <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white border-4 border-black p-6 sm:p-8 max-w-xl w-full relative shadow-[8px_8px_0px_#000]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-4 right-4 w-9 h-9 bg-black text-white border-2 border-black flex items-center justify-center hover:bg-[#FF0056] transition-colors"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
              <div className="w-28 h-28 border-2 border-black overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 border border-black inline-block mb-2 ${selectedSpeaker.categoryBadge}`}
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
                  {selectedSpeaker.role} @ {selectedSpeaker.company}
                </p>
              </div>
            </div>

            <div className="border-t-2 border-black pt-4 mb-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-black/60 block mb-1">
                Presentation Topic
              </span>
              <p className="text-base font-extrabold text-black">
                "{selectedSpeaker.topic}"
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
