import { useEffect } from 'react';
import Hero from './Hero';
import Highlight from './Highlight';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sponsors from './Sponsors';
import About from './About';
import Info from './Info';
import Partners from './Partners';
import Footer from './Footer';
import Talk from "./Talk";
import Preloader from './Preloader';
import ScrollProgress from './ScrollProgress';
import Tracks from './Tracks';
import Speakers from './Speakers';
import Testimonials from './Testimonials';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Interactive Top Reading Scroll Progress Bar */}
      <ScrollProgress />

      {/* Initial Smooth Preloader Screen */}
      <Preloader />

      {/* Main Sections */}
      <Hero />
      <About />
      <Info />
      <Tracks />
      <Speakers />
      <Highlight />
      <Testimonials />
      <Partners />
      <Sponsors />
      <Footer />
      <Talk />
    </div>
  );
}

export default Home;
