import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/NavLinks.css";

function NavLinks({ role }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(
      role === "Employeur" || role === "Etudiant" || role === "Coordinateur"
    );
  }, [role]);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Accueil
        </NavLink>
      </li>
      <li className="dropdown-content">
        <div className="nav-links__dropdown">Gestion des stages</div>
        <ul className="dropdown-menu">
          <li>
            <NavLink to="/EspaceEtudiant">Espace Étudiant</NavLink>
          </li>
          <li>
            <NavLink to="/EspaceEmployeur">Espace Employeurs</NavLink>
          </li>
          {role === "Etudiant" && (
            <li>
              <NavLink to={`/${role}/stageDisponible`}>Stages Disponibles</NavLink>
            </li>
          )}
          {role === "Employeur" && (
            <li>
            <NavLink to={`/${role}/publierstage`}>Publier Stage</NavLink>
            </li>
          )}
          {role === "Coordinator" && (
            <li>
              <NavLink to={`/${role}/stageDisponible`}>Liste d'Etudiant</NavLink>
            </li>
          )}
        </ul>
      </li>
      <li>
        <NavLink to="/ProfilStagiaires">Profils stagiaires</NavLink>
      </li>
      <li>
        <NavLink to="/FAQ">FAQ</NavLink>
      </li>
      {!isLoggedIn && (
        <li>
          <NavLink to="/login">Se connecter</NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <NavLink to="/logout">Se déconnecter</NavLink>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
