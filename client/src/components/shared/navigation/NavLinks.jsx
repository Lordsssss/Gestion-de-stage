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
      <li>
        <NavLink to="/1">Espace employeurs</NavLink>
      </li>
      <li>
      <NavLink to="/2">Espace etudiants</NavLink>
    </li>
      <li>
        <NavLink to="/3">Profils stagiaires</NavLink>
      </li>
      <li>
        <NavLink to="/4">FAQ</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
