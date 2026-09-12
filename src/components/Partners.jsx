import { useState, useEffect } from "react";
import { FaPlus, FaHandshake, FaArrowRight, FaExternalLinkAlt, FaTimes, FaCheck } from "react-icons/fa";
import { supabase } from "../lib/supabaseClient";

const categories = ["All Partners", "Sponsors", "Ecosystem Partners", "Media"];

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState("All Partners");
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State for Claim Your Spot Form
  const [showModal, setShowModal] = useState(false);
  const [targetTier, setTargetTier] = useState("Gold Sponsor");
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchSponsorsFromSupabase();
  }, []);

  const fetchSponsorsFromSupabase = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("sponsors")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPartners(data || []);
    } catch (err) {
      console.error("Error fetching sponsors from Supabase:", err.message);
      setPartners([]);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenClaimModal = (tier = "Gold Sponsor") => {
    setTargetTier(tier);
    setShowModal(true);
    setSubmitted(false);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase.from("partnership_inquiries").insert([
        {
          company_name: formData.companyName,
          contact_name: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          target_tier: targetTier,
          proposal_message: formData.message,
        },
      ]);

      if (error) throw error;
      setSubmitted(true);
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err.message);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const filteredPartners =
    activeCategory === "All Partners"
      ? partners
      : partners.filter((p) => p.category === activeCategory || p.tier?.includes(activeCategory));

  return (
    <section
      id="partners"
      className="w-full bg-[#FAF6EE] py-16 px-4 sm:px-6 lg:px-12 font-brico border-b-2 border-black relative"
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
            Our Previous Partners &amp; Sponsors
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

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-16">
            <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm font-extrabold uppercase text-black">Loading partners...</p>
          </div>
        ) : (
          /* Partners Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white border-2 border-black p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200 shadow-[4px_4px_0px_#000]"
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div
                      className="px-4 py-2 border-2 border-black font-extrabold text-base sm:text-lg uppercase tracking-tight bg-black text-white"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                      {partner.company_name}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 border border-black bg-[#00ADFF] text-black">
                      {partner.tier || "Partner"}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-extrabold text-black mb-2"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {partner.company_name}
                  </h3>
                  <p className="text-xs font-medium text-black/80 leading-relaxed mb-4">
                    {partner.description || "Official partner supporting student tech empowerment at UTS 5.0."}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-black flex justify-between items-center text-xs font-bold">
                  <div className="flex items-center gap-1">
                    <span className="text-black/60 uppercase text-[10px] tracking-wider font-bold">
                      Years:
                    </span>
                    {(partner.years_active || ["2024"]).map((yr) => (
                      <span
                        key={yr}
                        className="px-1.5 py-0.5 bg-[#FAF6EE] border border-black text-[10px] font-extrabold"
                      >
                        {yr}
                      </span>
                    ))}
                  </div>
                  {partner.website_url && partner.website_url !== "#" && (
                    <a
                      href={partner.website_url}
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

            {/* "Claim Your Spot" Sponsor Card */}
            <div
              onClick={() => handleOpenClaimModal("Gold Sponsor")}
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

            {/* "Become a Media Partner" Card */}
            <div
              onClick={() => handleOpenClaimModal("Media Partner")}
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
        )}

        {/* Banner */}
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
              Join top companies and organizations as an official partner for Unilorin Tech Summit 5.0.
            </p>
          </div>
          <button
            onClick={() => handleOpenClaimModal("Headline Sponsor")}
            className="px-8 py-4 bg-[#FF0056] text-white font-extrabold text-sm uppercase tracking-wider border-2 border-white hover:bg-[#FFD100] hover:text-black hover:border-black transition-all duration-200 shrink-0 shadow-[3px_3px_0px_#fff]"
          >
            Claim Your Spot Now ➔
          </button>
        </div>
      </div>

      {/* Claim Your Spot Interactive Modal Form */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white border-4 border-black p-6 sm:p-8 max-w-lg w-full relative shadow-[8px_8px_0px_#000]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-9 h-9 bg-black text-white border-2 border-black flex items-center justify-center hover:bg-[#FF0056] transition-colors"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#00B66C] text-white border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  <FaCheck />
                </div>
                <h3
                  className="text-3xl font-extrabold text-black mb-2"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Proposal Submitted!
                </h3>
                <p className="text-sm font-bold text-black/80 mb-6">
                  Thank you! Our partnerships team will reach out to you within 24 hours.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 bg-black text-white border-2 border-black font-extrabold text-xs uppercase"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="flex flex-col gap-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF0056] block mb-1">
                    UTS 5.0 Partnership
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-extrabold text-black"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Claim Your Partner Spot
                  </h3>
                </div>

                <div>
                  <label className="text-xs font-extrabold uppercase text-black block mb-1">
                    Target Tier
                  </label>
                  <select
                    value={targetTier}
                    onChange={(e) => setTargetTier(e.target.value)}
                    className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                  >
                    <option value="Headline Sponsor">Headline Sponsor</option>
                    <option value="Gold Sponsor">Gold Sponsor</option>
                    <option value="Ecosystem Partner">Ecosystem Partner</option>
                    <option value="Media Partner">Media Partner</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-extrabold uppercase text-black block mb-1">
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleFormChange}
                    placeholder="e.g. Acme Tech Corp"
                    className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-extrabold uppercase text-black block mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleFormChange}
                      placeholder="Your full name"
                      className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-extrabold uppercase text-black block mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="name@company.com"
                      className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-extrabold uppercase text-black block mb-1">
                    Message / Proposal Notes
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Tell us briefly about your partnership goals..."
                    className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#FF0056] text-white border-2 border-black font-extrabold text-sm uppercase tracking-wider hover:bg-black transition-colors shadow-[4px_4px_0px_#000]"
                >
                  {submitting ? "Submitting Inquiry..." : "Submit Partnership Proposal ➔"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Partners;