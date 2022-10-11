import * as React from "react";
import "./testMyAPI.css";

export default function TestMyAPI({ showUserForm }) {

  const apiTests = [
    {
      title: "Se créer un compte utlisateur",
      imgPath: "/",
    },
    {
      title: "Ajouter une galerie photos",
      imgPath: "/",
    },
    {
      title: "Commenter avec éditeur de texte",
      imgPath: "/",
    },
  ];
  return (
    <section className="testApi__section">
      <div id="test-my-api" className="testApi">
        <h1>Test my API</h1>
        <div className="default__margin-top simple-container">
          <ul className="mobile-desktop__flex">
            {apiTests.map((test, index) => {
              return (
                <li key={index} onClick={showUserForm}>
                  <h2>{test.title}</h2>
                  <div>
                    <img src={test.imgPath} alt="test-my-api" />
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
