import React, { useEffect, useState } from "react";
import axios from "axios";
import CardInternship from "../shared/cards/CardInternship";

function InternshipList({ caller , ownerId }) {
  const token = localStorage.getItem("jwtToken");
  axios.defaults.headers.common["x-access-token"] = token;
  const URL = "http://localhost:3001";
  const [internshipsList, setInternshipList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
        setIsLoading(true);
        if (ownerId !== "") {
            try {
                const response = await axios.get(URL+"/api/internship/get-Internships-By-Owner-Idp",{
                    data: {ownerid: ownerId}
                });
                setInternshipList(response.data.internships);
              } catch (error) {
                console.log(error);
              }
        }else {

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
        {internshipsList.map((internship) => (<CardInternship key={internship._id} caller={caller} internship={internship}/>))} 
    </div>
    );
}
export default InternshipList;
