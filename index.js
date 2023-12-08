const dotenv = require("dotenv");
dotenv.config();


// index.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome, Abitop!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is listening on ", PORT)
});
