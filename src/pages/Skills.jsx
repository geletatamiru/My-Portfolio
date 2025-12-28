import { useEffect } from 'react';
import Html from '../assets/images/HTML5.svg';
import Css from '../assets/images/CSS3.svg';
import Js from '../assets/images/JavaScript.svg';
import ReactLogo from '../assets/images/React.svg';
import Node from '../assets/images/Node.js.svg';
import Express from '../assets/images/Express.svg';
import Mongo from '../assets/images/MongoDB.svg';
import Mysql from '../assets/images/Mysql.svg';

import './Skills.css';

const Skills = () => {
  useEffect(() => {
    function onScroll() {
      const frontend = document.querySelector('.frontend');
      const backend = document.querySelector('.backend');
      const db = document.querySelector('.db');

      const triggerPoint = window.innerHeight * 0.85; // Adjust if needed

      [frontend, backend, db].forEach((el) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top;

        if (top < triggerPoint) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Run on load

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-grid">
        {/* Frontend */}
        <div className="skill-category frontend">
          <h3>Frontend</h3>
          <div className="icon-grid">
            <div className="icon-wrapper"><img src={Html} alt="HTML" /><span>HTML</span></div>
            <div className="icon-wrapper"><img src={Css} alt="CSS" /><span>CSS</span></div>
            <div className="icon-wrapper"><img src={Js} alt="JavaScript" /><span>JavaScript</span></div>
            <div className="icon-wrapper"><img src={ReactLogo} alt="React" /><span>React</span></div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-category backend">
          <h3>Backend</h3>
          <div className="icon-grid">
            <div className="icon-wrapper"><img src={Node} alt="Node.js" /><span>Node.js</span></div>
            <div className="icon-wrapper"><img src={Express} alt="Express" /><span>Express</span></div>
          </div>
        </div>

        {/* Database */}
        <div className="skill-category db">
          <h3>Database</h3>
          <div className="icon-grid">
            <div className="icon-wrapper"><img src={Mongo} alt="MongoDB" /><span>MongoDB</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
