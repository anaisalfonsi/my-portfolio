import * as React from "react";
import { useEffect } from "react";
import UserForms from "../organisms/api-sections/user";
import GalleryForm from "../organisms/api-sections/gallery";
import SearchForm from "../organisms/api-sections/search";
import "../../assets/css/modal.css";

export default function Modal({
  userData,
  getUser,
  onCloseRequest,
  userForm,
  galleryForm,
  searchForm,
  handleGalleryClick,
  galleryClick,
}) {
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
    <div className={`modal__section ${galleryClick ? "active" : ""}`}>
      <div className="modal">
        <div className="modal-close-btn">
          <button
            onClick={(e) => {
              onCloseRequest(e);
              handleGalleryClick(false);
            }}
          >
            X Close
          </button>
        </div>
        {userForm && (
          <UserForms
            headers={headers}
            unknownError={unknownError}
            userData={userData}
            getUser={getUser}
          />
        )}
        {galleryForm && (
          <GalleryForm headers={headers} unknownError={unknownError} />
        )}
        {searchForm && <SearchForm />}
      </div>
    </div>
  );
}
