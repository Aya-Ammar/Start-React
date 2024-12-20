import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  text-uppercase fixed-top" >
        <div className="container ">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  ">
        <li className="nav-item   mx-0 mx-lg-1">
          <a className="nav-link  py-3 px-0 px-lg-3  " href="#">Portfolio</a>
        </li>
        <li className="nav-item  mx-0 mx-lg-1">
          <a className="nav-link  py-3 px-0 px-lg-3" href="#">About</a>
        </li>
        <li className="nav-item  mx-0 mx-lg-1">
          <a className="nav-link py-3 px-0 px-lg-3" href="#">Contact</a>
        </li>
       </ul>
      
    </div>
  </div>
</nav>

 </>
  )
}
