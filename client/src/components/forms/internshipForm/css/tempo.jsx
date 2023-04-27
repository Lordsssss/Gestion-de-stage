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
        <div class="formbold-form-wrapper">
    

    <form className="form" onSubmit={handleSubmit}>
      <div class="formbold-form-title">
        <h2 class="">Ajouter un Stage</h2>
      </div>
      <div class="formbold-input-flex">
        <div>
                <label className="inputText">
                  Nom de l'Entreprise :
                  <input
                    type="text"
                    placeholder="Microsoft"
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
          value={companyAdresse}
          onChange={(e) => setCompanyAdresse(e.target.value)}
        />
      </label>
        </div>
      </div>

      <div class="formbold-input-flex">
        <div>
        <label className="inputText">
        Nom du recruteur :
        <input
          type="text"
          placeholder="Bob smith"
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
          value={contactPhone}
          onChange={(e) => setContactPhone(e.target.value)}
        />
      </label>
        </div>
      </div>

      <div class="formbold-mb-3">
      <label className="inputText">
      Email du recruteur :
      <input
        type="email"
        placeholder="johnsmith@gmail.com"
        value={contactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
      />
    </label>
      </div>

      <div class="formbold-mb-3">
        <label for="address2" class="formbold-form-label">
          Street Address Line 2
        </label>
        <input
          type="text"
          name="address2"
          id="address2"
          class="formbold-form-input"
        />
      </div>

      <div class="formbold-input-flex">
        <div>
          <label for="state" class="formbold-form-label"> State/Prvince </label>
          <input
            type="text"
            name="state"
            id="state"
            class="formbold-form-input"
          />
        </div>
        <div>
          <label for="country" class="formbold-form-label"> Country </label>
          <input
            type="text"
            name="country"
            id="country"
            class="formbold-form-input"
          />
        </div>
      </div>

      <div class="formbold-input-flex">
        <div>
          <label for="post" class="formbold-form-label"> Post/Zip code </label>
          <input
            type="text"
            name="post"
            id="post"
            class="formbold-form-input"
          />
        </div>
        <div>
          <label for="area" class="formbold-form-label"> Area Code </label>
          <input
            type="text"
            name="area"
            id="area"
            class="formbold-form-input"
          />
        </div>
      </div>

      <div class="formbold-checkbox-wrapper">
        <label for="supportCheckbox" class="formbold-checkbox-label">
          <div class="formbold-relative">
            <input
              type="checkbox"
              id="supportCheckbox"
              class="formbold-input-checkbox"
            />
            <div class="formbold-checkbox-inner">
              <span class="formbold-opacity-0">
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  class="formbold-stroke-current"
                >
                  <path
                    d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                    stroke-width="0.4"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          I agree to the defined
          <a href="#"> terms, conditions, and policies</a>
        </label>
      </div>

      <button class="formbold-btn">Register Now</button>
    </form>
  </div>
      )}
    </div>
  );
}

export default InternshipForm;