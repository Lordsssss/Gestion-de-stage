import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";

import "./css/Connection.css";

function Connection({ onLogin,role }) {
  return (
    <div className="connection">
      <div className="LoginClass">
        <div className="Login-form">
        <input type="checkbox" id="chk" aria-hidden="true" />
            <SignUp/>
            <Login onLogin={onLogin} setRole={role}/>
        </div>
      </div>
    </div>
  );
}

export default Connection;
