import React from 'react';
import './services.css';
import webdev from '../Img/istockphoto-1346294889-612x612.webp';
import ui from '../Img/premium_photo-1678565879444-f87c8bd9f241.avif';
import fullstack from '../Img/photo-1667372283536-a832e74401c2.avif';

const Services = () => {
  return (
    <section className="services" id="services">
    <h2 className="section-title">My Services</h2>
  
    <div className="service_container">
      <div className="servicecard">
        <h3>What Can I Do for You</h3>
        <p>
          I offer professional web and backend development services, specializing in full-stack Java development, MySQL database management, API integration (including Google APIs), and server creation using Node.js. <br /><br />
          Whether it’s building scalable web apps, e-commerce platforms, or deploying robust backend solutions, I ensure quality, speed, and affordability.
        </p>
        <ul className="myexpertise">
          <li>✔ On time / Fast delivery</li>
          <li>✔ Budget-friendly solutions</li>
          <li>✔ Quality assured development</li>
        </ul>
      </div>
  
      <div className="services-container">
        <div className="service">
          <h3>Web Development</h3>
          <div className="service-content">
            <img src={webdev} alt="Web Development" />
            <p>Responsive and modern websites using HTML, CSS, JavaScript, and React.</p>
          </div>
        </div>
  
        <div className="service">
          <h3>UI/UX Design</h3>
          <div className="service-content">
            <img src={ui} alt="UI/UX Design" />
            <p>Visually stunning and user-centered interfaces crafted with creativity and usability focus.</p>
          </div>
        </div>
  
        <div className="service">
          <h3>Full-Stack Development</h3>
          <div className="service-content">
            <img src={fullstack} alt="Full Stack Development" />
            <p>Complete frontend and backend solutions for web applications that scale effortlessly.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Services;
