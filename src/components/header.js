import * as React from "react";
import "./header.css";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

export default function Header() {
  const location = useLocation();
  const openCloseNav = () => {
    const header = document.querySelector("header");
    const openNav = header.querySelector(".open-close-nav i:last-child");
    const closeNav = header.querySelector(".open-close-nav i:first-child");
    const navBtn = header.querySelector(".navbar__container > div:first-child");
    const navMenu = header.querySelector(".navbar__container > ul");

    if (openNav.style.display === "inline") {
      navBtn.style.display = "flex";
      navMenu.style.display = "block";
      openNav.style.display = "none";
      closeNav.style.display = "inline";
      header.style.right = "-250px";
    } else {
      navBtn.style.display = "none";
      navMenu.style.display = "none";
      closeNav.style.display = "none";
      openNav.style.display = "inline";
      header.style.right = "-400px";
    }
 
  }

  return (
    <header>
      <nav className="navbar">
        <div className="navbar__container">
          <div>
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
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              {location.pathname === "/perso" ? 
              <a href="#passions">Passions & Skills</a> 
              :
              <a href="#work">Work & Skills</a>
              }
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div onClick={openCloseNav} className="open-close-nav">
            <i className="fa-light fa-arrow-right-from-line"></i>
            <i className="fa-light fa-arrow-left-from-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
