import React from "react";
import Logo from "../assets/navlogo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <div className="nav_logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="navlink">
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
