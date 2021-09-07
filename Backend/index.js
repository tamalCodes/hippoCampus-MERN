const express = require("express");
const app = express();
const connectToMongo = require("./Database/Db");

connectToMongo();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
