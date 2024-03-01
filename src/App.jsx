import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Gallery from "./components/Gallery.jsx";
import Work from "./components/Work.jsx";
import Offer from "./components/Offer.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HoverImageLinks } from "./components/ui/HoverImageLink.jsx";
// import Navbar from './components/navigation.jsx';

function App() {
  return (
    <>
    <div className="overflow-hidden">

      <Navbar />
      <div class="hero">
        <Hero />
      </div>
      <div id="gallery" className="mb-[100px]">
        <Gallery />
      </div>
      <div id="service">
        <Offer />
      </div>
      <div id="work">
        {/* <Work /> */}
        <HoverImageLinks />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
