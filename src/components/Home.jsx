// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { useState,useEffect  } from 'react';

import Hero from './Hero';
import Highlight  from './Highlight';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sponsors from './Sponsors';
import Navbar from './Navbar';
import About from './About'
import Info from './Info'
import Partners from './Partners';
import Footer from './Footer';
function Home() {
AOS.init();

  return (
      <div>
  
<Navbar></Navbar>
< Hero ></Hero>
{/* about section */}
<About></About>


{/* third section*/}
<Info></Info>
{/* fourth section */}

{/* fifth section for highlight */}
 <Highlight></Highlight>
 <Partners></Partners>
 <Sponsors></Sponsors>
 <Footer></Footer>
</div>
  );
}


export default Home;
