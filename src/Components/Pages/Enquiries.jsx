import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import './Enquiries.css'

const Enquiries = () => {

  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      // Display error message if form is incomplete
      setIsError(true);
      // Clear the error message after a few seconds
      setTimeout(() => {
        setIsError(false);
      }, 3000);
      return;
    }

    emailjs.sendForm('service_5q1y6d2', 'template_ef2oly9', form.current, 'gyC4ysOb3qX8cDAod')
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message Sent');
          // Reset the form after successful submission
          form.current.reset();
          // Set isSuccess to true to display the success message
          setIsSuccess(true);
          // Clear the success message after a few seconds
          setTimeout(() => {
            setIsSuccess(false);
          }, 5000);
          // Clear the error message if any
          setIsError(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

   

  return (
    <div className="center-form">
    {isError && <div className="error-message">Kindly fill in all fields before submitting. Thank you</div>}
    <form ref={form} onSubmit={sendEmail}>
    <label>Your Name</label>
    <input type="text" name="user_name" />
    <label>Your Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
  {isSuccess && <div className="success-message">Your Enquiry Email has been sent successfully!</div>}
  </div>
  )
}

export default Enquiries;


