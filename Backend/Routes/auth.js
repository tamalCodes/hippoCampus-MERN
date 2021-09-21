// here we aree basically writing the backend routes to login, register the user and also to get user details 
// making a user and saving the data in local mongodb date base
// we are using express-validator for proper validation such as checking if the email is correct or not

const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../Middleware/fetchUser");

//secret is used to sign a jwt token
const secret = "Tamalisagood$oy";




//--------------------------------------------------------user creation-------------------------------------------------------------------------

// while creating the user the username, password must have a proper length, and a proper email
// if there are errors we return an error

router.post("/register", [body("name").isLength({ min: 3 }), body("password").isLength({ min: 5 }), body("email").isEmail()],


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


      // we create the user with the details from our frontend
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

    }
    catch (error) {
      console.log(error.message);
      res.status(500).send("ERROR OCCURED!!");
    }

    // .then((user) => res.json(user));
  }
);






//--------------------------------------------------------user login-----------------------------------------------------------------------------------------------

// this is the route for login of the user
// we must check if the email is proper and the password field is not empty
// if there are errors we return 

router.post("/login", [body("email").isEmail(), body("password").exists()],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }



    // if there are no such errors we then take details from the front end and check it with the 
    // original details present in the db to confirm our login


    const { email, password } = req.body;
    try {

      //here we are storing the original email and password in variable "user"
      let user = await User.findOne({ email });


      //if user doesnot exists
      if (!user) {
        return res
          .status(400)
          .json({ error: "User doesnot exsists !!" });
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

    }

    catch (error) {
      console.log(error.message);
      res.status(500).send("ERROR OCCURED!!");
    }
  }
);




//--------------------------------------------------------user details---------------------------------------------------------------------------------------
// we get the loggedin user's details from here
router.post("/getUser", fetchUser, async (req, res) => {
  try {
    const userID = req.user.id;
    const user = await User.findById(userID).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("ERROR OCCURED!!");
  }
});

module.exports = router;
