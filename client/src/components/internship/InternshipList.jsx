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
