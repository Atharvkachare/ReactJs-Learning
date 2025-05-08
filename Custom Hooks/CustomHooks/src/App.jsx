import { useState } from 'react'
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/Contact/contact'
import Footer from './components/Footer/Footer'
import './style.css'



function App() {

  return (
   <div>
            <Navbar />
            <Intro />
            <Skills />
            <Work />
            <Contact />
            <Footer />
   </div>
  )
}

export default App
