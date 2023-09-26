import * as React from "react";
import { useEffect } from "react";
import "./shapes.css";

export default function Shapes() {
  const ShapesArr = [
    "heart",
    "diamond",
    "circle",
    "square",
    "spiral",
    "asterisk",
    "tv",
    "gemstone",
    "drop",
    "urne",
    "bone",
    "eye",
    "cssleaf",
  ];

    return (
      <>
        <section className="shapes__section">
          <div className="shapes__container">
            <h1>Shapes</h1>
            <ul id="shapes" className="shapes">
              {ShapesArr.map((shape) => {
              if (shape === "gemstone") {
                return (
                  <li key={shape}>
                    <div className="gemstone-box">
                      <span className={shape}></span>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li key={shape}>
                    <span className={shape}></span>
                  </li>
                );
              }
              })}
            </ul>
          </div>
        </section>
      </>
    );
};