import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";

import Home from "./sections/home";
import About from "./sections/about";
import Work from "./sections/work";
import Contact from "./sections/contact";
import TestMyAPI from "./sections/testMyApi";
import Modal from "../components/modal";

const IndexPage = () => {
  const [isShown, setIsShown] = useState(true);
  const [showModal, setShowModal] = useState(false);


  const openCloseNav = (e) => {
    e.preventDefault();
    setIsShown((current) => !current);
  };

  const showUserForm = (e) => {
    e.preventDefault();
    setShowModal((current) => !current);
  };


  /* const registerSubmit = (e) => {
    e.preventDefault();
  } */
  
  return (
    <>
      <Layout isShown={isShown} openCloseNav={openCloseNav}>
        {showModal && <Modal /* registerSubmit={registerSubmit} */ />}
        <Home openCloseNav={openCloseNav} />
        <About />
        <Work />
        <TestMyAPI showUserForm={showUserForm} />
        <Contact />
      </Layout>
    </>
  );
}

export default IndexPage;
