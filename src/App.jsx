import React from 'react'
import Navbar from './components/Navbar.jsx'
import StartSection from './components/StartSection.jsx'
import Portfolio from './components/Portfolio.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Location from './components/Location.jsx'
import NotFound from './components/NotFound.jsx'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
  
       <Navbar/>
       <StartSection/>
       <Routes>
        <Route path='/' element={<Portfolio/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
       </Routes>
       <Location/>
    
      
    </>
  )
}
