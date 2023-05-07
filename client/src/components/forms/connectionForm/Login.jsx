import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../../UserContext";

function Login() {
  const { handleLogin, handleRole, handleUserId } = useContext(UserContext);
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");
  const [error, setError] = useState(null);
  const URL = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    setError("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    try {
      const response = await axios.post(URL + "/api/user/login", {
        email,
        password,
      });
      handleLogin(response.data.token);
      handleRole(response.data.userType);
      handleUserId(response.data.userid);
      console.log(response.data.token);
      console.log(response.data.userid);
    } catch (error) {
      setError("Invalid credentials.");
      console.log(error);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>
        {error && <p className="error">{error}</p>}
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
