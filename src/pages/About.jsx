// src/pages/About.jsx
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <hr />
        <p className="about-text">
          Hello! I’m <strong>Geleta Tamiru</strong>, a full-stack web developer.
          I love building efficient, responsive, and user-friendly web applications. My specialties include React, Node.js,
          MongoDB, and more.
        </p>
        <p className="about-text">
          I'm a passionate web developer who loves bringing concepts to life on the web. I thrive on solving complex problems and am always eager to learn new things to stay at the forefront of this ever-evolving field. My focus is on creating intuitive and visually appealing websites that provide an excellent user experience. I enjoy collaborating with teams to build impactful digital solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
