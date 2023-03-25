const router = require("express").Router();
const courseController = require("../controllers/CourseController");

router.get("/getcourse/:id", courseController.getCourse);
router.get("/getallcourse", courseController.getAllCourse);
router.post("/addcourse", courseController.addCourse);

module.exports = router;
