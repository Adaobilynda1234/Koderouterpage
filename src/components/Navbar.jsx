import React, { useState } from "react";
import Logo from "../assets/navlogo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  // defining state for mobile toggle
  const [isOpen, setIsOpen] = useState(false);

  // defining the function for toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <nav>
        <div className="nav_logo">
          <img src={Logo} alt="logo" />
        </div>
        {/* toggle menu */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <GiHamburgerMenu />}
        </div>
        {/* <ul className={`nav-links ${isOpen ? 'open' : ''}`}></ul> */}
        <ul className={`navlink ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/">main</Link>
          </li>
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/">certifications</Link>
          </li>
          <li>
            <Link to="/">contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
