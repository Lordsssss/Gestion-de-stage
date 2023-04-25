const Internship = require("../models/Internship");

const addInternship = async (req, res) => {
  console.log("test");
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
exports.addInternship = addInternship;
