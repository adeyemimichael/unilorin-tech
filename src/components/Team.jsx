import { useState, useEffect } from "react";
import { FaLinkedinIn, FaTwitter, FaTimes } from "react-icons/fa";
import { supabase } from "../lib/supabaseClient";
import Navbar from "./Navbar";
import Footer from "./Footer";

import att1 from "../assets/images/att1.webp";
import anu from "../assets/images/anu.webp";
import leye from "../assets/images/leye.jpg";
import coop from "../assets/images/coop.jpg";
import atted from "../assets/images/atted.jpg";
import iss from "../assets/images/iss.webp";

const staticTeam = [
  {
    id: 1,
    name: "Ayobami Adeyemi",
    role: "Convener & Lead Organizer",
    department: "Executive Leads",
    photo_url: leye,
    bio: "Visionary founder of Unilorin Tech Summit, driving tech empowerment across university campuses in West Africa.",
    twitter_url: "https://twitter.com",
    linkedin_url: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Anuoluwapo Bakare",
    role: "Head of Product & Design",
    department: "Tech & Product",
    photo_url: anu,
    photo_url_fallback: anu,
    bio: "Lead UI/UX architect designing intuitive interfaces and event experiences for UTS attendees.",
    twitter_url: "https://twitter.com",
    linkedin_url: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Coop Oladele",
    role: "Head of Engineering",
    department: "Tech & Product",
    photo_url: coop,
    bio: "Fullstack cloud engineer overseeing registration infrastructure, ticketing, and live session tools.",
    twitter_url: "https://twitter.com",
    linkedin_url: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Attahir Edward",
    role: "Media & Branding Lead",
    department: "Media & Branding",
    photo_url: atted,
    bio: "Creative director behind UTS 5.0 visual identity, photography coverage, and partner media relations.",
    twitter_url: "https://twitter.com",
    linkedin_url: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Ismail Olatunji",
    role: "Operations & Logistics Manager",
    department: "Logistics & Operations",
    photo_url: iss,
    bio: "Managing venue management, gate verification, security protocols, and VIP guest hosting.",
    twitter_url: "https://twitter.com",
    linkedin_url: "https://linkedin.com",
  },
  {
    id: 6,
    name: "Kemi Adeleke",
    role: "Partnerships & Sponsorships Lead",
    department: "Executive Leads",
    photo_url: att1,
    bio: "Connecting global tech leaders and corporate sponsors with student talent at Unilorin Tech Summit.",
    twitter_url: "https://twitter.com",
    linkedin_url: "https://linkedin.com",
  },
];

const departments = [
  "All",
  "Executive Leads",
  "Tech & Product",
  "Media & Branding",
  "Logistics & Operations",
];

const Team = () => {
  const [activeDept, setActiveDept] = useState("All");
  const [teamMembers, setTeamMembers] = useState(staticTeam);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    fetchTeamFromSupabase();
  }, []);

  const fetchTeamFromSupabase = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;

      if (data && data.length > 0) {
        setTeamMembers(data);
      }
    } catch (err) {
      console.log("Using static team dataset:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const getDeptBadge = (dept) => {
    switch (dept) {
      case "Executive Leads":
        return "bg-[#FF0056] text-white";
      case "Tech & Product":
        return "bg-[#00ADFF] text-black";
      case "Media & Branding":
        return "bg-[#FFD100] text-black";
      default:
        return "bg-[#973AE0] text-white";
    }
  };

  const filteredTeam =
    activeDept === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.department === activeDept);

  return (
    <div className="min-h-screen bg-[#FAF6EE] font-brico flex flex-col justify-between">
      <div>
        {/* Navbar */}
        <div className="p-3 md:p-6 lg:p-8 bg-[#14382C]">
          <div className="bg-[#FAF6EE] rounded-[28px] sm:rounded-[36px] p-4 sm:p-6 border border-black/5 shadow-xl">
            <Navbar />
          </div>
        </div>

        {/* Header */}
        <div className="max-w-7xl mx-auto text-center pt-8 pb-12 px-4 sm:px-6 lg:px-12">
          <div className="inline-block bg-[#00B66C] text-white border-2 border-black px-4 py-1 text-xs font-extrabold uppercase tracking-widest mb-3">
            UTS 5.0 Team • 2024–2026
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-black uppercase tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Meet the Organizers
          </h1>
          <p className="text-black/80 font-medium text-sm sm:text-base max-w-2xl mx-auto mt-3">
            The passionate team of student developers, designers, and organizers powering Unilorin Tech Summit 5.0.
          </p>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black transition-all duration-200 ${
                  activeDept === dept
                    ? "bg-black text-white shadow-[3px_3px_0px_#000]"
                    : "bg-white text-black hover:bg-[#00B66C] hover:text-white shadow-[2px_2px_0px_#000]"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTeam.map((member, index) => (
            <div
              key={member.id || index}
              onClick={() => setSelectedMember(member)}
              className="bg-white border-2 border-black p-5 flex flex-col justify-between cursor-pointer hover:-translate-y-1 transition-transform duration-200 shadow-[4px_4px_0px_#000]"
            >
              <div>
                {/* Department Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 border border-black ${getDeptBadge(
                      member.department
                    )}`}
                  >
                    {member.department}
                  </span>
                  <div className="flex items-center gap-2">
                    {member.twitter_url && (
                      <a
                        href={member.twitter_url}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 bg-white border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                        aria-label="Twitter"
                      >
                        <FaTwitter className="text-xs" />
                      </a>
                    )}
                    {member.linkedin_url && (
                      <a
                        href={member.linkedin_url}
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

                {/* Member Photo */}
                <div className="w-full h-64 border-2 border-black overflow-hidden mb-4 bg-gray-100 relative">
                  <img
                    src={member.photo_url || leye}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <h3
                  className="text-2xl font-extrabold text-black leading-tight"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-xs font-extrabold text-[#FF0056] mt-1 uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="text-xs font-medium text-black/80 mt-3 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-black/20 flex justify-between items-center text-xs font-extrabold uppercase tracking-wider text-black">
                <span>View Full Profile</span>
                <span>➔</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white border-4 border-black p-6 sm:p-8 max-w-lg w-full relative shadow-[8px_8px_0px_#000]">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 w-9 h-9 bg-black text-white border-2 border-black flex items-center justify-center hover:bg-[#FF0056] transition-colors"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
              <div className="w-28 h-28 border-2 border-black overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  src={selectedMember.photo_url || leye}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 border border-black inline-block mb-2 ${getDeptBadge(
                    selectedMember.department
                  )}`}
                >
                  {selectedMember.department}
                </span>
                <h3
                  className="text-3xl font-extrabold text-black leading-tight"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {selectedMember.name}
                </h3>
                <p className="text-sm font-bold text-[#FF0056]">
                  {selectedMember.role}
                </p>
              </div>
            </div>

            <div className="border-t-2 border-black pt-4 mb-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-black/60 block mb-1">
                Bio &amp; Responsibility
              </span>
              <p className="text-sm font-medium text-black/85 leading-relaxed">
                {selectedMember.bio}
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-black/20">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-6 py-2 bg-black text-white font-bold text-xs uppercase border-2 border-black hover:bg-[#FFD100] hover:text-black transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Team;
