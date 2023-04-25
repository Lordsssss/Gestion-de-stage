const express = require("express");
const InternshipController = require("../controllers/InternshipController");
const router = express.Router();
const verifyToken = require('../utils/VerifyToken');

router.post("/add-internship",verifyToken,InternshipController.addInternship);
router.get("/all-internship",verifyToken,InternshipController.allInternship);
router.get("/get-Internships-By-Owner-Idp",verifyToken,InternshipController.getInternshipsByOwnerId)
router.delete("/delete-internship",verifyToken,InternshipController.deleteInternship);
router.post("/update-internship",verifyToken,InternshipController.updateInternship);

module.exports = router;