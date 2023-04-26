import React, { useState } from "react";
import InternshipList from "./InternshipList";
import InternshipForm from "../forms/internshipForm/InternshipForm";
import './css/Boss.css'

function Boss({userId}){
    const [internshipsList, setInternshipList] = useState([]);
    return(
        <div className="Boss">
        <InternshipForm userId={userId} setInternshipList={setInternshipList} internshipsList={internshipsList} />
            <InternshipList caller={"Boss"} ownerId={userId} setInternshipList={setInternshipList} internshipsList={internshipsList}/>
        </div>
    );
}
export default Boss;