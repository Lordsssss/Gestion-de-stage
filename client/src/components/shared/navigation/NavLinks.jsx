import React from "react";
import { NavLink } from "react-router-dom";
import "./css/NavLinks.css";
import { userHasRole, getUserRole } from "../../../utils/auth.js";


function NavLinks({ role }) {
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
          {role !== "Boss" && (
            <li>
              <NavLink to="/1/sublink3">Stages Disponibles</NavLink>
            </li>
          )}
          {role !== "Student" && role !== "Coordinator" && (
            <li>
              <NavLink to="/1/sublink4">Publier Stage</NavLink>
            </li>
          )}
          {role !== "Student" && role !== "Boss" && (
            <li>
              <NavLink to="/1/sublink5">Liste d'Etudiant</NavLink>
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
    </ul>
  );
}

export default NavLinks;
