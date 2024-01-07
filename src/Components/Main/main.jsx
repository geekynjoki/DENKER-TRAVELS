
import React, {useEffect, useState} from 'react'
import './main.scss'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsBagHeart} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle } from "react-icons/ai";

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
itinerary: [
  {
    day: 'Day 1 – Nairobi to Lake Nakuru',
    details: [
      'Your safari starts with pick up at 7:30 AM from your Nairobi hotel or Airport and drive to Nakuru.',
      'You will stop for views of the Great Rift Valley then proceed to Nakuru.',
      'Arrive in time for lunch and then relax.',
      '1600hrs: Start the evening game drive.',
      'Highlights here are that this is home to hundreds of Rhinos, both, black and white Rhinos, and other wildlife and lots of bird life.',
      'After the game drive, we head back to lodge/camp freshen up and enjoy a freshly prepared Dinner.',
    ],
  },
  {
    day: 'Day 2 – Lake Nakuru to Maasai Mara',
    details: [
      'After breakfast, you will then drive to Maasai Mara,',
      'A Maasai Mara safari is an unmissable highlight of any holiday in Kenya. There are breathtaking panoramas in every direction, a vast range of wildlife including the Big Five and a rich cultural heritage to explore. Kenya’s Maasai Mara is without doubt one of the greatest safari destinations in Africa.',
      'Between July and October things get busy in the Great Rift Valley. Millions of zebra and wildebeest make the perilous crossing across the Maasai Mara in search of new grazing territory. And in their wake comes a veritable horde of predators including lion and leopard.',
      'Arrive in time for lunch and then have time to relax from the drive.',
      '1600hrs: depart on an afternoon game drive.',
      '1830hrs: return to lodge/camp for dinner and overnight stay.',
    ],
  },
  {
    day: 'Day 3 – Maasai Mara',
    details: [
      'Today’s itinerary is flexible and you can discuss with your guide and plan for the day’s schedule.',
      'You can either have a relaxed breakfast and depart for full day game drives around 7:30 am with picnic lunch. This will give you a chance to visit the Mara River where the migration happens during its time. Also better chances to view wildlife all day and return back to the lodge/camp late afternoon.',
      'Or: –',
      '600hrs: Early morning game drive. Later return to your accommodation for breakfast and relax for the morning until mid-afternoon.',
      '1600hrs: depart on an afternoon game drive.',
      '1830hrs: return to lodge/camp for dinner and overnight stay.',
    ],
  },
  {
    day: 'Day 4 – Maasai Mara to Nairobi',
    details: [
      'Depending on your flight details you will organize with your guide on your departure from Maasai Mara.',
      'You will be transferred to your Nairobi Location or to the airport for your home bound flight.',
    ],
  },
],
stayLocations: ['Lake Nakuru', 'Maasai Mara', 'Maasai Mara', 'Nairobi'],
inclusions: [
  'Park Fees (for Non-Residents).',
  'Daily game drives while on Safari.',
  'A professional driver/guide.',
  '4×4 Land Cruisers or Safari Van.',
  'All Taxes and VAT.',
  'Meals as per itinerary.',
  'Drinking water while on safari (2 liters per person per day).',
],
exclusions: [
  'International flights.',
  'Airport Transfers (Unless mentioned otherwise).',
  'Additional accommodation before and at the end of the tour (Unless mentioned otherwise).',
  'Tips.',
  'Personal Items (Souvenirs, Travel Insurance, Visa Fees, etc.).',
  'Government imposed increase of Taxes and or Park Fees.',
  'Any activities not mentioned in the itinerary.',
],
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
destTitle: '3 days Amboseli Safari',
location: 'Amboseli',
grade: 'BIG 5',
description: 'A commonly accepted area as the setting where Elsa the Joy Adamson lioness, was returned to the wild. Meru provides an astonishing combination of incomparable habitats. Dense riverine forests attract Leopards and a full complement of (the big five)including Black Rhino, in a dramatic setting adorned with doum palms.The park is famous for its birdlife with forest and riverine as well as the arid species. Regular sightings include elephant, white rhino, Gerenuk, eland, reticulated Beisa, Oryx, Grevys Zebra, grants gazelle, Giraffe, and their predators; lion, leopard, cheetah and the hyena.',
itinerary: [
  {
    day: 'Day 1 - Nairobi to Amboseli',
    details: [
      'Your safari starts with pick up at 7:30 AM from your Nairobi hotel or Airport and drive to Amboseli.',
      'Arrive in Amboseli shortly after noon and check into your lodge/camp, have hot lunch and then have some time to rest.',
      '1600 hrs: - Depart for an afternoon game drive.',
      'The highlight here is that Amboseli has the greatest concentration of elephants in the world. It is home to over 1600 elephants from 56 different families. Each of the elephants has a name and a photo attached to it’s name.',
      'After the game drive, we head back to lodge/camp freshen up and enjoy a freshly prepared Dinner.',
      'Overnight at your lodge/camp.',
    ],
  },
  {
    day: 'Day 2 - Amboseli',
    details: [
      'Today’s itinerary is flexible and you can discuss with your guide and plan for the day’s schedule.',
      'You can either have a relaxed breakfast and depart for full day game drives around 7:30 am with picnic lunch and return back to the lodge/camp late afternoon.',
      'Or you can depart at 600hrs on an early morning game drive. Later return to your accommodation for breakfast and relax for the morning until midafternoon.',
      '1600hrs:- depart on an afternoon game drive.',
      '1830hrs:- return to lodge/camp for dinner and overnight stay.',
    ],
  },
  {
    day: 'Day 3 - Amboseli to Nairobi',
    details: [
      'Depending on your flight details you will organize with your guide on your departure from Maasai Mara.',
      'You will be transferred to your Nairobi Location or to the airport for your home bound flight.',
    ],
  },
],
stayLocations: ['Amboseli', 'Amboseli', 'Nairobi'],
inclusions: [
  'Park Fees (for Non-Residents).',
  'Daily game drives while on Safari.',
  'A professional driver/guide.',
  '4×4 Land Cruisers or Safari Van.',
  'All Taxes and VAT.',
  'Meals as per itinerary.',
  'Drinking water while on safari (2 liters per person per day).',
],
exclusions: [
  'International flights.',
  'Airport Transfers (Unless mentioned otherwise).',
  'Additional accommodation before and at the end of the tour (Unless mentioned otherwise).',
  'Tips.',
  'Personal Items (Souvenirs, Travel Insurance, Visa Fees, etc.).',
  'Government imposed increase of Taxes and or Park Fees.',
  'Any activities not mentioned in the itinerary.',
],
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
  const [selectedDestination, setSelectedDestination] = useState(null);
  // const modalRef = useRef(null);
//add scroll animation with react hook



useEffect(() => {
  Aos.init({ duration: 2000 });
}, []);


const openModal = (id) => {
  const destination = Data.find((item) => item.id === id);
  setSelectedDestination(destination);
};


const closeModal = () => {
  setSelectedDestination(null);
};




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
       Data.map(({id, imgSrc, destTitle, location, grade,  description}) =>{
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

  <button onClick={(e) => openModal(id)} className="btn flex">
  DETAILS <BsBagHeart className="icon" />
</button>



         </div>

        </div>

      )
       })

     }

    </div>

    {selectedDestination && (
      <div className='modal-overlay'>
        <div className="modal">
          <div className="modal_content">
            <span className="close" onClick={closeModal}>
              <AiFillCloseCircle className="close-icon" />
            </span>
            <h2>{selectedDestination.destTitle}</h2>
           

           {/* Iterate through the itinerary days */}
  {selectedDestination.itinerary.map((day, index) => (
    <div key={index} className="itinerary-day">
      <h3>{day.day}</h3>
      {/* Use a list for each day's details */}
      <ul className="itinerary-list">
        {day.details.map((point, pointIndex) => (
          // List items with note dots
          <li key={pointIndex} className="itinerary-point">
            <span className="note-dot">&#8226;</span> {point}
          </li>
        ))}
      </ul>
    </div>
  ))}

  {/* Display stay locations, inclusions, and exclusions */}
  <div className="itinerary-section">
    <h3>Stay Locations</h3>
    <ul className="itinerary-list">
      {selectedDestination.stayLocations.map((location, index) => (
        <li key={index} className="itinerary-point">
          <span className="note-dot">&#8226;</span> {location}
        </li>
      ))}
    </ul>
  </div>

  <div className="itinerary-section">
    <h3>Inclusions</h3>
    <ul className="itinerary-list">
      {selectedDestination.inclusions.map((item, index) => (
        <li key={index} className="itinerary-point">
          <span className="note-dot">&#8226;</span> {item}
        </li>
      ))}
    </ul>
  </div>

  <div className="itinerary-section">
    <h3>Exclusions</h3>
    <ul className="itinerary-list">
      {selectedDestination.exclusions.map((item, index) => (
        <li key={index} className="itinerary-point">
          <span className="note-dot">&#8226;</span> {item}
        </li>
      ))}
    </ul>
  </div>


            {/* Add more details as needed */}
          </div>
        </div>
        </div>
      )}

    </section>
  )
}

export {Data};
export default Main;


