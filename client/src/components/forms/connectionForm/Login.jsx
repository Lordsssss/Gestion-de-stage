import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

function Login({ onLogin, setRole }) {

  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/user/login", {
        email,
        password,
      });
      onLogin(response.data.token);
      setRole("Boss");
      console.log(response)
    } catch (error) {
      setError("Invalid credentials.");
      console.log(error)
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
              value={email}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              value={password}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button>Login</button>
          </form>
        </div>
  );
}

export default Login;
