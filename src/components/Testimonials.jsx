import { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const editions = ["All Editions", "UTS 2023", "UTS 2024"];

// Real testimonials from UTS 2023 feedback - Most impactful responses selected
const testimonialsData = [
  {
    id: 1,
    name: "Omosola Happiness",
    quote: "The insights from the speakers was so amazing. I've learnt that my decision matters a lot, how to get opportunities, having a global impact means I have to be creative in what I do. There's no new businesses but what makes one stands out is creativity. Start small and have a leverage. It's okay to fail but one has to fail forward. Fail means find, ask, improve and learn.",
    edition: "UTS 2023",
    rating: 5,
  },
  {
    id: 2,
    name: "Ojuerayetan Emmanuel",
    quote: "The way the guest speakers simplified things to know in the tech world was exceptional. My key takeaway: Creativity is the driving force in a technology oriented world.",
    edition: "UTS 2023",
    rating: 5,
  },
  {
    id: 3,
    name: "Joseph Honour",
    quote: "The speakers were incredible. Don't wait until you get employed to start getting job experience - that's what stuck with me the most.",
    edition: "UTS 2023",
    rating: 5,
  },
  {
    id: 4,
    name: "Ayobami Akande",
    quote: "The orientation and coordination was top-notch. The tendency to pitch amidst great minds gave me so much confidence. Keep the fire burning!",
    edition: "UTS 2023",
    rating: 5,
  },
  {
    id: 5,
    name: "Owoyemi Joseph",
    quote: "Everything! One thing that has stayed with me from all what the speakers said is the need to put out my work and develop my online presence. The coordination was perfect!",
    edition: "UTS 2023",
    rating: 5,
  },
  {
    id: 6,
    name: "Treasure Babatimehin",
    quote: "The advice, experiences shared, and insight given were priceless. With resources, you can gather a team and they can think for you. Diligence is key. Learn what ever you want to learn, improve on yourself constantly, and use all that knowledge for school.",
    edition: "UTS 2023",
    rating: 5,
  },
  {
    id: 7,
    name: "Oyewale Deborah Omoyeni",
    quote: "It was beyond expectation. I totally love everything about the program. It's worth more than 'free'. The speakers delivered well. Technology will catch up with you - you just have to decide to either join now.",
    edition: "UTS 2023",
    rating: 5,
  },
  {
    id: 8,
    name: "Oluwashemilore",
    quote: "The sessions, the practicality, the fact that they have been in the system and they could merge their experience back then to now and deliver. They're not just spoon feeding us what to do, only the guidelines and basics that worked. It was a glorious experience. Make smart decisions! I'm a product of the decisions I make.",
    edition: "UTS 2023",
    rating: 5,
  },
  {
    id: 9,
    name: "Aremu Enioluwafe",
    quote: "The speakers gave practical examples and were able to communicate with the audience on the same frequency. To remain relevant in my career, I must be creative.",
    edition: "UTS 2023",
    rating: 5,
  },
  {
    id: 10,
    name: "Olaoke Stephen",
    quote: "The speakers were amazing. Be diligent - that's my takeaway. The networking provisions were excellent.",
    edition: "UTS 2023",
    rating: 5,
  },
  {
    id: 11,
    name: "ADEWOYE Esther",
    quote: "I love everything. I learnt better about the tech industry. I saw beyond what I knew in tech before attending UTS.",
    edition: "UTS 2023",
    rating: 5,
  },
  {
    id: 12,
    name: "Ademola Samuel",
    quote: "The teaching sections were very impactful. Diligence in work - that's what I'm taking home with me.",
    edition: "UTS 2023",
    rating: 5,
  },
];

const Testimonials = () => {
  const [selectedEdition, setSelectedEdition] = useState("All Editions");

  const filteredTestimonials =
    selectedEdition === "All Editions"
      ? testimonialsData
      : testimonialsData.filter((t) => t.edition === selectedEdition);

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

      {/* Testimonials Cards Grid */}
      {filteredTestimonials.length === 0 ? (
        <div className="text-center py-12 bg-white border-2 border-black max-w-md mx-auto p-8 shadow-[4px_4px_0px_#000]">
          <p className="text-base font-extrabold text-black uppercase">No testimonial stories listed for this edition yet.</p>
          <p className="text-xs font-bold text-black/70 mt-1">Check back soon for community updates!</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-black p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200 shadow-[4px_4px_0px_#000]"
              data-aos="fade-up"
              data-aos-delay={item.id * 50}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 border border-black bg-[#FF0056] text-white">
                    {item.edition}
                  </span>
                </div>

                <div className="flex gap-1 text-[#FFD100] mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <FaQuoteLeft className="text-black text-lg absolute -top-1 -left-0.5 pointer-events-none" />
                  <p className="text-sm font-medium text-black leading-relaxed relative z-10 pl-5">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-black">
                <h4
                  className="text-base font-extrabold text-black leading-snug"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {item.name}
                </h4>
                <p className="text-xs font-bold text-black/70 mt-1">
                  UTS {item.edition.split(" ")[1]} Attendee
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;
