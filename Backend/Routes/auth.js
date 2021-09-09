const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//secret is used to sign a jwt token
const secret = "Tamalisagood$oy";

//making a user and saving the data in local mongodb date base

//--------------------------------------------------------user creation-------------------------------------------------------------------------
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

      //password security here :)
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      //the id here is basically the user id all the way from mongo db
      const data = {
        user: {
          id: user.id,
        },
      };

      //signing the authorization token so that it cannot be tampered with
      const authtoken = jwt.sign(data, secret);

      res.json({ authtoken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("ERROR OCCURED!!");
    }

    // .then((user) => res.json(user));
  }
);

//--------------------------------------------------------user login-------------------------------------------------------------------------

router.post(
  "/loginUser",
  [
    //email must be a proper email and passwords should exsist
    body("email").isEmail(),
    body("password").exists(),
  ],
  async (req, res) => {
    //if there are errors return bad requests
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    //if there are no such errors we acces the original email and password that was once given by the user
    //and check it to confirm our login
    const { email, password } = req.body;
    try {
      //here we are storing the original email and password in variable "user"
      let user = await User.findOne({ email });

      //if user doesnot exists
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      //next we compare the given password with original user.password
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      //the id here is basically the user id all the way from mongo db
      const data = {
        user: {
          id: user.id,
        },
      };

      //signing the authorization token so that it cannot be tampered with
      const authtoken = jwt.sign(data, secret);
      res.json({ authtoken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("ERROR OCCURED!!");
    }
  }
);

module.exports = router;
