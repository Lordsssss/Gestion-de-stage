import React, { useState, useContext, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./css/ConnectionTempo.css";
import UserContext from "../../../UserContext";
import axios from "axios";
import CustomAlert from "../../shared/customalert/CustomAlert";

function ConnectionTempo() {
  const [isLoginActive, setLoginActive] = useState(true);
  const { handleLogin, handleRole, handleUserId } = useContext(UserContext);
  const [emailRegister, setEmailRegister] = useState("");
  const [usernameRegister, setUserNameRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [usertypeRegister, setUserTypeRegister] = useState("Etudiant");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    setError("");
  }, [emailRegister, passwordRegister,isLoginActive]);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleSubmitLogin = async (e) => {
    setError("");
    e.preventDefault();
    try {
      const response = await axios.post(URL + "/api/user/login", {
        email:emailLogin,
        password:passwordLogin,
      });
      handleLogin(response.data.token);
      handleRole(response.data.userType);
      handleUserId(response.data.userid);
    } catch (error) {
      setError("Invalid credentials.");
      console.log(error);
    }
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        URL + "/api/user/register",
        {
          email:emailRegister,
          username:usernameRegister,
          password:passwordRegister,
          usertype:usertypeRegister,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //setError(null);
      setShowAlert(true);
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };


  return (
    <div className="container-connection">
    <CustomAlert
        show={showAlert}
        onClose={handleCloseAlert}
        htmlFor="chk"
        title="Message"
        message="Le compte a bien été créer"
      />
      <div className="login-page">
        <div className="form">
          <CSSTransition
            in={isLoginActive}
            timeout={300}
            classNames="slide"
            unmountOnExit
          >
            <form className="login-form" onSubmit={handleSubmitLogin}>
            {error && <p className="error">{error}</p>}
            <div className="form-connection-title"><p> Connecter vous !</p></div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  value={emailLogin}
                  onChange={(e) => setEmailLogin(e.target.value)}
                  className="form-connection-input"
                />
              </div>
              <div className="input-container">
                <input
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required=""
                  value={passwordLogin}
                  onChange={(e) => setPasswordLogin(e.target.value)}
                  className="form-connection-input"
                />
              </div>
              <button className="form-connection-submit">login</button>
              <p className="message">
                Pas de compte ?{"  "} 
                <a href="#" onClick={() => setLoginActive(false)}>
                 Créer un compte !
                </a>
              </p>
            </form>
          </CSSTransition>
          <CSSTransition
            in={!isLoginActive}
            timeout={300}
            classNames="slide"
            unmountOnExit
          >
            <form className="register-form" onSubmit={handleSubmitRegister}>
              {error && <p className="error">{error}</p>}
              <div className="input-container">
                <input
                  type="text"
                  name="usernameSignup"
                  placeholder="Identifiant"
                  required=""
                  value={usernameRegister}
                  onChange={(e) => setUserNameRegister(e.target.value)}
                  className="form-connection-input"
                />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="emailSignup"
                  placeholder="Email"
                  required=""
                  value={emailRegister}
                  onChange={(e) => setEmailRegister(e.target.value)}
                  autoComplete="new-email"
                  className="form-connection-input"
                />
              </div>
              <div className="input-container">
                <input
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required=""
                  value={passwordRegister}
                  onChange={(e) => setPasswordRegister(e.target.value)}
                  autoComplete="new-password"
                  className="form-connection-input"
                />
              </div>
              <button className="form-connection-submit">Valider</button>
              <p className="message">
                Déjà un compte ?{"  "}
                <a href="#" onClick={() => setLoginActive(true)}>
                  Connecter vous !
                </a>
              </p>
            </form>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}

export default ConnectionTempo;
