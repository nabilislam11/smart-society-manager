require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const port = 3000;
dbConnect();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hellow");
});
app.listen(port, () => {
  console.log(`Example app listening on port${port} `);
});
