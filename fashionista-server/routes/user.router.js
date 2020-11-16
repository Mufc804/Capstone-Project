var express = require("express");
var router = express.Router();
var { authMiddleware } = require("../controllers/user.controller")

var UserController = require("../controllers/user.controller");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/profile", authMiddleware, function (req, res) {
    res.json({
        "access": true
    })
})
router.get("/userFromDB", UserController.GetUserFromDB);
router.get("/userById/:id", UserController.GetUserById);
router.post("/storeUser", UserController.StoreUserInfo);
router.put("/updateUser/:id", UserController.UpdateUserInfo);
router.delete("/deleteUserById/:id", UserController.DeleteUserInfo);


module.exports = router;