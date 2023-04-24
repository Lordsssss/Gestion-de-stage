import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [email, setSignUpEmail] = useState("");
  const [username, setSignUpUserName] = useState("");
  const [password, setSignUpPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    try {
      res = await axios.post(
        "http://localhost:3001/api/user/register",
        {
          email,
          username,
          password
        },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      //setError(null);
      alert("Registration successful!");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        {error && <p>{error}</p>}
        <input
          type="text"
          name="txt"
          placeholder="Username"
          required=""
          value={username}
          onChange={(e) => setSignUpUserName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required=""
          value={email}
          onChange={(e) => setSignUpEmail(e.target.value)}
        />
        <input
          type="password"
          name="pswd"
          placeholder="Password"
          required=""
          value={password}
          onChange={(e) => setSignUpPassword(e.target.value)}
        />
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
