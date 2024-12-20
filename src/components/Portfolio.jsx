import React from 'react'
import porImg from '../assets/images/cabin.png'
import porImg1 from '../assets/images/cake.png'
import porImg2 from '../assets/images/circus.png'
import porImg3 from '../assets/images/game.png'
import porImg4 from '../assets/images/safe.png'
import porImg5 from '../assets/images/submarine.png'
export default function Portfolio() {
  return (
    <>
    <section className="port">
    <div className='container align-items-center'>
    <h2 className=' porh text-uppercase'>Portfolio</h2>
    <div className='por-img'>
        <div  className='por'>
        <img src={porImg} alt="cabin" />
        </div>
        <div className='por'>
        <img src={porImg1} alt="cake" />
        </div>
        <div className='por'>
        <img src={porImg2} alt="circus" />
        </div>
        <div className='por'>
        <img src={porImg3} alt="game" />
        </div>
        <div className='por'>
        <img src={porImg4} alt="safe" />
        </div>
        <div className='por'>
        <img src={porImg5} alt="submarine" />
        </div>

    </div>
    </div>
    </section>
    </>
  )
}
