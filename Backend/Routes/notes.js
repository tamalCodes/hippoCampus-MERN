const express = require("express");
const router = express.Router();
const Notes = require("../Models/Notes");
const fetchUser = require("../Middleware/fetchUser");
const { body, validationResult } = require("express-validator");




//``````````````````````````````````````````````Get all the notes````````````````````````````````````````````````````````

//we will be using GET since we need the all the notes from the db of a user
//URL: http://localhost:5000/api/notes/fetchallnotes


router.get("/fetchallnotes", fetchUser, async (req, res) => {

  //we will actually get the user details thanks to the middleware !!

  try {
    // here we are fetching all the notes of the logged in user from the database
    // with the help of his id
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  }
  catch (error) {
    console.log(error.message);
    res.status(500).send("ERROR OCCURED!!");
  }
});



//``````````````````````````````````````````````Add notes`````````````````````````````````````````````````````````````````
//we will be using post method to add notes
// URL: http://localhost:5000/api/notes/addnote
// the title of the note and the content must be greater than 3,5
// we get the details from the frontend and then we save it to the DB

router.post("/addnote", fetchUser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid description").isLength({ min: 5 })
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


      //if there are no errors then come here to add a note:
      //we are adding a note with title, des, and tag and then saving it in the database

      const note = new Notes({ title, description, tag, user: req.user.id });
      const savedNote = await note.save();
      res.json(savedNote);

    }
    catch (error) {
      console.log(error.message);
      res.status(500).send("ERROR OCCURED!!");
    }
  }
);




//``````````````````````````````````````````````Update notes`````````````````````````````````````````````````````````````````
// we will be using put method to update notes
// we also need the id of the note that we want to update
// URL: http://localhost:5000/api/notes/updatenote/:id


router.put("/updatenote/:id", fetchUser, async (req, res) => {

  // get the title des and tag of the note that you want to update and then update it
  const { title, description, tag } = req.body;

  try {
    const newNote = {};

    // if the user wants to update the title then update it and so on..
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };


    // Find the note to be updated 
    let note = await Notes.findById(req.params.id);

    // if note doesnt exist
    if (!note) { return res.status(404).send("NOT FOUND") };


    // if id doesnot match, means the person trying to tamper
    if (note.user.toString() !== req.user.id) { return res.status(401).send("NOT ALLOWED") };


    // if everything is okay then update it
    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    res.json({ note });

  }
  catch (error) {
    console.log(error.message);
    res.status(500).send("ERROR OCCURED!!");
  }

});





//``````````````````````````````````````````````Delete notes`````````````````````````````````````````````````````````````````
//we will be using delete method to delete an exsisting notes
// URL: http://localhost:5000/api/notes/deletenote/:id


router.delete("/deletenote/:id", fetchUser, async (req, res) => {

  //get the title des and tag of the note that you want to delete
  const { title, description, tag } = req.body;

  try {

    //Find the note to be deleted so that you can delete it
    let note = await Notes.findById(req.params.id);

    //if note doesnt exist
    if (!note) { return res.status(404).send("NOT FOUND") };


    // if id doesnot match the current logged in user's id 
    // means the person trying to delete someone else's note
    if (note.user.toString() !== req.user.id) { return res.status(401).send("NOT ALLOWED") };


    //if everything is okay then delete it
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ "Success": "Note was deleted !!" });

  }
  catch (error) {
    console.log(error.message);
    res.status(500).send("ERROR OCCURED!!");
  }





});
module.exports = router;
