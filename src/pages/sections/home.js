import * as React from "react";
import "./home.css";
import Cover from "../../components/cover";

export default function Home() {
  return (
    <>
      <Cover />
      <section className="home__section">
        <div id="home" className="home">
          <h1>Home</h1>
        </div>
      </section>
    </>
  );
};