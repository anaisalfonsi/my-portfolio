import * as React from "react";
import "./modal.css";

export default function ImageGrid({ images }) {
  return (
    <>
      <div className="default__margin-top">
        <ul className={`images-grid ${images ? "active" : ""}`}>
          {images.map((image, index) => {
            return (
              <li key={index}>
                <img src={image.src} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
