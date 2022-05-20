import * as React from "react";
import "./header.css";
import { Link } from "gatsby";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__container">
          <div>
            <Link to="/perso">Personal Mode</Link>
          </div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#work">Work & Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
