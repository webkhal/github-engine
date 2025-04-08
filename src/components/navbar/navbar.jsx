import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
          <span>GitHub Search</span>
        </Link>
        <div className="navbar-links">
          <Link to="/contact" className="contact-us">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;