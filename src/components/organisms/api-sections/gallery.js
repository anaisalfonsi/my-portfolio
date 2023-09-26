import * as React from "react";
import { useState, useCallback } from "react";
import GalleryDropzone from "../../molecules/forms/gallery-dropzone";
import ImageGrid from "../../molecules/gallery-grid";
import "../../../assets/css/modal.css";

export default function GalleryForm({ unknownError }) {
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [...prevState, { src: e.target.result }]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <>
      <div className="gallery__container">
        <h2 className="mb-2">Drop your images here</h2>
        <GalleryDropzone
          onDrop={onDrop}
          files={files}
          unknownError={unknownError}
        />
        <ImageGrid images={images} />
      </div>
    </>
  );
}
