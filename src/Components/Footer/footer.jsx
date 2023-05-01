import React from 'react'
import './footer.scss'
import video from '../../Denkerreact/video2.mp4'
import {FiSend} from 'react-icons/fi'

const footer = () => {
  return (
   <section className='footer'>
 <div className="videoDiv">
  <video src={video} loop autoPlay muted type="video2/mp4"></video>
 </div>

<div className="secContent container">
  <div className="contactDiv flex">
 <div className="text">
  <small>KEEP IN TOUCH</small>
  <h2>Travel with us</h2>
 </div>

 <div className="inputDiv flex">
  <input type="text" placeholder='Enter Email Address'/>
  <button className='btn flex' type='submit'>
     SEND<FiSend className="icon"/>
  </button>
 </div>
  </div>
</div>

   </section>
  )
}

export default footer
