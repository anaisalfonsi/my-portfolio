import * as React from "react";
import "./perso-home.css";
import PersoCover from "../../../components/perso-components/perso-cover";

export default function PersoHome() {
  return (
    <>
      <PersoCover />
      <section className="perso-home__section">
        <div id="home" className="perso-home">
          <h1>Perso Home</h1>
        </div>
      </section>
    </>
  );
};
