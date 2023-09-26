import * as React from "react";
import "../../assets/css/header.css";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

export default function Header({ isShown, openCloseNav }) {

  const location = useLocation();
  
  return (
    <header style={{ right: isShown ? "-250px" : "-500px" }}>
      <nav className="navbar">
        <div className="navbar__container">
          <ul className={isShown ? "show" : "hide"}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
                <Link to="/work">Work & Skills</Link>
            </li>
            <li>
              <Link to="/test-my-api">Test My API</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <button onClick={openCloseNav}>Close</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
