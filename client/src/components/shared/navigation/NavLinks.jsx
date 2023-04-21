import React from "react";
import { NavLink } from "react-router-dom";
import "./css/NavLinks.css";

function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Accueil
        </NavLink>
      </li>
      <li className="dropdown-content">
        <NavLink to="/1">
        Gestion des stages
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/1/sublink1">Espace Étudiant</NavLink>
            </li>
            <li>
              <NavLink to="/1/sublink2">Espace Employeurs</NavLink>
            </li>
            <li>
            <NavLink to="/1/sublink1">Stages Disponibles</NavLink>
          </li>
          <li>
            <NavLink to="/1/sublink2">Publier Stage</NavLink>
          </li>
          <li>
          <NavLink to="/1/sublink2">Étudiants Candidats</NavLink>
        </li>
          </ul>
        </NavLink>
      </li>
      <li>
        <NavLink to="/3">Profils stagiaires</NavLink>
      </li>
      <li>
        <NavLink to="/FAQ">FAQ</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
