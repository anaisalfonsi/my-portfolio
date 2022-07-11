import * as React from "react";
import "./header.css";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import Logo from "../images/yellow-logo.png";

export default function Header({ isShown }) {

  const location = useLocation();

  /* const openCloseNav = () => {

    const navBtn = header.querySelector(".navbar__container > div:first-child");
    const navMenu = header.querySelector(".navbar__container > ul");

    if (openNav.style.display === "inline") {
      navBtn.style.display = "flex";
      navMenu.style.display = "block";
    } else {
      navBtn.style.display = "none";
      navMenu.style.display = "none";
    }
 
  } */
  
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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              {location.pathname === "/perso" ? (
                <a href="#passions">Passions & Skills</a>
              ) : (
                <a href="#work">Work & Skills</a>
              )}
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {/* <div onClick={openCloseNav} className="open-close-nav">
            {isShown ? (
              <i className="fa-regular fa-arrow-left-from-line"></i>
            ) : (
              <img className="logo" src={Logo} alt="logo" />
            )}
          </div> */}
        </div>
      </nav>
    </header>
  );
};
