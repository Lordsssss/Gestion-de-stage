import React, { useContext } from "react";
import axios from "axios";
import "./css/SettingForm.css";
import UserContext from "../../../UserContext";
import { NavLink } from "react-router-dom";

function SettingForm({ internshipId,internship }) {
  const { handleInternshipsList,handleInternship } = useContext(UserContext);
  const URL = "http://localhost:3001";

  const handleUpdateInternship = () => {
    handleInternship(internship)
  }
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      axios
        .delete(URL + "/api/internship/delete-internship", {
          data: { internshipId: internshipId },
        })
        .catch((error) => {
          console.log(error);
        });
      handleInternshipsList((internshipsList) =>
        internshipsList.filter((item) => item._id !== internshipId)
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="SettingContainer">
      <div className="SettingForm">
        <div className="Setting-button__container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="bi bi-trash-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
          <span className="Setting-button__text" onClick={handleDelete}>
            Supprimer
          </span>
        </div>
        <div className="Setting-button__container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
          <NavLink onClick={handleUpdateInternship} className="navlink" to="/Employeur/updateStage"> <span className="Setting-button__text">Modifier</span></NavLink>
        </div>
      </div>
    </div>
  );
}

export default SettingForm;