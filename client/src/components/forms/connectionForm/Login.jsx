import React, { useState } from "react";
import axios from "axios";

function Login({ onLogin }) {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", {
        loginEmail,
        loginPassword,
      });
      onLogin(response.data.token);
    } catch (error) {
      setError("Invalid credentials.");
    }
  };

  return (
        <div className="login">
          <form onSubmit={handleSubmit}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            {error && <p>{error}</p>}
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
