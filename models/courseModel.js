const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseCode: { type: String,required: true },
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    courseName: { type: String, required: true},
    section: { type: Number, required: true },
    semester: { type: String, required: true },
    date: {
        type: Date,
        default: Date.now
    },


  });
  
  module.exports = Course = mongoose.model("course", courseSchema);