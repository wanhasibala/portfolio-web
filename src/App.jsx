import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './components/navbar.jsx';
import Hero from './components/Hero.jsx'
import Gallery from './components/Gallery.jsx'
import Project from './components/Project.jsx'
import Offer from './components/Offer.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/navigation.jsx';

function App() {

  return (
    <>
    <Navbar/>
      <Hero />
      <Gallery />
      <Offer />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
