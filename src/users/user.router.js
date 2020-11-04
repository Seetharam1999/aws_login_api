const router = require("express").Router();
const { checkToken } = require("../token");
const {
  createUser,
  login,

} = require("./user.controller");
router.post("/register", createUser);
router.post("/login", login);

module.exports = router;
