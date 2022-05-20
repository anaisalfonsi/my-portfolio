import * as React from "react";
import "./perso-header.css";
import { Link } from "gatsby";

export default function PersoHeader() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__container">
          <div>
            <Link to="/">Dev Mode</Link>
          </div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#passions">Passions & Skills</a>
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
