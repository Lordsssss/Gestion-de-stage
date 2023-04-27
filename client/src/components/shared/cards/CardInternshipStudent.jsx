import React, { useState, useContext, useRef, useEffect } from "react";
import UserContext from "../../../UserContext";
import "./css/CardInternship.css";

function CardInternship({ internship }) {
    return (
        <div className="CardIntership">
            <h1 className="title">{internship.internshiptype}</h1>
            <span className="card-info">{internship.companyname}</span>
            <span className="card-info">{internship.companyadresse}</span>
            <p className="CardIntership-p">{internship.internshipdescription}</p>
            <span className="card-info">
                {internship.contactemail} - {internship.contactphone}
            </span>
            <button>Appliquer</button>
        </div>
    );
}

export default CardInternship;