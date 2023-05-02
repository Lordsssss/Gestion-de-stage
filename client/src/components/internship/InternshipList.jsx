import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import CardInternship from "../shared/cards/CardInternship";
import UserContext from "../../UserContext";

import './InternshipListStudent'
function InternshipList() {
  const { userId, internshipsList, handleInternshipsList } = useContext(UserContext); 
  const token = localStorage.getItem("jwtToken");
  axios.defaults.headers.common["x-access-token"] = token;
  const URL = "http://localhost:3001";
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(""); // Add a new state variable for the filter
  const [searchTerm, setSearchTerm] = useState("");

  const filterAndSearchInternships = (internships) => {
    let filteredInternships = internships;

    // Filter internships based on the selected filter value
    if (filter !== "") {
      filteredInternships = filteredInternships.filter(
        (internship) => internship.internshiptype === filter
      );
    }

    // Filter internships based on the search term
    if (searchTerm !== "") {
      const searchRegex = new RegExp(searchTerm, "i");
      filteredInternships = filteredInternships.filter((internship) =>
        [
          internship.contactname,
          internship.contactemail,
          internship.contactphone,
          internship.companyname,
          internship.companyadresse,
          internship.internshiptitle,
          internship.internshiptype,
          internship.internshipdescription,
          internship.salary,
        ].some((value) => searchRegex.test(value))
      );
    }

    return filteredInternships;
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      if (userId !== "") {
        try {
          const response = await axios.get(
            URL + "/api/internship/get-Internships-By-Owner-Idp",
            {
              params: { ownerid: userId },
            }
          );
          handleInternshipsList(response.data.internships);
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

  if (internshipsList.length === 0) {
    return <div>Aucun stage</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    
    <div className="InternshipList">
    <div className="search-bar">
    <input
      type="text"
      placeholder="Rechercher"
      className="search-input"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
      {internshipsList && filterAndSearchInternships(internshipsList).map((internship) => (
        <CardInternship key={internship._id} internship={internship} />
      ))}
    </div>
  );
}
export default InternshipList;
