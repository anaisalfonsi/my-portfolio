import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReduxWrapper from "../redux/wrap-with-provider";
import UserService from "../services/user.service";

import Layout from "../components/layout";

import Home from "./home";
import About from "./about";
import Work from "./work";
import Contact from "./contact";
import TestMyAPI from "./test-my-api";
import Modal from "../components/modal";
import "../assets/css/imports.css";

const IndexPage = () => {
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState("");

  const { user: currentUser } = useSelector((state) => state.auth);
    
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      UserService.getUserBoard()/*.then(
        (response) => {
          setUser(response.data);
          console.log(user + "whaaat");
        },
        (error) => {
          const _error =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();

          setUserError(_error);
        }
      );*/
    } else {
      console.log("pas d'user");
    }
    
  }, []);

  useEffect(() => {
    if (currentUser) console.log(currentUser.token);
  }, [user]);

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

const WrappedHome = () => (
  <ReduxWrapper element={<IndexPage />} />
);

export default WrappedHome;