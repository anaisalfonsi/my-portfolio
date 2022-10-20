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
    /* useEffect(() => {
      const fetchUser = async () => {
        await fetch("http://localhost:8000/api/logged")
          .then((res) => res.json())
          .then((data) => console.log(data), (error) => console.log(error));
      };

      fetchUser();
    }, []); */
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

  return (
    <>
      <Layout isShown={isShown} openCloseNav={openCloseNav}>
        {user && (
          <p>
            Welcome to my world <span>{user.pseudo}</span>
          </p>
        )}
        {showModal && (
          <Modal
            getUser={getUser}
            onCloseRequest={onCloseRequest}
            userForm={userForm}
            galleryForm={galleryForm}
            searchForm={searchForm}
          />
        )}
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
