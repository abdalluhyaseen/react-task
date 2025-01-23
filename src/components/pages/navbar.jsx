// Navbar.js
import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/b">About</Link>
        </li>

        <li>
          <Link to="/c">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
