import React, { useState } from "react";
import "./css/App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useHistory,
} from "react-router-dom";
import Accueil from "./components/staticPages/Accueil";
import FAQ from "./components/staticPages/FAQ";
import EspaceEmployeur from "./components/staticPages/EspaceEmployeur";
import EspaceEtudiant from "./components/staticPages/EspaceEtudiant";
import ProfilStagiaires from "./components/staticPages/ProfilStagiaires";
import PrivateRoute from "./components/shared/privateRoute/PrivateRoute";
import Connection from "./components/forms/connectionForm/Connection";

function App() {
  const history = useHistory();
  const [token, setToken] = useState(null);
  const [role, setRole] = useState("guess");

  const handleRole = (newRole) => {
    setRole(newRole);
  };
  const handleLogin = (newToken) => {
    localStorage.setItem('jwtToken', newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    handleLogin(null);
    handleRole("");
  };

  return (
    <Router>
      <PrivateRoute role={role} />
      <main>
        <Switch>
          <Route path="/FAQ" exact>
            <FAQ />
          </Route>
          <Route path="/EspaceEmployeur">
            <EspaceEmployeur />
          </Route>
          <Route path="/EspaceEtudiant">
            <EspaceEtudiant />
          </Route>
          <Route path="/ProfilStagiaires">
            <ProfilStagiaires />
          </Route>
          <Route path="/Login">
            {token ? (
              <Redirect to="/" />
            ) : (
              <Connection onLogin={handleLogin} role={handleRole} />
            )}
          </Route>
          <Route
            path="/logout"
            render={() => {
              handleLogout();
              return <Redirect to="/" />;
            }}
          />
          <Route path="">
            <Accueil />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
