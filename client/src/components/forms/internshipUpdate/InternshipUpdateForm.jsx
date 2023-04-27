import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./css/InternshipUpdateForm.css";
import UserContext from "../../../UserContext";

function InternshipUpdateForm() {
    const { userId, internshipsList, handleInternshipsList, internship } =
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
    useEffect(() => {
        try {
            setCompanyAdresse(internship.companyadresse)
            setCompanyName(internship.companyname)
            setContactEmail(internship.contactemail)
            setContactName(internship.contactname)
            setContactPhone(internship.contactphone)
            setInternshipDescription(internship.internshipdescription)
            setInternshipType(internship.internshiptype)
            setNbPositions(internship.nbpositions)
            setInternshipSalary(internship.internshipsalary)
        } catch (er) {
            console.log(er)
        }
    }, []);

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
        };
        const internshipId = internship._id;
        axios
            .post(URL + `/api/internship/update-internship`, data,
            {
              params: { internshipId: internshipId },
            })
            .then((response) => {
                console.log(response.data);
                handleInternshipsList([...internshipsList, response.data.updatedInternship]);
                alert("Registration successful!");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="form-container-update">
            <div className="formbold-main-wrapper-update">
                <div className="formbold-form-wrapper-update">
                    <form className="form-update" onSubmit={handleSubmit}>
                        <div className="formbold-form-title-update">
                            <h2 className="">Modifier le stage : {internship.internshiptype}</h2>
                        </div>
                        <div className="formbold-input-flex-update">
                            <div>
                                <label className="inputText-update">
                                    Nom de l'Entreprise :
                                    <input
                                        type="text"
                                        placeholder="Microsoft"
                                        className="formbold-form-input-update"
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="inputText-update">
                                    Adresse de l'Entreprise :
                                    <input
                                        type="text"
                                        placeholder="1234 rue Boby, Montreal"
                                        className="formbold-form-input-update"
                                        value={companyAdresse}
                                        onChange={(e) => setCompanyAdresse(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="formbold-input-flex-update">
                            <div>
                                <label className="inputText-update">
                                    Nom du recruteur :
                                    <input
                                        type="text"
                                        placeholder="Bob smith"
                                        className="formbold-form-input-update"
                                        value={contactName}
                                        onChange={(e) => setContactName(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="inputText-update">
                                    Telephone du recruteur :
                                    <input
                                        type="text"
                                        placeholder="123-123-1234"
                                        className="formbold-form-input-update"
                                        value={contactPhone}
                                        onChange={(e) => setContactPhone(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="formbold-mb-3-update">
                            <label className="inputText-update">
                                Email du recruteur :
                                <input
                                    type="email"
                                    placeholder="johnsmith@gmail.com"
                                    className="formbold-form-input-update"
                                    value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className="formbold-mb-3-update">
                            <label className="inputText-update">
                                Type du Stage :
                                <select
                                    className="formbold-form-input-update"
                                    value={internshipType}
                                    placeholder="Choisissez une option"
                                    onChange={(e) => setInternshipType(e.target.value)}
                                >
                                    <option value="Réseaux et sécurité">Réseaux et sécurité</option>
                                    <option value="Développement d'applications">Développement d'applications</option>
                                </select>
                            </label>
                        </div>

                        <div className="formbold-input-flex-update">
                            <div>
                                <label className="inputText-update">
                                    Salaire :
                                    <input
                                        type="text"
                                        placeholder="De 68 393 $ à 139 707 $"
                                        className="formbold-form-input-update"
                                        value={internshipSalary}
                                        onChange={(e) => setInternshipSalary(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="inputText-update">
                                    Nombre de poste :
                                    <input
                                        type="number"
                                        placeholder="3"
                                        className="formbold-form-input-update"
                                        value={nbPositions}
                                        onChange={(e) => setNbPositions(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>

                        <div>
                            <div>
                                <label className="inputText-update">
                                    Description du Stage :
                                    <textarea
                                        type="text"
                                        placeholder="description"
                                        className="formbold-form-textarea-update"
                                        value={internshipDescription}
                                        onChange={(e) => setInternshipDescription(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                        <button className="formbold-btn-update">Ajouter</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default InternshipUpdateForm;