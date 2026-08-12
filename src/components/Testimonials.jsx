import { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import anu from "../assets/images/anu.webp";
import att1 from "../assets/images/att1.webp";
import leye from "../assets/images/leye.jpg";
import coop from "../assets/images/coop.jpg";
import atted from "../assets/images/atted.jpg";
import iss from "../assets/images/iss.webp";

const testimonialsData = [
  {
    id: 1,
    name: "Emmanuel Adebayo",
    role: "Fullstack Engineer",
    company: "Paystack",
    edition: "UTS 2022",
    badgeBg: "bg-[#FF0056] text-white",
    outcome: "💼 Hired via UTS Network",
    image: att1,
    quote:
      "Attending Unilorin Tech Summit 2022 completely shifted my trajectory. The mentorship track connected me with senior engineers who guided me until I landed my first international remote role.",
  },
  {
    id: 2,
    name: "Blessing Okonjo",
    role: "Product Designer",
    company: "Moniepoint",
    edition: "UTS 2023",
    badgeBg: "bg-[#00ADFF] text-black",
    outcome: "💻 Won Laptop Grant",
    image: anu,
    quote:
      "Winning the UTS laptop grant in 2023 meant everything. I didn't have a reliable machine to practice UI/UX design. One year later, I'm designing products used by millions across Nigeria.",
  },
  {
    id: 3,
    name: "Tunde Ojo",
    role: "DevOps Engineer",
    company: "Reliance Health",
    edition: "UTS 2021",
    badgeBg: "bg-[#973AE0] text-white",
    outcome: "🚀 Founded Tech Startup",
    image: coop,
    quote:
      "The energy at UTS is unmatched. Hearing top speakers break down cloud architecture inspired me to dive into DevOps. Today I automate infrastructure for top scale-ups.",
  },
  {
    id: 4,
    name: "Aisha Mohammed",
    role: "Frontend Developer",
    company: "Flutterwave",
    edition: "UTS 2023",
    badgeBg: "bg-[#FFD100] text-black",
    outcome: "🎓 Cohort Graduate",
    image: atted,
    quote:
      "UTS provided me with a strong community of peer developers. Building our hackathon submission together gave me the practical portfolio project that got me my first job.",
  },
  {
    id: 5,
    name: "Victor Ikechukwu",
    role: "Cybersecurity Analyst",
    company: "Interswitch",
    edition: "UTS 2024",
    badgeBg: "bg-[#00B66C] text-white",
    outcome: "🛡️ Security Track Lead",
    image: iss,
    quote:
      "From sitting in the audience taking notes at UTS 2021 to leading workshops at UTS 2024 — Unilorin Tech Summit is the heart of student tech empowerment in Kwara State.",
  },
  {
    id: 6,
    name: "Folake Bakare",
    role: "Data Scientist",
    company: "Kuda Bank",
    edition: "UTS 2022",
    badgeBg: "bg-[#FF0056] text-white",
    outcome: "📊 Internship Placement",
    image: leye,
    quote:
      "The hands-on data analytics session at UTS 2022 opened my eyes to real-world data science. The connections made during the networking breakout session landed me my internship.",
  },
];

const editions = ["All Editions", "UTS 2021", "UTS 2022", "UTS 2023", "UTS 2024"];

const Testimonials = () => {
  const [selectedEdition, setSelectedEdition] = useState("All Editions");

  const filteredTestimonials =
    selectedEdition === "All Editions"
      ? testimonialsData
      : testimonialsData.filter((t) => t.edition === selectedEdition);

  return (
    <section id="testimonials" className="w-full bg-[#FAF6EE] py-16 px-4 sm:px-6 lg:px-12 font-jakarta border-b-2 border-black">
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

      {/* Testimonials Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredTestimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white border-2 border-black p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200 shadow-[4px_4px_0px_#000]"
          >
            <div>
              {/* Header: Edition & Outcome Badge */}
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 border border-black ${item.badgeBg}`}
                >
                  {item.edition}
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-black text-white px-2.5 py-1 border border-black">
                  {item.outcome}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 text-[#FFD100] mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>

              {/* Quote Icon & Text */}
              <div className="relative mb-6">
                <FaQuoteLeft className="text-black/15 text-3xl absolute -top-2 -left-1 pointer-events-none" />
                <p className="text-sm font-medium text-black leading-relaxed relative z-10 pl-2">
                  "{item.quote}"
                </p>
              </div>
            </div>

            {/* Attendee Footer Profile */}
            <div className="pt-4 border-t-2 border-black flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-black overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4
                  className="text-base font-extrabold text-black leading-snug"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {item.name}
                </h4>
                <p className="text-xs font-bold text-black/70">
                  {item.role} @ <span className="text-black">{item.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
