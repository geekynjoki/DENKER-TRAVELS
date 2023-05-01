import React from 'react'
import { useState } from 'react'
import './navbar.scss'
import {MdTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'


const Navbar = () => {
 const [active, setActive] = useState('navBar')
 //function to toggle navbar
 const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  //function to remove navbar
 const removeNavbar = ()=> {
  setActive('navBar')
}

  return (
    <section className='navBarSection'>
    <header className='header flex'>

     <div className='logoDiv'>
      <a href='#' className='logo flex'>
       <h1><MdTravelExplore className='icon'/>Denker Tours & Safaris</h1>
      </a>
     </div>

<div className={active}>
  <ul className="navLists flex">

    <li className="navItem">
      <a href="#" className="navLink">Home</a>
    </li>

    <li className="navItem">
      <a href="#" className="navLink">Packages</a>
    </li>

    <li className="navItem">
      <a href="#" className="navLink">Gallery</a>
    </li>

    <li className="navItem">
      <a href="#" className="navLink">About</a>
    </li>

    <li className="navItem">
      <a href="#" className="navLink">Vehicles</a>
    </li>

    <li className="navItem">
      <a href="#" className="navLink">Contact</a>
    </li>

  <button className='btn'>
   <a href='#'>BOOK NOW</a>
  </button>
  </ul>

  <div onClick={removeNavbar} 
  className="closeNavBar">
    <AiFillCloseCircle className='icon'/>
  </div>
</div>

  <div onClick={showNav}
  className="toggleNavBar">
    <TbGridDots className='icon'/>
  </div>

     </header>
     </section>
     
  )
}

export default Navbar