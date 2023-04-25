const Internship = require("../models/Internship");
const HttpError = require("../models/HttpErreur");

const addInternship = async (req, res) => {
  try {
    const newInternship = new Internship({
      contactname: req.body.contactname,
      contactemail: req.body.contactemail,
      contactphone: req.body.contactphone,
      companyname: req.body.companyname,
      companyadresse: req.body.companyadresse,
      internshiptype: req.body.internshiptype,
      nbpositions: req.body.nbpositions,
      internshipdescription: req.body.internshipdescription,
      salary: req.body.salary,
      ownerid: req.body.ownerid,
    });

    const internship = await newInternship.save();

    res
      .status(201)
      .json({ message: "Internship added successfully", internship });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const allInternship = async (requete, reponse, next) => {
  let internshipList;
  try {
    internshipList = await Internship.find();
  } catch (err) {
    return next(
      new HttpErreur(
        "Erreur lors de la récupération de la liste des profs",
        500
      )
    );
  }
  if (!internshipList) {
    return next(new HttpErreur("Aucun prof trouvé", 404));
  }
  reponse.json({
    internshipList: internshipList.map((internship) => internship.toObject({ getters: true })),
  });
};

const getInternshipsByOwnerId = async (req, res, next) => {
  const  ownerid  = req.query.ownerid;
  let internships;
  try {
    internships = await Internship.find({ OwnerId: ownerid });
    console.log(internships)
  } catch (err) {
    return next(
      new HttpError("Erreur lors de la récupération de la liste des stages", 500)
    );
  }

  if (!internships || internships.length === 0) {
    return next(new HttpError("Aucun stage trouvé", 404));
  }
  res.json({
    internships: internships.map((internship) => internship.toObject({ getters: true })),
  });
};

const deleteInternship = async (req, res, next) => {
  const internshipId = req.query.internshipId;
  console.log(internshipId)
  let internship;
  try {
    internship = await Internship.findByIdAndRemove(internshipId);
  } catch (err) {
    return next(
      new HttpError("Erreur lors de la suppression du stage", 500)
    );
  }

  if (!internship) {
    return next(new HttpError("Aucun stage trouvé avec cet identifiant", 404));
  }
  res.status(200).json({ message: 'Stage supprimé avec succès' });
};

const updateInternship = async (req, res, next) => {
  const internshipId = req.query.internshipId;
  console.log(internshipId)
  const {
    contactname,
    contactemail,
    contactphone,
    companyname,
    companyadresse,
    internshiptype,
    nbpositions,
    internshipdescription,
    salary
  } = req.body;

  let internship;
  try {
    internship = await Internship.findById(internshipId);
  } catch (err) {
    return next(
      new HttpError("Erreur lors de la recherche du stage", 500)
    );
  }

  if (!internship) {
    return next(new HttpError("Aucun stage trouvé avec cet identifiant", 404));
  }

  internship.contactname = contactname || internship.contactname;
  internship.contactemail = contactemail || internship.contactemail;
  internship.contactphone = contactphone || internship.contactphone;
  internship.companyname = companyname || internship.companyname;
  internship.companyadresse = companyadresse || internship.companyadresse;
  internship.internshiptype = internshiptype || internship.internshiptype;
  internship.nbpositions = nbpositions || internship.nbpositions;
  internship.internshipdescription = internshipdescription || internship.internshipdescription;
  internship.salary = salary || internship.salary;

  try {
    await internship.save();
  } catch (err) {
    return next(
      new HttpError("Erreur lors de la mise à jour du stage", 500)
    );
  }

  res.status(200).json({ message: 'Stage mis à jour avec succès', updatedInternship: internship.toObject({ getters: true }) });
};

exports.addInternship = addInternship;
exports.allInternship = allInternship;
exports.getInternshipsByOwnerId = getInternshipsByOwnerId;
exports.deleteInternship = deleteInternship;
exports.updateInternship = updateInternship;
