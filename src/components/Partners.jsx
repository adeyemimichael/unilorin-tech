import { useState } from "react";
import { FaPlus, FaHandshake, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const partnerData = [
  {
    id: 1,
    name: "GitHub",
    category: "Sponsors",
    tier: "Headline Sponsor",
    badgeBg: "bg-[#FF0056] text-white",
    years: ["2022", "2023", "2024"],
    description: "Empowering student developers worldwide with open source tools and student developer packs.",
    logoText: "GitHub",
    logoBg: "bg-black text-white",
    link: "https://github.com",
  },
  {
    id: 2,
    name: "Paystack",
    category: "Sponsors",
    tier: "Gold Sponsor",
    badgeBg: "bg-[#00ADFF] text-black",
    years: ["2021", "2022", "2023", "2024"],
    description: "Modern online and offline payments for African businesses and developer ecosystems.",
    logoText: "Paystack",
    logoBg: "bg-[#00C3F7] text-black",
    link: "https://paystack.com",
  },
  {
    id: 3,
    name: "Ingressive for Good",
    category: "Ecosystem Partners",
    tier: "Talent Partner",
    badgeBg: "bg-[#00B66C] text-white",
    years: ["2022", "2023"],
    description: "Non-profit empowering African youth with tech skills, micro-grants, and laptop donations.",
    logoText: "I4G",
    logoBg: "bg-[#00B66C] text-white",
    link: "https://ingressive.org",
  },
  {
    id: 4,
    name: "Google Developer Student Clubs",
    category: "Ecosystem Partners",
    tier: "Community Partner",
    badgeBg: "bg-[#FFD100] text-black",
    years: ["2021", "2022", "2023", "2024"],
    description: "University-based community groups for students interested in Google developer technologies.",
    logoText: "GDSC Unilorin",
    logoBg: "bg-[#4285F4] text-white",
    link: "#",
  },
  {
    id: 5,
    name: "Cowrywise",
    category: "Sponsors",
    tier: "Fintech Sponsor",
    badgeBg: "bg-[#973AE0] text-white",
    years: ["2023", "2024"],
    description: "Digital wealth management platform empowering young Africans with financial literacy.",
    logoText: "Cowrywise",
    logoBg: "bg-[#0066FF] text-white",
    link: "https://cowrywise.com",
  },
  {
    id: 6,
    name: "Vercel",
    category: "Sponsors",
    tier: "Infrastructure Partner",
    badgeBg: "bg-black text-white",
    years: ["2023", "2024"],
    description: "Developer experience platform for deploying frontend frameworks and serverless functions.",
    logoText: "Vercel",
    logoBg: "bg-black text-white",
    link: "https://vercel.com",
  },
  {
    id: 7,
    name: "Tech Cabal / Tech234",
    category: "Media",
    tier: "Official Media Partner",
    badgeBg: "bg-[#FF0056] text-white",
    years: ["2022", "2023", "2024"],
    description: "Covering the technology, businesses, and creators shaping the future of African innovation.",
    logoText: "TechCabal",
    logoBg: "bg-[#FF0056] text-white",
    link: "https://techcabal.com",
  },
];

const categories = ["All Partners", "Sponsors", "Ecosystem Partners", "Media"];

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState("All Partners");

  const handleMailClick = () => {
    const email = "Contact@unilorintechsummit.org";
    const subject = "UTS 5.0 Partnership Proposal";
    const body =
      "Hello UTS Team,\n\nWe would like to partner with Unilorin Tech Summit 5.0 (The Half Decade Event).\n\nCompany Name:\nContact Person:\nProposed Partnership Tier:\n";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const filteredPartners =
    activeCategory === "All Partners"
      ? partnerData
      : partnerData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="partners"
      className="w-full bg-[#FAF6EE] py-16 px-4 sm:px-6 lg:px-12 font-jakarta border-b-2 border-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#00B66C] text-white border-2 border-black px-4 py-1 text-xs font-extrabold uppercase tracking-widest mb-3">
            Ecosystem Network
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black uppercase tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Our Partners &amp; Sponsors
          </h2>
          <p className="text-black/80 font-medium text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Organizations and tech giants that have empowered Unilorin Tech Summit over the past half decade.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-black text-white shadow-[3px_3px_0px_#000]"
                    : "bg-white text-black hover:bg-[#00B66C] hover:text-white shadow-[2px_2px_0px_#000]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Real Partners Cards */}
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white border-2 border-black p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200 shadow-[4px_4px_0px_#000]"
            >
              <div>
                {/* Header: Logo placeholder & Tier Badge */}
                <div className="flex justify-between items-start mb-5">
                  <div
                    className={`px-4 py-2 border-2 border-black font-extrabold text-base sm:text-lg uppercase tracking-tight ${partner.logoBg}`}
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {partner.logoText}
                  </div>
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 border border-black ${partner.badgeBg}`}
                  >
                    {partner.tier}
                  </span>
                </div>

                <h3
                  className="text-xl font-extrabold text-black mb-2"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {partner.name}
                </h3>
                <p className="text-xs font-medium text-black/80 leading-relaxed mb-4">
                  {partner.description}
                </p>
              </div>

              {/* Footer: Years Active & External Link */}
              <div className="pt-4 border-t-2 border-black flex justify-between items-center text-xs font-bold">
                <div className="flex items-center gap-1">
                  <span className="text-black/60 uppercase text-[10px] tracking-wider font-bold">
                    Years:
                  </span>
                  {partner.years.map((yr) => (
                    <span
                      key={yr}
                      className="px-1.5 py-0.5 bg-[#FAF6EE] border border-black text-[10px] font-extrabold"
                    >
                      {yr}
                    </span>
                  ))}
                </div>
                {partner.link !== "#" && (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-black hover:text-[#00ADFF] transition-colors"
                  >
                    <span>Visit</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* "Claim Your Spot" Interactive Sponsor Slots */}
          <div
            onClick={handleMailClick}
            className="bg-[#FFD100] border-2 border-dashed border-black p-6 flex flex-col justify-between items-center text-center cursor-pointer hover:-translate-y-1 hover:bg-[#FFD726] transition-all duration-200 shadow-[4px_4px_0px_#000] min-h-[260px]"
          >
            <div className="my-auto flex flex-col items-center">
              <div className="w-14 h-14 bg-black text-white border-2 border-black rounded-full flex items-center justify-center mb-4 text-xl">
                <FaPlus />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest bg-white text-black px-3 py-1 border border-black mb-2">
                UTS 5.0 Opportunity
              </span>
              <h3
                className="text-2xl font-extrabold text-black leading-tight mb-2"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Claim This Partner Spot
              </h3>
              <p className="text-xs font-bold text-black/80 max-w-xs leading-relaxed">
                Connect your brand with 40,000+ top student developers, creators, and innovators.
              </p>
            </div>

            <div className="w-full pt-4 border-t-2 border-black flex items-center justify-center gap-2 text-xs font-extrabold uppercase text-black">
              <span>Partner With UTS 5.0</span>
              <FaArrowRight />
            </div>
          </div>

          <div
            onClick={handleMailClick}
            className="bg-[#00ADFF] border-2 border-dashed border-black p-6 flex flex-col justify-between items-center text-center cursor-pointer hover:-translate-y-1 hover:bg-[#33BEFF] transition-all duration-200 shadow-[4px_4px_0px_#000] min-h-[260px]"
          >
            <div className="my-auto flex flex-col items-center">
              <div className="w-14 h-14 bg-black text-white border-2 border-black rounded-full flex items-center justify-center mb-4 text-xl">
                <FaHandshake />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest bg-white text-black px-3 py-1 border border-black mb-2">
                Community &amp; Media
              </span>
              <h3
                className="text-2xl font-extrabold text-black leading-tight mb-2"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Become a Media / Tech Partner
              </h3>
              <p className="text-xs font-bold text-black/80 max-w-xs leading-relaxed">
                Co-host workshops, offer student perks, or amplify UTS 5.0 to a global audience.
              </p>
            </div>

            <div className="w-full pt-4 border-t-2 border-black flex items-center justify-center gap-2 text-xs font-extrabold uppercase text-black">
              <span>Get In Touch</span>
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* Global Partnership Banner */}
        <div className="mt-12 bg-black text-white border-2 border-black p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[6px_6px_0px_#FF0056]">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FFD100] block mb-1">
              Half Decade Event • UTS 5.0
            </span>
            <h3
              className="text-2xl sm:text-3xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Ready to Empower the Next Generation of Tech Leaders?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-xl font-medium">
              Join GitHub, Paystack, Cowrywise, and Vercel as an official partner for Unilorin Tech Summit 5.0.
            </p>
          </div>
          <button
            onClick={handleMailClick}
            className="px-8 py-4 bg-[#FF0056] text-white font-extrabold text-sm uppercase tracking-wider border-2 border-white hover:bg-[#FFD100] hover:text-black hover:border-black transition-all duration-200 shrink-0 shadow-[3px_3px_0px_#fff]"
          >
            Claim Your Spot Now ➔
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;