const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");
const Student = require("../models/studentInfoModel");

exports.createStudents = async(req, res) => {
    try {
        let { studentNumber, firstName, lastName, address, city, phoneNumber, email, program } = req.body;
            // validate

        if (!studentNumber || !firstName || !lastName || !address || !city || !phoneNumber || !email || !program){
            return res.status(400).json({ msg: "Not all fields have been entered." });
        }
            
        //save
        const newStudent = new Student({
            studentNumber,
            firstName,
            lastName,
            address,
            city,
            phoneNumber,
            email,
            program,
          });
          const savedStudent= await newStudent.save();
          res.json(savedStudent);
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getStudents = async(req, res) => {
    try {
        const students = await Student.find({ userId: req.Student });
        res.json(students)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

// module.exports = createStudents;
// module.exports = getStudents;