require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/dbConnect");
const createSuperAdmin = require("./seed/superadmin");
const app = express();
const port = 5000 || process.env.PROT;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hellow");
});
dbConnect()
  .then(() => {
    createSuperAdmin();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port} `);
    });
  })
  .catch((error) => {
    console.log(error);
  });
