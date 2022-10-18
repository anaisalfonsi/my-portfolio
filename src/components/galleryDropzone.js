import * as React from "react";
import { useDropzone } from "react-dropzone";

export default function GalleryDropzone({ onDrop }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag & drop some files here, or click to select files</p>
        )}
        <button className="btn">Select images</button>
      </div>
    </>
  );
}
