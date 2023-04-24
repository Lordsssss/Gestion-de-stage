import React, { useState } from "react";

function Login() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const handleLogin = async (event) => {
    event.preventDefault();
    
  };

  return (
        <div className="login">
          <form onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button>Login</button>
          </form>
        </div>
  );
}

export default Login;
