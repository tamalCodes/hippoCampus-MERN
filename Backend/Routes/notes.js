const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("HELLO BOI FROM AUTH");
});

module.exports = router;
