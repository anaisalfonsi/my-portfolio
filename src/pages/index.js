import * as React from "react";
import { useState, useEffect } from "react";
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

  const [userForm, setUserForm] = useState(false);
  const [galleryForm, setGalleryForm] = useState(false);
  const [postForm, setPostForm] = useState(false);

  const openCloseNav = (e) => {
    e.preventDefault();
    setIsShown((current) => !current);
  };

  const onCloseRequest = (e) => {
    e.preventDefault();
    setShowModal((current) => !current);
    setUserForm(false);
    setGalleryForm(false);
    setPostForm(false);
  };

  const openCloseModal = (index) => {
    setShowModal((current) => !current);

    if (index === 0) {
      setUserForm((current) => !current);
    }

    if (index === 1) {
      setGalleryForm((current) => !current);
    }

    if (index === 2) {
      setPostForm((current) => !current);
    }
  };

  return (
    <>
      <Layout isShown={isShown} openCloseNav={openCloseNav}>
        {showModal && 
        <Modal 
          onCloseRequest={onCloseRequest} 
          userForm={userForm}
          galleryForm={galleryForm}
          postForm={postForm} 
        />
        }
        <Home openCloseNav={openCloseNav} />
        <About />
        <Work />
        <TestMyAPI openCloseModal={openCloseModal} />
        <Contact />
      </Layout>
    </>
  );
}

export default IndexPage;
