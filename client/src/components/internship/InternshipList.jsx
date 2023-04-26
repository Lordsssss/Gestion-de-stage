import React, { useEffect, useState } from "react";
import axios from "axios";
import CardInternship from "../shared/cards/CardInternship";

function InternshipList({ caller, ownerId, setInternshipList,internshipsList }) {
  const token = localStorage.getItem("jwtToken");
  axios.defaults.headers.common["x-access-token"] = token;
  const URL = "http://localhost:3001";
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      console.log(ownerId)
      if (ownerId !== "") {
        try {
          const response = await axios.get(
            URL + "/api/internship/get-Internships-By-Owner-Idp",
            {
              params: { ownerid: ownerId },
            }
          );
          setInternshipList(response.data.internships);
        } catch (error) {
          console.log(error);
        }
      } else {
      }
      setIsLoading(false);
    }
    fetchData();
  }, [ownerId]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="InternshipList">
      {internshipsList.map((internship) => (
        <CardInternship
          key={internship._id}
          caller={caller}
          internship={internship}
          internshipsList={internshipsList}
          setInternshipList={setInternshipList}
        />
      ))}
    </div>
  );
}
export default InternshipList;
