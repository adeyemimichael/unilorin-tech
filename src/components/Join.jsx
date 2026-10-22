import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';

// The share link https://forms.gle/pJaKEHd6UrNRSuyx5 resolves to this exact
// form. Google blocks embedding the short forms.gle link directly inside an
// iframe, so we embed the full docs.google.com URL with embedded=true here.
const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe7nzTzdBomn3DrvrvzoXTJ3LeuqO9W8Wk5Sst-DFa7kaBkPw/viewform?embedded=true';
const Join = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section id="join" className="w-full bg-white px-3 md:px-6 lg:px-8 py-6 font-brico">
      <div
        className="w-full bg-[#FAF6EE] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] py-12 md:py-16 px-6 sm:px-10 md:px-16 lg:px-20 border border-black/5 shadow-2xl"
        data-aos="fade-up"
      >
        {/* Header */}
        <div
          className="max-w-3xl mx-auto text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-black/70 hover:text-black font-semibold text-sm mb-6 transition-colors"
          >
            <HiArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <h1 className="text-black font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4 uppercase">
            Join the Community
          </h1>

          <p className="text-black/75 font-medium text-base md:text-lg leading-relaxed">
            Fill out the form below to join the Unilorin Tech Summit community.
          </p>

        </div>

        {/* Google Form iframe */}
        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-black/10">
            {/*
              Google Forms are cross-origin, so the iframe cannot auto-resize
              to its content. We use a tall responsive height so the full form
              stays visible and scrolls within the frame if needed.
            */}
            <iframe
              src={GOOGLE_FORM_EMBED_URL}
              title="Join the Unilorin Tech Summit community"
              loading="lazy"
              className="w-full h-[1500px] sm:h-[1350px] md:h-[1150px] border-0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
