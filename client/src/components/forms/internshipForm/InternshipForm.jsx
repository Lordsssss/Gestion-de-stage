import React, { useState } from "react";
import axios from "axios";
import "./css/InternshipForm.css";

function InternshipForm({ userId,setInternshipList,internshipsList }) {
  const URL = "http://localhost:3001";
  const [companyAdresse, setCompanyAdresse] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [internshipDescription, setInternshipDescription] = useState("");
  const [internshipType, setInternshipType] = useState("");
  const [nbPositions, setNbPositions] = useState("");
  const [internshipSalary, setInternshipSalary] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      contactname: contactName,
      contactemail: contactEmail,
      contactphone: contactPhone,
      companyname: companyName,
      companyadresse: companyAdresse,
      internshiptype: internshipType,
      nbpositions: nbPositions,
      internshipdescription: internshipDescription,
      salary: internshipSalary,
      ownerid: userId,
    };

    axios
      .post(URL + "/api/internship/add-internship", data)
      .then((response) => {
        console.log(response.data);
        setShowForm(false);
        setInternshipList([...internshipsList, response.data.internship]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleButtonClick = () => {
    setShowForm(!showForm);
    console.log(userId)
  };

  return (
    <div className="form-container">
      <button className="button" onClick={handleButtonClick}>
        {showForm ? "X" : "Ajouter Stage"}
      </button>
      {showForm && (
        <form className="form" onSubmit={handleSubmit}>
          <label className="titre">Ajouter un Stage</label>
          <label className="inputText">
            Nom de l'Entreprise :
            <input
              type="text"
              placeholder="Microsoft"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </label>
          <label className="inputText">
            Adresse de l'Entreprise :
            <input
              type="text"
              placeholder="1234 rue Boby, Montral"
              value={companyAdresse}
              onChange={(e) => setCompanyAdresse(e.target.value)}
            />
          </label>
          <label className="inputText">
            Nom du recruteur :
            <input
              type="text"
              placeholder="Bob smith"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
          </label>
          <label className="inputText">
            Email du recruteur :
            <input
              type="email"
              placeholder="johnsmith@gmail.com"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </label>
          <label className="inputText">
            Telephone du recruteur :
            <input
              type="text"
              placeholder="123-123-1234"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
            />
          </label>
          <label className="inputText">
            Titre du Stage :
            <input
              type="text"
              placeholder="Dev Java"
              value={internshipType}
              onChange={(e) => setInternshipType(e.target.value)}
            />
          </label>
          <label className="inputText">
            Description du Stage :
            <input
              type="text"
              placeholder="description"
              value={internshipDescription}
              onChange={(e) => setInternshipDescription(e.target.value)}
            />
          </label>
          <label className="inputText">
            Nombre de poste :
            <input
              type="text"
              placeholder="3"
              value={nbPositions}
              onChange={(e) => setNbPositions(e.target.value)}
            />
          </label>
          <label className="inputText">
            Salaire :
            <input
              type="text"
              placeholder="De 68 393 $ à 139 707 $ par an"
              value={internshipSalary}
              onChange={(e) => setInternshipSalary(e.target.value)}
            />
          </label>
          <button type="submit">Ajouter</button>
        </form>
      )}
    </div>
  );
}

export default InternshipForm;
