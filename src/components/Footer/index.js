import React from 'react';
import './footer.css'; // Assuming you have a corresponding CSS file for styling.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const handleScroll = (event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const target = document.querySelector("#mainpage");
    if (target) {
      target.scrollIntoView({
        behavior: "smooth", // Enables smooth scrolling
      });
    }
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Side: Thank You Message and Map */}
        <div className="thank-you">
          <strong>Thank you for visiting!</strong>
          <div className="map-container">
            <h3>Find Us Here!</h3>
            <iframe
            title="myaddress"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37646.03295100921!2d85.17511397083388!3d25.741877521834315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1731434245291!5m2!1sen!2sin"
              width="130%"   // Set width to 100% to make it responsive
              height="300"   // Adjust height as needed
              style={{ border: 'none', maxWidth: '130%' }} // Ensure no border and proper width scaling
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>
        </div>

        {/* Right Side: Contact Info and Languages */}
        <div className="contact-languages">
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:graj29584@gmail.com">graj29584@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919117886838">+91 9117886838</a></p>
            <p><strong>Address:</strong> P5WW+C78, Unnamed Road, Shrirampur, Kutubpur Dumri, Bihar 844102</p>
          </div>
          <div className="languages">
            <p><strong>Languages:</strong></p>
            <p>English</p>
            <hr />
            <p>Hindi</p>
          </div>
        </div>
    
      </div>

      {/* Go Up Arrow */}
      <a href="#mainpage" className="go-up" onClick={handleScroll}>
      <FontAwesomeIcon icon={faArrowUp} className="faArrowUp" />
    </a>
    </footer>
  );
}

export default Footer;
