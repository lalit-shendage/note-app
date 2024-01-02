const mongoose = require("mongoose");

const connectToMongo = async () => {

  try {
    await mongoose.connect("mongodb://localhost:27017/Notes-app");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectToMongo;