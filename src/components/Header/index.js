// Header.js
import React from 'react';

import './header.css'; // Update the path if needed


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSquareWhatsapp, faLinkedin, faSquareGithub, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import About from '../About/index.js';
import Footer from '../Footer/index.js';
import Service from '../Service/index.js';
import Skills from '../About/skills.js';
import Contect from '../contact/index.js';
import Projects from '../Projects/index.js';


const Header = () => {

  return (
    <div className="maincontainer" id="mainpage">
      <div className="animated-text">
        <span>G</span><span>A</span><span>U</span><span>T</span><span>A</span><span>M</span>
        <span className="space"></span>
        <span>R</span><span>A</span><span>J</span>
      </div>



      <div className="myprofile">
        <div className="mainprfile">
          <div className="procontainer">
            <h2>Hello! I'm</h2>
            <h1>Web Developer</h1>
            <p id="introline">
              Hello! I’m Gautam Raj, a passionate web developer dedicated to transforming creative ideas into engaging digital experiences. With a strong foundation in front-end technologies like HTML, CSS, and JavaScript.
            </p>
            <button>
              <a href="/resume.pdf"  className="download-button" download>Download CV</a>
            </button>
            <ul className="profileidlink">
              <li className="idlink">
                <a href="https://wa.me/919117886838" >
                  <FontAwesomeIcon icon={faSquareWhatsapp} className="fa-whatsapp" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="idlink">
                <a
                  href="https://www.linkedin.com/in/gautam-raj-332390252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link">
                  <FontAwesomeIcon icon={faLinkedin} className="fa-linkedin" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li className="idlink">
                <a
                  href="https://github.com/Mrgautam-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link">
                   <FontAwesomeIcon icon={faSquareGithub} className="fa-github" />
                   <span>GitHub</span>
                </a>
              </li>
              <li className="idlink">
                <a
                  href="https://www.facebook.com/Gautam Sharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link">
                  <FontAwesomeIcon icon={faSquareFacebook} className="fa-facebook" />
                  <span>Facebook</span>
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Service/>
      <Contect />
      <Footer />

    </div>
  );
};

export default Header;
