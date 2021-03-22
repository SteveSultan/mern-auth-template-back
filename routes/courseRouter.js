const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");
const Course = require("../models/courseModel");
const courses = require('../controllers/courseController')

router.post("/", auth, courses.createCourses);

router.get("/all", auth, courses.getCourses);

// router.delete("/:id", auth , async(req, res) => {
//     try {
//         const course = await Course.findOne({ userId: req.User, _id: req.params.id });
//         if(!course){
//             return res.status(400).json({ msg: "No course found with current user" });
//         }
//         const deletedCourse = await Course.findByIdAndDelete(req.params.id);
//         res.json(deletedCourse)
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
    
// });


module.exports = router;