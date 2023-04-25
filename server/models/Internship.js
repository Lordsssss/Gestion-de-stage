const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const internshipSchema = new Schema({
  contactname: { type: String, required: true },
  contactemail: { type: String, required: true },
  contactphone: { type: String, required: true },
  companyname: { type: String, required: true },
  companyadresse: { type: String, required: true },
  internshiptype: { type: String, required: true },
  nbpositions: { type: Number, required: true },
  internshipdescription: { type: String, required: true },
  salary: { type: String, required: true },
  ownerid: { type: mongoose.Types.ObjectId, red: "OwnerId" },
});

module.exports = mongoose.model("Internship", internshipSchema);
