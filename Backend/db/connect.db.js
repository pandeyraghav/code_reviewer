const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(process.env.DB_URL)
    .then(console.log("Connected to database succesfully"))
    .catch((err) => {
      console.log("error connecting to database");
    });
}

module.exports = connectToDB;
