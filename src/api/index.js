const express = require("express");
const createUser = require("./controller/createuser");
const router = express.Router();
router.get("/", (req, res) => {
  // res.send("api home page");
  res.json({
    success: 1,
    message: "This rest api works"
  });
});

/* create user routs */
router.post("/createuser", createUser);
router.get("/createuser", (req, res) => {
  res.json({
    success: true,
    message: "Comming soon"
  });
});

module.exports = router;
