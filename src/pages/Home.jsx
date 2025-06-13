// src/pages/Home.jsx
import './Home.css';

const Home = () => {
  return (
    <section className="home" id='home'>
      <div className="home-content">
        <h1>Hello, I’m <span>Geleta Tamiru</span></h1>
        <h2>Full-Stack Web Developer</h2>
        <p>I craft modern, fast, and user-friendly web apps tailored to your needs.</p>
        <div className="home-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
