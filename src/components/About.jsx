import React from 'react'

export default function About() {
  return (
    <>
    <section className='about-sec'>
        <div className=' container about '>
            <h2 className='text-uppercase'>About</h2>
            <div className='row'>
            <div className=' desc col-lg-4 ms-auto'>
            <p>
            Freelancer is a free bootstrap theme created by Start Bootstrap. 
            The download includes the complete source files including HTML, CSS, and JavaScript as
             well as optional SASS stylesheets for easy customization.
            </p>
            </div>
            <div className=' desc col-lg-4 me-auto'> 
            <p>
            You can create your own custom avatar for the masthead, change the icon in the dividers, 
            and add your email address to the contact form to make it fully functional!
            </p>
            </div>
            </div>
            
            <button className='btn btn-xl btn-outline-light'><a>Free Download!</a></button>
        </div>
    </section>
    </>
  )
}
