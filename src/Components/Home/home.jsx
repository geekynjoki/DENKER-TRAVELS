import React, {useEffect} from 'react'
import './home.scss'
import video from '../../Denkerreact/video1.mp4'
import {GoLocation} from 'react-icons/go'
import {FiFacebook} from 'react-icons/fi'
import{AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
//add scroll animation with react hook
useEffect(()=>{
   Aos.init({duration: 2000})
}, [])

  return (
   <section className='home'>
    <div className="overlay"></div>
     <video src={video} muted autoPlay loop type="video1/mp4"></video>

<div className="homeContent container">
  <div className="textDiv">
    <span data-aos="fade-up"
    className="smallText">
      Popular Destinations
    </span>
    <h1 data-aos="fade-up"
    className="homeTitle">
      Go On Exciting Adventures with Us!
    </h1>
  </div>

  <div data-aos="fade-up" className='homeParagraph' >
  <h2>Our Safaris include;</h2> <br /> -Customized safari tours <br /> -Solo Travelers safaris <br /> -Couples Safaris & Honeymoon Safaris <br /> -Family & Kids Safari <br /> -Group Safaris 

    </div>

</div>

   </section>
  )
}

export default Home