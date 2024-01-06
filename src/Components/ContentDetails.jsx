import React from 'react'
import { useParams } from 'react-router-dom'
import { Data } from './Pages/Packages'


const ContentDetails = () => {
    const { id } = useParams();
    console.log('Data', Data);
    console.log('id', id);
  
  const destination = Data.find((item) => item.id === parseInt(id));

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div>
      <h2>{destination.destTitle}</h2>
      <h3>ITINERARY</h3>
      {destination.itinerary.map((day) => (
        <div key={day.day}>
          <p>{day.day}</p>
          <ul>
            {day.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ContentDetails;