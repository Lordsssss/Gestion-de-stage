import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import CardStudent from "../shared/cards/CardStudent";

function StudentList() {
  const URL = "http://localhost:3001";
  const [students, setStudents] = useState([]);
  const [file, setFile] = useState(null); // Use a single file instead of an array
  const token = localStorage.getItem("jwtToken");
  axios.defaults.headers.common["x-access-token"] = token;

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]); // Set the single file instead of appending to an array
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const dropzoneStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    textAlign: "center",
  };

  const dropzoneActiveStyle = {
    ...dropzoneStyle,
    borderColor: "#b3c000",
  };

  const handleImport = () => {
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("csv", file);
    axios
      .post(`${URL}/api/student/upload-csv`, formData)
      .then((response) => {
        console.log(response.data);
        setFile(null);
      })
      .catch((error) => {
        console.error("Error importing students", error);
      });
  };

  useEffect(() => {
    axios
      .get(`${URL}/api/student/student-list`)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error getting students", error);
      });
  }, []);

  return (
    <div className="Student">
      <table className="UserTable">
        <thead>
          <tr className="UserList-header">
            <th className="UserList-th" scope="col">
              Id
            </th>
            <th className="UserList-th" scope="col">
              Numéro de DA
            </th>
            <th className="UserList-th" scope="col">
              Prénom et Nom
            </th>
            <th className="UserList-th" scope="col">
              Adresse Email
            </th>
            <th className="UserList-th" scope="col">
              Profil de sortie
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <CardStudent student={student} />
          ))}
        </tbody>
      </table>
      <div
        className="file-inputfield"
        {...getRootProps()}
        style={isDragActive ? dropzoneActiveStyle : dropzoneStyle}
      >
        <input {...getInputProps()} />
        {file ? (
          <p>{file.name}</p>
        ) : (
          <p>Cliquez ici ou glissez et déposez un fichier (optional)</p>
        )}
      </div>
      <button onClick={handleImport}>Importer</button>
    </div>
  );
}

export default StudentList;
