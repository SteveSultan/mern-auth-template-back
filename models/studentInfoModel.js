const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentNumber: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true},
    address: { type: String, required: true },
    city: { type: String, required: true },
    phoneNumber: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    program: { type: String, required: true},
    date: {
		type: Date,
		// Create a default 'created' value
		default: Date.now
	},
    
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
  });
  
  module.exports = Student = mongoose.model("student", studentSchema);