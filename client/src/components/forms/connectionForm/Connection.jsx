import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";

import "./css/Connection.css";

function Connection({ onLogin,role,userId }) {
  return (
    <div className="connection">
      <div className="LoginClass">
        <div className="Login-form">
        <input type="checkbox" id="chk" aria-hidden="true" />
            <SignUp/>
            <Login onLogin={onLogin} setRole={role} userId={userId}/>
        </div>
      </div>
    </div>
  );
}

export default Connection;
