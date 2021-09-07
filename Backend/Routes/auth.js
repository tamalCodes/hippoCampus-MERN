const express = require("express");
const router = express.Router();
const User = require("../Models/User");

//making a user and saving the data in local mongodb date base

router.post("/", (req, res) => {
  console.log(req.body);
  const user = User(req.body);
  user.save();
  res.send(req.body);
});

module.exports = router;
