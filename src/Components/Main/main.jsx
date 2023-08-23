import React, {useEffect} from 'react'
import './main.scss'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsBagHeart} from 'react-icons/bs'

//importing images
import img27 from '../../Denkerreact/img27.jpg'
import img33 from '../../Denkerreact/img33.jpg'
import img28 from '../../Denkerreact/img28.jpg'
import img34 from '../../Denkerreact/img34.jpg'
import img6 from '../../Denkerreact/img6.JPG'
import img17 from '../../Denkerreact/img17.JPG'

import Aos from 'aos'
import 'aos/dist/aos.css'

//pasting data array
const Data = [
{
id:1,
imgSrc: img27,
destTitle: 'Lake Nakuru-Maasai Mara',
location: 'Nakuru',
grade: 'WILDLIFE EXPERIENCE',
days: '4days',
description: 'Explore two of the top game parks in Kenya - Masai Mara(A large game reserve in south western Kenya famous for its exceptional population of lions, leopards, cheetahs and its annual migration of zebra and wildebeest) and Lake Nakuru National Park(Famous for the big five and birds’ sanctuary, it hosts an abundance of birds and varied wildlife) on thrilling game viewing drives over 4 adventure-filled days.',
},

{
id:2,
 imgSrc: img33,
 destTitle: 'Lake Nakuru-Maasai Mara',
 location: 'Nakuru',
 grade: 'WILDLIFE EXPERIENCE',
days: '4days',
 description: 'Explore two of the top game parks in Kenya - Masai Mara(A large game reserve in south western Kenya famous for its exceptional population of lions, leopards, cheetahs and its annual migration of zebra and wildebeest) and Lake Nakuru National Park(Famous for the big five and birds’ sanctuary it hosts an abundance of birds and varied wildlife) on thrilling game viewing drives over 4 adventure-filled days.',
},

{
 id:3,
imgSrc: img28,
destTitle: 'Lake Nakuru-Maasai Mara',
location: 'Nakuru',
grade: 'WILDLIFE EXPERIENCE',
days: '4days',
description: 'Explore two of the top game parks in Kenya - Masai Mara(A large game reserve in south western Kenya famous for its exceptional population of lions, leopards, cheetahs and its annual migration of zebra and wildebeest) and Lake Nakuru National Park(Famous for the big five and birds’ sanctuary it hosts an abundance of birds and varied wildlife) on thrilling game viewing drives over 4 adventure-filled days.',
},

{
id:4,
imgSrc: img34,
destTitle: 'Lake Nakuru-Maasai Mara',
location: 'Nakuru',
grade: 'WILDLIFE EXPERIENCE',
days: '4days',
description: 'Explore two of the top game parks in Kenya - Masai Mara(A large game reserve in south western Kenya famous for its exceptional population of lions, leopards, cheetahs and its annual migration of zebra and wildebeest) and Lake Nakuru National Park(Famous for the big five and birds’ sanctuary it hosts an abundance of birds and varied wildlife) on thrilling game viewing drives over 4 adventure-filled days.',
},

{
id:5,
imgSrc: img6,
destTitle: 'Lake Nakuru-Maasai Mara',
location: 'Nakuru',
grade: 'WILDLIFE EXPERIENCE',
days: '4days',
description: 'Explore two of the top game parks in Kenya - Masai Mara(A large game reserve in south western Kenya famous for its exceptional population of lions, leopards, cheetahs and its annual migration of zebra and wildebeest) and Lake Nakuru National Park(Famous for the big five and birds’ sanctuary it hosts an abundance of birds and varied wildlife) on thrilling game viewing drives over 4 adventure-filled days.',
},

{
id:6,
imgSrc: img17,
destTitle: 'Lake Nakuru-Maasai Mara',
location: 'Nakuru',
grade: 'WILDLIFE EXPERIENCE',
days: '4days',
description: 'Explore two of the top game parks in Kenya - Masai Mara(A large game reserve in south western Kenya famous for its exceptional population of lions, leopards, cheetahs and its annual migration of zebra and wildebeest) and Lake Nakuru National Park(Famous for the big five and birds’ sanctuary it hosts an abundance of birds and varied wildlife) on thrilling game viewing drives over 4 adventure-filled days.',
},

]

const Main = () => {
//add scroll animation with react hook
useEffect(()=>{
  Aos.init({duration: 2000})
}, [])


  return (
    <section className='main container section'>

     <div className="secTitle">
      <h3  data-aos="fade-right"className="title">
        Popular Destinations
      </h3>
     </div>

    <div className="secContent grid">

    {/* using high order array grid,create an array with data and from that .map() array to fetch each destination at once*/}
     
     {
       Data.map(({id, imgSrc, destTitle, location, grade, days, description}) =>{
      return(
        <div key={id} 
        data-aos="fade-up"
        className="singleDestination">
          {/* return single i from map array */}

             <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
             </div>

         <div className="cardInfo">
          <h4 className="destTitle">
            {destTitle}
          </h4>
          <span className="continent flex">
         <HiOutlineLocationMarker className='icon'/>
         <span className="name">{location}</span>
          </span>

          <div className="days flex">
            <div className="grade">
              <span>{grade}<small>+1</small></span>
            </div>
            
            <div className="price">
              <h5>{days}</h5>
            </div>
          </div>

        <div className="desc">
          <p>{description}</p>
        </div>

         <button className='btn flex'>
          DETAILS <BsBagHeart className="icon"/>
         </button>

         </div>

        </div>

      )

       })

     }

    </div>

    </section>
  )
}

export default Main