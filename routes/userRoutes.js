const router = require("express").Router();
const userController = require("../controllers/UserController");

router.get("/", userController.getUser);
router.post("/adduser", userController.addUser);
router.patch("/edituser/:id", userController.editUser);
router.delete("/deleteuser/:id", userController.deleteUser);

module.exports = router;
// router.get("/adduser", userController.addUser);
