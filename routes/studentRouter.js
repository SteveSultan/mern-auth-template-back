const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");
const Student = require("../models/studentInfoModel");
const students= require('../controllers/studentController')


router.post("/", auth, students.createStudents);

router.get("/all", auth, students.getStudents);

module.exports = router;