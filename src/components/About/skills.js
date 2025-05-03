import React from 'react';
import './About.css'; // Importing the CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faBootstrap, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faKeyboard, faLaptopCode, faFileExcel } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: faHtml5, info: 'Advanced knowledge of HTML', level: 'Expert' },
        { name: 'CSS', icon: faCss3Alt, info: 'Experienced in CSS styling and layouts', level: 'Expert' },
        { name: 'JavaScript', icon: faJs, info: 'Intermediate knowledge of JavaScript', level: 'Intermediate' },
        { name: 'React', icon: faReact, info: 'Basic knowledge of React components', level: 'Intermediate' },
        { name: 'Node.js', icon: faNode, info: 'Learning the fundamentals of Node.js', level: 'Intermediate' },
        { name: 'MySQL', icon: faDatabase, info: 'Good knowledge of MySQL databases', level: 'Intermediate' },
        { name: 'Typing', icon: faKeyboard, info: 'Typing speed of 40-45 words per minute', level: 'Expert' },
        { name: 'Bootstrap', icon: faBootstrap, info: 'Experience with Bootstrap for responsive design', level: 'Intermediate' },
        { name: 'C++', icon: faLaptopCode, info: 'Intermediate knowledge of C++ programming', level: 'Intermediate' },
        { name: 'Python', icon: faPython, info: 'Basic Python programming skills', level: 'Beginner' },
        { name: 'Excel', icon: faFileExcel, info: 'Basic knowledge of Microsoft Excel', level: 'Intermediate' },
    ];

    const getSkillLevelPercentage = (level) => {
        switch (level) {
            case 'Expert':
                return 100;
            case 'Intermediate':
                return 70;
            case 'Beginner':
                return 40;
            default:
                return 0;
        }
    };

    return (
        <section className="skills" id="skills">
            <h2>My Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill" key={index} data-info={skill.info}>
                        <FontAwesomeIcon icon={skill.icon} className="icon" />
                        <span>{skill.name}</span>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${getSkillLevelPercentage(skill.level)}%` }}
                            ></div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
