
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
 itinerary: [
  {
    day: "Day 01: Nairobi - Lake Nakuru",
    details: [
      "Pick up from your hotel at 8:00 am.",
      "Drive for 2 hours to Lake Nakuru National Park for a game drive.",
      "Lake Nakuru is renowned for its spectacular flamingo population and large game animals.",
      "Lunch served on arrival followed by afternoon game viewing drives.",
      "Accommodation at Chester Hotel or Lake Nakuru Lodge.",
    ],
  },

  {
    day: "Day 02: Lake Nakuru - Masai Mara",
    details: [
      "Drive to Masai Mara Game Reserve after breakfast.",
      "Lunch at the camp or lodge followed by afternoon game viewing drives.",
      "Explore the 700 sq miles of open grassland dotted with acacia trees.",
      "Dinner and overnight at the Manyatta camp or a luxurious lodge.",
    ],
  },

  {
    day: "Day 03: Masai Mara",
    details: [
      "Full-day game drive with a picnic lunch.",
      "Witness abundant wildlife, including lion, elephants, giraffes, various gazelle species, zebra, cheetah, leopards, and more.",
      "Experience the annual wildebeest migration from July to October.",
      "Dinner and overnight at the camp or lodge.",
    ],
  },

  {
    day: "Day 04: Masai Mara - Lake Naivasha",
    details: [
      "Morning game drive at Masai Mara.",
      "Drive to Lake Naivasha with lunch en route.",
      "All meals and overnight at Taphe Guest Resort or a luxury accommodation around the lake.",
      "Optional boat ride at Lake Naivasha to view hippos and sport fishing.",
    ],
  },

  {
    day: "Day 05: Lake Naivasha / Hells Gate - Nairobi",
    details: [
      "Early breakfast, then drive to Hell's Gate National Park for a guided walking tour.",
      "Explore the spectacular cliffs, Hell's Gate gorge, and enjoy a variety of bird and animal sightings.",
      "Visit Fischer's Tower, a 25-m high calcium formation of volcanic rock.",
      "Drive to Nairobi later in the afternoon, arriving around 16:00 pm.",
      "Drop-off at your city hotel or airport.",
    ],
  },
],

stayLocations: ['Lake Nakuru', 'Maasai Mara', 'Lake Naivasha', 'Hells Gate'],
inclusions: [
  "Complementary airport transfer on arrival in Nairobi",
  "Transport while on safari - with pop-up roof safari vehicle",
  "All park entrance fees and government levies",
  "Full board accommodation in camp or lodge",
  "3 Meals per day while on safari- vegetarian & non-vegetarian",
  "English speaking professional driver guides",
  "Bottled drinking water - 1 litre per person per day",
],
exclusions: [
  "Expenses of personal nature",
  "Sodas and alcoholic drinks",
  "Laundry services",
  "Gratuities/tips",
  "Optional travel insurance",
  "Entry visa",
  "Health requirements (you are entering a Malaria area)",
  "Accommodation in Nairobi (can be arranged on request)",
],
},

{
 id:3,
imgSrc: img28,
destTitle: '4days Tsavo West-Amboseli National Park',
location: 'Tsavo West, Amboseli',
grade: 'WILDLIFE EXPERIENCE',
description: 'Welcome to one of the best safaris from Nairobi! See the Elephants, Lions otherwise known as-the man eaters of Tsavo-, Buffalo, cheetah, Giraffe and other plain game, wooded grasslands, plains, Mzima springs, river forest and the famous Mt. Kilimanjaro known for its snow cap. The Maasai tribes people and their local culture. A relaxed family and seniors friendly trip with more time in the National parks.',
itinerary: [
  {
    day: "Day 1: Nairobi – Tsavo West",
    details: [
      "After breakfast, depart for Tsavo West National Park.",
      "Explore the Mzima Springs, a remarkable oasis replenished with crystal clear water.",
      "Visit nature trails, an observation platform, and an underwater glass tank.",
      "Arrive in time for lunch at the camp or lodge within the Park.",
      "Evening game drive to see large herds of Elephants, Buffalo, common Waterbuck, Eland, Gerenuk, Masai Giraffe, Black rhino, and antelopes.",
      "Return to the camp or lodge for dinner and overnight stay.",
    ],
  },

  {
    day: "Day 2: Tsavo West - Amboseli",
    details: [
      "After breakfast, head for the bushy country of Amboseli National Park.",
      "Experience an afternoon game drive at the foot of Africa's highest mountain, Mt Kilimanjaro.",
      "Accommodation at Kibo Luxury tented camp or AA Amboseli Lodge.",
    ],
  },

  {
    day: "Day 3: Amboseli National Park",
    details: [
      "Early morning full-day game viewing drives with magnificent views of Mt Kilimanjaro.",
      "Spot elephants, hippopotamus, giraffe, lion, and black rhino.",
      "Capture Kenya's most spectacular wildlife displays and create photographic memories.",
    ],
  },

  {
    day: "Day 4: Amboseli - Nairobi",
    details: [
      "Early morning game viewing followed by breakfast.",
      "Depart Amboseli for a drive back to Nairobi, arriving early afternoon.",
    ],
  },

],

stayLocations: ['Tsavo-west', 'Amboseli'],
inclusions: [
  "Complementary airport transfer on arrival in Nairobi",
  "Transport while on safari - with pop-up roof safari vehicle",
  "All park entrance fees and government levies",
  "Full board accommodation in camp or lodge",
  "3 Meals per day while on safari- vegetarian & non-vegetarian",
  "English speaking professional driver guides",
  "Bottled drinking water - 1 litre per person per day",
],
exclusions: [
  "Expenses of personal nature",
  "Sodas and alcoholic drinks",
  "Laundry services",
  "Gratuities/tips",
  "Optional travel insurance",
  "Entry visa",
  "Health requirements (you are entering a Malaria area)",
  "Accommodation in Nairobi (can be arranged on request)",
],
},

{
id:4,
imgSrc: img34,
destTitle: '7days Aberdare,Samburu,Lake Nakuru,Masai Mara',
location: 'Aberdare, Samburu, Lake Nakuru',
grade: 'WILDLIFE EXPERIENCE',
description: 'This is a safari geared towards wildlife enthusiasts. If you are looking to see loads of game, this is the tour for you! Traveling to the big names of Kenyas National Parks, including the Aberdare, Samburu and Masai Mara, you are guaranteed superb game viewing opportunities. In between game viewing, there is a cultural visit to the indigenous Masai tribe to learn more about their culture.',
itinerary: [
  {
    day: "Day 01: Nairobi - Samburu Game Park",
    details: [
      "Drive into Kenya's rugged northeastern region, home of the colorful Samburu tribespeople.",
      "Cross the Equator en route, arriving at the Samburu Sopa Lodge for lunch.",
      "Afternoon game viewing drives with unique species like the Grevy Zebra, Reticulated Giraffe, Gerenuk, Beisa Oryx, and Somali Ostrich.",
      "Accommodation at Samburu Sopa Lodge.",
      "Meal plan: {L, D}",
    ],
  },

  {
    day: "Day 02: Samburu Game Park",
    details: [
      "Full day spent in Samburu with early morning and afternoon game drives in Samburu Game Reserve.",
      "Spot unique wildlife like the Reticulated Giraffe, blue-legged Somali Ostrich, long-necked Gerenuk gazelle, and straight-horned Beisa Oryx antelope.",
      "Accommodation at Samburu Sopa Lodge.",
      "Meal plan: {B, L, D}",
    ],
  },

  {
    day: "Day 03: Samburu - Aberdare National Park",
    details: [
      "Drive to Aberdare Country Club or Outspan Hotel for lunch.",
      "Transfer to The Ark or Treetops Lodge for an overnight stay with night observation of animals at the floodlit water hole.",
      "Explore the diverse topography, waterfalls, rainforests, and unique flora and fauna of Aberdare National Park.",
      "Accommodation: Treetops Lodge.",
      "Meal plan: {L, D}",
    ],
  },

  {
    day: "Day 04: Aberdare National Park - Lake Nakuru",
    details: [
      "After breakfast, transfer back to the Aberdare Country Club or Outspan hotel.",
      "Drive to Lake Nakuru in time for lunch followed by afternoon game viewing drives.",
      "Lake Nakuru's claim to fame is anchored on its flamingos and over 400 bird species.",
      "Spectacular views and sightings of elephants, buffalos, lions, waterbuck, and more.",
      "Accommodation at Chester Hotel or Lake Nakuru Lodge.",
    ],
  },

  {
    day: "Day 05: Lake Nakuru – Masai Mara",
    details: [
      "After breakfast, depart for Maasai Mara game reserve, the northern part of the Serengeti.",
      "Lunch at the camp followed by afternoon game viewing drives.",
      "Explore the endless acacia-dotted grasslands and diverse wildlife of Masai Mara.",
      "Accommodation at the camp or Lodge.",
      "Meal plan: {B, L, D}",
    ],
  },

  {
    day: "Day 06: Masai Mara",
    details: [
      "Full day game viewing drives with morning game viewing drive to the Mara River.",
      "Witness the resident hippos and crocodiles. Mara is abundant with lions, elephants, giraffes, and more.",
      "Optional hot air balloon ride and visit to a Maasai Village can be arranged.",
      "Accommodation at the camp or Lodge.",
      "Meal plan: {B, L, D}",
    ],
  },

  {
    day: "Day 07: Masai Mara - Nairobi",
    details: [
      "Morning game drive followed by breakfast.",
      "Drive back to Nairobi to arrive around 16:00 pm.",
      "Meal plan: {B}",
    ],
  },
],

stayLocations: ['Aberdare', 'Masai Mara', 'Samburu', 'Lake Nakuru'],
inclusions: [
  "Complementary airport transfer on arrival in Nairobi",
  "Transport while on safari - with pop-up roof safari vehicle",
  "All park entrance fees and government levies",
  "Full board accommodation in camp or lodge",
  "3 Meals per day while on safari- vegetarian & non-vegetarian",
  "English speaking professional driver guides",
  "Bottled drinking water - 1 litre per person per day",
],
exclusions: [
  "Expenses of personal nature",
  "Sodas and alcoholic drinks",
  "Laundry services",
  "Gratuities/tips",
  "Optional travel insurance",
  "Entry visa",
  "Health requirements (you are entering a Malaria area)",
  "Accommodation in Nairobi (can be arranged on request)",
],

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
itinerary: [
  {
    day: 'Day 01: Nairobi - Masai Mara National Reserve',
    details: [
      'Pick up from your hotel at 07:30am and drive to the Masai Mara national reserve.',
      'Lunch at the Camp/lodge.',
      'Afternoon game drive through the reserve with endless acacia-dotted grasslands.',
      'Spot pride of Lions, Elephants, buffaloes, zebras, and numerous plain animals.',
      'Return for dinner at the camp or lodge for dinner and overnight stay.',
    ],
  },

  {
    day: 'Day 02: Full day game drive at Masai Mara',
    details: [
      'Masai Mara is one of the most famous reserves in Africa, part of the Kenyan section of Serengeti plains.',
      'Abundant wildlife and the traditional land of the Maasai people.',
      'Mara is 700 sq miles of open grassland with flat-topped acacia trees.',
      'Watered by the tree-lined Mara River and its tributary the Talek River.',
      'Return for dinner at the camp or lodge.',
    ],
  },

  {
    day: 'Day 03: Masai Mara - Lake Nakuru',
    details: [
      'After breakfast, game drive enroute to Lake Nakuru national park.',
      'Lunch followed by afternoon game drive.',
      'Lake Nakuru, a Ramser Site, hosts "the world\'s greatest ornithological spectacle".',
      'Opportunity to view over two million flamingos along with other birds.',
      'Explore areas of grassland, bush, forest, rocky cliffs, and various animals.',
    ],
  },

  {
    day: 'Day 04: Lake Nakuru - Mt. Kenya',
    details: [
      'After breakfast, depart from Nakuru and drive north through cultivations of coffee and pineapple to Mt. Kenya.',
    ],
  },

  {
    day: 'Day 05: Mt. Kenya - Amboseli National Park',
    details: [
      'Depart early in the morning towards Amboseli via Nairobi.',
      'Lunch at the camp/lodge followed by afternoon game drive.',
      'Amboseli is famous for unforgettable views of Kilimanjaro and a relaxed abundant population of elephants.',
    ],
  },

  {
    day: 'Day 06: Amboseli National Park',
    details: [
      'Morning and afternoon game drives where Mount Kilimanjaro offers a good photographic scenery.',
      'Witness herds of elephants and other animals against the Kilimanjaro backdrop.',
    ],
  },

  {
    day: 'Day 07: Amboseli - Nairobi',
    details: [
      'Morning game viewing drive before breakfast game viewing.',
      'After breakfast, drive back to Nairobi arriving around 15:00pm.',
    ],
  },
],
stayLocations: ['Lake Nakuru', 'Maasai Mara', 'Mount Kenya', 'Amboseli'],
inclusions: [
  'Complementary airport transfer on arrival in Nairobi',
    'Transport while on safari - with pop-up roof safari vehicle',
    'All park entrance fees and government levies',
    'Full board accommodation in campsites/lodges - double room sharing',
    '3 Meals per day while on safari - vegetarian & non-vegetarian',
    'English speaking professional driver guides',
    'Bottled drinking water - 1 litre per person per day',
],
exclusions: [
  'Complementary airport transfer on arrival in Nairobi',
  'Transport while on safari - with pop-up roof safari vehicle',
  'All park entrance fees and government levies',
  'Full board accommodation in campsites/lodges - double room sharing',
  '3 Meals per day while on safari - vegetarian & non-vegetarian',
  'English speaking professional driver guides',
  'Bottled drinking water - 1 litre per person per day',
],
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


