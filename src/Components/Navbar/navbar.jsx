import React from 'react'
import './navbar.css'
import {MdTravelExplore} from 'react-icons/md'

const navbar = () => {
  return (
    <section className='navBarSection'>
    <header className='header flex'>

     <div className='logoDiv'>
      <a href='#' className='logo flex'>
       <h1><MdTravelExplore className='icon'/>Denker Tours & Safaris</h1>
      </a>
     </div>

<div className="navBar">
  <ul className="navlist grid">

    <li className="navItem">
      <a href="#" className="navlink">Home</a>
    </li>

    <li className="navItem">
      <a href="#" className="navlink">Packages</a>
    </li>

    <li className="navItem">
      <a href="#" className="navlink">Gallery</a>
    </li>

    <li className="navItem">
      <a href="#" className="navlink">About</a>
    </li>

    <li className="navItem">
      <a href="#" className="navlink">Vehicles</a>
    </li>

    <li className="navItem">
      <a href="#" className="navlink">Contact</a>
    </li>

  <button className='btn'>
   <a href='#'>BOOK US</a>
  </button>
  </ul>
</div>

     </header>
     </section>
     
  )
}

export default navbar