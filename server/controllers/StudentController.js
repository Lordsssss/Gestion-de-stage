const fs = require("fs");
const Student = require("../models/Student"); // assuming the schema is in a file called "student.js"
const HttpError = require("../models/HttpErreur");
const csvParser = require('csv-parser');

const processCsv = async (req, res) => {

  const csvParserOptions = {
    headers: ["DAnumber", "studentName", "email", "decType"],
    skipLines: 1, // Skip the header line in the CSV file
  };

  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const students = [];
    fs.createReadStream(req.file.path)
  .pipe(csvParser(csvParserOptions))
  .on('data', (row) => {
        console.log(row)
        students.push({
          DAnumber: row.DAnumber,
          studentName: row.studentName,
          email: row.email,
          decType: row.decType,
        });
      })
      .on('end', async () => {
        fs.unlinkSync(req.file.path); // Remove the uploaded file
        await Student.insertMany(students);
        res.status(201).json({ message: 'Students added successfully' });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while processing the file' });
  }
};

const getStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    console.error("Error getting students", err);
    res.status(500).send("Error getting students");
  }
};

const addStudent = async (req, res, next) => {
  try {
    const { DAnumber, studentName, email, decType } = req.body;
    const student = new Student({ DAnumber, studentName, email, decType });
    await student.save();
    res.status(200).send(`Student ${student.studentName} added successfully`);
  } catch (err) {
    console.error("Error adding student", err);
    res.status(500).send("Error adding student");
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) {
      throw new HttpError("Could not find a student with the provided ID", 404);
    }
    await student.remove();
    res.status(200).send(`Student ${student.studentName} deleted successfully`);
  } catch (err) {
    console.error("Error deleting student", err);
    res.status(err.code || 500).send(err.message || "Error deleting student");
  }
};

exports.processCsv = processCsv;
exports.getStudents = getStudents;
exports.addStudent = addStudent;
exports.deleteStudent = deleteStudent;