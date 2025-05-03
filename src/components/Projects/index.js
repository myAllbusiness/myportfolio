// src/components/Services/index.js
import React from 'react';
// Import the CSS for styling
import chatsitevideo from './Recording 2025-03-17 153405.mp4'
import video from './Recording 2025-03-17 151400.mp4';
import fullstack from '../Img/photo-1667372283536-a832e74401c2.avif';
import gymsite from './gymsite.mp4';
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
  return (
    <section className="services" id="services">
      <h2>My Projects</h2>
      <div className="service_container">
        <div className="services-container">
          <div className="service">
            <h3>Personal Chatting Site</h3>
            <div className="service-content">
              <video src={chatsitevideo} autoPlay muted loop width="300" height="200">
                Your browser does not support the video tag.
              </video>
              <p>
                A real-time personal chat application built using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>,
                with <b>iSocket</b> for the backend server. It ensures fast and reliable messaging, ideal for
                personal conversations.
              </p>
              <a
                href="https://chatsitefrontend.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
              >
                Visit Site <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </div>
          </div>

          <div className="service">
            <h3>E-commerce Platform</h3>
            <div className="service-content">
              <video src={video} autoPlay muted loop width="300" height="200">
                Your browser does not support the video tag.
              </video>
              <p>
                A fully functional and visually engaging e-commerce platform offering a smooth shopping experience.
                Developed with a modern tech stack ensuring quick load times, intuitive navigation, and seamless checkout.
              </p>
              <a
                href="https://myecommercesite-iix2.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
              >
                Visit Site <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </div>
          </div>
          <div className="service">
            <h3>Gym Site</h3>
            <div className="service-content">
              <video src={gymsite} autoPlay muted loop width="300" height="200">
                Your browser does not support the video tag.
              </video>
              <p>
                A modern and responsive gym website designed to showcase fitness services, training programs, and membership plans.
                Built with a clean UI and smooth navigation, it offers users an engaging platform to explore gym features and connect with trainers.
              </p>
              <a
                href="https://gymsite-d42y.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
              >
                Visit Site <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </div>
          </div>

          <div className="service">
            <h3>Full-Stack Development</h3>
            <div className="service-content">
              <img src={fullstack} alt="Full-Stack Development Icon" />
              <p>Develop complete solutions with front-end and back-end integration.</p>
            </div>
          </div>
          <div className="service">
            <h3>Full-Stack Development</h3>
            <div className="service-content">
              <img src={fullstack} alt="Full-Stack Development Icon" />
              <p>Develop complete solutions with front-end and back-end integration.</p>
            </div>
          </div>
          <div className="service">
            <h3>Full-Stack Development</h3>
            <div className="service-content">
              <img src={fullstack} alt="Full-Stack Development Icon" />
              <p>Develop complete solutions with front-end and back-end integration.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Projects;
