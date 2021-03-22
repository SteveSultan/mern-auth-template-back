const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");
const Course = require("../models/courseModel");

exports.createCourses = async(req, res) => {
    try {
        let { courseCode, courseName, section, semester } = req.body;
            // validate

        if (!courseCode || !courseName || !section || !semester){
           return res.status(400).json({ msg: "Not all fields have been entered." }); 
        }
            
        //save
        const newCourse = new Course({
            courseCode,
            courseName,
            section,
            semester,
          });
          const savedCourse = await newCourse.save();
          res.json(savedCourse);
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getCourses = async(req, res) => {

    try {
        const courses = await Course.find({ userId: req.Course });
        res.json(courses)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

// module.exports = createCourses;
// module.exports = getCourses;