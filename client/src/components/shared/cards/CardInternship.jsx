import React from "react";
import './css/CardInternship.css'

function CardInternship({ caller , internship }){
    return(
        <div className="CardIntership">
            <h1>{internship.internshiptype}</h1>
            <span>{internship.companyname}</span>
            <span>{internship.companyadresse}</span>
            <p>{internship.internshipdescription}</p>
            <span>{internship.contactemail} - {internship.contactphone}</span>
            {caller === 'Boss' ? <span>{internship.salary}</span>:null}
        </div>
    );
}

export default CardInternship;