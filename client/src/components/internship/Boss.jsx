import React from "react";
import InternshipList from "./InternshipList";
import './css/Boss.css'

function Boss(){
    return(
        <div className="Boss">
            <InternshipList caller={"Boss"} ownerId={"64481be803e7cf96d4b00874"}/>
        </div>
    );
}
export default Boss;