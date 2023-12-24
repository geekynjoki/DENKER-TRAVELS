import React, {useEffect} from 'react'
import './footer.scss'
import video from '../../Denkerreact/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {MdTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import {MdEmail} from 'react-icons/md'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
//add scroll animation with react hook
useEffect(()=>{
  Aos.init({duration: 2000})
}, [])



  return (
   <section className='footer'>
 <div className="videoDiv">
  <video src={video} loop autoPlay muted type="video2/mp4"></video>
 </div>

<div className="secContent container">
  <div className="contactDiv flex">
 <div data-aos="fade-up" className="text">
  <small>KEEP IN TOUCH</small>
  <h2>
    Phone/Whatsapp: +254722953544
  </h2>
 </div>


  </div>

  <div className="footerCard flex">
  <div className="footerIntro flex">
    <div className="logoDiv">
      <a href="#" className='logo flex'>
        <MdTravelExplore className="icon"/>
        Denker Ltd.
      </a>
    </div>

     <div data-aos="fade-up"
     className="footerParagraph">
     Denker Tours & Safaris is a tour company founded in Kenya by an expert tour guide with vast knowledge and enthusiasm in nature, wildlife, tourism and travels. We have great love for conservation and wildlife photography, we passionately share our African biodiversity in the safaris we offer. We specialize in tailor-made safaris which capture the essence of Romance, adventure and beautiful memories.
     </div>

     <div data-aos="fade-up"
     className="footerSocials flex">
      <a href='https://twitter.com'>
      <AiOutlineTwitter className="icon"/>
      </a>
      <a href='https://www.facebook.com'>
      <AiFillFacebook className="icon"/>
      </a>
      <a href='https://www.instagram.com'>
      <AiFillInstagram className="icon"/>
      </a>
      <a href='https://mail.google.com/mail/u/0/#inbox'>
      <MdEmail className="icon"/>
      </a>
      <a href='https://www.tripadvisor.com'>
      <FaTripadvisor className="icon"/>
      </a>
     </div>
  </div>

  <div className="footerLinks grid">
     {/* group one */}
     <div data-aos="fade-up"
      data-aos-duration="3000"
     className="linkGroup">
      <span className="groupTitle">
        OUR AGENCY
      </span>

      <li className="footerList flex">
      <FiChevronRight className="icon"/>  
      Services
      </li>

      <li className="footerList flex">
      <FiChevronRight className="icon"/>  
      Payment
      </li>

      <li className="footerList flex">
      <FiChevronRight className="icon"/>  
      Terms & Conditions
      </li>

      <li className="footerList flex">
      <FiChevronRight className="icon"/>  
      Why Choose us
      </li>

     </div>
     </div>


<div className="footerDiv flex">
  <small>@2023 Denker Tours and Safaris | Website managed by Cynthia Gathura </small>
</div>
  </div>
</div>

   </section>
  )
}

export default Footer


