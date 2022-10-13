import * as React from "react";
import { useState, useEffect, useRef } from "react";
import "./modal.css";
import UserForms from "./forms/user-forms";
import GalleryForm from "./forms/gallery-form";
import PostForm from "./forms/post-form";

export default function Modal({ onCloseRequest, userForm, galleryForm, postForm }) {

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

 
  return (
    <div className="modal__section">
      <div ref={ref} className="modal">
        <div className="modal-close-btn">
          <button onClick={(e) => onCloseRequest(e)}>X Close</button>
        </div>
        {userForm && <UserForms />}
        {galleryForm && <GalleryForm />}
        {postForm && <PostForm />}
      </div>
    </div>
  );
}
