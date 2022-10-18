import * as React from "react";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import GalleryDropzone from "../galleryDropzone";
import ImageGrid from "../imageGrid";
import "../modal.css";

export default function GalleryForm({ headers, unknownError}) {
  const [images, setImages] = useState([]);

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const sendData = async () => {
    
    /* let formData = new FormData();
    formData.append('images', images); */
    try {
      const res = await fetch("http://localhost:8000/api/images", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify({
          images,
        }),
      });

      if (!res.ok) {
        console.log(unknownError(res.status));
        throw new Error("Failed to upload images");
      }

      if (res.status === 201 || res.status === 200) {
        setMessage("Images has been uploaded");
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };
  sendData();


  return (
    <>
      {message && <p>{message}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <h2>Drop your images here</h2>
      <form onSubmit={sendData}>
        <GalleryDropzone onDrop={onDrop} accept={"image/*"} />
        <button>Upload Images</button>
      </form>
      <ImageGrid images={images} />
    </>
  );
}
