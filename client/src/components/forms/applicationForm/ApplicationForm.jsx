import React, { useState, useContext, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../../UserContext";

import "./css/ApplicationForm.css";

function ApplicationForm() {
  const URL = "http://localhost:3001";
  const { internship } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();

  useEffect(() => {
    console.log(internship.companyname)
    if(internship.companyname === undefined){
      console.log("test")
      history.go(-1);
    }
  })

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const dropzoneStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    textalign: "center",
  };

  const dropzoneActiveStyle = {
    ...dropzoneStyle,
    borderColor: "#b3c000",
  };

  const handleSubmit = async (e) => {
    history.goBack()
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("email", internship.contactemail);
    formData.append("subject", subject);
    formData.append("message", message);

    files.forEach((file) => {
      formData.append("files", file);
    });

    for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

    try {
      await axios.post(URL + "/api/email/send-message", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Email sent successfully");
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);
    }
  };
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
              <label className="inputText-application">
                CV ou/et lettre de motivation :
              </label>
              <div
                className="file-inputfield"
                {...getRootProps()}
                style={isDragActive ? dropzoneActiveStyle : dropzoneStyle}
              >
                <input {...getInputProps()} />
                {files.length > 0 ? (
                  files.map((file, index) => <p key={index}>{file.name}</p>)
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
