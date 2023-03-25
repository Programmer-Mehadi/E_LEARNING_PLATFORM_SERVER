const router = require("express").Router();
const userController = require("../controllers/UserController");

router.get("/getuser/:id", userController.getUser);
router.get("/getalluser", userController.getAllUser);
router.get("/getalluserbyrole/:role", userController.getAllUserByRole);
router.post("/adduser", userController.addUser);
router.patch("/edituser/:id", userController.editUser);
router.delete("/deleteuser/:id", userController.deleteUser);

module.exports = router;
// router.get("/adduser", userController.addUser);
