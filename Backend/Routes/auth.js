const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");

//making a user and saving the data in local mongodb date base

router.post(
  "/createUser",
  [
    // username must be greater than 3
    body("name").isLength({
      min: 3,
    }),

    // password must be at least 5 chars long
    body("password").isLength({
      min: 5,
    }),

    //email must be a proper email
    body("email").isEmail(),
  ],
  async (req, res) => {
    //if there are errors return bad requests

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    //check if the user already exsists or not
    try {
      let user = await User.findOne({
        email: req.body.email,
      });

      //if user exsists
      if (user) {
        return res.json({
          error: "You already have an account !!",
        });
      }

      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("ERROR OCCURED!!");
    }

    // .then((user) => res.json(user));
  }
);

module.exports = router;
