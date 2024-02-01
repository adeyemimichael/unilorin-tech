// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import Talk from "./Talk";
import Animation from './Animation';
function Home() {
AOS.init();

  return (
      <div>
   {/* <Router>
   
      <Switch>
      <Route exact path="/" component={Hero} />
      
        <Route path="/info" component={Info} />
        <Route path="/about" component={About} />
        <Route path="/partners" component={Partners} />
        <Route path="/highlight" component={Highlight} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/contact" component={Footer} />
        </Switch>
        </Router> */}
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
{/* third section*/}
<Info></Info>
{/* fourth section */}

{/* fifth section for highlight */}
 <Highlight></Highlight>
 <Animation></Animation>
 <Partners></Partners>
 <Sponsors></Sponsors>
 <Footer></Footer>
 
<Talk ></Talk >
</div>
  );
}


export default Home;
