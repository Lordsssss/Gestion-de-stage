import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import CardInternshipStudent from "../shared/cards/CardInternshipStudent";
import UserContext from "../../UserContext";
import "./css/InternshipListStudent.css";

function InternshipListStudent() {
  const { userId, internshipsList, handleInternshipsList } =
    useContext(UserContext);
  const token = localStorage.getItem("jwtToken");
  axios.defaults.headers.common["x-access-token"] = token;
  const URL = "http://localhost:3001";
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(""); // Add a new state variable for the filter

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      if (userId !== "") {
        try {
          const response = await axios.get(
            URL + "/api/internship/all-internship"
          );
          handleInternshipsList(response.data.internships);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      } else {
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  // Function to filter internships based on the selected filter value
  const filterInternships = (internships) => {
    if (filter === "") {
      return internships;
    }
    return internships.filter(
      (internship) => internship.internshiptype === filter
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render the filter buttons and only display filtered internships
  return (
    <div className="InternshipList">
      <div className="radio-inputs">
        <label className="radio">
          {" "}
          <input
            type="radio"
            id="filter-all"
            name="filter"
            value=""
            checked={filter === ""}
            onChange={(e) => setFilter(e.target.value)}
          />
          <span className="name">Tous</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            id="filter-reseaux"
            name="filter"
            value="Réseaux et sécurité"
            checked={filter === "Réseaux et sécurité"}
            onChange={(e) => setFilter(e.target.value)}
          />
          <span className="name">Réseaux et sécurité</span>
        </label>
        <label className="radio">
          {" "}
          <input
            type="radio"
            id="filter-developpement"
            name="filter"
            value="Développement d'applications"
            checked={filter === "Développement d'applications"}
            onChange={(e) => setFilter(e.target.value)}
          />
          <span className="name">Développement d'applications</span>
        </label>
      </div>
      {internshipsList &&
        <div className="list">{filterInternships(internshipsList).map((internship) => (
          <CardInternshipStudent key={internship._id} internship={internship} />
        ))}</div>
      }
    </div>
  );
}
export default InternshipListStudent;
