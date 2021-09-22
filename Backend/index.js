const express = require("express");
const app = express();
const connectToMongo = require("./Database/Db");
var cors = require('cors');

connectToMongo();

const port = 5000;

app.use(cors());
app.use(express.json());



//------------------------------------------------Available routes---------------------------------------------------------
app.use("/api/auth", require("./Routes/auth.js"));
app.use("/api/notes", require("./Routes/notes.js"));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
