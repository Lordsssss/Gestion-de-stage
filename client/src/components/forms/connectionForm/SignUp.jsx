import React, { useState,useEffect } from "react";
import axios from "axios";

function SignUp() {
  const [email, setSignUpEmail] = useState("");
  const [username, setSignUpUserName] = useState("");
  const [password, setSignUpPassword] = useState("");
  const [usertype, setUserType] = useState("Etudiant");
  const [error, setError] = useState(null);

  useEffect(()=>{
    setError("");
  },[email,password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/api/user/register",
        {
          email,
          username,
          password,
          usertype,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //setError(null);
      alert("Registration successful!");
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label className="title-label" htmlFor="chk" aria-hidden="true">
          S'inscrire
        </label>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          name="usernameSignup"
          placeholder="Identifiant"
          required=""
          value={username}
          onChange={(e) => setSignUpUserName(e.target.value)}
        />
        <input
          type="email"
          name="emailSignup"
          placeholder="Email"
          required=""
          value={email}
          onChange={(e) => setSignUpEmail(e.target.value)}
          autocomplete="new-email"
        />
        <input
          type="password"
          name="pswd"
          placeholder="Password"
          required=""
          value={password}
          onChange={(e) => setSignUpPassword(e.target.value)}
          autocomplete="new-password"
        />
        <div className="SignUp__wrapper">
          <ul>
            <li>
              <label className="radio-label">
              <input
              id="one"
              type="radio"
              name="userType"
              value="Etudiant"
              checked={usertype === "Etudiant"}
              onChange={(e) => setUserType(e.target.value)}
            />
              Étudiant
              <div className="check"></div>
              </label>
            </li>
            <li>
              <label className="radio-label">
                <input
                  id="two"
                  type="radio"
                  name="userType"
                  value="Employeur"
                  checked={usertype === "Employeur"}
                  onChange={(e) => setUserType(e.target.value)}
                />
                Employeur
                <div className="check">
                <div className="inside"></div>
              </div>
              </label>
            </li>
          </ul>
        </div>
        <button>Valider</button>
      </form>
    </div>
  );
}

export default SignUp;
