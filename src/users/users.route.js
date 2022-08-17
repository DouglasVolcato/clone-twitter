const router = require("express").Router();
const userController = require("./users.controller");

router.get("/", userController.findAllUserController);
router.post("/", userController.createUserController);

module.exports = router;
