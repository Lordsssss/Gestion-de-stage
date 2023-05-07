import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./css/NavLinks.css";

function NavLinks({ role }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const myDivRef = useRef(null);
  useEffect(() => {
    setIsLoggedIn(
      role === "Employeur" || role === "Etudiant" || role === "Coordinateur"
    );
  }, [role]);

  return (
    <ul className="nav-links">
      <li>
        <NavLink className="nav-link" to="/" exact>
          Accueil
        </NavLink>
      </li>
      <li className="dropdown-content" ref={myDivRef}>
        <div className="nav-links__dropdown">
          Gestion des stages
          <ul className="dropdown-menu">
            <li className="nav-link-dropdown">
              <NavLink className="nav-link" to="/EspaceEtudiant">
                Espace Étudiant
              </NavLink>
            </li>
            <li className="nav-link-dropdown">
              <NavLink className="nav-link" to="/EspaceEmployeur">
                Espace Employeurs
              </NavLink>
            </li>
            {role === "Etudiant" && (
              <li className="nav-link-dropdown">
                <NavLink className="nav-link" to={`/${role}/stageDisponible`}>
                  Stages Disponibles
                </NavLink>
              </li>
            )}
            {role === "Employeur" && (
              <li className="nav-link-dropdown">
                <NavLink className="nav-link" to={`/${role}/publierstage`}>
                  Publier Stage
                </NavLink>
              </li>
            )}
            {role === "Coordinateur" && (
              <>
                <li className="nav-link-dropdown">
                  <NavLink className="nav-link" to={`/${role}/listeStage`}>
                    Liste de Stage
                  </NavLink>
                </li>
                <li className="nav-link-dropdown">
                  <NavLink className="nav-link" to={`/${role}/listeEtudiant`}>
                    Liste d'Étudiant
                  </NavLink>
                </li>
                <li className="nav-link-dropdown">
                  <NavLink
                    className="nav-link"
                    to={`/${role}/listeUtilisateurs`}
                  >
                    Liste d'utilisateurs
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </li>
      <li>
        <NavLink className="nav-link" to="/ProfilStagiaires">
          Profils stagiaires
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/FAQ">
          FAQ
        </NavLink>
      </li>
      {!isLoggedIn && (
        <li>
          <NavLink className="nav-link" to="/login">
            Se connecter
          </NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <NavLink className="nav-link" to="/logout">
            Se déconnecter
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
