import * as React from "react";
import "./imageGrid.css";

export default function ImageGrid({ images }) {
  return (
    <>
      <div>
        <ul className="images-grid">
            {images.map((image, index) => {
                return (<li key={index}>
                    <img src={image.src} alt="" />
                </li>)
                })
            }
        </ul>
      </div>
    </>
  );
}
