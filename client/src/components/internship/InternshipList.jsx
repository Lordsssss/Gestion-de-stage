import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import CardInternship from "../shared/cards/CardInternship";
import UserContext from "../../UserContext";

function InternshipList() {
  const { userId, internshipsList, handleInternshipsList } = useContext(UserContext); 
  const token = localStorage.getItem("jwtToken");
  axios.defaults.headers.common["x-access-token"] = token;
  const URL = "http://localhost:3001";
  const [isLoading, setIsLoading] = useState(false);

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
          try{handleInternshipsList(response.data.internships);}catch(er){console.log(er)}
          handleInternshipsList(response.data.internships);
        } catch (error) {
          console.log(error);
        }
      } else {
      }
      setIsLoading(false);
    }
    fetchData();
  }, [userId,handleInternshipsList]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="InternshipList">
      {internshipsList && internshipsList.map((internship) => (
        <CardInternship key={internship._id} internship={internship} />
      ))}
    </div>
  );
}
export default InternshipList;
