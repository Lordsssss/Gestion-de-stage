import React, { useState, useContext, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../../UserContext";
import "./css/CardInternship.css";

function CardInternship({ internship }) {
  const { handleInternshipsList, handleInternship } = useContext(UserContext);

  const handleUpdateInternship = () => {
    handleInternship(internship);
  };

  return (
    <div className="CardIntership">
      <h1 className="title">{internship.internshiptype}</h1>
      <span className="card-info">{internship.companyname}</span>
      <span className="card-info">{internship.companyadresse}</span>
      <p className="CardIntership-p">{internship.internshipdescription}</p>
      <span className="card-info">
        {internship.contactemail} - {internship.contactphone}
      </span>
      <div className="app-button-container">
        <NavLink onClick={handleUpdateInternship} to="/Etudiant/applicationForm">
          <button className="app-button">Appliquer</button>
        </NavLink>
      </div>
    </div>
  );
}

export default CardInternship;
