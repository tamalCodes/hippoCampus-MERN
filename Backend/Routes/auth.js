const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");

//making a user and saving the data in local mongodb date base

router.post(
  "/",
  [
    // username must be greater than 3
    body("name").isLength({ min: 3 }),

    // password must be at least 5 chars long
    body("password").isLength({ min: 5 }),

    //email must be a proper email
    body("email").isEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }).then((user) => res.json(user));
  }
);

module.exports = router;
