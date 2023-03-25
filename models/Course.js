const mongoose = require("mongoose");

const course = new mongoose.Schema({
  course_name: { type: String },
  course_code: { type: String },
  course_duration: { type: String },
  course_description: { type: String },
  course_author_id: { type: String },
  course_author_list: { type: Array },
});

module.exports = mongoose.model("Course", course);
