import React from 'react'
import './home.scss'
import video from '../../Denkerreact/video1.mp4'
import {GoLocation} from 'react-icons/go'
import {FiFacebook} from 'react-icons/fi'
import{AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'


const Home = () => {
  return (
   <section className='home'>
    <div className="overlay"></div>
     <video src={video} muted autoPlay loop type="video1/mp4"></video>

<div className="homeContent container">
  <div className="textDiv">
    <span className="smallText">
      Classic Packages
    </span>
    <h1 className="homeTitle">
      Go On an Adventurous Vacay!
    </h1>
  </div>

  <div className="cardDiv grid">

  <div className="destinationInput">
      <label htmlFor="city">Search for Destination:</label>
      <div className="input flex">
        <input type="text" placeholder='Enter Destination...' />
        <GoLocation className="icon"/>
      </div>
     </div>

     <div className="dateInput">
      <label htmlFor="date">Select Date:</label>
      <div className="input flex">
        <input type="date" placeholder='Enter Date...' />
      </div>
     </div>

     <div className="daysInput">
     <div className="label_total flex">
      <label htmlFor="days">Maximum Number of Days:</label>
     <h3 className="total">20days</h3>
     </div>

     <div className="input flex">
       <input type="range" max="20" min="1"/>
     </div>

     </div>

    

  </div>

   <div className="homeFooterIcons flex">
    <div className="rightIcons">
    <FiFacebook className="icon"/>
    <AiOutlineInstagram className="icon"/>
    <SiTripadvisor className="icon"/>
    </div>

    <div className="leftIcons">
    <BsListTask className="icon"/>
    <TbApps className="icon"/>
      </div>
   </div>

</div>

   </section>
  )
}

export default Home