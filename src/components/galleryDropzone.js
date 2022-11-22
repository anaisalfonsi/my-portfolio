import * as React from "react";
import { useState, useEffect} from "react";
import { useDropzone } from "react-dropzone";

export default function GalleryDropzone({ onDrop, files, unknownError }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    !localStorage.getItem("user") ? setErrorMessage("You must be logged in to upload pictures") : setLogged(true);
  }, []);

  useEffect(() => {
    const clearMessage = setInterval(() => {
      setMessage("");
      setErrorMessage("");
    }, 5000);
    return () => clearInterval(clearMessage);
  });

  const sendImages = async () => {

    if (!files) {
      setErrorMessage("You must select at least one file");
    }
  
    if (files) {
      let user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        setErrorMessage("You must be logged in to upload pictures");
      }

      if (user) {

        const formData = new FormData();
        
        files.map((file) => {
          return formData.append("file[]", file);
          // console.log(file);
        });

        try {
          const res = await fetch(`http://localhost:8000/api/users/${user.id}/images`, {
              method: "POST",
              body: formData,
            });
            
          if (!res.ok) {

            console.log(unknownError(res.status));

            if (res.violations) {
              throw new Error(res.violations[0].message);
            }

            throw new Error("Failed to upload the pictures");
          }

          if (res.status === 201) {
            setMessage("Your images have been uploaded");
          }
        
        } catch (err) {
          console.log(err);
          setErrorMessage(err.message);
        }
      }
    }
  }

  return (
    <>
      {message && <p className="blue-text">{message}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {logged && (
        <div className="drop-here__container">
          <div {...getRootProps()}>
            <input {...getInputProps()} accept={"image/*"} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>
                Drag & drop some files here, or click{" "}
                <span className="drop-select">here</span> to select files
              </p>
            )}
          </div>
          <button className="yellow-text" onClick={sendImages}>Upload Images</button>
        </div>
      )}
    </>
  );
}
