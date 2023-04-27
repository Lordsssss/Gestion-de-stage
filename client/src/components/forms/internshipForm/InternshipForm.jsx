import React, { useState, useContext } from "react";
import axios from "axios";
import "./css/InternshipForm.css";
import UserContext from "../../../UserContext";

function InternshipForm() {
  const { userId, internshipsList, handleInternshipsList } =
    useContext(UserContext);
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
        handleInternshipsList([...internshipsList, response.data.internship]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="form-container">
      <button className="button" onClick={handleButtonClick}>
        {showForm ? "X" : "Ajouter Stage"}
      </button>
      {showForm && (
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <form className="form" onSubmit={handleSubmit}>
              <div className="formbold-form-title">
                <h2 className="">Ajouter un Stage</h2>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label className="inputText">
                    Nom de l'Entreprise :
                    <input
                      type="text"
                      placeholder="Microsoft"
                      className="formbold-form-input"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label className="inputText">
                    Adresse de l'Entreprise :
                    <input
                      type="text"
                      placeholder="1234 rue Boby, Montreal"
                      className="formbold-form-input"
                      value={companyAdresse}
                      onChange={(e) => setCompanyAdresse(e.target.value)}
                    />
                  </label>
                </div>
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label className="inputText">
                    Nom du recruteur :
                    <input
                      type="text"
                      placeholder="Bob smith"
                      className="formbold-form-input"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label className="inputText">
                    Telephone du recruteur :
                    <input
                      type="text"
                      placeholder="123-123-1234"
                      className="formbold-form-input"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                    />
                  </label>
                </div>
              </div>

              <div className="formbold-mb-3">
                <label className="inputText">
                  Email du recruteur :
                  <input
                    type="email"
                    placeholder="johnsmith@gmail.com"
                    className="formbold-form-input"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </label>
              </div>

              <div className="formbold-mb-3">
                <label className="inputText">
                  Titre du Stage :
                  <input
                    type="text"
                    placeholder="Dev Java"
                    className="formbold-form-input"
                    value={internshipType}
                    onChange={(e) => setInternshipType(e.target.value)}
                  />
                </label>
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label className="inputText">
                    Salaire :
                    <input
                      type="text"
                      placeholder="De 68 393 $ à 139 707 $"
                      className="formbold-form-input"
                      value={internshipSalary}
                      onChange={(e) => setInternshipSalary(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label className="inputText">
                    Nombre de poste :
                    <input
                      type="text"
                      placeholder="3"
                      className="formbold-form-input"
                      value={nbPositions}
                      onChange={(e) => setNbPositions(e.target.value)}
                    />
                  </label>
                </div>
              </div>

              <div>
                <div>
                  <label className="inputText">
                    Description du Stage :
                    <textarea
                      type="text"
                      placeholder="description"
                      className="formbold-form-textarea"
                      value={internshipDescription}
                      onChange={(e) => setInternshipDescription(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <button className="formbold-btn">Ajouter</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default InternshipForm;
