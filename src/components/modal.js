import * as React from "react";
import { useState, useEffect, useRef } from "react";
import UserForms from "./forms/user-forms";
import GalleryForm from "./forms/gallery-form";
import PostForm from "./forms/post-form";
import "./modal.css";

export default function Modal({ getUser, onCloseRequest, userForm, galleryForm, postForm }) {

  const ref = useRef(null);

  useEffect(() => {
    /* const handleOutsideClick = (e) => {
      if (!ref.current.contains(e.target)) {
        onCloseRequest(e);
      }
    }; */

    const handleKeyUp = (e) => {
      if (e.key === "Escape") {
        onCloseRequest(e);
      }
    };
    
    window.addEventListener("keyup", handleKeyUp);
    /* document.addEventListener("click", handleOutsideClick); */
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      /* document.removeEventListener("click", handleOutsideClick); */
    };
  }, []);

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  };

  const unknownError = (statusCode) => {
    return `HTTP error! status: ${statusCode}`;
  };

 
  return (
    <div className="modal__section">
      <div ref={ref} className="modal">
        <div className="modal-close-btn">
          <button onClick={(e) => onCloseRequest(e)}>X Close</button>
        </div>
        {userForm && (
          <UserForms
            headers={headers}
            unknownError={unknownError}
            getUser={getUser}
          />
        )}
        {galleryForm && (
          <GalleryForm headers={headers} unknownError={unknownError} />
        )}
        {postForm && <PostForm />}
      </div>
    </div>
  );
}
