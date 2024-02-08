import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Gallery from "./components/Gallery.jsx";
import Project from "./components/Project.jsx";
import Offer from "./components/Offer.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Navbar from './components/navigation.jsx';

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <div div className="overflow-hidden">
      <Navbar />
      <div class="hero">
        <Hero />
      </div>
      <div id="about" className="mb-20">
        <Gallery  />
      </div>
      <div id="service">
        <Offer />
      </div>
      <div id="work">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
