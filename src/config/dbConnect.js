const mongoose = require("mongoose");
const dbConnect = () => {
  return mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("DataBase Connected");
  });
};
module.exports = dbConnect;
