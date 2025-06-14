import { useState } from "react";
import "./Navbar.css";

function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <nav className="navbar">
      <div className="navbar-container">
          <a href="#home" className="logo">
            GT
          </a>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>

          <div className="menu-icon" onClick={toggleMenu}>
            <span className={menuOpen ? 'close' : 'hamburger'}></span>
          </div>
        </div>
    </nav>
  );
}
export default Navbar;