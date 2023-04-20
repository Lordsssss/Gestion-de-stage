import React from "react";
import "./css/StaticPages.css";

function FAQ() {
  return (
    <div className="FAQ">
      <h1 className="FAQ__titre">Foire aux questions - FAQ</h1>
      <div className="FAQ__content">
        <div className="FAQ__question">
          <input id="q1" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q1" className="panel-title">
            Est-ce que le stage est obligatoire?
          </label>
          <div className="panel-content">
            Le stage de fin d'études en informatique est obligatoire pour
            l'obtention du diplôme collgégial.
          </div>
        </div>
        <div className="FAQ__question">
          <input id="q2" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q2" className="panel-title">
            Quel est l'horaire de l'étudiant durant les stages?
          </label>
          <div className="panel-content">
            L'étudiant doit respecter l'horaire de l'entreprise durant son
            stage.
          </div>
        </div>
        <div className="FAQ__question">
          <input id="q3" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q3" className="panel-title">
            Est-ce que l'étudiant travaille pendant les journées pédagogiques et
            les journées de rattrapage?
          </label>
          <div className="panel-content">
            L'étudiant doit respecter l'horaire de l'entreprise durant son stage
            et ce même durant les journées pédagogiques et de rattrapage.
          </div>
        </div>
        <div className="FAQ__question">
          <input id="q4" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q4" className="panel-title">
            Quelle est la durée d'un stage de fin d'études?
          </label>
          <div className="panel-content">
            La durée du stage est de 15 semaines pour les deux profils de sortie
            (réseaux et programmation).
          </div>
        </div>
        <div className="FAQ__question">
          <input id="q5" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q5" className="panel-title">
            Quelles sont les dates prévues pour les stages?
          </label>
          <div className="panel-content">
            Les stages sont prévus du 21 janvier au 3 mai 2019.
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
