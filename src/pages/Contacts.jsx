// src/pages/Contact.jsx
import './Contacts.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-subtext">I'm open to opportunities, collaboration, or just a friendly chat.</p>
      <div className="contact-info">
        <p>Email: <a href="mailto:geletatamiru@yahoo.com">geletatamiru@yahoo.com</a></p>
      </div>
      <div className="social-icons">
        <a href="https://github.com/geletatamiru" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/geleta-tamiru-a1a937332/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:geletatamiru@yahoo.com">
          <FaEnvelope />
        </a>
      </div>

      <p className="thanks-message">Thanks for visiting my portfolio!</p>
    </section>
  );
};

export default Contacts;
