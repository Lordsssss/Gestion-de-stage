import React from "react";
import MainNavigation from "../navigation/MainNavigation";

function PrivateRoute({role}){
    if(role === "Boss"){
        return(
            <div>
                <MainNavigation role={role}/>
            </div>
        );
    }else if(role === "Student"){
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
    }
}
export default PrivateRoute;