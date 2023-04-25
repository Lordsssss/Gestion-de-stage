import React from "react";
import MainNavigation from "../navigation/MainNavigation";

function PrivateRoute({role}){
    if(role === "Employeur"){
        return(
            <div>
                <MainNavigation role={role}/>
            </div>
        );
    }else if(role === "Etudiant"){
        return(
            <div>
                <MainNavigation role={role}/>
            </div>
        );
    }else if(role === "Coordinator"){
        return(
            <div>
                <MainNavigation role={role}/>
            </div>
        );
    }else{
        return(
            <div>
                <MainNavigation role={role}/>
            </div>
        );
    }
}
export default PrivateRoute;