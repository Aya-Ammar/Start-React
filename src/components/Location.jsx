import React from 'react'

export default function Location() {
  return (
    <>  
     <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

    <section className="loc">
        <div className="container">
            <div className='location '>
                <div className='loca '>
                <h4 className='text-uppercase'>Location</h4>
                <p>
                2215 John Daniel Drive
                Clark, MO 65243
                </p>
                </div>
                <div className="loca">
                    <h4 className='text-uppercase'>Around the Web</h4>
                    <ul className='loca-list'>
                           <li  className='loca-li'>
                          <a href='#'> <i class="fa-brands fa-facebook-f"></i></a>
                            </li>
                           <li className='loca-li'>
                           <a href='#'><i class="fa-brands fa-twitter "></i>   </a>                          
                           </li>
                            <li className='loca-li'>
                            <a href='#'><i class="fa-brands fa-linkedin-in "></i></a>
                            </li>
                            <li className='loca-li'>
                            <a href='#'><i class="fa-brands fa-dribbble  "></i></a>
                           </li>
                            </ul>
                </div>
                <div className="loca">
                    <h4 className='text-uppercase'>About Freelancer</h4>
                    <p>
                     Freelance is a free to use, MIT licensed Bootstrap theme created by <a href='#'>Start Bootstrap</a>
                    </p>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}
