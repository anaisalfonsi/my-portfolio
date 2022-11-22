import * as React from "react";
import "../assets/css/cover.css";
import Logo from "../assets/images/logos/yellow-logo.png";

export default function Cover({ openCloseNav }) {
  
  return (
    <div className="cover__section">
      <div className="cover">
        <div>
          <h1>Anaïs Alfonsi</h1>
          <ul>
            <li>A</li>
            <li>N</li>
            <li>A</li>
            <li onClick={openCloseNav}>
              <img className="logo" src={Logo} alt="logo" />
            </li>
            <li>S</li>
            <li>&#x2043;</li>
            <li>A</li>
            <li>L</li>
            <li>F</li>
            <li>O</li>
            <li>N</li>
            <li>S</li>
            <li>I</li>
          </ul>
        </div>
        <div>
          <div className="triangle__container">
            <div className="triangle"></div>
            {/* <h2>Creative Developer</h2> */}
          </div>
        </div>
      </div>
    </div>
  );
};
