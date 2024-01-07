import React from 'react';
import './About.css';
import aboutBackground from '../../Denkerreact/img17.JPG'


const About = () => {

  const containerStyle = {
    backgroundImage: `url(${aboutBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };


  return (
    <section className='about-section' style={containerStyle}>
      <div className="about-container">
      <h2>About Us</h2>
      <p>
        Denker Tours and Travel is a locally-owned tour operator in Kenya registered under the name of DENKER TOURS AND SAFARIS. Our Kenya Tourism Licence Number is TRAI/47/C01/221 issued by the Tourism Regulatory Authority (TRA) with headquarters in Nairobi, Kenya.
      </p>
      <p>
        We have diverse knowledge of the tourism products in this region, including wildlife safaris, mountain climbing, beach holidays, family packages, student packages, and other tailor-made itineraries. We also arrange private, custom tours, group tours (including business/corporate), donation/fund-raising tours, and incentive tours. Depending on the size of your group, each person can receive a group discount and/or the group leader can travel for FREE!!!
      </p>
      <p>
        We can customize your tour to match your specific needs and budget. We can also design tours to generate donations/funds for your non-profit organization or to motivate employees to achieve business goals. With over a decade of experience specializing in African travel, we negotiate the best group rates with domestic (destination country) airlines, first-class hotels, exclusive ecolodges, and fine restaurants. Our experienced workforce knows East Africa. They will work closely with you or your organization to address all concerns before your scheduled departure. We assure satisfaction throughout your travels with us.
      </p>

      </div>
    </section>
  );
}

export default About;


