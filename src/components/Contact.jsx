import React from 'react'

export default function Contact() {
  return (
    <>
    <section className="contact ">
    <div className="container w-50 m-auto ">
    <h2 className=' text-uppercase'>Contact me</h2>
   <form>
   <div className="mb-3">
    <label htmlFor="exampleInputFull" className="form-label">Full name</label>
    <input type="text" className="form-control" id="exampleInputFull"  />
    </div>
   <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  />
   </div>
   <div className="mb-3">
    <label htmlFor="exampleInputPhone" className="form-label">Phone number</label>
    <input type="tel" className="form-control" id="exampleInputPhone" />
   </div>
   
   <div className="mb-3">
    <label htmlFor="exampleInputMessage" className="form-label">Message</label>
    <textarea type="text" className="form-control" id="exampleInputMessage" ></textarea>
    </div>
   <button type="submit" className="btn ">Send</button>
   </form>
   </div>
   </section>
    </>
  )
}
