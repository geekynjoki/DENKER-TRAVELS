import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '0722953544';

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <i className="fab fa-whatsapp" style={{ color: '#25d366', fontSize: '40px' }}></i>
    </div>
  );
};

export default WhatsAppButton;



