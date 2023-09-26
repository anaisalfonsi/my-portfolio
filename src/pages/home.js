import * as React from "react";
import "../assets/css/home.css";
import Cover from "../components/organisms/cover";

export default function Home( {openCloseNav}) {
  return (
    <>
      <Cover openCloseNav={openCloseNav} />
      <section className="home__section">
        <div id="home" className="home">
          <h1>Home</h1>
        </div>
      </section>
    </>
  );
};
