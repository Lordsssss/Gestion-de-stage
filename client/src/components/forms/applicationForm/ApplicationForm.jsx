import React, { useState, useContext } from "react";
import { useDropzone } from "react-dropzone";
import UserContext from "../../../UserContext";

import "./css/ApplicationForm.css";

function ApplicationForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { getRootProps, getInputProps,isDragActive  } = useDropzone({
    accept: "application/pdf",
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });
  const dropzoneStyle = {
    border: '1px solid #ccc', 
    padding: '20px', 
    textalign: 'center',
  };

  const dropzoneActiveStyle = {
    ...dropzoneStyle,
    borderColor: '#b3c000',
  };
  const handleSubmit = async (e) => {};
  const { internship } = useContext(UserContext);
  return (
    <div className="form-container-application">
      <div className="formbold-main-wrapper-application">
        <div className="formbold-form-wrapper-application">
          <form className="form-application" onSubmit={handleSubmit}>
            <div className="formbold-form-title-application">
              <h2 className="">
                Envoyer un Email à : {internship.companyname}
              </h2>
              <h3>{internship.contactemail}</h3>
            </div>
            <div className="formbold-mb-3-application">
              <label className="inputText-application">
                Sujet de l'Email
                <input
                  type="text"
                  placeholder="Sujet"
                  className="formbold-form-input-application"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>
              <div className="formbold-mb-3-application">
                <label className="inputText-application">
                  Message :
                  <textarea
                    type="text"
                    placeholder="description"
                    className="formbold-form-textarea-application"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
              </div>
              <label className="inputText-application">CV ou/et lettre de motivation :</label>
              <div className="file-inputfield" {...getRootProps()} style={isDragActive ? dropzoneActiveStyle : dropzoneStyle}>
                <input {...getInputProps()} />
                {file ? (
                  <p>{file.name}</p>
                ) : (
                  <p>Cliquez ici ou glissez et déposez un fichier (optional)</p>
                )}
              </div>
            </div>
            <button className="formbold-btn-application">Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;
