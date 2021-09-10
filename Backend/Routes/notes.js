const express = require("express");
const router = express.Router();
const Notes = require("../Models/Notes");
const fetchUser = require("../Middleware/fetchUser");
const { body, validationResult } = require("express-validator");

//``````````````````````````````````````````````Get all the notes````````````````````````````````````````````````````````
//we will be using GET since we need the JWT token from the header

router.get("/fetchallnotes", fetchUser, async (req, res) => {
  //we will actually get the user details thanks to the middleware !!
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("ERROR OCCURED!!");
  }
});

//``````````````````````````````````````````````Add notes`````````````````````````````````````````````````````````````````
//we will be using post method to add notes

router.post(
  "/addnote",
  fetchUser,
  [
    // title of the note must be greater than 3
    body("title", "Enter a valid title").isLength({
      min: 3,
    }),

    // description must be greater than 5
    body("description", "Enter a valid description").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //if there are errors return bad requests

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      //if there are no errors here:
      const note = new Notes({ title, description, tag, user: req.user.id });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("ERROR OCCURED!!");
    }
  }
);

module.exports = router;
