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
destTitle: '4days Masai Mara-Lake Nakuru',
location: 'Nakuru',
grade: 'WILDLIFE SAFARI',
description: 'Explore two of the top game parks in Kenya - Masai Mara(A large game reserve in south western Kenya famous for its exceptional population of lions, leopards, cheetahs and its annual migration of zebra and wildebeest) and Lake Nakuru National Park(Famous for the big five and birds’ sanctuary, it hosts an abundance of birds and varied wildlife) on thrilling game viewing drives over 4 adventure-filled days.',
},

{
id:2,
 imgSrc: img33,
 destTitle: '5days Masai Mara-Lake Nakuru-Hells Gate ',
 location: 'Nakuru',
 grade: 'NATIONAL PARK',
 description: 'While in this budget camping tour you will be able to visit 3 Parks; Masai Mara known as the 7th wonder of the world-wildebeest Migration, the pink Lake Nakuru home to millions of flamingoes and home of the white and Black Rhino, Hells gate and Lake Naivasha with activities such as walking into the gorges and boat ride and cycling and viewing of the great Rift valley escarpment.',
},

{
 id:3,
imgSrc: img28,
destTitle: '4days Tsavo West-Amboseli National Park',
location: 'Nakuru',
grade: 'WILDLIFE EXPERIENCE',
description: 'Welcome to one of the best safaris  from Nairobi! See the Elephants, Lions otherwise known as-the man eaters of Tsavo-, Buffalo, cheetah, Giraffe and other plain game, wooded grasslands, plains, Mzima springs, river forest and the famous Mt. Kilimanjaro known for its snow cap. The Maasai tribes people and their local culture. A relaxed family and seniors friendly trip with more time in the National parks.',
},

{
id:4,
imgSrc: img34,
destTitle: '7days Aberdare,Samburu,Lake Nakuru,Masai Mara',
location: 'Nakuru',
grade: 'WILDLIFE EXPERIENCE',
description: 'This is a safari geared towards wildlife enthusiasts. If you are looking to see loads of game, this is the tour for you! Traveling to the big names of Kenyas National Parks, including the Aberdare, Samburu and Masai Mara, you are guaranteed superb game viewing opportunities. In between game viewing, there is a cultural visit to the indigenous Masai tribe to learn more about their culture.',
},

{
id:5,
imgSrc: img6,
destTitle: '3days Meru National Park Safari',
location: 'Meru',
grade: 'BIG 5',
description: 'A commonly accepted area as the setting where Elsa the Joy Adamson lioness, was returned to the wild. Meru provides an astonishing combination of incomparable habitats. Dense riverine forests attract Leopards and a full complement of (the big five)including Black Rhino, in a dramatic setting adorned with doum palms.The park is famous for its birdlife with forest and riverine as well as the arid species. Regular sightings include elephant, white rhino, Gerenuk, eland, reticulated Beisa, Oryx, Grevys Zebra, grants gazelle, Giraffe, and their predators; lion, leopard, cheetah and the hyena.',
},

{
id:6,
imgSrc: img17,
destTitle: '7days Masai Mara-Lake Nakuru-Mt Kenya-Amboseli',
location: 'Amboseli',
grade: 'WILDLIFE EXPERIENCE',
description: 'This safari features the open plains of the Masai Mara famous for its annual migration of Wildebeests and Zebras, the waters of Lake Nakuru home to millions of lesser and greater flamingoes to Amboseli game viewing with Mount Kilimanjaro in the backdrop.',
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
       Classic Kenyan Packages
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
              <span>{grade}<small></small></span>
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