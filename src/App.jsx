import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Gallery from "./components/Gallery.jsx";
import Work from "./components/Work.jsx";
import Offer from "./components/Offer.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { HoverImageLinks } from "./components/ui/HoverImageLink.jsx";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader.jsx";
// import Navbar from './components/navigation.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Navbar />
        <div class="hero">
          <Hero />
        </div>
        <div id="gallery" className="mb-[100px]">
          <Gallery />
        </div>
        {/* <div id="service">
          <Offer />
        </div> */}
        <div id="work">
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
