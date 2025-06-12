import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
 const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];
function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <nav className="navbar">
      <div className="navbar-container">
          <Link to="/" className="logo">
            GT
          </Link>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} onClick={() => setMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="menu-icon" onClick={toggleMenu}>
            <span className={menuOpen ? 'close' : 'hamburger'}></span>
          </div>
        </div>
    </nav>
  );
}
export default Navbar;