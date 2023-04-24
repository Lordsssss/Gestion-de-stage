const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const PORT = 3001;
const URL = "mongodb://" + process.env.USER;
const HttpErreur = require("./models/HttpErreur");

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use((requete, reponse, next) => {
  return next(new HttpErreur("Route non trouvée", 404));
});

app.use((error, requete, reponse, next) => {
  if (reponse.headerSent) {
    return next(error);
  }
  reponse.status(error.code || 500);
  reponse.json({
    message: error.message || "Une erreur inconnue est survenue",
  });
});

mongoose.set("strictQuery", true);

mongoose
  .connect(URL)
  .then(() => {
    app.listen(5000);
    console.log("Connexion à la base de données réussie");
  })
  .catch((erreur) => {
    console.log(erreur);
  });

app.listen(PORT, () => {
  console.log("Server is running");
});
