const express = require("express");
const InternshipController = require("../controllers/InternshipController");
const router = express.Router();
const { verifyToken } = require('../utils/VerifyToken');

router.post("/add-internship",verifyToken,InternshipController.addInternship);
router.get("/all-internship");
router.get("/get-by-user-id-internship")
router.delete("/delete-internship");
router.post("/update-internship");

module.exports = router;