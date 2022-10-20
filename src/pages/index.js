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
  const [user, setUser] = useState(null);

  const getUser = (user) => {
    setUser(user);
  };
    
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const [isShown, setIsShown] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [userForm, setUserForm] = useState(false);
  const [galleryForm, setGalleryForm] = useState(false);
  const [searchForm, setSearchForm] = useState(false);

  const [galleryClick, setGalleryClick] = useState(false);

  const openCloseNav = (e) => {
    e.preventDefault();
    setIsShown((current) => !current);
  };

  const onCloseRequest = (e) => {
    e.preventDefault();
    setShowModal((current) => !current);
    setUserForm(false);
    setGalleryForm(false);
    setSearchForm(false);
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
      setSearchForm((current) => !current);
    }
  };

  const handleGalleryClick = (bool) => {
    setGalleryClick(bool);
  }

  return (
    <>
      {showModal && (
        <Modal
          getUser={getUser}
          onCloseRequest={onCloseRequest}
          userForm={userForm}
          galleryForm={galleryForm}
          searchForm={searchForm}
          handleGalleryClick={handleGalleryClick}
          galleryClick={galleryClick}
        />
      )}
      <Layout isShown={isShown} openCloseNav={openCloseNav}>
        {user && (
          <h2 className="center-text">
            Welcome to my world{" "}
            <span className="yellow-text capitalize-text">{user.pseudo}</span>
          </h2>
        )}
        <Home openCloseNav={openCloseNav} />
        <About />
        <Work />
        <TestMyAPI
          openCloseModal={openCloseModal}
          handleGalleryClick={handleGalleryClick}
        />
        <Contact />
      </Layout>
    </>
  );
}

export default IndexPage;
