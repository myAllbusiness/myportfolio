// src/components/About/index.js
import React, { useState } from 'react';
import './About.css'; // Update this path as needed
import profilePic from '../Img/Untitled design (5).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faSchool, faUniversity, faCode, faHeart, faLightbulb, faGlobe, faBug, faRocket, faPaintBrush, faServer, faUserCheck, faTools, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseOutsideClick = (e) => {
    if (e.target.className === "popup-overlay") {
      setIsModalOpen(false);
    }
  };

  return (
    <section className="about-myself" id="about">
      <header class="about-header">
        <div class="header-content">
          <h1 class="header-title">
            Welcome to <span class="highlighted-text">Gautam's</span>
          </h1>
          <h2 class="sub-title">
            Creative Haven of Innovation
          </h2>
        </div>

        <p class="header-description">
          Bridging imagination with innovation — I craft digital experiences where every line of code breathes life into ideas.
          Dive into a universe where design meets technology and creativity powers every pixel.
        </p>
      </header>


      <div class="about-content">
      <section class="about-me-section">
  <div class="about-header-side">
    <h1 class="about-heading">ABOUT<br/>ME</h1>
  </div>

  <div class="about-me-details fade-in">
    <img src={profilePic} alt="Gautam Raj" class="profile-pic" />

    <div class="about-me-text">
      <h2>Hello! I’m Gautam Raj, a Creative Explorer & Developer</h2>
      <p>
        I'm a passionate and creative individual with a love for exploration, music, and technology.
        As a recent computer science graduate, I have a strong foundation in frontend development
        and data entry, thriving in environments that allow me to blend technical skills with creativity.
        <br /><br />
        Beyond coding, I enjoy connecting with new people, traveling, and outdoor activities. Whether it's
        building a web application or crafting a song that captures life’s moments, I love bringing fresh ideas to life.
        <br /><br />
        I see myself as a simple, peace-loving person, driven by curiosity and a desire to make every day
        meaningful and creative.
      </p>
      <button class="know-more-btn" onClick={handleModalToggle}>Know more...</button>
    </div>
  </div>
</section>



  <section class="latest-ideas-section">
    <h4>Latest Ideas & Projects:</h4>
    <ul class="latest-ideas-list">
      <li><strong>1. Interactive Portfolio Website:</strong> A dynamic website showcasing my projects and skills, integrating animations for a better user experience.</li>
      <li><strong>2. Responsive E-commerce Platform:</strong> Developing an e-commerce site that adapts seamlessly across devices, enhancing the shopping experience.</li>
      <li><strong>3. Personal Blog:</strong> Creating a platform to share insights on web development trends, tips, and tutorials.</li>
      <li><strong>4. Web Development Workshop:</strong> Organizing online workshops to teach others about web development basics and best practices.</li>
      <li><strong>5. Community Project:</strong> Collaborating with local businesses to create websites that promote their services and increase online visibility.</li>
    </ul>
  </section>
</div>


      {/* Modal Popup for "Know more..." */}
      {isModalOpen && (
        <div className="popup-overlay" onClick={handleCloseOutsideClick}>
          <div className="popup-content">
            <span className="close-btn" onClick={handleModalToggle}>&times;</span>
            <h2>More About Me</h2>
            <div class="education-container">
              <h2>🎓 Educational Background</h2>
              <div class="education-item">  <FontAwesomeIcon icon={faSchool} /><h4>High School</h4> <p>Completed 12th grade at <strong>Gurukul Vidyapeeth</strong>, Hajipur, Bihar, India. This laid the groundwork for my analytical and problem-solving skills.</p> </div> <div class="education-item"> <FontAwesomeIcon icon={faUniversity} /><h4>Bachelor's Degree</h4> <p>Graduated with a <strong>Bachelor’s in Computer Applications (BCA)</strong> from <strong>Maulana Mazharul Haque Arabic and Persian University</strong>, Hajipur, Bihar. I specialized in programming, database management, and web development, preparing me to tackle real-world challenges.</p> </div> </div>

            <div class="skills-container">
              <h2>🛠️ Professional Skills and Approach</h2>
              <div class="skills-item">
                <FontAwesomeIcon icon={faUserCheck} />
                <h4>User-Centric Design</h4>
                <p>My focus is on creating **user-friendly, intuitive, and visually appealing designs** that align with modern UX/UI standards, ensuring optimal user experiences.</p>
              </div>
              <div class="skills-item">
                <FontAwesomeIcon icon={faLightbulb} />
                <h4>Creative Problem Solving</h4>
                <p>Bringing a fresh perspective to challenges, I leverage **innovative solutions** to meet client objectives and deliver impactful results.</p>
              </div>
              <div class="skills-item">
                <FontAwesomeIcon icon={faTools} />
                <h4>Adaptability and Growth</h4>
                <p>I stay updated with the **latest technologies** and design trends to integrate modern solutions into every project I undertake.</p>
              </div>
              <div class="skills-item">
                <FontAwesomeIcon icon={faHandsHelping} />
                <h4>Collaborative Mindset</h4>
                <p>By working closely with clients, I ensure that my designs reflect their goals and vision while offering insights for optimization and success.</p>
              </div>
            </div>

            <div class="goals-container">
              <h2>Current Goals 🚀</h2>
              <div class="goal">
                <FontAwesomeIcon icon={faPaintBrush} />
                <p><strong>Frontend Expertise 🎨</strong><br /> Mastering modern frontend technologies to craft visually stunning, user-friendly interfaces that create memorable experiences.</p>
              </div>
              <div class="goal">
                <FontAwesomeIcon icon={faServer} />
                <p><strong>Backend Proficiency 🛠️</strong><br /> Deepening my knowledge of server-side technologies, databases, and APIs to ensure secure, efficient, and scalable web applications.</p>
              </div>
              <div class="goal">
                <FontAwesomeIcon icon={faRocket} />
                <p><strong>Continuous Growth 🌱</strong><br /> Staying ahead of the curve by exploring new tools, frameworks, and industry trends to enhance my development toolkit.</p>
              </div>
            </div>
            <div className="collaboration-section">
              <p className="collaboration">
                💬 <strong>Let’s Collaborate!</strong>
                <br />
                Whether it’s a fresh idea or improving an existing project, I’d love to bring a creative and technical edge to your next venture. Feel free to reach out, and let’s build something amazing together!
              </p>
              <a
                href="https://wa.me/919117886838"
                className="whatsapp-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', marginTop: '10px', color: '#25D366' }}
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                <span>Chat with me on WhatsApp</span>
              </a>
            </div>


            <section id="fun-facts" class="fun-facts">
              <h2>Fun Facts About Me 💻</h2>
              <div class="facts-container">
                <div class="fact">
                  <FontAwesomeIcon icon={faCode} />
                  <i class="fas fa-code"></i>
                  <p><strong>Python Enthusiast 🐍:</strong> Python isn’t just my favorite language—it’s my superpower! Whether automating tasks, building web apps, or experimenting with data, Python always has my back.</p>
                </div>
                <div class="fact">
                  <FontAwesomeIcon icon={faHeart} />
                  <p><strong>Heartfelt Projects ❤️:</strong> My portfolio is a reflection of my passion and dedication. I built it from scratch with love, ensuring every detail showcases my skills and creativity.</p>
                </div>
                <div class="fact">
                  <FontAwesomeIcon icon={faGlobe} />
                  <p><strong>Haven’t Explored the World Yet 🌍:</strong> While I haven’t traveled internationally yet, I enjoy exploring the vast universe of coding. Every new language, framework, or tool is an adventure!</p>
                </div>
                <div class="fact">
                  <FontAwesomeIcon icon={faBug} />
                  <p><strong>Endless Debugging Fun 🔧:</strong> Debugging may frustrate others, but for me, it’s a rewarding puzzle that sharpens my problem-solving skills.</p>
                </div>
                <div class="fact">
                  <FontAwesomeIcon icon={faLightbulb} />
                  <p><strong>Creative Problem Solver 🧩:</strong> Whether writing clean, efficient code or coming up with unique solutions, I enjoy approaching challenges with creativity and logic.</p>
                </div>
              </div>
            </section>

            <blockquote>
              "Strive not to be a success, but rather to be of value." – Albert Einstein
            </blockquote>

            <div>
              <h2>🏆 Achievements and Certificates</h2>
              <img src="" alt="certificate 1" />
              <img src="" alt="certificate2" />
              <img src="" alt="certificate3" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
