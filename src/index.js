require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/dbConnect");
const createSuperAdmin = require("./seed/superadmin");
const app = express();
const port = 5000 || process.env.PORT;
const authRouter = require("./routes/authroute");
app.use(express.json());
app.use("/api/auth", authRouter);
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
