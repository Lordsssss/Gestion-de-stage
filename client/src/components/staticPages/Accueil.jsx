import React from "react";
import "./css/StaticPages.css"
import axios from 'axios';


function Accueil() {
    const token = localStorage.getItem('jwtToken');

    // Set the default axios headers with the JWT token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const addInternship = async () => {
        try {
          const response = await axios.post("http://localhost:3001/api/internship/add-internship",{
            contactname:"Hugo",
            contactemail:"hugomontreuil25@gmail.com",
            contactphone:"4385308017",
            companyname:"bob inc",
            companyadresse:"123333",
            internshiptype:"non",
            nbpositions:12,
            internshipdescription:"123fdgsg4rgzdfg43gzsrfg4agf4",
            salary:"0.00001$",
            ownerid:"6446f1f29cf06e035fbadcc4"
          });
      
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    return(
        <div className="Accueil">
            <button onClick={addInternship}>Test</button>
            
            <p>Bienvenue sur le site des stages de fin d'études des
            techniques de l'informatique du  Collège Montmorency!</p>
            <p>À la fin de leurs études,
            les étudiants sont appelés à mettre en
            pratique les compétences acquises durant le programme.
            Cela se fait grâce à la participation d'entreprises de la
            région qui les accueillent afin de finaliser leurs
            formations.</p>
            <p>Le Collège Montmorency
            offre ainsi aux employeurs l'occasion d'obtenir une
            main-d'œuvre compétente, tout en leur permettant de
            participer à la formation finale des
            étudiants.</p>
            <p>Le stage de fin d'études
            est une expérience concrète permettant d'acquérir une
            expérience professionnelle formatrice.</p>
            <p>Les étudiants terminent
            la portion académique de leurs études en informatique
            selon une des deux voies de sortie du programme:
            Réseaux et sécurité informatique
            Développement d'applications informatiques</p>
        </div>
    );
}

export default Accueil;