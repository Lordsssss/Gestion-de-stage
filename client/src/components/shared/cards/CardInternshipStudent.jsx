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
      <span className="card-info">{internship.internshiptype}</span>
      <div className="title">
        <h1 className="title-text">{internship.internshiptitle}</h1>
      </div>
      <span className="card-info">{internship.companyname}</span>
      <span className="card-info">{internship.companyadresse}</span>
      <span className="card-info">
        {internship.contactemail} - {internship.contactphone}
      </span>
      <div className="description-text">
        <p>{internship.internshipdescription}</p>
      </div>
      <div className="app-button-container">
        <NavLink
          onClick={handleUpdateInternship}
          to="/Etudiant/applicationForm"
        >
          <button className="app-button">Appliquer</button>
        </NavLink>
      </div>
    </div>
  );
}

export default CardInternship;
