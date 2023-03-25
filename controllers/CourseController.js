const Course = require("../models/Course");

const getCourse = async (req, res) => {
  const id = req.params.id;
  const result = await Course.find({ _id: id });
  if (result) {
    res.send({
      status: true,
      acknowledge: true,
      courseData: result,
    });
  } else {
    res.send({
      status: true,
      acknowledge: false,
      courseData: result,
    });
  }
};
const getAllCourse = async (req, res) => {
  const result = await Course.find();
  if (result) {
    res.send({
      status: true,
      acknowledge: true,
      courseData: result,
    });
  } else {
    res.send({
      status: true,
      acknowledge: false,
      courseData: result,
    });
  }
};
const addCourse = async (req, res) => {
  let course = new Course({
    course_name: req.body.course_name,
    course_code: req.body.course_code,
    course_duration: req.body.course_duration,
    course_description: req.body.course_description,
    course_author_id: req.body.course_author_id,
    course_author_list: req.body.course_author_list,
  });
  course
    .save()
    .then((course) => {
      if (course) {
        res.send({
          message: "Course Insert Successfully!",
          acknowledged: true,
        });
      } else {
        res.send({ message: "Course Cann't Inserted!", acknowledged: false });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getCourse, addCourse, getAllCourse };
