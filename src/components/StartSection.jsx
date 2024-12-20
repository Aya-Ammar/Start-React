import React from 'react';
import startImg from '../assets/images/avataaars.svg';
export default function StartSection() {
  return (
     <>
     <header className='  start '>
        <div className='container align-items-center'>
            <div className="about-img">
               <img className="mb-5"src={startImg} alt="icon"/>
               <h1 className='text-uppercase '>Start Bootstrap</h1>
            </div>
            <div>
               
            </div>
            <p className=' graph '> Graphic Artist - Web Designer - Illustrator</p>
        </div>
        </header>
     </>
  )
}
