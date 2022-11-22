import * as React from "react";
import "../assets/css/test-my-api.css";

export default function TestMyAPI({ openCloseModal, handleGalleryClick }) {
  
  const apiTests = [
    {
      title: "Create an account",
      imgPath: "/",
      icon: "fa-light fa-user",
    },
    {
      title: "Make an image gallery",
      imgPath: "/",
      icon: "fa-light fa-image",
    },
    {
      title: "Search the API",
      imgPath: "/",
      icon: "fa-light fa-magnifying-glass",
    },
  ];

  return (
    <section className="testApi__section">
      <div id="test-my-api" className="testApi">
        <h1>Test my API</h1>
        <div className="default__margin-top simple-container">
          <ul className="mobile-desktop__flex">
            {apiTests.map((test, index) => {
              if (index === 1 || index === 2) {
                return (
                  <li
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      openCloseModal(index);
                      handleGalleryClick(true);
                    }}
                  >
                    <h2>{test.title}</h2>
                    <div className="icon-div">
                      <i className={test.icon}></i>
                    </div>
                  </li>
                );
              }
              return (
                <li
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    openCloseModal(index);
                  }}
                >
                  <h2>{test.title}</h2>
                  <div className="icon-div">
                    <i className={test.icon}></i>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
