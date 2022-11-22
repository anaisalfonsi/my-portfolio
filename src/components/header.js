import * as React from "react";
import "../assets/css/header.css";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

export default function Header({ isShown, openCloseNav }) {

  const location = useLocation();
  
  return (
    <header style={{ right: isShown ? "-250px" : "-500px" }}>
      <nav className="navbar">
        <div className="navbar__container">
          <div className={isShown ? "show-flex" : "hide"}>
            {location.pathname === "/perso" ? (
              <Link to="/" className="btn-fx">
                Dev Mode
              </Link>
            ) : (
              <Link to="/perso" className="btn-fx">
                Perso Mode
              </Link>
            )}
          </div>
          <ul className={isShown ? "show" : "hide"}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              {location.pathname === "/perso" ? (
                <Link to="/passions">Passions & Skills</Link>
              ) : (
                <Link to="/work">Work & Skills</Link>
              )}
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
