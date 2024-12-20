import React from 'react'
import Navbar from './components/Navbar'
import StartSection from './components/StartSection'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Location from './components/Location'

export default function App() {
  return (
    <>
  
       <Navbar />
       <StartSection />
       <Portfolio/>
       <About />
       <Contact/>
       <Location/>
    
      
    </>
  )
}
